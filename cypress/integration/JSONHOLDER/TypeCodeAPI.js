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