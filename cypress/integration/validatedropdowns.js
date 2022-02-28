describe('Validate Alerts', () => {

    it('Grab alert text in cypress',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('input#name').type("hello").type('{selectall}')
        cy.get('input#name').rightclick().type('{downarrow}').type('{downarrow}').type('{enter}')
        cy.get('input#name').type("hello").type('{selectall}')
        cy.get('input#name').type("hello").type('{selectall}')
        cy.get('input#name').type("hello").type('{selectall}')

        //,'{downarrow}','{downarrow}','{enter}')

        // cy.get('#alertbtn').click();
        // cy.on('window.alert',(alertstr)=>{

        //     expect(alertstr).equal('Hello , share this practice page and share your knowledge')
        // })

    })

    // it('',()=>{

    // })

    // it('',()=>{

    // })
});