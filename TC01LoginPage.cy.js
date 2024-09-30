describe('set',function(){ 
    
    it('TC1', function(){
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('.subheader').should('contain.text','Welcome to the Secure Area. When you are done click logout below.') 
        cy.get('.button').click()
        cy.get('#flash').should('contain.text','You logged out of the secure area!') 
    }) 

    it('TC2 InvalidUser', function(){
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('´Pedrin')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').should('contain.text',' Your username is invalid!')
    }) 

    it('TC3 InvalidPassword', function(){
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('123!')
        cy.get('.radius').click()
        cy.get('#flash').should('contain.text','Your password is invalid!')
    }) 

})