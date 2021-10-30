class Role
{
    getClickRole()
    {
        return cy.get('.truncate').contains('Roles')
    }
    getClickadd()
    {
        return cy.get('.p-0 > .w-5')
    }
    getRoleName()
    {
        return cy.get('#title')
    }
    getClickPermissionCheckbox()
    {
        return cy.get('tbody tr td input')
    }
    getRoleParent()
    {
        return cy.get('#parent_id')
    }
    getClickHasUser()
    {
        return cy.get('.mt-1 > .tw-form-checkbox')
    }
    getRoleAssertion()
    {
        return cy.get('.invalid-feedback')
    }
    getDeleteRole()
    {
        return cy.contains('tr','AdminTest').find('td:nth-child(2) a:nth-child(2)')
    }
    getBackToRole()
    {
        return cy.get('.p-0')
    }
    getClickRoleEdit1()
    {
        return cy.contains('tr','AdminTest').find('td:nth-child(2) a:nth-child(1)')
    }
    getClickRoleEdit2()
    {
        return cy.contains('tr','admintest').find('td:nth-child(2) a:nth-child(1)')
    }




}
export  default Role;