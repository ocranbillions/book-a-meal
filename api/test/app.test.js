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
    it('should GET a meal with a valid ID in the db', () => {
      chai.request(server)
        .get('/api/v1/meals/80')
        .end((err, res) => {
          res.body.should.have.property('meal');
          res.should.have.status(200);
        });
    });

    it('should NOT GET a meal if ID is not in the db', () => {
      chai.request(server)
        .get('/api/v1/meals/7000')
        .end((err, res) => res.should.have.status(404));
    });
  });

  describe('/POST meal', () => {
    // VALID MEAL
    it('should POST a valid meal', () => {
      const newMeal = {
        image: 'https://via.placeholder.com/80',
        name: 'New Meal',
        description: 'Newly added meal via moch test',
        price: '1000',
      };
      chai.request(server)
        .post('/api/v1/meals/')
        .send(newMeal)
        .end((err, res) => {
          res.body.should.have.property('meal');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
    // INVALID MEAL
    it('should NOT POST an invalid meal', () => {
      const invalidMeal = {
        image: 'https://via.placeholder.com/80',
        name: '',  // empty field
        description: '', // another empty field
        price: '1000',
      };
      chai.request(server)
        .post('/api/v1/meals/')
        .send(invalidMeal)
        .end((err, res) => {
          res.should.have.status(400);
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
        .put('/api/v1/meals/50')
        .send(updatedMeal)
        .end((err, res) => {
          res.body.should.have.property('updatedMeal');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });
  });

  // delete meal
  describe('/DELETE meal/:id', () => {
    it('should delete a meal with a valid ID', () => {
      chai.request(server)
        .delete('/api/v1/meals/50')
        .end((err, res) => {
          res.body.should.have.property('result');
          res.body.should.have.property('message').eql('Delete was successful');
          res.should.have.status(200);
        });
    });

    it('should not delete a meal with an invalid ID', () => {
      chai.request(server)
        .delete('/api/v1/meals/2000')
        .end((err, res) => {
          res.should.have.status(404);
        });
    });
  });
});
