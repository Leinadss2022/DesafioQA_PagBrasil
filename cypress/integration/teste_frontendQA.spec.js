describe('Formulário de Contato', () => {
  beforeEach(() => {
    cy.visit('/contato'); // Substitua '/contato' pela URL da página de contato
  });

  it('Deve preencher o formulário corretamente e submeter com sucesso', () => {
    cy.get('#Name').type('Exemplo');
    cy.get('#Email').type('exemplodeteste@exemplo.com');
    cy.get('#Company').type('Acme Corporation');
    cy.get('#Website').type('http://www.exemplo.com');
    cy.get('#Phone').type('(123) 45678-9101');
    cy.get('#Inquiry').type('Mensagem de teste');
    cy.get('button[type="submit"]').click();
    cy.contains('Formulário enviado com sucesso').should('be.visible');
  });

  it('Deve exibir mensagens de erro ao preencher o formulário com dados inválidos', () => {
    cy.get('#Name').type('');
    cy.get('#Email').type('exemplodeteste@exemplo');
    cy.get('#Company').type('123ABC');
    cy.get('#Website').type('examplo');
    cy.get('#Phone').type('123456789');
    cy.get('#Inquiry').type('Mensagem de teste');
    cy.get('button[type="submit"]').click();
    cy.contains('Campo Name inválido').should('be.visible');
    cy.contains('Campo Email inválido').should('be.visible');
    cy.contains('Campo Company inválido').should('be.visible');
    cy.contains('Campo Website inválido').should('be.visible');
    cy.contains('Campo Phone inválido').should('be.visible');
  });

  it('Deve exibir mensagens de erro ao submeter o formulário com campos em branco', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('O campo Name é obrigatório').should('be.visible');
    cy.contains('O campo Email é obrigatório').should('be.visible');
    cy.contains('O campo Company é obrigatório').should('be.visible');
    cy.contains('O campo Website é obrigatório').should('be.visible');
    cy.contains('O campo Phone é obrigatório').should('be.visible');
  });
});
