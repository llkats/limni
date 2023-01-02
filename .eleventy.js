module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/index.css");
  eleventyConfig.addPassthroughCopy("./admin");

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  }
}
