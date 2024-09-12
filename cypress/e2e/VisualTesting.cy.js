describe('Visual Testing', () => {
    beforeEach(() => {
    
      cy.visit('https://demowebshop.tricentis.com/login')

    });
  
    it('should match the login page design', () => {
    
      cy.get('body').compareSnapshot('charan',0.2)
    })
  
    
  });
