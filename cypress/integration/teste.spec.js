/// <reference types="Cypress" />

describe('Central de testes', function() {
    beforeEach(function() {
        cy.visit('./source/index.html')      
    })

    it('Verifica título da aplicação', function() {

        cy.title().should('be.equal', 'Testando - Champions')
    })
    it('Loga em conta aleatória', function() {
        cy.get('[placeholder="Login"]')
        .type('Lucas')

        cy.get('[placeholder="Senha"]')
        .type('Senha123')

        cy.get('#button_login')
        .click()

        cy.get('#button_login')
    })
    it('Testando a área - Agentes', function() {
        cy.get(':nth-child(2) > .a_target')
        .click()
    })
})
