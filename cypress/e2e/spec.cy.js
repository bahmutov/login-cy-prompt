/// <reference types="cypress" />

describe('Login', () => {
  it('logs in', () => {
    cy.visit('public/index.html')
    cy.get('#username').type('cypress')
    cy.get('#password').type('rocks', { log: false })
    cy.contains('button', 'Login').click()
    cy.get('#message').should('have.text', 'Logged in')
  })
})
