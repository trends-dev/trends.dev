---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    twitter: '@elonehoo'
---

<h1 align="center" style="margin:0;">鼠标监听事件</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

我们可以通过监听正确的事件来检测 [Vue.js](https://cn.vuejs.org/) 中的鼠标悬停：

```vue
<script setup lang="ts">
import { ref } from 'vue'

const hover = ref(false)
</script>
<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
  />
</template>
```

然后我们可以使用这个状态来改变背景的呈现方式，就像在这里做的那样：

<MouseListenerEvent />

根据用例，我们可以检查 [mouseout](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseout_event) 和 [mouseenter](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseenter_event) 事件。

它们冒泡以及与子元素交互的方式有一些微妙之处。
