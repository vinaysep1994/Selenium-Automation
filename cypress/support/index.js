// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })
// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
//Add Follow ups
/*
cypress.Commands.add('AddFolowups',() => {
    cy.get('#input_search').type('8383088591')
    cy.get('.px-2 > .h-4')//click search button
    cy.get('#headlessui-menu-button-21 > .icon-svg-icon')//click lead menu
    cy.get('.py-1 a:nth-child(1) span:nth-child(2)')//clcik Add follow upds
    cy.get('#stage')
    cy.get('#reason')
    cy.get('#remark')
    cy.get('#add_followup')
    cy.get('.pt-5 > .flex > .ml-3')//clcik on add button
  })
 */