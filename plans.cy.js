describe('set', function () {

    it('TC4', function () {
        cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top')
        cy.get('.et_pb_column_1 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_content_top').should('contain.text', '$0/month')
        cy.get('.et_pb_column_2 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_content_top').should('contain.text', '$80/month')
        cy.get('.et_pb_column_3 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_pricing_content_top').should('contain.text', '$900/month')
    })

    it('TC5', function () {
        cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top')
        cy.get('h1').should('have.css', 'font-family').and('match', /"Nunito Sans", Helvetica, Arial, Lucida, sans-serif/)
    })

    it('TC6', function () {
        cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top')
        cy.get('.et_pb_column_2 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_button_wrapper > .et_pb_button').should('have.class','et_pb_button et_pb_pricing_table_button')
    })

    it('tc07 url', function () {
        cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top')

        //javascript
        cy.url().then((currentUrl) => {
            if (currentUrl === 'https://ultimateqa.com/automation/fake-pricing-page/#top') {
                cy.log('La URL es correcta.');
            } else {
                cy.log('Url no esperada');
            }
        })
    })

})

