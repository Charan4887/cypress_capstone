describe('Data Management', () => {
    it('Use fixtures to manage test data', ()=>{
    cy.visit('https://demowebshop.tricentis.com/login')
    cy.fixture('loginfixtures').then( (data)=>{
    cy.login(data.username,data.password)
    cy.get('.topic-html-content-header').should('contain.text',data.expect)
    })
    })
})
