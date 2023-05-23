---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">配置项的模板</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

我喜欢使用的一个技巧来简化我的 [vue.js](https://cn.vuejs.org) 模板是使它们变成配置驱动的。

而不是编写像这样重复自己的模板：

```vue
<template>
  <div>
    <MenuItem @click="openContact">
      Open Contact
    </MenuItem>
    <MenuItem @click="createContact">
      Create Contact
    </MenuItem>
    <MenuItem @click="sendEmail">
      Send Email
    </MenuItem>
    <MenuItem @click="resetSystem" danger>
      Reset System
    </MenuItem>
  </div>
</template>
```

我们可以重构模板，使用配置来驱动它：

```vue
<template>
  <div>
    <MenuItem 
     v-for="item in items"
     :key="item.text"
     :danger="item.danger"
     @click="item.action">
      {{ item.text }}
    </MenuItem>
  </div>
</template>
```
