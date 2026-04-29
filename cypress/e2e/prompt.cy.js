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
})
