/// <reference types="cypress" />

describe('Testando área de mapas', function() {
    beforeEach(function() {
        cy.visit('./source/maps.html')
    })
    it('Testando título da página', function() {
        cy.title().should('be.equal', 'Mapas')
    })
    it('Clicando nos nomes dos mapas para ativar o hover', function() {
        cy.get('.select_map > [for="ascent"]')
        .click()

        cy.get('.select_map > [for="bind"]')
        .click()

        cy.get('.select_map > [for="fracture"]')
        .click()

        cy.get('.select_map > [for="haven"]')
        .click()

        cy.get('.select_map > [for="pearl"]')
        .click()

        cy.get('.select_map > [for="split"]')
        .click()

        cy.get('.select_map > [for="breeze"]')
        .click()

        cy.get('.select_map > [for="icebox"]')
        .click()
    })
    it('Testando login a partir desta página', function() {
        cy.get('[placeholder="Login"]').type('Lucas')
        cy.get('[placeholder="Senha"]').type('Senha123')
        cy.get('#button_login').click()
    })
    it('Indo para páginas do header', function() {
        cy.get(':nth-child(1) > .a_target')
        .click()
        cy.contains('Vamos responder a algumas perguntas sobre seu jogo favorito?').should('be.visible')

        cy.get(':nth-child(2) > .a_target')
        .click()
        cy.contains('Jett').should('be.visible')

        cy.get(':nth-child(2) > .a_target')
        .click()
        cy.contains('Jett').should('be.visible')

        cy.get(':nth-child(3) > .a_target')
        .click()
        cy.contains('Ascent').should('be.visible')
        cy.get(':nth-child(2) > .a_target')
        .click()
        cy.contains('Jett').should('be.visible')

        cy.get(':nth-child(4) > .a_target')
        .click()
        cy.contains('Fale conosco').should('be.visible')
        cy.get(':nth-child(2) > .a_target')
        .click()
        cy.contains('Jett').should('be.visible')

    })
})
