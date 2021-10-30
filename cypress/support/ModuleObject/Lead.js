class Lead
{
  //lead Search locator
  getSearchbar()
  {
      return cy.get('#input_search')
  }
  getClicksearch()
  {
     return cy.get('.px-2 > .h-4')
  }
  //match lead stage
  getLeadStage()
  {
    return cy.get('.inline-flex-item')
  }
  getNewLeads()
  {
    return cy.get('.grid-cols-2:nth-child(1) div:nth-child(3)')
  }
  getFollowUp()
  {
    return cy.get('.grid-cols-2:nth-child(1) div:nth-child(4)')
  }
  getNotInterested()
  {
    return cy.get('.grid-cols-2:nth-child(1) div:nth-child(5)')
  }
  getRegistrationDone()
  {
    return cy.get('.grid-cols-2:nth-child(1) div:nth-child(6)')
  }
  getAdmissionDone()
  {
    return cy.get('.grid-cols-2:nth-child(1) div:nth-child(7)')
  }
  getInterestedforB2B()
  {
    return cy.get('.grid-cols-2:nth-child(1) div:nth-child(8)')
  }
  getNotConnected()
  {
    return cy.get('.grid-cols-2:nth-child(1) div:nth-child(9)')
  }
  getReEnquired()
  {
    return cy.get('.grid-cols-2:nth-child(1) div:nth-child(10)')
  }
  getInterestedForNextSession()
  {
    return cy.get('.grid-cols-2:nth-child(1) div:nth-child(11)')
  }
  getLeadCount()
  {
    return cy.get('div.px-4 p span:nth-child(3)')
  }
//Add lead locator
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
    return cy.get('.btn-inline')
           
  }
  //LeadMenu
  getLeadmenu()
  {
    return cy.get('#headlessui-menu-button-1 > .icon-svg-icon')
  }
  // Lead edit
  getLeadedit()
  {
    return cy.get('div.py-1 a:nth-child(2) span:nth-child(2)')
  }
  //Add followps

  getAddFollowup()
  {
    return cy.get('.py-1 a:nth-child(1) span:nth-child(2)')
  }
  getStages()
  {
    return cy.get('#stage')
  }
  getReasons()
  {
     return cy.get('#reason')
  }
  getRemarks()
   {
     return cy.get('#remark')
   }
   getUnchecks()
   {
     return cy.get('#add_followup')
   }
   getClickfollowupAdd()
   {
     return cy.get('.pt-5 > .flex > .ml-3')
   }
   getDeleteLead()
   {
     return cy.get('div .py-1 > a:nth-child(5) > span:nth-child(2)')
   }
   getConformbutton()
   {
     return cy.get('.mt-5 > .text-white')
   }
   getLeadStageAssertion()
   {
      return cy.get('.inline-flex-item')
   }
}
export default Lead; 