/// <reference types="Cypress" />
import User from "../../../support/ModuleObject/User";
import Settings from "../../../support/ModuleObject/Settings";
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import { use } from "chai";

//cypress run --spec cypress\integration\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
//node cucumber-html-report.js
//  "testFiles": "**/*.feature", ---add this in cypress.json file for report generete
const user = new User()
const settings = new Settings()
let name

Given('I Login Admin',()=>
{
    cy.visit('https://uat.crm2.edutra.io/')
    cy.get('#email').type('mis@blackboardindia.com')
    cy.get('#password').type('DES@1212')
    cy.get('.pt-8 > .justify-center').click()
})
//When i User Filed
When('I Fill User Details',function()
{
    settings.getSetting().click()
    user.getClickUser().click({force: true})
    user.getClickADDUser().click()
    user.getUserEmpid().type(this.data.empid)
    user.getUserName().type(this.data.username)
    user.getUserEmail().type(this.data.useremail)
    user.getUserMobile().type(this.data.usermobile)
    user.getUserInstitute().select(this.data.institutesname)
    user.getUserRole().select(this.data.userole)
    user.getReportingUser().select(this.data.reportinguser)
    user.getUserPassword().type(this.data.userpassword)
    user.getAddUser().click()

})
And('Validate User Addition',function()
{
    settings.getAssertion().then(function(element)
                {
                const Institutes =element.text()
                expect(Institutes.includes('User added successfully!')).to.be.true
                console.log('User added successfully!')
                })
})
//Then Search and Validate user
Then('Search and Validate user',function()
{
    user.getSearchUser().type(this.data.empid)
    user.getClickSearch().click()
    user.getEmpid().then(function(element)
    {
    const Institutes =element.text()
    expect(Institutes.includes('Test001')).to.be.true
    })
})

   






