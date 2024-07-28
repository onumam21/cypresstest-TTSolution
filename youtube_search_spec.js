describe("YouTube Search and Play Test", () => {
  const keywords = require("../../keywords.json").keywords;

  keywords.forEach((keyword) => {
    it(`should search and play ${keyword}`, () => {
      cy.visit("https://www.youtube.com/");
      cy.get("input#search").type(`${keyword}{enter}`);
      cy.get("ytd-video-renderer", { timeout: 10000 }).should("be.visible");
      cy.get("ytd-video-renderer").first().click();
      cy.get("video.html5-main-video").should("have.attr", "src");
      cy.get('#button[aria-label="Guide"]').click();
      cy.contains("History").click();
      cy.contains(keyword).should("exist");
    });
  });
});
