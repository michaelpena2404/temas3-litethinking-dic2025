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
