Given ('I am Type-code app page',function() {
    cy.request('https://jsonplaceholder.typicode.com/')
})

When ('I am able to fetch All ToDo list using GET {string}',(gi)=>{
    cy.request(`https://jsonplaceholder.typicode.com/todos/${gi}`).then((response) => {
        expect(response.status).to.eq(200)
        // expect(response.body).to.have.length(0)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
        expect(response.body.id).to.be.eq(1)
        expect(response.body.title).to.be.eq('delectus aut autem')
        
      })
})


When('I am able to create a ToDo list',()=>{
    cy.request('POST', 'https://jsonplaceholder.typicode.com/todos/', { id:201,userId: 240, title: 'Harry',completederId: true }).then(
                (response) => {
                  expect(response.body).to.have.property('title', 'Harry') 
                })
})

When('I am able to update a ToDo from list {string}',(cot)=>{
    cy.request('PUT', `https://jsonplaceholder.typicode.com/todos/${cot}`, {completederId: true }).then(
        (response) => {
            expect(response.status).to.be.eq(200)
            expect(response.body.completederId).to.be.true
        })  
})

When('I am able to delete a ToDo from list {string}',(del)=>{
    cy.request('DELETE',`https://jsonplaceholder.typicode.com/todos/${del}`).then(response =>{
             expect(response.status).to.be.eq(200)
         })
})