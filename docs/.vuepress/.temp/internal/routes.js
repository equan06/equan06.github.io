export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/posts/article1.html", { loader: () => import(/* webpackChunkName: "posts_article1.html" */"C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/posts/article1.html.js"), meta: {"_blog":{"title":"My first blog post","author":"","date":"2025-12-14T00:00:00.000Z","category":["Meta"],"tag":[],"excerpt":"\n<p>Alright, I finally got off my ass to make a blog. I wanted to do this for a few reasons:</p>\n<ul>\n<li>I've always found it easier to communicate my thoughts in writing</li>\n<li>I needed a space to organize my thoughts and share them with other people (as opposed to just writing them in my personal journal or keeping them locked up in my head)</li>\n<li>I'm bored, so why not?</li>\n</ul>"},"title":"My first blog post"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/meta/", { loader: () => import(/* webpackChunkName: "category_meta_index.html" */"C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/category/meta/index.html.js"), meta: {"title":"Category Meta"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Writings"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"C:/Users/equan/equan-blog/equan-blog/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
