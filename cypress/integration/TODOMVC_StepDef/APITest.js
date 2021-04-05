/// <reference types="cypress" />
describe("API test of entering data in Todo MVC app", () =>{

    it('Fetch data from list ',function(){  
        cy.request('https://jsonplaceholder.typicode.com/todos').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
            expect(response.body[0].id).to.be.eq(1)
            expect(response.body[100].title).to.be.eq('explicabo enim cumque porro aperiam occaecati minima')
            
          })
    })

    it('Post data to list ',function(){  
            cy.request('POST', 'https://jsonplaceholder.typicode.com/todos/', { id:201,userId: 240, title: 'HJanes',completederId: true }).then(
                (response) => {
                  expect(response.body).to.have.property('title', 'HJanes') 
                })
          })
     it('Delete a data from Todo list',function(){
         cy.request('DELETE','https://jsonplaceholder.typicode.com/todos/1').then(response =>{
             expect(response.status).to.be.eq(200)
         })
     })
    })
