import RabbitCarePageObjects from "../../page_objects/RabbitCarePageObjects";

describe("Personal > Medical Expenses Insurance", () => {
    it("Verify insurance plans are displayed for Medical Expenses ", () => {
        const rabbitCare = new RabbitCarePageObjects();

        cy.visit('https://staging-finance.rabbitinternet.com/en/product/health-insurance/questions')

        rabbitCare.getProductText()
        rabbitCare.clickPersonalAccident()
        rabbitCare.clickMedicalExpenses()
        rabbitCare.clickNextButton()
        rabbitCare.inputBirthdate('31/05/1995')
        rabbitCare.clickSecondNextButton()
        rabbitCare.selectNationality('Philippines')
        rabbitCare.inputPhoneNumber('0999999999')
        rabbitCare.clickThirdNextButton()
        rabbitCare.inputFirstName('Charles')
        rabbitCare.inputLastName('Go')
        rabbitCare.clickFourthNextButton()
        rabbitCare.inputEmail('chgo@gmail.com')
        rabbitCare.clickFifthNextButton()
        rabbitCare.selectGender('Male')
        rabbitCare.selectConsent('No consent')
        rabbitCare.clickShowQuotesButton();
    });
})

