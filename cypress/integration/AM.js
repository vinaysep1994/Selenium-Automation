/// <reference types="Cypress" />
import Login from '../support/ModuleObject/Login'
import DashBoard from '../support/ModuleObject/DashBoard'
import Lead from '../support/ModuleObject/Lead'
import Settings from '../support/ModuleObject/Settings'

describe('Settings', function()
{
const settings = new Settings()
 
it('settings',function() {

cy.AdminLogin()
settings.getSetting().click()
//Stage Edit

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
/*
//stage  Edit
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

*/
})
})

    



