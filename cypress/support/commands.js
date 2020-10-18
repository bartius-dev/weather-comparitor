Cypress.Commands.add('waitForAnimationToFinish', () => {
    cy.wait(3000)
})

Cypress.Commands.add('searchForCity', (city, country) => {
    cy.get('#cityInput').type(city)
    cy.get('input[placeholder="Country"]').type(country)
    cy.get('#cityInput ~ button').click()
})

Cypress.Commands.add('assertTableRowNumbers', (expectedNumber) => {
    cy.get('table')
        .find('tr')
        .its('length')
        .should('eq',expectedNumber)
})
