import comp from "C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"features\":[{\"title\":\"Mountaineer\",\"details\":\"I hike and climb various non-technical peaks in the Sierra Nevadas (CA). My favorite peaks so far are Mt. Ritter, Mt. Conness, and Mt. Whitney.\"},{\"title\":\"Weightlifter\",\"details\":\"I train the sport of Olympic Weightlifting, which focuses on two exercises, the snatch and clean & jerk.\"},{\"title\":\"Data Nerd\",\"details\":\"I have a background in statistics and write software on a daily basis, so I like to think about data and how modern technology impacts society.\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
