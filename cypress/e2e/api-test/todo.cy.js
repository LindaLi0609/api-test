describe('TODO api testing', () => {
    it('fetches Todo items - GET', () => {
        cy.request('/todos/').as('todoRequest');
        cy.get('@todoRequest').then(todos => {
            expect(todos.status).to.eq(200);
            assert.isArray(todos.body, 'Todos Response is an array')
        })
    });
    // write file
    it('test write file', () => {
        cy.request('get','/todos/').then((todos) => {
            
            cy.writeFile('cypress/fixtures/data.js', todos.body)
            cy.fixture('data').then((data) => {
                expect(data[0]).to.exist
            })
        // read file
        // cy.readFile('cypress/fixtures/data.js').then((obj)=>{
        //     cy.writeFile('cypress/fixtures/data1.js', obj)
        // })
        });
    })
})