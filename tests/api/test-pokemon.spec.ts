import { test, expect } from '@playwright/test';

test('Get Pokemon details - 200 OK', async ({ request }) => {
    const namePokemon = 'squirtle';
    const weightPokemon = 90;
    const response = await request.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe(namePokemon);
    expect(responseBody.weight).toBe(weightPokemon);
});

test('Get Pokemon moves sorted alphabetically using bubble sort', async ({ request }) => {
    const response = await request.get('https://pokeapi.co/api/v2/pokemon/squirtle');
  
  // Validar código de estado y nombre
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.name).toBe('squirtle');

  // Extraer nombres de los movimientos
  const moveNames = responseBody.moves.map(
    (move: { move: { name: string } }) => move.move.name
  );

  // Ordenar alfabéticamente usando método de la burbuja
  for (let i = 0; i < moveNames.length - 1; i++) {
    for (let j = 0; j < moveNames.length - i - 1; j++) {
      if (moveNames[j].localeCompare(moveNames[j + 1]) > 0) {
        // Intercambio
        const temp = moveNames[j];
        moveNames[j] = moveNames[j + 1];
        moveNames[j + 1] = temp;
      }
    }
  }

  // Log de los movimientos ordenados
  console.log('=== Sorted Pokemon Moves (Bubble Sort) ===');
  moveNames.forEach((name: string) => console.log(name));

  // Verificar que efectivamente estén ordenados alfabéticamente
  const manuallySorted = [...moveNames].sort();
  expect(moveNames).toEqual(manuallySorted);
});

test('Get Pokemon moves sorted alphabetically', async ({ request }) => {
    const response = await request.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    
    // Validate status code and name
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.name).toBe('pikachu');

    // Extract and sort move names
    const moveNames = responseBody.moves
        .map((move: { move: { name: string } }) => move.move.name)
        .sort();

    // Log the sorted moves
    console.log('=== Sorted Pokemon Moves ===');
    moveNames.forEach((name: string) => console.log(name));

    // Optional: Add some assertions about the moves
    expect(moveNames.length).toBeGreaterThan(0);
    expect(Array.isArray(moveNames)).toBeTruthy();
    expect(moveNames).toEqual([...moveNames].sort());
});

test('Get Bulbasaur evolution chain from PokeAPI', async ({ request }) => {
  const pokemonName = 'bulbasaur';
  // 1️⃣ Obtener los datos base del Pokémon
  const pokemonResponse = await request.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  expect(pokemonResponse.status()).toBe(200);

  const pokemonData = await pokemonResponse.json();
  expect(pokemonData.name).toBe(pokemonName);
  console.log('=== Pokémon Data ===');
  console.log(pokemonData.name);

  // 2️⃣ Obtener la URL del species
  const speciesUrl = pokemonData.species.url;
  console.log('Species URL:', speciesUrl);

  const speciesResponse = await request.get(speciesUrl);
  expect(speciesResponse.status()).toBe(200);

  const speciesData = await speciesResponse.json();
  const evolutionChainUrl = speciesData.evolution_chain.url;
  console.log('Evolution Chain URL:', evolutionChainUrl);

  // 3️⃣ Obtener la cadena de evolución
  const evolutionResponse = await request.get(evolutionChainUrl);
  expect(evolutionResponse.status()).toBe(200);

  const evolutionData = await evolutionResponse.json();
  const chain = evolutionData.chain;

  // 4️⃣ Recorrer las evoluciones
  const evolutions: string[] = [];

  // Primera evolución
  evolutions.push(chain.species.name);

  // Segunda evolución (si existe)
  if (chain.evolves_to.length > 0) {
    evolutions.push(chain.evolves_to[0].species.name);

    // Tercera evolución (si existe)
    if (chain.evolves_to[0].evolves_to.length > 0) {
      evolutions.push(chain.evolves_to[0].evolves_to[0].species.name);
    }
  }

  console.log('=== Evoluciones de Bulbasaur ===');
  evolutions.forEach(name => console.log(name));

  // 5️⃣ Validaciones
  expect(evolutions.length).toBeGreaterThan(0);
  expect(evolutions).toEqual(['bulbasaur', 'ivysaur', 'venusaur']);
});