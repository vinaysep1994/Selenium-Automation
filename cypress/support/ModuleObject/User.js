class User
{
    getUser()
    {
        return cy.get('.p-0 > .w-5')
    }
    getUserEmpid()
    {
        return cy.get('#employee_id')
    }
    getUserName()
    {
        return cy.get('#name')
    }
    getUserEmail()
    {
        return cy.get('#email')
    }
    getUserMobile()
    {
        return cy.get('#mobile')
    }
    getUserPassword()
    {
        return cy.get('.mt-1 > #password')
    }
    getUserRole()
    {
        return cy.get('#roles')
    }
    getUserInstitute()
    {
        return cy.get('#institutes')
    }
    getReportingUser()
    {
        return cy.get('#reporting_user_id')
    }
    getAddUser()
    {
        return cy.get('.pt-5 > .flex > .ml-3')
    }
}
export default User;