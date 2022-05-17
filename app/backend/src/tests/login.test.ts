import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response, Request } from 'express';

chai.use(chaiHttp);

const { expect } = chai;


describe('Testando rota de Login', () => {
  beforeEach(async () => {
    sinon.stub(User, 'findOne')
  })
  afterEach(() => {
    (User.findOne as sinon.SinonStub).restore()
  })

  it('Deve retornar um erro 400 caso o email esteja vazio', () => {
    const user = { email: '', password: '123456' };
    chai.request(app)
    .post('login')
    .send(user)
    .end((_err, res) => {
      res.should.have.status(400);
      res.body.should.have.property('message')
    })
  })
  it('Deve retornar um erro 400 caso o password esteja vazio', () => {
    (User.findOne as sinon.SinonStub).resolves(true);
    const user = { email: 'test@test.com', password: '' };
    chai.request(app)
    .post('login')
    .send(user)
    .end((_err, res) => {
      res.should.have.status(400);
      res.body.should.have.property('message')
    })
  })
  it('Deve retornar status 200 com o token e o usuário', () => {
    (User.findOne as sinon.SinonStub).resolves(true);
    const user = { email: 'test@test.com', password: '123456' };
    chai.request(app)
    .post('login')
    .send(user)
    .end((_err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('user')
      res.body.should.have.property('token')
    })
  })
});