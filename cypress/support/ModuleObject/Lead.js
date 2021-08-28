class Lead
{
  getAllLead()
  {
      return cy.get('#leads')
  }
  getAddLead()
  {
      return cy.get('header div:nth-child(5) > div button:nth-child(1) img[src="/svg/quick-add.svg"]')
  }
  getFullName()
  {
    return cy.get('#full_name')
  }
  getEmail()
  {
    return cy.get('#email')
  }
  getMobileNumber()
  {
    return cy.get('#phone')
  }
  getRemark()
  {
    return cy.get('#remark')
  }
  getUniversity()
  {
    return cy.get('#institute')
  }
  getCounsellor()
  {
    return cy.get('#counsellor')
  }
  getSource()
  {
    return cy.get('.mt-1 select[id="source"]')
  }
  getSubsource()
  {
    return cy.get('.mt-1 select[id="sub_source_id"]')
  }
  getStage()
  {
    return cy.get('.mt-1 select[id="stage"]')
  }
  getReason()
  {
    return cy.get('.mt-1 select[id="reason"]')
  }
  getSubreason()
  {
    return cy.get('.mt-1 select[id="subreason"]')
  }
  getCourse()
  {
    return cy.get('.mt-1 select[id="courses"]')
  }
  getSpecialization()
  {
    return cy.get('.mt-1 select[id="specialization"]')
  }
  getState()
  {
    return cy.get('.mt-1 select[id="states"]')
  }
  getCity()
  {
    return cy.get('.mt-1 select[id="city"]')
  }
  getAdd()
  {
    return cy.get('.pt-5 button:nth-child(1)').contains('Add')
  }

}
export default Lead; 