describe('Visual Testing', () => {
    beforeEach(() => {
      cy.visit('https://demowebshop.tricentis.com/')
    });
    it('should match the login page design', () => {
      cy.url().should('include', 'tricentis.com')
      cy.title().should('contain','Demo Web Shop')
      cy.get('body').compareSnapshot('charan',0.2)
    })
  });
