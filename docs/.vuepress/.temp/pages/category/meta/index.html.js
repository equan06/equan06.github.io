import comp from "C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/category/meta/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/meta/\",\"title\":\"Category Meta\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category Meta\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Meta\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
