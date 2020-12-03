Cypress.Commands.add('waitForAnimationToFinish', () => {
    cy.wait(3000)
})

Cypress.Commands.add('searchForCity', ({name, country}) => {
    cy.get('#cityInput').clear().type(name)
    cy.get('input[placeholder="Country"]').type(country)
    cy.get('#cityInput ~ button').click()
})

Cypress.Commands.add('assertTableRowNumbers', (expectedNumber) => {
    cy.get('table')
        .find('tr')
        .its('length')
        .should('eq',expectedNumber)
})

Cypress.Commands.add('assertTableNotPresent', () => {
    cy.get('table').should('not.exist')
})

Cypress.Commands.add('deleteCity', (city) => {
    cy.get('.city-name-cell')
        .contains(city)
        .click()
})