// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // import chaiHttp from 'chai-http';
// import LoginRoute from '../routes/Login';
// import LoginController from '../controllers/Login';
// import LoginService from '../services/Login';

// import { app } from '../app';
// import Example from '../database/models/ExampleModel';

// import { Response, Request } from 'express';

// chai.use(chaiHttp);

// const { expect } = chai;


// describe('Testando rota de Login', () => {
//   describe('Testando camada de Controller do Login', () => {
//     interface request { body: any }
//     interface response { status: number, json: any };
//     const request = { body: { login: 'Teste', password: 'Teste' } } as Request;
//     const response = { } as Response;
//     before(async () => {
//       response.status = sinon.stub().returns(response)
//         sinon
//           .stub(LoginService, "login")
//           .resolves(false as LoginService);
//     });
//     after(()=>{
//       (LoginService.login as sinon.SinonStub).restore();
//     })
//     it('Deve retornar um erro 403 caso o login esteja errado', async () => {
//       await LoginController.login(request, response)
//       expect(response.status).to.be.equal(400);
//     })
//   })
// });