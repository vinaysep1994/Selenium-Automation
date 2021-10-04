class Settings
{  
getSetting()
{
    return cy.get(':nth-child(5) > :nth-child(2) > a')
}
//source locator
getClickSource()
{
    return cy.get('.mb-6 > .gap-1 > :nth-child(1) > .flex')
}
getTableList()
{
    return cy.get('tbody tr')
}
getSourcedelete()
{
    return cy.contains('tr','test source').find('td:nth-child(3) a:nth-child(2)')
}
getSourceName()
{
    return cy.get('#myInput')
}
getAddSource()
{
    return cy.get('.btn-inline')
}
getSourceAssertion()
{
    return cy.get('.ml-3 p')
}
getSourceEdit1()
{
    return cy.contains('tr','test source').find('td:nth-child(3) a:nth-child(1)')
}
getSourceEdit2()
{
   return  cy.contains('tr','Test source').find('td:nth-child(3) a:nth-child(1)')
}
getsourceNameEdit()
{
    return cy.get('#name')
}

//Sub source locator
getClickSubsource()
{
    return cy.get('.mb-6 > .gap-1 > :nth-child(1) > .flex')
}
getSubsourceName()
{
    return cy.get('#myInput')
}
getSelectSources()
{
    return cy.get('#parent')
}
//sub source locator
getAddSubsource()
{
    return cy.get('.btn-inline')
}
getsubSourcedelete()
{
    return cy.contains('tr','test sub source').find('td:nth-child(3) a:nth-child(2)')
}
getSubSourceEdit()
{
    return cy.contains('tr','test sub source').find('td:nth-child(3) a:nth-child(1)')
}
getSubsourceNameEdit()
{
    return cy.get('#name')
}
//Stage locator
getClickStages()
{
    return cy.get('[href="https://staging.crm2.edutra.io/admin/lead-stages"] > .truncate')
}
getStages()
{
    return cy.get('.mb-6 > .gap-1 > :nth-child(1) > .flex')
}
getStagesEditName()
{
    return cy.get('#name')
}
getEditStage1()
{
    return cy.contains('tr','Test Stage').find('td:nth-child(5) a:nth-child(1)')
}
getEditStage2()
{
    return cy.contains('tbody tr','Test').find('td:nth-child(5) a:nth-child(1)')
}
getAdd()
{
    return cy.get('.btn-inline')
}
//Reason locator
getClickReasons()
{
    return cy.get('[href="https://staging.crm2.edutra.io/admin/lead-reasons"] > .truncate')
}
getReasons()
{
    return cy.get('.mb-6 > .gap-1 > :nth-child(1) > .flex')
}
getSelectStage()
{
    return cy.get('#lead_stage_id')
}
getReasonsName()
{
    return cy.get('#name')
}
getAddReasons()
{
    return cy.get('.btn-inline')
}
getReasonsuccess()
{
    return cy.get('.ml-3 > .text-sm')
}
//sub reason locator
getSubreasons()
{
    return cy.get('.mb-6 > .gap-1 > :nth-child(2) > .flex')
}
getSubReasonName()
{
    return cy.get('#name')
}
getSelectReasons()
{
    return cy.get('#parent')
}
getAddReason()
{
    return cy.get('.btn-inline')
}
getSubReasonsuccess()
{
    return cy.get('.ml-3 > .text-sm')
}
//Institutes locator
getClickInstitutes()
{
    return cy.get('[href="https://staging.crm2.edutra.io/admin/institutes"]')
}
getInstitutes()
{
    return cy.get('.mb-6 > .gap-1 > :nth-child(1) > .flex')
}
getInstitutesName()
{
    return cy.get('#name')
}
getEmailSendername()
{
    return cy.get('#email_senderid')
}
getSmssendername()
{
    return cy.get('#sms_senderid')
}
getAddinstitutes()
{
    return cy.get('.btn-inline')
}
//course locator
getClickCourses()
{
    return cy.get('[href="https://staging.crm2.edutra.io/admin/courses"] > .truncate')
}
getCourses()
{
    return cy.get('.mb-6 > .gap-1 > :nth-child(1) > .flex')
}
getCoureseName()
{
    return cy.get('#name')
}
getSelectinstitutesforcourse()
{
    return cy.get('#institute_id')
}
getAddcourse()
{
    return cy.get('.btn-inline')
}
//specializations locator
getClickspecializations()
{
    return cy.get('[href="https://staging.crm2.edutra.io/admin/specializations"] > .truncate')
}
getSpecializations()
{
    return cy.get('.mb-6 > .gap-1 > :nth-child(1) > .flex')
}
getSelectinstitutes()
{
    return cy.get('#institutes')
}
getSelectCourses()
{
    return cy.get('#courses')
}
getSpecializationName()
{
    return cy.get('#name')
}
getAddSpecializations()
{
    return cy.get('.btn-inline')

}
} export default Settings; 