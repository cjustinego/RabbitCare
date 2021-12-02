class RabbitCarePage {
    constructor() {

    }

    // Locators
    getProductText() {
        return cy.contains('Which product are you looking for?')
    }
    getPersonalAccident() {
        return cy.contains('Personal Accident')
    }
    getMedicalExpenses() {
        return cy.contains('Medical expenses')
    }
    getNextButton() {
        return cy.get(':nth-child(3) > :nth-child(2) > .col-12 > .btn');
    }
    getSecondNextButton() {
        return cy.get('#customer_dob > :nth-child(2) > .col-12 > .btn');
    }
    getBirthTextfield() {
        return cy.get('#customer_dob > .form-group > .row > :nth-child(2) > .form-control');
    }
    getNationalityDropdown() {
        return cy.get('#customer_nationality > :nth-child(2) > .form-control');
    }
    getPhoneNumber() {
        return cy.get('[data-testid="phone-input"]');
    }
    getThirdNextButton() {
        return cy.get('#customer_phone > :nth-child(2) > .col-12 > .btn');
    }
    getFirstNameTextfield() {
        return cy.get('#customer_first_name > .row > :nth-child(2) > .form-control');
    }
    getLastNameTextfield() {
        return cy.get('#customer_last_name > .row > :nth-child(2) > .form-control');
    }
    getFourthNextButton() {
        return cy.get(':nth-child(3) > .col-12 > .btn');
    }
    getEmailTextfield() {
        return cy.get('[data-testid="email-input"]');
    }
    getFifthNextButton() {
        return cy.get('#customer_email > :nth-child(2) > .col-12 > .btn');
    }
    getGender = (gender) => {
        return cy.contains(gender)
    }
    getGender = (gender) => {
        return cy.contains(gender)
    }
    getConsent = (consent) => {
        return cy.contains(consent)
    }
    getShowQuotesButton() {
        return cy.get('#btn-marketing-consent');
    }


    clickPersonalAccident = () => {
        this.getPersonalAccident()
            .should('be.visible')
            .click()
        return this;
    }
    clickMedicalExpenses = () => {
        this.getMedicalExpenses()
            .should('be.visible')
            .click()
        return this;
    }
    clickNextButton = () => {
        this.getNextButton()
            .should('be.visible')
            .click()
        return this;
    }
    clickSecondNextButton = () => {
        this.getSecondNextButton()
            .should('be.visible')
            .click()
        return this;
    }
    inputBirthdate = (date) => {
        this.getBirthTextfield()
            .should('be.visible')
            .type(date)
        return this;
    }
    selectNationality = (nationality) => {
        this.getNationalityDropdown()
            .should('be.visible')
            .select(nationality)
        return this;
    }
    inputPhoneNumber = (number) => {
        this.getPhoneNumber()
            .should('be.visible')
            .type(number)
        return this;
    }
    clickThirdNextButton = () => {
        this.getThirdNextButton()
            .should('be.visible')
            .click()
        return this;
    }
    inputFirstName = (name) => {
        this.getFirstNameTextfield()
            .should('be.visible')
            .type(name)
        return this;
    }
    inputLastName = (name) => {
        this.getLastNameTextfield()
            .should('be.visible')
            .type(name)
        return this;
    }
    clickFourthNextButton = () => {
        this.getFourthNextButton()
            .should('be.visible')
            .click()
        return this;
    }
    inputEmail = (email) => {
        this.getEmailTextfield()
            .should('be.visible')
            .type(email)
        return this;
    }
    clickFifthNextButton = () => {
        this.getFifthNextButton()
            .should('be.visible')
            .click()
        return this;
    }
    selectGender = (gender) => {
        this.getGender(gender)
            .should('be.visible')
            .click()
        return this;
    }
    selectConsent = (consent) => {
        this.getConsent(consent)
            .should('be.visible')
            .click()
        return this;
    }
    clickShowQuotesButton = () => {
        this.getShowQuotesButton()
            .should('be.visible')
            .click()
        return this;
    }
}



export default RabbitCarePage