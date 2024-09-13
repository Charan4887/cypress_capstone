// describe('intercept data',()=>{
//     it('mocking with intercept',()=>{
//         cy.visit('https://demowebshop.tricentis.com');
//         cy.intercept('GET','/login',{fixture:'loginfixtures.json'}).as('posts')
//         cy.get('.ico-login').click()
//         cy.go('back')
//         cy.wait('@posts')
// })
// })