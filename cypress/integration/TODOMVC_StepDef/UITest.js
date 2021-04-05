
describe("UI test of entering data in Todo MVC app", function(){



    it('Enter two values in text field ',function(){
        cy.visit('http://todomvc.com/examples/react/#/')
        cy.get('.new-todo').type('Hey{enter}')
          cy.get('.new-todo')
          .type('Hello{enter}')
          })

          it('Update value of Todo ',function(){
            cy.get('.todo-list li:nth-child(1) div:nth-child(1)').dblclick()
            cy.get('input[value="Hey"]').clear()
            cy.get('input[value="Hey"]').type('Harry{enter}')
              })

        it("User is able to view all active/inactive list by clicking on All",()=>{
            cy.get('.filters > li:nth-child(1)').click()
            cy.get('.todo-list li:nth-child(1) div:nth-child(1)').should('contain','Harry')
            cy.get('.todo-list li label').should('contain','Hello')
        })

        it("User is able to check and verify if a todo-list is check/unchecked",()=>{
            cy.get('.todo-list li:nth-child(1) div:nth-child(1) input').trigger('mouseover')
            cy.wait(500)
            cy.get('.todo-list li:nth-child(1) div:nth-child(1) input').click().should('be.checked')
            cy.get('.todo-list li:nth-child(2) div:nth-child(1) input').should('not.be.checked')
        })
      
        it("User is able to click on Active and verify list",()=>{
            cy.get('.filters > li:nth-child(3)').click()
            cy.get('.todo-list li:nth-child(1) div:nth-child(1)').should('contain','Hello')
        })

        it("User is able to click on Completed and verify list",()=>{
            cy.get('.filters > li:nth-child(5)').click()
            cy.get('.todo-list li:nth-child(1) div:nth-child(1)').should('contain','Harry')
        })

        it("Removed list should not be visible on GUI",()=>{
            cy.get('.filters > li:nth-child(1)').click()
            cy.get('.clear-completed').click()
            cy.get('.todo-list li:nth-child(1) div:nth-child(1)').should('not.contain','Harry')
            cy.get('.todo-list li:nth-child(1) div:nth-child(1)').should('contain','Hello')
        })

})
