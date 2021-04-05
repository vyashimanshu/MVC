Feature: To perform CRUD activity on ToDo-MVC App

    Feature Description: To create ToDo List

    Scenario: User is able to create a ToDo-List
        Given I am Todo-MVC app page
        When I Type "Cypress" on text field
        When I mouse hover on List
        Then I verify "Cypress" Todo present on page

    Scenario: User is able to edit created Todo-List
        Given I am Todo-MVC app page
        When I Type "Rest-Assured" on text field
        When I mouse hover on List
        Then I verify "Rest-Assured" Todo present on page
        When I clicked on "Rest-Assured" to update value to "Selenium"
        Then I verify "Selenium" Todo present on page

    Scenario: User is able to click on All created ToDo-List
        Given I am Todo-MVC app page
        When I Type "Test-complete" on text field
        When I Type "JIRA" on text field
        When I clicked on All filter
        Then I verify "Test-complete" Todo present on page
        Then I verify "JIRA" Todo present on page

    Scenario: User is able to see only Active ToDo list
        Given I am Todo-MVC app page
        When I Type "Java" on text field
        When I Type "JavaScript" on text field
        When I click on checkbox of "Java" ToDo
        When I clicked on Active filter
        Then I verify "JavaScript" Todo present on page
        Then I verify "Java" does not present on page

    Scenario: User is able to see only Completed ToDo list
        Given I am Todo-MVC app page
        When I Type "UI Automation" on text field
        When I Type "API Automation" on text field
        When I click on checkbox of "UI Automation" ToDo
        When I clicked on Completed filter
        Then I verify "UI Automation" Todo present on page
        Then I verify "API Automation" does not present on page

        Scenario: User is able to Clear a ToDo  from list
        Given I am Todo-MVC app page
        When I Type "Postman" on text field
        When I click on checkbox of "Postman" ToDo
        When I clicked on Clear filter
        Then I cannot see Clear filter text on page





