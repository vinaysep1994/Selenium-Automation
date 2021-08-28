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

{
login.getUserID().type(this.data.counsellorid)
login.getPassword().type(this.data.adminpassword)
login.getSignin().click()
dashboard.getManubar().click({force: true})
lead.getAllLead().click({force: true})
lead.getAddLead().click({force: true})
lead.getFullName().type(this.data.fullname)
lead.getEmail().type(this.data.email)
lead.getMobileNumber().type(this.data.mobilenumber)
lead.getRemark().type(this.data.remark)
lead.getUniversity().select(this.data.university)
lead.getCounsellor().select(this.data.counsellor)
lead.getSource().select(this.data.source)
lead.getSubsource().select(this.data.subsource)
lead.getStage().select(this.data.stage)
lead.getReason().select(this.data.reason)
lead.getSubreason().select(this.data.subreason)
lead.getCourse().select(this.data.courses)
lead.getSpecialization().select(this.data.specialization)
lead.getState().select(this.data.state)
lead.getCity().select(this.data.city)
lead.getAdd().click({force: true})

}
})

})
