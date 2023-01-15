const data = {
  tags: "posts",
  date: "Created"
}

if (process.env.NODE_ENV === "production") {
	data.date = "git Last Modified"
}

module.exports = data
