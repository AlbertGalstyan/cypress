class HomePage{

    elements = {
        title:() => {
        return cy.get('h1')
    }
}

getHeaderElement(){
    return this.elements.title()
}

}
export const homePage = new HomePage();