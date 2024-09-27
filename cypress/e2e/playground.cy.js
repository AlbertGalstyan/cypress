import LoginPage, { loginPage } from "../POM/loginPage/LoginPage"
import { homePage } from "../POM/homePage/HomePage"



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
