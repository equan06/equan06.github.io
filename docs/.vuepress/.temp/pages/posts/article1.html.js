import comp from "C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/posts/article1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article1.html\",\"title\":\"My first blog post\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"12-14-2025\",\"category\":[\"Meta\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/article1.md\",\"excerpt\":\"\\n<p>Alright, I finally got off my ass to make a blog. I wanted to do this for a few reasons:</p>\\n<ul>\\n<li>I've always found it easier to communicate my thoughts in writing</li>\\n<li>I needed a space to organize my thoughts and share them with other people (as opposed to just writing them in my personal journal or keeping them locked up in my head)</li>\\n<li>I'm bored, so why not?</li>\\n</ul>\"}")
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
