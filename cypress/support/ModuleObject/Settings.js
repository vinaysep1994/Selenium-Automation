class Settings
{  
getSetting()
{
    return cy.get(':nth-child(6) > li > a')
}
getWait()
{
    return cy.wait(12000)
}
//source locator
getClickADD()
{
    return cy.get('.bredcrumb-div div:nth-child(2) a:nth-child(1)')
}
getTableList()
{
    return cy.get('tbody tr')
}
getSourcedelete()
{
    return cy.contains('tr','Test Source').find('td:nth-child(3) a:nth-child(2)')
}
getSourceName()
{
    return cy.get('#myInput')
}
getAssertion()
{
    return cy.get('.ml-3 p')
}
getSourceEdit1()
{
    return cy.contains('tr','Test Source').find('td:nth-child(3) a:nth-child(1)')
}
getSourceEdit2()
{
   return  cy.contains('tr','test source').find('td:nth-child(3) a:nth-child(1)')
}
getsourceNameEdit()
{
    return cy.get('#name')
}

//Sub source locator
getClickReason()
{
    return cy.get('')
}
getClickADDReason()
{
    return cy.get('.bredcrumb-div > .gap-1 > :nth-child(1) > .flex')
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
getsubSourcedelete()
{
    return cy.contains('tr','Test Sub Source').find('td:nth-child(3) a:nth-child(2)')
}
getSubSourceEdit1()
{
    return cy.contains('tr','Test Sub Source').find('td:nth-child(3) a:nth-child(1)')
}
getSubSourceEdit2()
{
    return cy.contains('tr','test sub source').find('td:nth-child(3) a:nth-child(1)')
}
getSubsourceNameEdit()
{
    return cy.get('#name')
}
//Stage locatorgetStage
getClickStages()
{
    return cy.get('.my-4 a:nth-child(3) span')
}
getStagesName()
{
    return cy.get('#name')
}
getStageDelete()
{
    return cy.contains('tr','Test').find('td:nth-child(5) a:nth-child(2)')
}
getDeletepermission()
{
    return cy.get('#delete_yes')
}
getEditStage1()
{
    return cy.contains('tr','Test').find('td:nth-child(5) a:nth-child(1)')
}
getEditStage2()
{
    return cy.contains('tr','test stage').find('td:nth-child(5) a:nth-child(1)')
}
getAdd()
{
    return cy.get('.btn-inline')
}
//Reason locator
getClickReasons()
{
    return cy.get('.my-4 a:nth-child(4) span')
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
getReasonDelete()
{
    return cy.contains('tr','Test Reason').find('td:nth-child(4) a:nth-child(2)')
}
getEditReason1()
{
    return cy.contains('tr','Test Reason').find('td:nth-child(4) a:nth-child(1)')
}
getEditReason2()
{
    return cy.contains('tr','test reason').find('td:nth-child(4) a:nth-child(1)')
}

//sub reason locator
getSubreasons()
{
    return cy.get('.bredcrumb-div > .gap-1 > :nth-child(2) > .flex')
}
getSubReasonName()
{
    return cy.get('#name')
}
getSelectReasons()
{
    return cy.get('#parent')
}
getUpdate()
{
    return cy.get('.btn-inline')
}
getSelectReason()
{
    return cy.get('#parent')
}
getSubReasonDelete()
{
    return cy.contains('tr','New Sub Reason').find('td:nth-child(4) a:nth-child(2)')
}
getEditSubReason1()
{
    return cy.contains('tr','New Sub Reason').find('td:nth-child(4) a:nth-child(1)')
}
getEditSubReason2()
{
    return cy.contains('tr','new sub reason').find('td:nth-child(4) a:nth-child(1)')
}

//Institutes locator
getClickInstitutes()
{
    return cy.get('.my-4 a:nth-child(5) span')
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
getInstituteDelete()
{
    return cy.contains('tr','Test Institute').find('td:nth-child(5) a:nth-child(2)')
}
getAleartAssertion()
{
    return cy.get('.alert-danger ul li')
}
getEditInstitute1()
{
    return cy.contains('tr','Test Institute').find('td:nth-child(5) a:nth-child(1)')
}
getEditInstitute2()
{
    return cy.contains('tr','test institute').find('td:nth-child(5) a:nth-child(1)')
}
//course locator
getClickCourses()
{
    return cy.get('.my-4 a:nth-child(6) span')
}
getCourseName()
{
    return cy.get('#name')
}
getSelectinstitute()
{
    return cy.get('#institute_id')
    cy.get('#institutes')
}
getCourseDelete()
{
    return cy.contains('tr','Test Course').find('td:nth-child(3) a:nth-child(2)')
}
getEditCourse1()
{
    return cy.contains('tr','Test Course').find('td:nth-child(3) a:nth-child(1)')
}
getEditCourse2()
{
    return cy.contains('tr','test course').find('td:nth-child(3) a:nth-child(1)')
}
//specializations locator
getClickspecializations()
{
    return cy.get('.my-4 a:nth-child(7) span')
}
getSelectinstitutes()
{
    return cy.get('#institutes')
}
getSelectinstitutesforEdit()
{
    return cy.get('#institute')
}
 
getSelectCourses()
{
    return cy.get('#courses')
}
getSpecializationName()
{
    return cy.get('#name')
}
getSpecializationDelete()
{
    return cy.contains('tr','Test Specialization').find('td:nth-child(4) a:nth-child(2)')
}
getEditSpecialization1()
{
    return cy.contains('tr','Test Specialization').find('td:nth-child(4) a:nth-child(1)')
}
getEditSpecialization2()
{
    return cy.contains('tr','test specialization').find('td:nth-child(4) a:nth-child(1)')
}

} export default Settings; 