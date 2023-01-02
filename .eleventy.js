module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('post', 'post.njk')
  eleventyConfig.addLayoutAlias('blog', 'blog.njk')

  eleventyConfig.addPassthroughCopy("./src/index.css")
  eleventyConfig.addPassthroughCopy("./src/admin/")

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
