const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Formulário de Contato', () => {
  it('Deve retornar sucesso ao enviar um formulário válido', (done) => {
    chai
      .request('http://localhost:3000') // Substitua pela URL correta da sua API de backend
      .post('/endpoint') // Substitua "/endpoint" pelo endpoint correto da sua API de backend
      .send({
        Name: 'Exemplo',
        Email: 'emaildeexemplo@exemple.com',
        Company: 'Empresa Exemplo',
        Website: 'http://www.exemplo.com',
        Phone: '(123) 45678-9101',
        Inquiry: 'Mensagem de teste'
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.sucesso).to.be.true;
        done();
      });
  });

  it('Deve retornar erro ao enviar um formulário com campo "Name" inválido', (done) => {
    chai
      .request('http://localhost:3000') // Substitua pela URL correta da sua API de backend
      .post('/endpoint') // Substitua "/endpoint" pelo endpoint correto da sua API de backend
      .send({
        Name: '',
        Email: 'emaildeexemplo@exemple.com',
        Company: 'Empresa de exemplo',
        Website: 'http://www.exemplo.com',
        Phone: '(123) 45678-9101',
        Inquiry: 'Mensagem de teste'
      })
      .end((err, res) => {
        expect(res).to.have.status(412);
        expect(res.body.sucesso).to.be.false;
        expect(res.body.erro).to.equal('Campo Name inválido.');
        done();
      });
  });

  // Adicione outros testes para validar os demais campos
});
