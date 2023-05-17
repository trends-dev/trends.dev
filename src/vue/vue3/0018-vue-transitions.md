---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">插槽内容的转换</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

在[vue.js](https://cn.vuejs.org)中，可以使用过渡来处理插槽内容，但是要使它们平稳运行的关键是：

```vue
<!-- SlotWithTransition.vue -->
<template>
  <transition name="fade" mode="out-in">
    <slot />
  </transition>
</template>
```

始终确保提供给插槽的内容是有键值的！

这可以帮助Vue跟踪何时触发过渡：

```vue
<template>
  <SlotWithTransition>
    <div v-if="isThisShow" key="true">
      This is true
    </div>
    <div v-else key="false">
      This is false
    </div>
  </SlotWithTransition>
</template>
```
