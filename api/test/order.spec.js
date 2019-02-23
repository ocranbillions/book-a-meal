import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);
// eslint-disable-next-line no-unused-vars
let should = chai.should();

describe('Test All Order Routes', () => {
  // describe('/GET api/v1/orders/', () => {
  //   it('should get all orders', () => {
  //     chai.request(server)
  //       .get('/api/v1/orders/')
  //       .end((err, res) => {
  //         res.body.should.have.property('orders');
  //         res.body.should.have.property('status').eql('success');
  //         res.should.have.status(200);
  //       });
  //   });
  // });

  // describe('/POST api/v1/orders/', () => {
  //   it('should POST an order with complete details', () => {
  //     // Valid data coming from form
  //     const data = {
  //       meal: 'some meal',
  //       qty: '2',
  //       cost: '3000'
  //     };
  //     chai.request(server)
  //       .post('/api/v1/orders/')
  //       .send(data)
  //       .end((err, res) => {
  //         res.body.should.have.property('order');
  //         res.body.should.have.property('status').eql('success');
  //         res.should.have.status(200);
  //       });
  //   });

  //   it('should NOT POST an order with incomplete details', () => {
  //     // invalid data coming from form
  //     const data = {
  //       meal: 'some meal',
  //       qty: '',
  //       cost: '',
  //     };
  //     chai.request(server)
  //       .post('/api/v1/orders/')
  //       .send(data)
  //       .end((err, res) => {
  //         res.should.have.status(400);
  //       });
  //   });
  // });

  describe('/POST api/v1/orders/', () => {
    it('should UPDATE an order with complete details', () => {
      // Valid data coming from form
      const data = {
        meal: 'some meal',
        qty: '5',
        cost: '10000',
      };
      chai.request(server)
        .put('/api/v1/orders/2')
        .send(data)
        .end((err, res) => {
          res.body.should.have.property('order');
          res.body.should.have.property('status').eql('success');
          res.should.have.status(200);
        });
    });

    it('should NOT UPDATE an order with complete details', () => {
      // Valid data coming from form
      const data = {
        meal: 'some meal',
        qty: '',
        cost: '',
      };
      chai.request(server)
        .put('/api/v1/orders/3')
        .send(data)
        .end((err, res) => {
          res.should.have.status(400);
        });
    });
  });
});
