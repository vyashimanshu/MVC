Given ('I am Todo-MVC app page',function() {
    cy.visit('http://todomvc.com/examples/react/#/')
})

When ('I Type {string} on text field', (content) =>{
    cy.get('.new-todo').type(content)
    .type('{enter}')
})

Then ('I verify {string} Todo present on page', (content) =>{
    cy.get('.todo-list li label').should('contain',content)
})

When ('I mouse hover on List', function(){
    cy.get('.todo-list li').invoke('mouseover')
})

When('I clicked on {string} to update value to {string}',(todoValue,newTodoValue) =>{
    cy.contains(todoValue).dblclick()
    cy.wait(500)
    cy.get('.edit').clear()
    cy.wait(200)
    cy.get('.edit').type(newTodoValue)
    .type('{enter}')   
})

When ('I clicked on All filter', ()=>{
    cy.get('.filters > li:nth-child(1)').click()
})

When ('I clicked on Active filter', ()=>{
    cy.get('.filters > li:nth-child(3)').click()
})

When ('I clicked on Completed filter', ()=>{
    cy.get('.filters > li:nth-child(5)').click()
})

When ('I clicked on Clear filter', ()=>{
    cy.get('.clear-completed').click()
})


When('I click on checkbox of {string} ToDo',(ToDo) =>{
    cy.contains(ToDo).trigger('mouseover')
    cy.get('.todo-list li:nth-child(1) div:nth-child(1) input').click()
})

Then ('I verify {string} does not present on page', (ToDo) =>{
    cy.wait(200)
    cy.get('.edit').should('not.contain',ToDo)
})

Then ('I cannot see Clear filter text on page', ()=>{
    cy.wait(200)
    cy.get('.clear-completed').should('not.exist')
     
})
