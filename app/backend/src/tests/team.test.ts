import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../services/Team';
import TeamInterface from '../interfaces/Team';

import { NextFunction } from 'express';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;


describe('Testando rota de Login', () => {
  beforeEach(async () => {
    sinon.stub(Team, 'getTeams')
    sinon.stub(Team, 'getTeamById')
  })
  afterEach(() => {
    (Team.getTeams as sinon.SinonStub).restore(),
    (Team.getTeamById as sinon.SinonStub).restore()
  })

  it('Deve retornar um array de times e status 200', (done: NextFunction) => {
    const arrayOfTeams: TeamInterface[] = [{ id: 1, teamName: 'Teste' }, { id: 2, teamName: 'Teste' }];
    (Team.getTeams as sinon.SinonStub).resolves(arrayOfTeams),
    chai.request(app)
    .get('/teams')
    .send()
    .end((_err, res: Response) => {
      expect(res).to.have.status(200)
      expect(res.body).to.have.an('array')
      done();
    })
  })
  it('Deve retornar um erro 400 caso o password esteja vazio', () => {
    const team: TeamInterface = { id: 1, teamName: 'Teste' };
    (Team.getTeamById as sinon.SinonStub).resolves(team);
    chai.request(app)
    .get('/teams/1')
    .end((_err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.be.equal(team);
    })
  })
});