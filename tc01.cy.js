describe('set de pruebas de cypress',function(){  // describe == trabajo en set de pruebas
    it('tc01 banner validation', function(){ //palabra reservada para creacion de casos de prueba
        cy.visit('http://zero.webappsecurity.com')
        cy.get('.active > img').should('be.visible') //Assert
        cy.get('#searchTerm').should('be.visible')
        cy.get('#online_banking_features > :nth-child(1) > h4').should('contain.text','Online Banking')
        cy.get('#signin_button').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(2)
        cy.get('#tf_toAccountId').select(4)
        cy.get('#tf_amount').type('500')
        cy.get('#tf_description').type('Transfer from savings account to credit account')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('be.visible')
    }) 
})