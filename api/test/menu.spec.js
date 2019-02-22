import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);
// eslint-disable-next-line no-unused-vars
let should = chai.should();

describe('Test All Menu Routes', () => {
  describe('/GET api/v1/menu', () => {
    it('should get all menu', () => {
      chai.request(server)
        .get('/api/v1/menu/')
        .end((err, res) => {
          res.body.should.have.property('allMenu');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
  });

  describe('/GET api/v1/menu/:date', () => {
    it('should GET menu for a given date', () => {
      chai.request(server)
        .get('/api/v1/menu/today')
        .end((err, res) => {
          res.body.should.have.property('menu');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
  });

  describe('/POST api/v1/menu/:date', () => {
    it('should ADD a meal to a menu', () => {
      const meal = {
        date: 'some date',
        image: 'some image link',
        name: 'some meal',
        description: 'some description',
        price: 'some price',
      };
      chai.request(server)
        .post('/api/v1/menu/')
        .send(meal)
        .end((err, res) => {
          res.body.should.have.property('result');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
  });
});
