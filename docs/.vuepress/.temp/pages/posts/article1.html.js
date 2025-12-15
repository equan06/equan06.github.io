import comp from "C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/posts/article1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article1.html\",\"title\":\"My first blog post\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2025-12-14T00:00:00.000Z\",\"category\":[\"Meta\"]},\"headers\":[],\"git\":{\"contributors\":[{\"name\":\"equan\",\"username\":\"equan\",\"email\":\"equan06@gmail.com\",\"commits\":2,\"url\":\"https://github.com/equan\"}],\"changelog\":[{\"hash\":\"a40112fd1b7f3a554d2bf06b7daa32a1d4c0025c\",\"time\":1765772238000,\"email\":\"equan06@gmail.com\",\"author\":\"equan\",\"message\":\"test3\"},{\"hash\":\"716c2bf662d5f8e39360680848571c9f7c0c8a9e\",\"time\":1765770821000,\"email\":\"equan06@gmail.com\",\"author\":\"equan\",\"message\":\"first commit\"}]},\"filePathRelative\":\"posts/article1.md\",\"excerpt\":\"\\n<p>Alright, I finally got off my ass to make a blog. I wanted to do this for a few reasons:</p>\\n<ul>\\n<li>I've always found it easier to communicate my thoughts in writing</li>\\n<li>I needed a space to organize my thoughts and share them with other people (as opposed to just writing them in my personal journal or keeping them locked up in my head)</li>\\n<li>I'm bored, so why not?</li>\\n</ul>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
