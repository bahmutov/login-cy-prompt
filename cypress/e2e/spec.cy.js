/// <reference types="cypress" />

describe('Login', () => {
  it('logs in', () => {
    cy.visit('public/index.html')
    cy.get('.login-container').should('be.visible')
    cy.get('#username').type('cypress')
    cy.get('#password').type('rocks', { log: false })
    cy.contains('button', 'Login').click()
    cy.get('.authenticated-message').should(
      'have.text',
      'Authenticated',
    )
  })

  it('fails to log in', () => {
    cy.visit('public/index.html')
    cy.get('.login-container').should('be.visible')
    cy.get('#username').type('cypress')
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
