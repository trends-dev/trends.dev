---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">vue Devtools 的小技巧</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

你知道吗，[vue.js](https://cn.vuejs.org) 允许我们进行性能跟踪，以帮助我们调试任何性能问题？

```ts
import { createApp } from 'vue'

const app = createApp({})
```

一旦我们这样做了，我们就可以使用官方的 Vue Devtools 来调试我们的应用程序性能。

有关更多信息，请参阅文档：https://devtools.vuejs.org/
