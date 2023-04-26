---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">如何动态渲染 Class</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

我们可以在 [Vue.js](https://cn.vuejs.org/) 中同时向元素添加静态和动态类：

```vue
<template>
  <ul>
    <li 
     v-for="item in lists"
     :key="item.id"
     class="always-here"
     :class="item.selected && 'selected'"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
```

这使我们可以通过静态类应用基本样式，然后根据需要动态添加其他样式。

当使用带有动态类的 `Object` 或 `Array` 时，我们也可以达到同样的目的：

```vue
<template>
  <ul>
    <li 
     v-for="item in lists"
     :key="item.id"
     class=""
     :class="{
       'always-here': true
       'selected': item.selected
     }"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
```

或者使用 `Array` :

```vue
<template>
  <ul>
    <li 
     v-for="item in lists"
     :key="item.id"
     class=""
     :class="[
       'always-here'
       item.selected && 'selected'
     ]"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
```

不过，我更喜欢将它们拆分为 class 和 :class 绑定，因为它使代码更清晰。

这也使得它在重构时不太可能被破坏！

有关更多信息，请参阅文档：https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes
