/// <reference types="Cypress" />
import Login from '../support/ModuleObject/Login'
import DashBoard from '../support/ModuleObject/DashBoard'
import Lead from '../support/ModuleObject/Lead'
import Settings from '../support/ModuleObject/Settings'
import User from '../support/ModuleObject/User'

describe('Settings', function()
{
const settings = new Settings()
 
it('settings Test',function() {

cy.AdminLogin()
settings.getSetting().click()

function SourceAdd(){
    settings.getClickSource().click()
    settings.getSourceName().type('test source')
    settings.getAdd().click()
}
// Source already exist or  Add successfully
settings.getTableList().then((Source) => {
    if (Source.text().includes('test source')) 
    { 
        SourceAdd()
        settings.getSourceAssertion().then(function(element){
        const Source =element.text()
        expect(Source.includes('Source/Sub-Source already exists!')).to.be.true
        cy.log('Source/Sub-Source already exists!')
        })  
    } else{
        SourceAdd()
        settings.getSourceAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
            cy.log('Source/Sub-Source added successfully!')
            })
         //already exist
         SourceAdd()
        settings.getSourceAssertion().then(function(element)
            {
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source already exists!')).to.be.true
            cy.log('Source/Sub-Source already exists!')
            })
    }    
    })
//source Delete
settings.getTableList().then((Source) => {
    if (Source.text().includes('test source')) {
    settings.getSourcedelete().click()
    cy.log('Source/Sub-Source deleted successfully!')
    }
})

//Add source
SourceAdd()
settings.getSourceAssertion().then(function(element){
    const Source =element.text()
    expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
    cy.log('Source/Sub-Source added successfully!')
})
//source Edit
settings.getTableList().then((Source) => {
    if (Source.text().includes('test source')) 
    { 
        settings.getSourceEdit1().click()
        settings.getsourceNameEdit().clear().type('Test source')
        settings.getAddSource().click()
        cy.log('Source edit successfully "Test source"')
    }
    else
    {
        //none
    }
})
// Sub Source already exist or  Add successfully
function SubSourceAdd(){
    settings.getClickSubsource().click()
    settings.getSubsourceName().type('test sub source')
    settings.getSelectSources().select('Test source')
    settings.getAddSubsource().click()
}
settings.getTableList().then((Source) => {
    if (Source.text().includes('test sub source')) 
    { 
        SubSourceAdd()
        settings.getSourceAssertion().then(function(element){
        const Source =element.text()
        expect(Source.includes('Source/Sub-Source already exists!')).to.be.true
        cy.log('Source/Sub-Source already exists!')
        })  
    } else{
        SubSourceAdd()
        settings.getSourceAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
            cy.log('Source/Sub-Source added successfully!')
            })
         //already exist
        SubSourceAdd()
        settings.getSourceAssertion().then(function(element)
            {
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source already exists!')).to.be.true
            cy.log('Source/Sub-Source already exists!')
            })
    }    
    })
    
//Sub source Delete
settings.getTableList().then((Source) => {
    if (Source.text().includes('test sub source'))
    {
    settings.getsubSourcedelete().click()
    cy.log('Source/Sub-Source deleted successfully!')
    }
})

//Add sub source
SubSourceAdd()
settings.getSourceAssertion().then(function(element){
    const Source =element.text()
    expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
    cy.log('Source/Sub-Source added successfully!')
})
//sub source Edit
settings.getTableList().then((Source) => {
    if (Source.text().includes('test sub source')) 
    { 
        settings.getSubSourceEdit().click()
        settings.getSubsourceNameEdit().clear().type('Test sub source')
        settings.getSelectSources().select('Test source')
        settings.getAddSource().click()
        cy.log('Source edit successfully "Test sub source"')
    }
    else
    {
        //none
    }
})

//Stage addition
settings.getClickStages().click({force: true})
settings.getTableList().then((Stage) => {
    if (Stage.text().includes('Test Stage')) 
    { 
        settings.getEditStage1().click()
        settings.getStagesEditName().clear().type('Test')
        settings.getAdd().click()
        cy.log('Stage edit successfully "Test"')
    }else{
        settings.getEditStage2().click()
        settings.getStagesEditName().clear().type('Test Stage')
        settings.getAdd().click()
        cy.log('Stage edit successfully "Test Stage"')
    }
})
/*
//Reason addition

cy.get('tbody tr td:nth-child(1)').then(($body) => {
    if ($body.text().includes('Test reason')) 
    {
    cy.get('tbody tr td:nth-child(4) a:nth-child(2) path').click()
    } 
    else 
    {
    settings.getClickReasons().click({force: true})
    settings.getReasons().click({force: true})
    settings.getSelectStage().select(this.data.stages)
    settings.getReasonsName().type(this.data.reasonss)
    settings.getAddReasons().click()
    }
  })

settings.getClickReasons().click({force: true})
settings.getReasons().click({force: true})
settings.getSelectStage().select(this.data.stages)
settings.getReasonsName().type(this.data.reasonss)
settings.getAddReasons().click()
//settings.getReasonsuccess().should('have.text','Reason added successfully!')
settings.getReasonsuccess().then(function(element)
  {
      const actualText =element.text()
      expect(actualText.includes("Reason added successfully!")).to.be.true
  })
  
//Sub-Reason Addition 
settings.getClickReasons().click()
settings.getSubreasons().click({force: true})
settings.getSubReasonName().type(this.data.subreasons)
settings.getSelectReasons().select(this.data.reasonss)
settings.getAddReason().click()
settings.getSubReasonsuccess().then(function(element){
    const actualText =element.text()
    expect(actualText.includes("Sub-Reason already exists!")).to.be.true
})

///institute addition
settings.getClickInstitutes().click({force: true})
settings.getInstitutes().click({force: true})
settings.getInstitutesName().type(this.data.institutesname)
settings.getEmailSendername().type(this.data.emailsender)
settings.getSmssendername().type(this.data.smssender)
settings.getAddinstitutes().click()
//Course Addition
settings.getClickCourses().click({force: true})
settings.getCourses().click({force: true})
settings.getCoureseName().type(this.data.coursename)
settings.getSelectinstitutesforcourse().select(this.data.institutesname)
settings.getAddcourse().click()
//Specializations additions
settings.getClickspecializations().click({force: true})
settings.getSpecializations().click({force: true})
settings.getSelectinstitutes().select(this.data.institutesname)
settings.getSelectCourses().select(this.data.coursename)
settings.getSpecializationName().type(this.data.specializationsname)
settings.getAddSpecializations().click()
*/
})
})

describe('User', function()
{
    before(function() {
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
    })
const dashboard = new DashBoard()
const user = new User()
 
it.skip('Add User',function() {
 
    cy.AdminLogin()
    dashboard.getClickUser().click()
    user.getUser().click()
    user.getUserEmpid().type(this.data.empid)
    user.getUserName().type(this.data.username)
    user.getUserEmail().type(this.data.useremail)
    user.getUserMobile().type(this.data.usermobile)
    user.getUserPassword().type(this.data.userpassword)
    user.getUserRole().select(this.data.userole)
    user.getUserInstitute().select(this.data.university)
    user.getReportingUser().select(this.data.reportinguser)
    user.getAddUser().click()
})
})

describe('LEAD', function()
{
    before(function() {
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
    })
const  dashboard = new DashBoard()
const lead = new Lead()
const login = new Login()

it.skip('Add Lead',function() {

cy.AdminLogin()
dashboard.getAllLead().click({force: true})

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
})
})  

describe('LEAD', function()
{
    before(function() {
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
    })
const  dashboard = new DashBoard()
const lead = new Lead()
 
it.skip('Edit Lead',function() {

cy.AdminLogin()
dashboard.getAllLead().click({force: true})
lead.getSearchbar().type(this.data.leadmobile)
lead.getClicksearch().click()
lead.getLeadmenu().click()
lead.getLeadedit().click()

lead.getFullName().clear().type(this.data.fullnamee)
lead.getEmail().clear().type(this.data.emaile)
lead.getMobileNumber().clear().type(this.data.mobilenumbere)
lead.getRemark().clear().type(this.data.remarke)
lead.getUniversity().select(this.data.universitye,{force: true})
lead.getSource().select(this.data.sourcee,{force: true})
lead.getSubsource().select(this.data.subsourcee,{force: true})
//lead.getStage().select(this.data.stagee,{force: true})
lead.getReason().select(this.data.reasone,{force: true})
//lead.getSubreason().select(this.data.subreasone,{force: true})
lead.getCourse().select(this.data.coursese,{force: true})
//lead.getSpecialization().select(this.data.specializatione,{force: true})
lead.getState().select(this.data.statee,{force: true})
lead.getCity().select(this.data.citye,{force: true})
lead.getAdd().click({force: true})

})
})

describe('Follow Ups', function()
{
    before(function() {
        cy.fixture('example').then(function(data)
           {
this.data=data
        })
    })
const  dashboard = new DashBoard()
const lead = new Lead()
 
it.skip('Add Follow ups',function() {

cy.AdminLogin()
dashboard.getAllLead().click({force: true})
lead.getSearchbar().type(this.data.leadmobile)
lead.getClicksearch().click()

lead.getLeadStage().then(function(element)
  {
      const leadStage =element.text()
      expect(leadStage.includes('New Leads'))
      
      if(leadStage == 'New Leads')
      {
      lead.getNewLeads().click()

      lead.getLeadmenu().click()
      lead.getAddFollowup().click()
      lead.getStages().select(this.data.followup)
      lead.getReasons().select(this.data.reasons)
      lead.getRemarks().type(this.data.remarks)
      lead.getUnchecks().click()
      lead.getClickfollowupAdd().click()
      }
      else if(leadStage=="Follow- Up")
      {
      lead.getFollowUp().click()
      }
      else if(leadStage=="Not - Interested")
      {
      lead.getNotInterested().click()
      }
      else if(leadStage=="Registration Done")
      {
      lead.getRegistrationDone().click()
      }
      else if(leadStage =="Admission Done")
      {
      lead.getAdmissionDone().click()
      }
      else if(leadStage =="Interested  for B2B")
      {
      lead.getInterestedforB2B().click()
      }
      else if(leadStage=="Not Connected")
      {
      lead.getNotConnected().click()
      }
      else if(leadStage=="Re-Enquired")
      {
      lead.getReEnquired().click()
      }
      else if(stage=="Interested For Next Session")
      {
      lead.getInterestedForNextSession().click()
      }
  })

})
})

describe('LEAD', function()
{
    before(function() {
        cy.fixture('example').then(function(data)
           {
this.data=data
        })
    })
const  dashboard = new DashBoard()
const lead = new Lead()
 
it.skip('Delete Lead',function() {
cy.AdminLogin()
dashboard.getAllLead().click({force: true})
lead.getSearchbar().type(this.data.leadmobile)
lead.getClicksearch().click()
lead.getLeadmenu().click()
lead.getDeleteLead().click()
lead.getConformbutton().click()

})
})

