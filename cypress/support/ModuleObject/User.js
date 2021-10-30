class User
{
    getClickUser()
    {
        return cy.get('.truncate').contains('Users')
    }
    getClickADDUser()
    {
        return cy.get('.bredcrumb-div div:nth-child(2) a:nth-child(2) svg:nth-child(1)')
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
        return cy.get(':nth-child(9) > div > #password')
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
    getSearchUser()
    {
        return cy.get('#input_search')
    }
    getClickSearch()
    {
        return cy.get('.border-blue-500')
    }
    getDeleteUser()
    {
        return cy.get('tbody tr').contains('gauravsvude@gmail.com').find('td:nth-child(10) a:nth-child(2)')
    }
}
export default User;