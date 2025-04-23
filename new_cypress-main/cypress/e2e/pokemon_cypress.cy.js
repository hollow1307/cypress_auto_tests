import * as login_page from "../locators/pokemon_login_page.json";
import * as data from "../helpers/pokemon_data.json"
import * as money from "../locators/pokemon_money_page.json"

describe('Pokemon Battle Avatar Purchase Test', function () {

  it('Тест на покупку доступного аватара для тренера', function () {
    cy.visit('https://pokemonbattle.ru/login');
    cy.get (login_page.login).type(data.login);
    cy.get (login_page.password).type(data.password);
    cy.get (login_page.button).click();
    cy.get ('.header_card_trainer').click();
    cy.get ('.k_mobile > :nth-child(5)').click();
    cy.get ('.available > button').first().click();
    cy.get (money.card).type(data.card);
    cy.get (money.period).type(data.period);
    cy.get (money.code).type(data.code);
    cy.get (money.name).type(data.name)
    cy.get (money.button).click();
    cy.get (money.sms_code).type(data.sms_code);
    cy.get (money.button).click();
    cy.contains (money.text).should('be.visible')
  })
})