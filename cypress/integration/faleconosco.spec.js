/// <reference types="cypress" />

describe('Teste do fale conosco', function() {
    beforeEach(function() {
        cy.visit('./source/faleconosco.html')
    })
    it('Testando título da página', function() {
        cy.title().should('be.equal', 'Fale conosco')
    })
    it('Testando formulário da aplicação', function() {
        cy.get('.talking_us > :nth-child(2)').type('Lucas Ribeiro Silva Melo')
        cy.get('.talking_us > :nth-child(4)').type('Hookezera')
        cy.get('.talking_us > :nth-child(6)').type('luquinha.ribeiro@hotmail.com')

        cy.get('select')
        .select('Dúvidas')
        .should('have.value', 'duvidas')

        cy.get('select')
        .select('Reclamação')
        .should('have.value', 'reclamacao')

        cy.get('select')
        .select('Sugestão')
        .should('have.value', 'sugestao')

        cy.get('select')
        .select('Outros')
        .should('have.value', 'outros')

        cy.get('textarea').type('Muito feliz em conseguir desenvolver esse teste hahahaha')

        cy.get('.send')
        .click()
    })
    it('Indo para páginas do header', function() {
        cy.get(':nth-child(1) > .a_target')
        .click()
        cy.contains('Vamos responder a algumas perguntas sobre seu jogo favorito?').should('be.visible')
        cy.get(':nth-child(4) > .a_target')
        .click()
        cy.contains('Fale conosco').should('be.visible')

        cy.get(':nth-child(2) > .a_target')
        .click()
        cy.contains('Jett').should('be.visible')
        cy.get(':nth-child(4) > .a_target')
        .click()
        cy.contains('Fale conosco').should('be.visible')

        cy.get(':nth-child(3) > .a_target')
        .click()
        cy.contains('Ascent').should('be.visible')
        cy.get(':nth-child(4) > .a_target')
        .click()
        cy.contains('Fale conosco').should('be.visible')

        cy.get(':nth-child(4) > .a_target')
        .click()
        cy.contains('Fale conosco').should('be.visible')

    })
})
