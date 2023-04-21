---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    twitter: '@elonehoo'
---

<h1 align="center" style="margin:0;">制作一个 v-for 组件</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

我们决定看看是否可以仅使用模板在 [Vue.js](https://cn.vuejs.org) 中制作一个 v-for 组件。

在此过程中，我们还可以发现如何递归地使用`slot`。

这是组件的样子：

```vue
<!-- VFor.vue -->
<template>
  <div>
    {{ list[0] }}
    <v-for :list="list.slice(1)" v-if="list.length > 1">
  </div>
</template>
```

如果你想用作用域插槽来做到这一点,为什么不尝试一下呢？！而且只需进行一些调整：

```vue
<template>
  <div>
    <!-- 将 item 放入插槽中进行渲染。 -->
    <slot v-bind:item="list[0]">
      <!-- 默认值 -->
      {{ list[0] }}
    </slot>

    <v-for :list="list.slice(1)" v-if="list.length > 1">
      <!-- 递归传递作用域插槽 -->
      <template v-slot="{{ item }}" >
        <slot v-bind:item="item" />
      </template>
    </v-for>
  </div>
</template>
```

以下是该组件的使用方式：

```vue
<template>
  <div>
    <v-for :list="list" />

    <v-for :list="list">
      <template v-slot="{ item }">
        <strong>{{ item }}</strong>
      </template>
    </v-for>
  </div>
</template>
```
