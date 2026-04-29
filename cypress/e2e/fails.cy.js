/// <reference types="cypress" />

describe('Login', () => {
  it('fails to log in', () => {
    cy.visit('public/index.html')
    cy.get('.login-container').should('be.visible')
    cy.get('#username').type(Cypress.expose('username'))
    cy.get('#password').type('wrong-password', { log: false })
    cy.contains('button', 'Login').click()
    cy.get('.login-error').should(
      'have.text',
      'wrong username or password',
    )
    cy.get('.login-container').should('be.visible')
    cy.get('.authenticated-message').should('not.exist')
  })
})
