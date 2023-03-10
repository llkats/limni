# Limni

A lake. Personal replacement for Twitter. A central place for me to dump thoughts, photos, shitposts, share other social media posts, and whatever else I want to use it for.

## Todos
### External features
- [ ] Host under llkats.com domain
- [ ] Pagination
- [ ] Permalinks and view for a single article
- [ ] Single image article type
- [ ] Multiple image article type
  - [ ] Image hosting??
- [ ] "Thread" view of articles (ie, "reply" to articles)
- [ ] Other post types
  - [ ] What if there were a little module in the left or right (or both) that had lists, like what I'm currently reading or playing, or even had this little todo list? Maybe with a folding mechanism.
- [ ] Publish RSS feed
- [ ] Tags? And view for articles by tag(?)
- [ ] Embed other social media posts
- [ ] Search
- [ ] Publish to other social media (Twitter, cohost, others?)

### Internal features
- [ ] In the article edit view, show specific fields based on post type (ie, only image articles would show an image upload widget)

### Bugs
- [ ] Remove extra empty `<p>` tags that are generated in `post` article types, it's mucking with the layout spacing
- [ ] Change times to Central time zone
- [ ] Fix timestamps again, they are lol

#### Fixed bugs
- [x] Fix post dates on deployed site. Tried changing to `git Last Modified` in a JS data file but that doesn't seem to have helped (or isn't working as intended)

## Color palette
From [coolors.co](https://coolors.co/palette/264653-2a9d8f-e9c46a-f4a261-e76f51)
- Dark green: `hsl(197, 37%, 24%)` `#264653`
- Green: `hsl(173, 58%, 39%)` `#2A9D8F`
- Yellow: `hsl(43, 74%, 66%)` `#E9C46A`
- Orange: `hsl(27, 87%, 67%)` `#F4A261`
- Dark orange: `hsl(12, 76%, 61%)` `#E76F51`

## Name ideas
This is important.

### Greek inspired
- Limni (λίμνι): Greek for "lake"
- Revma (ρεύμα): Greek for "stream"
- Rema (ρέμα): Greek for "stream"
- Ryaki (ρυάκι): Greek for "little river", "brook"
- Potamos (ποταμός): Greek for "river", "waterway", "stream"

### English
- Brook
- Creek
- Stream


## Brainstorming
### Ideas
Content in a stream, not really a blog. Must be easy to make posts, not just from a computer, but by mobile phone too. Build a web interface (idk so much work)? Post via Slack? CMS?

Should eventually contain the archive of my old tweets (see Darius Kazemi's [Twitter archive processor output for inspiration](https://tinysubversions.com/twitter-archive/make-your-own/)). Posts will be searchable. There will be an RSS feed and have meta snippets that look nice when links are shared in Slack.

Technology should be as close to plain fundamental web technologies as possible. Static site generation, as little JS as possible. No CSS preprocessor (How will it be to build a site from bottom-up with plain CSS in 2023? What are the best practices and how to keep it organized?). Semantic markup, HTML where possible. Accessibility core to site (alt text for all images, also alt text for ASCII or emoji art posts). No tracking. Responsive, minimal design.

### Random thoughts
Trying to not use too many new-to-me things, so since 11ty is new, it seems prudent to start off using a templating feature that 11ty uses by default. This appears to be Nunjucks, but WebC looks compelling, so I should check it out after I'm feeling a bit more comfortable with 11ty.

#### Basic post types
- Small text (tweet-length) with links
- Long text (with formatting?)
- Single image post
- Multiple-image posts

#### Extended post types
- media I consumed: book, video game, movie, etc.
- eBird list
- "RT"/"QT" tweets, mastodon posts, other social sites

### Features
- Store posts
  - Host? GitHub Pages, Netlify, other? How about images?
- Display posts
  - Stream view
  - Individual view with permalinks for individual posts
  - Dark mode and light mode
- Upload posts
  - Off the shelf CMS (Netlify CMS, or another headless CMS?) or hand-rolled? I probably don't want to spend time doing this.
- Publish RSS feed


## Links
### Blogs, tutorials, how-tos
#### Eleventy
- [Make your own simple, public, searchable Twitter archive](https://tinysubversions.com/twitter-archive/make-your-own/)
- [11ty: The Good, the Bad, and the... Possum?](https://www.aleksandrhovhannisyan.com/blog/eleventy-the-good-the-bad-and-the-possum/)
- [Build Eleventy Using Github Actions and Github Pages](https://avinash.com.np/2020/05/18/build-eleventy-using-github-actions-and-github-pages/)
- [Turn static HTML/CSS into a blog with CMS using the JAMStack](https://www.youtube.com/watch?v=4wD00RT6d-g) (YouTube)
- [Basic custom taxonomies with Eleventy](https://www.webstoemp.com/blog/basic-custom-taxonomies-with-eleventy/)
- [Using Webmentions in Eleventy](https://mxb.dev/blog/using-webmentions-on-static-sites/)
- [An In-Depth Tutorial of Webmentions + Eleventy](https://sia.codes/posts/webmentions-eleventy-in-depth/)
- [Itsiest, Bitsiest Eleventy Tutorial](https://sia.codes/posts/itsiest-bitsiest-eleventy-tutorial/)
- [11ty Recipes](https://11ty.recipes/)
- [Eleventy Walkthrough](https://rphunt.github.io/eleventy-walkthrough/template-files.html#collections)
- [Learn 11ty from Scratch](https://learneleventyfromscratch.com/) - outdated, still mostly good info and I appreciate the snowball structure of the lessons
- [Eleventy Custom Content Type Collections and Layouts](https://www.joshcanhelp.com/eleventy-custom-content-type-collections/)

#### Other
- [Using GitHub as a CMS](https://nuro.dev/blog/using_github_as_a_cms)
- [My Custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/)
- [You Don’t Need A UI Framework](https://www.smashingmagazine.com/2022/05/you-dont-need-ui-framework/)

### Tools
- [Eleventy](https://www.11ty.dev/)
- [Netlify CMS](https://www.netlifycms.org/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

### Starter Repos
- [Neat Starter](https://github.com/surjithctly/neat-starter) - GH starter repo with 11ty and Netlify CMS + JS/CSS frameworks
- [Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate) - GH starter repo, no JS/CSS frameworks
- [11ty-no-style-please](https://github.com/stopnoanime/11ty-no-style-please) - design 👀

### Etc
- [Shuttlecraft](https://shuttlecraft.net/) - kind of like what I'm building but with Fediverse (ActivityPub) integration (and meant for other people to spin up their own instances too)
