describe('User registration',()=>{


    function randomemail() {
        const timestamp = Date.now(); 
        return `rohit${timestamp}@example.com`;
      }

    beforeEach( () =>{

        cy.visit('https://demowebshop.tricentis.com/')

    })

    it('registration with valid inputs', ()=>{

        const user=randomemail()

        cy.get('.ico-register').click()

        cy.get('#gender-male').check()

        cy.get('#FirstName').type('rohit')

        cy.get('#LastName').type('sharma')

        cy.get('#Email').type(user)

        cy.get('#Password').type('rohitsharma123@')

        cy.get('#ConfirmPassword').type('rohitsharma123@')

        cy.get('#register-button').click()
        
        //successful registration
        cy.url('https://demowebshop.tricentis.com/registerresult/1').should('contain','registerresult')
        
        cy.get('.result').should('contain.text','Your registration completed')

        cy.get("div[class='header-links'] a[class='account']").should('be.text',user)

        cy.get(".ico-logout").should('be.visible')


    })

    it('registration with invalid inputs', () => {
    
        cy.get('.ico-register').click()
    
        cy.get('#gender-male').check()
    
        cy.get('#Email').type('invalidEmail@mail')
    
        cy.get('#Password').type('ert')
    
        cy.get('#ConfirmPassword').type('rrs');
    
        cy.get('#register-button').click();
    
        // Verify error messages
        cy.contains('First name is required').should('be.visible');

        cy.contains('Last name is required').should('be.visible');

        cy.contains('Wrong email').should('be.visible');

        cy.contains('The password should have at least 6 characters.').should('be.visible');

        cy.contains('The password and confirmation password do not match.').should('be.visible');
      });

})