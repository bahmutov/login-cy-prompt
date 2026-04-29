/// <reference types="cypress" />

describe('Login', () => {
  it('logs in', () => {
    cy.env(['password']).then(({ password }) => {
      cy.prompt(
        [
          'visit public/index.html',
          'assert login container is visible',
          'type {{username}} into the username field',
          'type {{password}} into the password field',
          'click the login button',
          'assert authenticated message "Authenticated" is visible',
        ],
        {
          placeholders: {
            username: Cypress.expose('username'),
            password,
          },
        },
      )
    })
  })

  // it('fails to log in', () => {
  //   cy.visit('public/index.html')
  //   cy.get('.login-container').should('be.visible')
  //   cy.get('#username').type(Cypress.expose('username'))
  //   cy.get('#password').type('wrong-password', { log: false })
  //   cy.contains('button', 'Login').click()
  //   cy.get('.login-error').should(
  //     'have.text',
  //     'wrong username or password',
  //   )
  //   cy.get('.login-container').should('be.visible')
  //   cy.get('.authenticated-message').should('not.exist')
  // })
})
