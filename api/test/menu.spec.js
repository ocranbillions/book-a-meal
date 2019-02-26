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

  describe('/POST api/v1/menu/', () => {
    it('should ADD a meal from db to a menu', () => {
      // Meal name alredy in db
      const data = {
        mealName: 'jollof',
        date: 'tomorrow',
      };
      chai.request(server)
        .post('/api/v1/menu/')
        .send(data)
        .end((err, res) => {
          res.body.should.have.property('result');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
  });
});
