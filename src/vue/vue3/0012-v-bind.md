---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;"> v-bind 的小技巧</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

在 [vue.js](https://cn.vuejs.org) 中，我们可以像在 `<template>` 块中一样在 `<style>` 块中使用响应式值：

```vue
<style scoped>
.btn{
  color: v-bind(buttonColors);
}
</style>
```

在幕后，Vue 使用针对每个组件的 CSS 计算属性（也称为 CSS 变量）。

CSS 保持静态不变，但是我们可以在响应式值更改时动态更新 CSS 变量。

有关更多信息，请参阅文档：https://cn.vuejs.org/api/sfc-css-features.html#v-bind-in-css
