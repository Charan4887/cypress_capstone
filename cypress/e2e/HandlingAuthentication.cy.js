describe('Authentication login using token', () => {
    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/login')
    });

    it('  Authenticate  login', () => {
 
        const initialEmail = 'allem488@gmail.com'
        const initialPassword = 'john123@'

        cy.window().then((win) => {
            const token = { email: initialEmail, password: initialPassword }
            win.localStorage.setItem('Token', JSON.stringify(token))
        });
     
        cy.login(initialEmail , initialPassword)
        
       cy.visit('https://demowebshop.tricentis.com/login')

        cy.window().then((win) => {
            const token = JSON.parse(win.localStorage.getItem('Token'))

            if (token && token.email && token.password) {
                cy.login(token.email, token.password)
            } else {
                throw new Error('Credentials not found in local storage.')
            }
        });

        
        cy.get('.account').should('contain.text', 'allem488@gmail.com')
        cy.get('.ico-logout').should('contain', 'Log out').click()


    })
});
