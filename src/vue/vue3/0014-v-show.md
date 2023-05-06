---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;"> v-show 的小技巧</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

在 [vue.js](https://cn.vuejs.org) 组件中，有时使用 v-show 比使用 v-if 更具性能优势：

```vue
<ComplicatedChart v-show="chartEnabled" />
```

当 `v-if` 被切换开和关时，它会完全创建和销毁元素。

相反，`v-show` 将创建元素并将其保留在那里，通过将其样式设置为 `display: none` 来隐藏它。

如果您要切换的组件渲染成本很高，这样做可能会更有效率。

另一方面，如果您不需要立即使用该昂贵的组件，请使用 v-if，以便跳过渲染并使页面加载更快一些。

这对于 SEO 也很有帮助，因为我们可以为爬虫渲染内容，但不为用户渲染。

有关更多信息，请参阅文档：https://cn.vuejs.org/guide/essentials/conditional.html#v-show
