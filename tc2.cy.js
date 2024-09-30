describe('set de pruebas tc 02',function(){  // describe == trabajo en set de pruebas 
    it('tc02', function(){ //palabra reservada para creacion de casos de prueba individuales
        cy.visit('https://angular-6-registration-login-example.stackblitz.io/register')
        cy.wait(4000)
        cy.get('button').click()
        cy.get(':nth-child(1) > .form-control').type('First')
        cy.get(':nth-child(2) > .form-control').type('Last')
        cy.get(':nth-child(3) > .form-control').type('Username')
        cy.get(':nth-child(4) > .form-control').type('Password')
        cy.get('.btn-primary').click()
        cy.get('.alert').should('contain.text','Registration successful') 
        cy.get(':nth-child(1) > .form-control').type('Username')
        cy.get(':nth-child(2) > .form-control').type('Password')
        cy.get('.btn-primary').click()
        cy.get('h1').should('contain.text','Hi First!') 

        cy.get('.text-danger').should('have.css', 'color', 'rgb(220, 53, 69)')
        cy.get('.text-danger').should('have.css', 'font-family').and('match', /-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"/)
        cy.title().should('eq','Angular 6 User Registration and Login Example')
        cy.url().should('eq','https://angular-6-registration-login-example.stackblitz.io/')
        

    }) 
})