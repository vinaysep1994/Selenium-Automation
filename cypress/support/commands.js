// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... }) 

Cypress.Commands.add('AdminLogin',(email, password) => {
    cy.visit('https://uat.crm2.edutra.io/')
    cy.get('#email').type('mis@blackboardindia.com')
    cy.get('#password').type('DES@1212')
    cy.get('.pt-8 > .justify-center').click()
  })
  Cypress.Commands.add('AMLogin', (email, password) => {

    cy.visit('https://uat.crm2.edutra.io/')
    cy.get('#email').type('akashdutta@blackboardindia.com')
    cy.get('#password').type('BSEE1179@123')
    cy.get('.pt-8 > .justify-center').click()
  })


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
