describe('Formulário cadastro', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
      cy.getByData('botao-cadastro').click() // Testa o botão "Cadastrar"
      cy.getByData('nome-input').type('pedro amigo')
      cy.getByData('email-input').type('pedro@email.com')
      cy.getByData('senha-input').type('456789')
      cy.getByData('botao-enviar').click()
      cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })
  })
  
  