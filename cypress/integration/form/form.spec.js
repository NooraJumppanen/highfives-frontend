describe("The Main Form", () => {
  it("loads successfully", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").should("be.visible");
    cy.contains("10").click();
    cy.contains("Send").click();
    cy.contains("Thank you");
    cy.screenshot();
    it("cy.getCookie() - get a browser cookie", () => {
      // https://on.cypress.io/getcookie
      cy.get("#getCookie .set-a-cookie").click();

      // cy.getCookie() yields a cookie object
      cy.getCookie("token").should("have.property", "values", "actions");
      cy.contains("you have alreay submitted");
    });
  });
});
