---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">自定义指令</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

在 [vue.js](https://cn.vuejs.org) 中，我们可以获得一堆内置指令，例如 v-for 和 v-if，但我们也可以构建自己的指令：

```vue
<template>
  <h1 v-bg-colour="skyblue">这个背景颜色是蓝色的</h1>
</template>

<script>
import { createApp } from 'vue'

const app = createApp({})

app.directive('bg-colour', {
  mounted(el,{value}) {
    // 更新背景的颜色
    el.style.backgroundColor = value
  }
})
</script>
```

（显然，这个简单的指令是荒谬的，因为我们只需使用 CSS）

我们还可以指定单个参数：

```vue
<template>
  <h1 v-bg-colour:color="'skyblue'">
    这个背景颜色是蓝色的
  </h1>
</template>

<script>
app.directive('bg-colour', {
  mounted(el,{ value, arg }) {
    // 更新背景的颜色
    el.style.backgroundColor = value
    console.log(arg) // colour
  }
})
</script>
```

不幸的是，如果我们想要多个参数，Vue 会将它们视为不同的指令：

```vue
<template>
  <h1
    v-bg-colour:color="'skyblue'"
    v-bg-colour:animate="'true'"
  >
    这个背景颜色是蓝色的
  </h1>
</template>
```

对我们来说，幸运的是，该值被评估为 JavaScript 表达式，因此我们可以传递一个选项对象：

```vue
<template>
  <h1 v-bg-colour="{
    colour: 'skyblue',
    animate: true
  }">这个背景颜色是蓝色的</h1>
</template>

<script>
import { createApp } from 'vue'

const app = createApp({})

app.directive('bg-colour', {
  mounted(el,{value}) {
    // 更新背景的颜色
    el.style.backgroundColor = value.colour
  }
})
</script>
```

使用自定义指令还有很多其他功能。

有关更多信息，请参阅文档：https://cn.vuejs.org/api/application.html#app-directive
