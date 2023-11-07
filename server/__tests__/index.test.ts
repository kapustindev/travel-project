import request from 'supertest';
import app from '../index';
import { Server } from 'http';

let server: Server;

beforeEach(() => {
  server = app.listen(4000);
});

afterEach((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('should return status 200', (done) => {
    request(server).get('/').expect(200).end(done);
  });
});
