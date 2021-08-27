/// <reference types="Cypress" />
import UserLogin from '../support/ModuleObject/UserLogin'
import DashBoard from '../support/ModuleObject/DashBoard'
import Lead from '../support/ModuleObject/Lead'

describe('CRM Automation', function() 
{
    before(function() {
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
    })
const  login = new UserLogin()
const  dashboard = new DashBoard()
const lead = new Lead()

it('My FirstTest case',function() {
cy.visit("https://uat.crm2.edutra.io/login")

login.getUserID().type(this.data.adminuserid)
login.getPassword().type(this.data.adminpassword)
login.getSignin().click()
dashboard.getManubar().click()
lead.getAllLead().click()
lead.getFullName().type(this.data.fullname)
lead.getEmail().type(this.data.email)

})

})
