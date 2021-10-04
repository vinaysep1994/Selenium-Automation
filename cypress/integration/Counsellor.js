/*
    settings.getClickSource().click()
    settings.getSourceName().type(this.data.sourcenames)
    settings.getAddSource().click()
    settings.getSourceAssertion().then(function(element)
    {
    const Source =element.text()
    expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
    cy.log('Source/Sub-Source added successfully!')
    })
    } 
    else
    {  
    settings.getClickSource().click()
    settings.getSourceName().type(this.data.sourcenames)
    settings.getAddSource().click()
    settings.getSourceAssertion().then(function(element)
    {
    const Source =element.text()
    expect(Source.includes('Source/Sub-Source added successfully!')).to.be.true
    })
    
    }
})

//Next test case
settings.getsourcelist().then((Source) => {

    if (Source.text().includes('Test source')) {
    settings.getSourceEdit().click()
    settings.getEditsourceName().type(this.data.sourcenames)
    settings.getAddSource().click()
    cy.log('Source/Sub-Source Edit successfully!')
    }
    })



//source Delete
settings.getsourcelist().then((Source) => {

    if (Source.text().includes('Test source')) {
    settings.getSourcedelete().click()
    cy.log('Source/Sub-Source deleted successfully!')
    }
*/