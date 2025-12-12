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