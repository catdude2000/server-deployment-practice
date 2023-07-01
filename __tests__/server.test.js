'use strict';

//import supertest (mock server connect/reqs)
// import jest
const supertest = require ('supertest');
const server = require('../server.js');

const request = supertest(server);

describe('basic server functions as expected', () => {
  test('request to goodbye route sends goodbye string', async () => {
    const response = await request.get('/goodbye');
    expect(response.text).toBe('goodbye');
  });
  // test('')
  test('handles undefined routes', async () => {
    const response = await request.get('/pizza'); //add after slash?
    expect(response.status).toEqual(404);
  });
});
