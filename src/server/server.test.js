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
                expect(res).to.be.json;
                done();
            });
    });

    it('should return index.html', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
                done();
            });
    });
});
