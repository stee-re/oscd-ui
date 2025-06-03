module.exports = {
  async preRender(page) {
    await page.setViewportSize({ width: 1024, height: 768 });
  },
};
