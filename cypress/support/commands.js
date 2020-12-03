Cypress.Commands.add('waitForAnimationToFinish', () => {
    cy.wait(3000)
})

Cypress.Commands.add('searchForCity', ({city, country}) => {
    cy.get('#cityInput').clear().type(city)
    cy.get('input[placeholder="Country"]').clear().type(country)
    cy.get('#cityInput ~ button').click()
})

Cypress.Commands.add('searchForCityWithNoData', () => {
    cy.get('#cityInput')
    .clear()
    cy.get('input[placeholder="Country"]')
    .clear()
    cy.contains('Enter').click()
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
