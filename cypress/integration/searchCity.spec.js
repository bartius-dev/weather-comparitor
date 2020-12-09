/// <reference types="cypress" />
import cityCountry from '../fixtures/cityCountry.json'

const {tokyo, winnipeg} = cityCountry

context('Weather', () => {
    before(() => {
        cy.visit('/')
        cy.contains('Welcome!').should('be.visible')
    })

    describe('User can search for weather in a city', () => {
        it('should be possible to search the weather of a single city at a time', () => {
            cy.searchForCity(tokyo)
            cy.get('.city-name-cell').should('be.visible')
                .then((city) => {
                    const text = city.text()
                    expect(text).to.include(tokyo.city)
                })
        })

        it('should not add new row in table while searching for the city that was searched earlier', () => {
            //Note that the city we searched in above test is in the table already and we are searching again for the same city
            cy.searchForCity(tokyo)
            cy.waitForAnimationToFinish()
            cy.assertTableRowNumbers(1)
        })

        it('should add new row in the table when a new city is searched', () => {
            cy.searchForCity(winnipeg)
            cy.waitForAnimationToFinish()
            cy.assertTableRowNumbers(2)
        })
    })
})
