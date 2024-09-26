class LoginPage {

    elements = {

        getUsername:() => {
        return cy.get ('#email-field');
        },

        getPassword:() => {
            return cy.get('#password-field');
        },

        getSubmitButton:() => {
            return cy.get('#submitBtn');
        }
}


    enterUsername(username){
        this.elements.getUsername().type(username)
    }

    enterPassword(password){
        this.elements.getPassword().type(password)
    }

    submit(){
         this.elements.getSubmitButton().click();
    }

    visit() {
        cy.visit('https://playground.testingart.com/')
    }


}

export const loginPage = new(LoginPage);