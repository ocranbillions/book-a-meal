import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);
// eslint-disable-next-line no-unused-vars
let should = chai.should();

describe('Test All Meal Routes', () => {

  describe('/GET meals', () => {
    it('should get all meals', () => {
      chai.request(server)
        .get('/api/v1/meals/')
        .end((err, res) => {
          res.body.should.have.property('allMeals');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
  });

  describe('/GET meals/:id', () => {
    it('should get a meal', () => {
      chai.request(server)
        .get('/api/v1/meals/1')
        .end((err, res) => {
          res.body.should.have.property('foundMeal');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
  });

  describe('/POST meal', () => {
    it('should post a meal', () => {
      const newMeal = {
        imgSrc: 'https://via.placeholder.com/80',
        name: 'New Meal',
        description: 'Newly added meal via moch test',
        price: '1000',
      };

      chai.request(server)
        .post('/api/v1/meals/')
        .send(newMeal)
        .end((err, res) => {
          res.body.should.have.property('createdMeal');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
  });

  describe('/UPDATE meal', () => {
    it('should update a meal', () => {
      const updatedMeal = {
        imgSrc: 'https://via.placeholder.com/80',
        name: 'newMeal to add',
        description: 'Newly updatedMeal meal via moch test',
        price: '1000',
      };

      chai.request(server)
        .put('/api/v1/meals/2')
        .send(updatedMeal)
        .end((err, res) => {
          res.body.should.have.property('updatedMeal');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
  });

  // delete meal

});
