describe('env testing', () => {
    it('test different env', () => {
        cy.request(Cypress.env().google).as('search');
        cy.get('@search').then((response) => {
            expect(response.status).to.eq(200)
        })
    });

})