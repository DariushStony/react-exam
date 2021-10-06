
describe("React-Exam", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("has home page", () => {
        cy.visit("http://localhost:3000/");

        cy.get("h2")
            .should("contain.text", "All Cards!");
    });

    it("has about-us page", () => {
        cy.visit("http://localhost:3000/about");
        cy.get(".about-us")
            .should("be.visible");
        cy.get(".about-us h2")
            .should("contain.text", "Dariush Hadipour");
    });

    it("has navbar in home page", () => {
        cy.get("nav")
            .should("be.visible")
            .within(() => {
                cy.get("h1")
                    .should("contain.text", "React Exam")
                cy.get("div.links")
                    .should("be.visible")
            });
    });

    it("has navbar in about-us page", () => {
        cy.visit("http://localhost:3000/about");
        cy.get("nav")
            .should("be.visible")
            .within(() => {
                cy.get("h1")
                    .should("contain.text", "React Exam")
                cy.get("div.links")
                    .should("be.visible")
            });
    });

    it("has cards list in home page", () => {
        cy.get("div.card-list")
            .should("be.visible")
    });

    it("has card in cards list", () => {
        cy.get("div.card-list div.card-preview")
            .should("have.length", 5)
            .each((item, index, list) => {
                cy.wrap(item)
                    .within(() => {
                        cy.get("a")
                            .should("be.visible")
                    });
            });
    });

    it("check cards page" , () => {
        for(let i = 1; i < 5; i++){
            cy.get(`a[href='/cards/${i}']`).click();
            cy.get(".card-details")
                .should("be.visible");
            cy.go("back");
        }
        
    });

    it("remove card", () => {
        cy.get(`a[href='/cards/1'] ~ p`)
            .within(()=>{
                cy.get("button").click();
            });
        cy.get("a[href='/cards/1']")
            .should("not.exist")
    });

});