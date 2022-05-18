describe("The Main Form", () => {
  it("loads successfully", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").should("be.visible");
    cy.contains("10").click();
    cy.contains("Send").click();
    cy.contains("Thank you");
    cy.screenshot();
  });
});
