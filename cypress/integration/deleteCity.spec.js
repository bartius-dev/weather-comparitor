/// <reference types="cypress" />
import cityCountry from '../fixtures/cityCountry.json'
const {tokyo, winnipeg, sydney} = cityCountry

context('Weather', () => {
    before(() => {
        cy.visit('/')
        cy.contains('Welcome!').should('be.visible')
    })

    describe('User can delete a city from the list', () => {
        it('should be possible to remove a city after adding one', () => {
            cy.searchForCity(tokyo)
            cy.get('.city-name-cell').should('be.visible')
            cy.waitForAnimationToFinish()
            cy.deleteCity(tokyo.name)
            cy.assertTableNotPresent()
        })

        it('should be possible to remove all city after adding multiple', () => {
            for (let city of [tokyo, winnipeg, sydney]) {
                cy.searchForCity(city)
                cy.waitForAnimationToFinish()
            }
            cy.assertTableRowNumbers(3)
            cy.deleteCity(tokyo.name)
            cy.assertTableRowNumbers(2)
            cy.deleteCity(winnipeg.name)
            cy.assertTableRowNumbers(1)
            cy.deleteCity(sydney.name)
            cy.assertTableNotPresent()
        })
    })
})
