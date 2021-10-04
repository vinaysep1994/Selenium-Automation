class DashBoard

{
    getAllLead()
    {
      return cy.get('#leads')
    }
    getClickUser()
    {
        return cy.get(':nth-child(5) > :nth-child(3) > a')
    }
}
export default DashBoard; 