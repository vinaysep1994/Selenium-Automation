class Lead
{
  getAllLead()
  {
      return cy.get('#leads')
  }
  getAddLead()
  {
      return 
  }
  getFullName()
  {
    return cy.get('#full_name')
  }
  getEmail()
  {
    return cy.get('#email')
  }

}
export default Lead; 