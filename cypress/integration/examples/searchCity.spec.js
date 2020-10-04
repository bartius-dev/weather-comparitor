/// <reference types="cypress" />
import cityCountry from '../../fixtures/cityCountry.json'

context('Weather', () => {
    before(() => {
        cy.visit('/')
        cy.contains('Welcome!').should('be.visible')
    })

    describe('User can search for weather in a city', () => {
        it('should be possible to search the weather of a single city at a time', () => {
            cy.get('#cityInput').type(cityCountry.city)
            cy.get('input[placeholder="Country"]').type(cityCountry.country)
            cy.get('button.svelte-mhoz42').click()
            cy.get('.city-name-cell').should('be.visible')
                .then(($city) => {
                    const text = $city.text()
                    expect(text).to.include(cityCountry.city)
                })
        })
    })
})
