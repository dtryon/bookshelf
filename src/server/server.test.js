import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from './server';

chai.use(chaiHttp);


describe('api/books', () => {

    after(() => {
        server.close();
    })

    it('should return books list', (done) => {
        chai.request(server)
            .get('/api/books')
            .end((err, res) => {
                expect(res.body.results.length).to.equal(20);
                done();
            });
    });
});
