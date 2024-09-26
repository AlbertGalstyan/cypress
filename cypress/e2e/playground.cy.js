import LoginPage, { loginPage } from "../POM/LoginPage"
import { homePage } from "../POM/HomePage"



describe('template spec', () => {
  before(() => {  
    loginPage.visit()
  })
  it.only('Login', () => {
    loginPage.enterUsername('testingart@email.com');
    loginPage.enterPassword('Testing!123');
    loginPage.submit();

    homePage.getHeaderElement().should('have.text', 'Welcome to Automation Testing Playground')
  })
})
