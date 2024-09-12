describe('User loginlogout', () => {

    beforeEach( () =>{

        cy.visit('https://demowebshop.tricentis.com/')

        cy.get(".ico-login").click()

    })

    it('login functionality with valid credentials', ()=>{

      cy.get('#Email').type('allem488@gmail.com')

      cy.get('#Password').type('john123@')
   
      cy.get("input[value='Log in']").click()

      cy.contains('Welcome to our store').should('be.visible')

      cy.get("div[class='header-links'] a[class='account']").should('be.text','allem488@gmail.com')

      cy.get(".ico-logout").should('be.visible')


    })

    it('login functionality with invalid credentials', ()=>{

      cy.get('#Email').type('kohli123@gmail.com')

      cy.get('#Password').type('kohli123@')
   
      cy.get("input[value='Log in']").click()

      //while loging with unregistered email

      cy.contains("Login was unsuccessful. Please correct the errors and try again.").should('be.visible')

      cy.contains("No customer account found").should('be.visible')

      cy.wait(1000)


      //while typing wrong password

      cy.get(".ico-login").click()

      cy.get('#Email').type('allem488@gmail.com')

      cy.get('#Password').type('kohli123@')
   
      cy.get("input[value='Log in']").click()

      cy.contains("Login was unsuccessful. Please correct the errors and try again.").should('be.visible')

      cy.contains("The credentials provided are incorrect").should('be.visible')

    })

    
    it('logoutfunctionality ', ()=>{

     cy.get('#Email').type('allem488@gmail.com')

      cy.get('#Password').type('john123@')
   
      cy.get("input[value='Log in']").click()

      cy.get(".ico-logout").should('be.visible')

      cy.get('.ico-logout').click()






        


    })









})