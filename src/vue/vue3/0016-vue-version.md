---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">vue版本</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

你知道吗，你可以在运行时轻松检查 [vue.js](https://cn.vuejs.org) 的版本？

```ts
import { version } from 'vue'

if( version.split('.')[0] === '2' ){
  console.log('哦，这个应用程序要崩溃了。')
  console.log('升级到Vue 3！')
}
```

