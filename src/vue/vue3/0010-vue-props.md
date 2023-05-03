---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;"> Vue组件参数的小提议</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

不要单独传递大量的属性到一个 [vue.js](https://cn.vuejs.org) 组件中：

```vue
<template>
  <User 
    :name="user.name"
    :profile="user.profile"
    :wechat="user.wechat"
    :local="user.local"
    :framework="user.framework === 'Vue' ? 'Nice' : 'Yes'"
  />
</template>
```

你可以将一个完整的对象作为组件的 props，自动绑定对象中的所有属性：

```vue
<template>
  <User v-bind="user"/>
</template>
```

如果你有很多事件处理函数，这也适用于 `v-on`：

```vue
<script setup lang="ts">
import { ref } from 'vue'

const user = ref({
  name: 'Elone Hoo',
  profile: 'elonehoo.png',
  wechat: 'elonehoo',
  local: 'https://elonehoo.me',
  framework:'Vue'
})
</script>
```

有关更多信息，请参阅文档：https://cn.vuejs.org/guide/components/props.html
