const data = {
  tags: "posts",
  date: "Created",
  path: "posts"
}

if (process.env.NODE_ENV === "production") {
	data.date = "git Last Modified"
}

module.exports = data
