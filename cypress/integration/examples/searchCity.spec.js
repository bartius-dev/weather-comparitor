/// <reference types="cypress" />
import cityCountry from '../../fixtures/cityCountry.json'
import invalidCityCountry from '../../fixtures/invalidCityCountry.json'

context('Weather', () => {
    before(() => {
        cy.visit('/')
        cy.contains('Welcome!').should('be.visible')
    })

    describe('User can search for weather in a city', () => {
        it('should be possible to search the weather of a single city at a time', () => {
            cy.searchForCity(cityCountry['1'].city,cityCountry['1'].country)
            cy.get('.city-name-cell').should('be.visible')
                .then(($city) => {
                    const text = $city.text()
                    expect(text).to.include(cityCountry['1'].city)
                })
        })

        it('should not add new row in table while searching for the city that was searched earlier', () => {
            //Note that the city we searched in above test is in the table already and we are searching again for the same city
            cy.searchForCity(cityCountry['1'].city,cityCountry['1'].country)
            cy.waitForAnimationToFinish()
            cy.assertTableRowNumbers(1)
        })

        it('should add new row in the table when a new city is searched', () => {
            cy.searchForCity(cityCountry['2'].city,cityCountry['2'].country)
            cy.waitForAnimationToFinish()
            cy.assertTableRowNumbers(2)
        })
    })
    describe('User search weather for invalid city and country', () => {
        it('should not add new row and should display error',()=>{
            cy.searchForCity(invalidCityCountry['2'].city,invalidCityCountry['2'].country)
            cy.waitForAnimationToFinish()
            cy.wrap(new Promise((resolve, reject) => {
                cy.on('window:alert', (txt) => {
                    try{
                        expect(txt).to.contains('Could not find that city & country combo');
                    }catch (err){
                        return reject(err)
                    }
                    resolve()
                })
            }))
        })
    })
})
