const request = require('supertest');
const app = require('./app');

describe('Pruebas de la ruta principal', () => {
  test('Debería responder con un estado 200 y el texto "¡Hola Mundo desde CI/CD!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('¡Hola Mundo desde CI/CD!');
  });
});