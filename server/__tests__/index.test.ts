import request from 'supertest';
import app from '../index';

describe('GET /', () => {
  it('should return json', function (done) {
    request(app)
      .get('/')
      .expect({
        data: 'Express + TypeScript Server',
      })
      .end(done);
  });
});
