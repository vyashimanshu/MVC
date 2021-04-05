Given ('I am Type-code app page',function() {
    cy.request('https://jsonplaceholder.typicode.com/')
})

When ('I am able to fetch All ToDo list using GET',()=>{
    cy.request('https://jsonplaceholder.typicode.com/todos').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
        expect(response.body[0].id).to.be.eq(1)
        expect(response.body[100].title).to.be.eq('explicabo enim cumque porro aperiam occaecati minima')
        
      })
})


When('I am able to create a ToDo list',()=>{
    cy.request('POST', 'https://jsonplaceholder.typicode.com/todos/', { id:201,userId: 240, title: 'Harry',completederId: true }).then(
                (response) => {
                  expect(response.body).to.have.property('title', 'Harry') 
                })
})

When('I am able to update a ToDo from list',()=>{
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/todos/2', {completederId: true }).then(
        (response) => {
            expect(response.status).to.be.eq(200)
            expect(response.body.completederId).to.be.true
        })  
})

When('I am able to delete a ToDo from list',()=>{
    cy.request('DELETE','https://jsonplaceholder.typicode.com/todos/1').then(response =>{
             expect(response.status).to.be.eq(200)
         })
})