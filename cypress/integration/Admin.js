/// <reference types="Cypress" />
import Login from '../support/ModuleObject/Login'
import DashBoard from '../support/ModuleObject/DashBoard'
import Lead from '../support/ModuleObject/Lead'
import Settings from '../support/ModuleObject/Settings'
import User from '../support/ModuleObject/User'
import Role from '../support/ModuleObject/Role'
import Validate from '../support/ModuleObject/Validate'
import { use } from 'chai'

describe('Settings(Lead)', function(){
const settings = new Settings()
const validate = new Validate()
it.skip('Source/Stage/Reason Test',function() {
cy.AdminLogin()
settings.getSetting().click()

function SourceAdd(){
    settings.getClickADD().click()
    settings.getSourceName().type('Test Source')
    settings.getAdd().click()
}
// Source already exist or  Add successfully

settings.getTableList().then((Source) => {
    if (Source.text().includes('Test Source')) 
    { 
        SourceAdd()
        settings.getAssertion().then(function(element){
        const Source =element.text()
        expect(Source.includes('Source/Sub-Source already exists!')).to.be.true
        cy.log('Source/Sub-Source already exists!')
        })  
    } else{
        SourceAdd()
        settings.getAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
            cy.log('Source/Sub-Source added successfully!')
            })
         //already exist
        SourceAdd()
        settings.getAssertion().then(function(element)
            {
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source already exists!')).to.be.true
            cy.log('Source/Sub-Source already exists!')
            }) 
    }    
    })
//source Delete
settings.getTableList().then((Source) => {
    if (Source.text().includes('Test Source')) {
    settings.getSourcedelete().click()
    settings.getDeletepermission().click()
    settings.getWait()
    cy.log('Lead Source deleted successfully!')       
    }
})

//Add source
SourceAdd()
settings.getAssertion().then(function(element){
    const Source =element.text()
    expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
    cy.log('Source/Sub-Source added successfully!')
})
//source Edit
settings.getTableList().then((Source) => {
    if (Source.text().includes('Test Source')) 
    { 
        settings.getSourceEdit1().click()
        settings.getsourceNameEdit().clear().type('test source')
        settings.getAdd().click()
        settings.getAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source updated successfully!')).to.be.true
        cy.log('Source edit successfully "test source"')
        })
    }

})
settings.getTableList().then((Source) => {
    if (Source.text().includes('test source')) 
    { 
        settings.getSourceEdit2().click()
        settings.getsourceNameEdit().clear().type('Test Source')
        settings.getAdd().click()
        settings.getAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source updated successfully!')).to.be.true
        cy.log('Source edit successfully "Test Source"')
        })
    }   
})

// Sub Source already exist or  Add successfully
function SubSourceAdd(){
    settings.getClickADD().click()
    settings.getSubsourceName().type('Test Sub Source')
    settings.getSelectSources().select('Test Source')
    settings.getAdd().click()
}
settings.getTableList().then((Source) => {
    if (Source.text().includes('Test Sub Source')) 
    { 
        SubSourceAdd()
        settings.getAssertion().then(function(element){
        const Source =element.text()
        expect(Source.includes('Source/Sub-Source already exists!')).to.be.true
        cy.log('Source/Sub-Source already exists!')
        })  
    } else{
        SubSourceAdd()
        settings.getAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
            cy.log('Source/Sub-Source added successfully!')
            })
         //already exist
        SubSourceAdd()
        settings.getAssertion().then(function(element)
            {
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source already exists!')).to.be.true
            cy.log('Source/Sub-Source already exists!')
            })
    }    
    })
    
//Sub source Delete
settings.getTableList().then((Source) => {
    if (Source.text().includes('Test Sub Source'))
    {
    settings.getsubSourcedelete().click()
    settings.getDeletepermission().click()
    settings.getWait()
    cy.log('Source/Sub-Source deleted successfully!')
    }
})
//Add sub source
SubSourceAdd()
settings.getAssertion().then(function(element){
    const Source =element.text()
    expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
    cy.log('Source/Sub-Source added successfully!')
})
//sub source Edit
settings.getTableList().then((Source) => {
    if (Source.text().includes('Test Sub Source')) 
    { 
        settings.getSubSourceEdit1().click()
        settings.getSubsourceNameEdit().clear().type('test sub source')
        settings.getSelectSources().select('Test Source')
        settings.getAdd().click()
        settings.getAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source updated successfully!')).to.be.true
        cy.log('Source/Sub-Source updated successfully! "Test Source"')
        })
    }
})
settings.getTableList().then((Source) => {
    if(Source.text().includes('test sub source'))
    {
        settings.getSubSourceEdit2().click()
        settings.getSubsourceNameEdit().clear().type('Test Sub Source')
        settings.getSelectSources().select('Test Source')
        settings.getAdd().click()
        settings.getAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Source/Sub-Source updated successfully!')).to.be.true
        cy.log('Source/Sub-Source updated successfully! "Test Source"')
        })
    }
})

//Stage addition
settings.getClickStages().click({force: true})
function AddStage (){
    settings.getClickADD().click({force: true})
    settings.getStagesName().type('Test')
    settings.getAdd().click()
}
settings.getTableList().then((Stage) =>{
    if (Stage.text().includes('Test'))
    {
     AddStage()
     settings.getAleartAssertion().then(function(element){
        const Stage =element.text()
        expect(Stage.includes('The name has already been taken.')).to.be.true
        cy.log('The name has already been taken.')
        }) 
    
    }else{
        AddStage()
        settings.getAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Stage added successfully!')).to.be.true
        cy.log('Stage added successfully!')
        })

    //already exists
    AddStage()
     settings.getAleartAssertion().then(function(element){
        const Stage =element.text()
        expect(Stage.includes('The name has already been taken.')).to.be.true
        cy.log('The name has already been taken.')
        }) 
    }
})
//Deleted
settings.getTableList().then((Stage) => {
    if (Stage.text().includes('Test'))
    {
        settings.getStageDelete().click()
        settings.getDeletepermission().click()
        cy.log('Stage deleted successfully')
    }
})
//Stage added
settings.getWait()
AddStage()
settings.getAssertion().then(function(element){
    const Source =element.text()
    expect(Source.includes('Stage added successfully!')).to.be.true
cy.log('Stage added successfully!')
})
//Edit stage
settings.getTableList().then((Stage) => {
    if (Stage.text().includes('Test')) 
    { 
        settings.getEditStage1().click()
        settings.getStagesName().clear().type('test stage')
        settings.getAdd().click()
        settings.getAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Stage updated successfully!')).to.be.true
        cy.log('Stage updated successfully! "test stage"')
        })
    }
})
settings.getTableList().then((Stage) => {
    if (Stage.text().includes('test stage'))
    {
        settings.getEditStage2().click()
        settings.getStagesName().clear().type('Test')
        settings.getAdd().click()
        settings.getAssertion().then(function(element){
            const Source =element.text()
            expect(Source.includes('Stage updated successfully!')).to.be.true
        cy.log('Stage updated successfully! "Test"')
        })
    }
})
//Reason addition
settings.getClickReasons().click({force: true})
function AddReason(){
    settings.getClickADDReason().click({force: true})
    settings.getSelectStage().select('Test')
    settings.getReasonsName().type('Test Reason')
    settings.getAdd().click()
}
settings.getTableList().then((Reason) => {
    if (Reason.text().includes('Test Reason')) 
    { 
        AddReason()
        settings.getAssertion().then(function(element){
        const Reason =element.text()
        expect(Reason.includes('Reason already exists!')).to.be.true
        cy.log('Reason already exists!')
        })  
    } else{
        AddReason()
        settings.getAssertion().then(function(element){
            const Reason =element.text()
            expect(Reason.includes('Reason added successfully!')).to.be.true
            cy.log('Reason added successfully!')
            })
         //already exist
         AddReason()
         settings.getAssertion().then(function(element)
            {
            const Reason =element.text()
            expect(Reason.includes('Reason already exists!')).to.be.true
            cy.log('Reason already exists!')
            })
    }    
  })
//Reason Delete
settings.getTableList().then((Reason) => {
    if (Reason.text().includes('Test Reason'))
    {
    settings.getReasonDelete().click()
    settings.getDeletepermission().click()
    settings.getWait()
    cy.log('Reason deleted successfully!')
    }
})
//Add Reason
AddReason()
settings.getAssertion().then(function(element){
    const Reason =element.text()
    expect(Reason.includes('Reason added successfully!')).to.be.true
    cy.log('Reason added successfully!')
})
//Reason  Edit
settings.getTableList().then((Reason) => {
    if (Reason.text().includes('Test Reason')) 
    { 
        settings.getEditReason1().click()
        settings.getSelectStage().select('Test')
        settings.getStagesName().clear().type('test reason')
        settings.getAdd().click()
        settings.getAssertion().then(function(element){
            const Reason =element.text()
            expect(Reason.includes('Reason updated successfully!')).to.be.true
            cy.log('Reason updated successfully! "test reason"')
            })
    }
})
settings.getTableList().then((Reason) => {
    if (Reason.text().includes('test reason')) 
    { 
    settings.getEditReason2().click()
    settings.getSelectStage().select('Test')
    settings.getSubReasonName().clear().type('Test Reason')
    settings.getAdd().click()
    settings.getAssertion().then(function(element){
        const Reason =element.text()
        expect(Reason.includes('Reason updated successfully!')).to.be.true
        cy.log('Reason updated successfully! "Test Reason"')
        })
    }
})
//Sub Reason
settings.getWait()
settings.getClickReasons().click({force: true})
function AddSubReason(){
settings.getSubreasons().click()
settings.getSubReasonName().type('New Sub Reason')
settings.getSelectReasons().select('Test Reason')
settings.getAdd().click()
}
settings.getTableList().then((SubReason) => {
    if (SubReason.text().includes('New Sub Reason')) 
    { 
        AddSubReason()
        settings.getAssertion().then(function(element){
        const SubReason =element.text()
        expect(SubReason.includes('Sub-Reason already exists!')).to.be.true
        cy.log('Sub-Reason already exists!')
        })  
    } else{
        AddSubReason()
        settings.getAssertion().then(function(element){
            const SubReason =element.text()
            expect(SubReason.includes('Sub-Reason added successfully!')).to.be.true
            cy.log('Sub-Reason added successfully!')
            })
         //already exist
         AddSubReason()
         settings.getAssertion().then(function(element)
            {
            const SubReason =element.text()
            expect(SubReason.includes('Sub-Reason already exists!')).to.be.true
            cy.log('Sub-Reason already exists!')
            })
    }    
  })
//Sub Reason Delete
settings.getTableList().then((SubReason) => {
    if (SubReason.text().includes('New Sub Reason'))
    {
    settings.getSubReasonDelete().click()
    settings.getDeletepermission().click()
    settings.getWait()
    cy.log('Sub-Reason deleted successfully!')
    }
})
//Add Sub Reason
AddSubReason()
settings.getAssertion().then(function(element){
    const SubReason =element.text()
    expect(SubReason.includes('Sub-Reason added successfully!')).to.be.true
    cy.log('Sub-Reason added successfully!')
})
//Sub Reason  Edit
settings.getTableList().then((Reason) => {
    if (Reason.text().includes('New Sub Reason')) 
    { 
        settings.getEditSubReason1().click()
        settings.getWait()
        settings.getSubReasonName().clear().type('new sub reason')
        settings.getSelectReason().select('Test Reason')
        settings.getAdd().click()
        settings.getAssertion().then(function(element){
            const SubReason =element.text()
            expect(SubReason.includes('Reason updated successfully!')).to.be.true
            cy.log('Sub-Reason updated successfully! "new sub reason"')
        })
    }
})
settings.getTableList().then((Reason) => {
    if(Reason.text().includes('new sub reason'))
    {
        settings.getEditSubReason2().click()
        settings.getSubReasonName().clear().type('New Sub Reason')
        settings.getSelectReason().select('Test Reason')
        settings.getAdd().click()
        settings.getAssertion().then(function(element){
            const SubReason =element.text()
            expect(SubReason.includes('Reason updated successfully!')).to.be.true
            cy.log('Reason updated successfully!  "New Sub Reason"')
        })
    }
})
})
})

describe('Settings(Academic)', function()
{
const settings = new Settings()
it.skip('Course/institute/specialization Test',function() {

    cy.AdminLogin()
    settings.getSetting().click()
    //institute addition
    settings.getClickInstitutes().click({force: true})
    function Addinstitute(){
    settings.getClickADD().click({force: true})
    settings.getInstitutesName().type('Test Institute')
    settings.getEmailSendername().type('test')
    settings.getSmssendername().type('test')
    settings.getAdd().click()
    }
    settings.getTableList().then((Institutes) => {
        if (Institutes.text().includes('Test Institute')) 
        { 
            Addinstitute()
            settings.getAleartAssertion().then(function(element){
            const Institutes =element.text()
            expect(Institutes.includes('The name has already been taken.')).to.be.true
            cy.log('The name has already been taken.')
            })  
        } else{
            Addinstitute()
            settings.getAssertion().then(function(element)
                {
                const Institutes =element.text()
                expect(Institutes.includes('Institute added successfully!')).to.be.true
                cy.log('Institute added successfully!')
                })
             //already exist
             Addinstitute()
             settings.getAleartAssertion().then(function(element)
                {
                const Institutes =element.text()
                expect(Institutes.includes('The name has already been taken.')).to.be.true
                cy.log('The name has already been taken.')
                })
        }    
      })
    //institute  Edit
    settings.getTableList().then((Institutes) => {
        if (Institutes.text().includes('Test Institute')) 
        { 
            settings.getEditInstitute1().click()
            settings.getInstitutesName().clear().type('test institute')
            settings.getAdd().click()
            settings.getAssertion().then(function(element)
                {
                const Institutes =element.text()
                expect(Institutes.includes('Institute updated successfully!')).to.be.true
                cy.log('Institute update successfully!  "test institute"')
                })
        }
    })
    settings.getTableList().then((Institutes) => {
        if(Institutes.text().includes('test institute'))
        {
            settings.getEditInstitute2().click()
            settings.getInstitutesName().clear().type('Test Institute')
            settings.getAdd().click()
            settings.getAssertion().then(function(element)
                {
                const Institutes =element.text()
                expect(Institutes.includes('Institute updated successfully!')).to.be.true
                cy.log('Institute update successfully!  "Test Institute"')
                })
        }
       })
    //Course
    settings.getClickCourses().click({force: true})
    function AddCourse(){
        settings.getClickADD().click()
        settings.getCourseName().type('Test Course')
        settings.getSelectinstitute().select('Test Institute')
        settings.getAdd().click()
    }
    settings.getTableList().then((course) => {
        if (course.text().includes('Test Course')) 
        { 
            AddCourse()
            settings.getAssertion().then(function(element){
            const course =element.text()
            expect(course.includes('Course already exists!')).to.be.true
            cy.log('Course already exists!')
           })
        }else{
            AddCourse()
            settings.getAssertion().then(function(element){
                const course =element.text()
                expect(course.includes('Course added successfully!')).to.be.true
                cy.log('Course added successfully!')
                })
            AddCourse()
            settings.getAssertion().then(function(element)
               {
               const course =element.text()
               expect(course.includes('Course already exists!')).to.be.true
               cy.log('Course already exists!')
               })
             }    
      })
        //Course  Edit
    settings.getTableList().then((course) => {
        if (course.text().includes('Test Course')) 
        { 
            settings.getEditCourse1().click()
            settings.getCourseName().clear().type('test course')
            settings.getSelectinstitute().select('Test Institute')
            settings.getAdd().click()
            cy.log('Course edit successfully "test course"')
        }
    })
    settings.getTableList().then((course) => {
        if (course.text().includes('test course')) 
        {
            settings.getEditCourse2().click()
            settings.getCourseName().clear().type('Test Course')
            settings.getSelectinstitute().select('Test Institute')
            settings.getAdd().click()
            cy.log('Course edit successfully "Test Course"')
        }
    })
    //Specializations addition
    settings.getClickspecializations().click({force: true})
    function AddSpecialization(){
    settings.getClickADD().click({force: true})
    settings.getSelectinstitutes().select('Test Institute')
    settings.getSelectCourses().select('Test Course')
    settings.getSpecializationName().type('Test Specialization')
    settings.getAdd().click()
    }
    settings.getTableList().then((specializations) => {
        if (specializations.text().includes('Test Specialization')) 
        { 
            AddSpecialization()
            settings.getAssertion().then(function(element){
            const specializations =element.text()
            expect(specializations.includes('Specialization already exists!')).to.be.true
            cy.log('Specialization already exists!')
            })
        }else{
            AddSpecialization()
            settings.getAssertion().then(function(element){
                const specializations =element.text()
                expect(specializations.includes('Specialization added successfully!')).to.be.true
                cy.log('Specialization added successfully!')
                })
            AddSpecialization()
            settings.getAssertion().then(function(element)
               {
               const specializations =element.text()
               expect(specializations.includes('Specialization already exists!')).to.be.true
               cy.log('Specialization already exists!')
               })
        }    
    //Specializations  Edit
    settings.getTableList().then((specializations) => {
        if (specializations.text().includes('Test Specialization')) 
        { 
            settings.getEditSpecialization1().click()
            settings.getSpecializationName().clear().type('test specialization')
            settings.getSelectinstitutesforEdit().select('Test Institute')
            settings.getAdd().click()
            cy.log('Specialization edit successfully "test specialization"')
        }
    })
    settings.getTableList().then((specializations) => {
        if (specializations.text().includes('test specialization')) 
        {
            settings.getEditSpecialization2().click()
            settings.getSpecializationName().clear().type('Test Specialization')
            settings.getSelectinstitutesforEdit().select('Test Institute')
            settings.getAdd().click()
            cy.log('Specialization edit successfully "Test Specialization"')
        }
    })
    //Specializations Delete
    function SpecializationDelete(){
    settings.getTableList().then((specializations) => {
        if (specializations.text().includes('Test Specialization'))
        {
        settings.getSpecializationDelete().click()
        settings.getDeletepermission().click({force: true})
        settings.getWait()
        cy.log('Specialization deleted successfully!')
        }
    })
    }
    SpecializationDelete()
    settings.getWait()
    //Add Specializations
    AddSpecialization()
    settings.getAssertion().then(function(element){
        const specializations =element.text()
        expect(specializations.includes('Specialization added successfully!')).to.be.true
        cy.log('Specialization added successfully!')
    settings.getWait()
    SpecializationDelete()
    //Course Delete
    settings.getClickCourses().click({force: true})
    function CourseDelete() {
            settings.getTableList().then((course) => {
            if (course.text().includes('Test Course'))
            {
            settings.getCourseDelete().click()
            settings.getDeletepermission().click()
            settings.getWait()
           cy.log('Course deleted successfully!')
            }
        })
    }
    CourseDelete()
    settings.getWait()
    //Add Course
    AddCourse()
    settings.getAssertion().then(function(element){
        const course =element.text()
        expect(course.includes('Course added successfully!')).to.be.true
        cy.log('Course added successfully!')
    })
    CourseDelete()
    //institute Delete
    settings.getClickInstitutes().click({force: true})
    function instituteDelete(){
    settings.getTableList().then((Institutes) => {
        if (Institutes.text().includes('Test Institute'))
        {
        settings.getInstituteDelete().click()
        settings.getDeletepermission().click()
        settings.getWait()
        cy.log('Institutes deleted successfully!')
        }
    })
    }
    instituteDelete()
    settings.getWait()
    //Add institute
    Addinstitute()
            settings.getAssertion().then(function(element)
                {
                const Institutes =element.text()
                expect(Institutes.includes('Institute added successfully!')).to.be.true
                cy.log('Institute added successfully!')
                }) 
    instituteDelete()
//
Addinstitute()
settings.getWait()
AddCourse()
settings.getWait()
AddSpecialization()
})
})
})
//Role test
describe('User Role', function()
{
const settings = new Settings()
const role = new Role()
it('Role',function() 
{
cy.AdminLogin()
settings.getSetting().click()
role.getClickRole().click({force: true})

function AddRole(){
role.getClickadd().click()
role.getRoleName().type('AdminTest')
role.getRoleParent().select('Admin')
role.getClickHasUser().click()
for(let i = 16; i < 21; i++){
    role.getClickPermissionCheckbox().click({ multiple: true, force: true })
    break
}
settings.getAdd().click()
settings.getWait()
}
settings.getTableList().then((Roles) => {
    if (Roles.text().includes('AdminTest'))
    {
        AddRole()
        role.getRoleAssertion().then(function(element){
            const Stage =element.text()
            expect(Stage.includes('The title has already been taken.')).to.be.true
        })
    }
    else
    {
        AddRole()
        settings.getAssertion().then(function(element){
            const specializations =element.text()
            expect(specializations.includes('Role added successfully!')).to.be.true
            cy.log('Role added successfully!')
            })
        AddRole()
        role.getRoleAssertion().then(function(element){
            const Stage =element.text()
            expect(Stage.includes('The title has already been taken.')).to.be.true
        })
    }
})
//Delete Role
role.getBackToRole().click({force: true})
settings.getWait()
role.getBackToRole().click({force: true})
role.getDeleteRole().click()
settings.getDeletepermission().click()
    cy.log('Role deleted successfully!')
//Add Role
settings.getWait()
AddRole()
        settings.getAssertion().then(function(element){
            const specializations =element.text()
            expect(specializations.includes('Role added successfully!')).to.be.true
            cy.log('Role added successfully!')
            })
//Edit Role
settings.getTableList().then((Role) => {
    if (Role.text().includes('AdminTest')) 
    { 
        role.getClickRoleEdit1().click()
        role.getRoleName().clear().type('admintest')
        settings.getAdd().click()
        cy.log('Course edit successfully "admintest"')
    }
})
settings.getTableList().then((Role) => {
    if (Role.text().includes('admintest')) 
    {
        role.getClickRoleEdit2().click()
        role.getRoleName().clear().type('AdminTest')
        settings.getAdd().click()
        cy.log('Course edit successfully "AdminTest"')
    }
})
})
})
//User Test
describe('User', function(){
    const settings = new Settings()
    const user = new User()
    it.skip('User Test',function(){
    cy.AdminLogin()
    settings.getSetting().click()
    user.getClickUser().click({force: true})
    function AddUser(){
    user.getClickADDUser().click()
    user.getUserEmpid().type('Test001')
    user.getUserName().type('Test')
    user.getUserEmail().type('testkk@gmail.com')
    user.getUserMobile().type('918383838388')
    user.getUserInstitute().select('Test Institute')
    user.getUserRole().select('AdminTest')
    user.getReportingUser().select('Admin (SODE0001)')
    user.getUserPassword().type('password')
    user.getAddUser().click()
    }
    user.getSearchUser().type('Test001')
    use.getClicksearch().click()
    AddUser()
    settings.getAssertion().then(function(element)
                {
                const Institutes =element.text()
                expect(Institutes.includes('User added successfully!')).to.be.true
                cy.log('User added successfully!')
                })
})
})
//Lead addition
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
function SearchLead(){
dashboard.getAllLead().click({force: true})
lead.getSearchbar().type('8383088591')
lead.getClicksearch().click()
}
function AddFollowups(){
    lead.getLeadmenu().click()
    lead.getAddFollowup().click()
    lead.getUnchecks().click() 
}
//Add follow ups
SearchLead()
lead.getLeadStage().then((leadStage)=>{
    if(leadStage.text().includes('New Leads'))
    {
    lead.getNewLeads().click()
    lead.getLeadStageAssertion().then(function($element){
    const leadStage =$element.text()
    //expect(leadStage.includes('New Leads')).to.be.true
    expect($element).to.have.text('New Leads').to.be.true
    })
    AddFollowups()
    lead.getStages().select('Follow- Up')
    lead.getReasons().select('Cold')
    lead.getRemarks().type('Call')
    lead.getClickfollowupAdd().click()
      }
})

SearchLead()
lead.getLeadStage().then((leadStage)=>{

    if(leadStage.text().includes('Follow- Up'))
    {
    lead.getFollowUp().click()
      const leadStage =element.text()
      expect(leadStage.includes('Follow- Up')).to.be.true

    AddFollowups()
    lead.getStages().select('Not - Interested')
    lead.getReasons().select('Fake Lead')
    lead.getRemarks().type('NI')
    lead.getClickfollowupAdd().click()
    }
  })
  
SearchLead()
lead.getLeadStage().then(function(element)
  {
      if(leadStage=="Not - Interested")
      {
      lead.getNotInterested().click()
      const leadStage =element.text()
      expect(leadStage.includes('Not - Interested')).to.be.true

    AddFollowups()
    lead.getStages().select('Follow- Up')
    lead.getReasons().select('Cold')
    lead.getRemarks().type('Call')
    lead.getClickfollowupAdd().click()
    }
  })   

      if(leadStage=="Registration Done")
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
