const url = process.env.EXPO_PUBLIC_BACK4APP_URL;
const headers = {
  'X-Parse-Application-Id': process.env.EXPO_PUBLIC_BACK4APP_APP_ID,
  'X-Parse-REST-API-Key': process.env.EXPO_PUBLIC_BACK4APP_API_KEY,
};

const resposta = await fetch(`${url}/classes/Pet?limit=1000`, { headers });
const { results } = await resposta.json();

const campos = new Set();
results.forEach((pet) => Object.keys(pet).forEach((c) => campos.add(c)));

const valoresDe = (campo) => [...new Set(results.map((p) => p[campo]))];

console.log('Total de pets:', results.length);
console.log('Campos:', [...campos].join(', '));
console.log('Valores de especie:', valoresDe('especie'));
console.log('Valores de porte:', valoresDe('porte'));
console.log('Exemplo completo:', JSON.stringify(results[0], null, 2));
