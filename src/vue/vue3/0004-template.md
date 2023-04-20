---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    twitter: '@elonehoo'
---

<h1 align="center" style="margin:0;">使用 Template</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

模板标签可用于 [Vue.js](https://cn.vuejs.org) 模板内的任何位置，以更好地组织代码。

我喜欢用它来简化 v-if 逻辑，有时也用它来简化 v-for。

在这个例子中，我们有几个元素都使用相同的 v-if 条件：

```vue
<template> 
  <div class="card">
    <img src="imgPath" />
    <h3> 
      {{ title }} 
    </h3>
    <h4 v-if="expanded"> 
      {{ subheading }} 
    </h4> 
    <div v-if=" expanded" class="card-content">
      <slot />
    </div>
    <SocialShare v-if="expanded" /> 
  </div>
</template>
```

将这些元素显示和隐藏在一起有点笨拙，而且一开始并不明显。

但是，在更大、更复杂的组件上，这可能会变成一场灾难性的噩梦！

但我们可以轻松的解决这个问题。

> 我们可以使用模板标签来对这些元素进行分组。
> 
> 然后将 v-if 提升到模板标签本身：

```vue
<template>
  <div class="card">
    <img src="imgPath" />
    <h3> 
      {{ title }} 
    </h3>
    <template v-if="expanded">
      <h4> 
        {{ subheading }} 
      </h4> 
      <div class="card-content">
        <slot />
      </div>
      <SocialShare /> 
    </template>
  </div>
</template>
```

现在我们有了更容易阅读的东西。

并且一目了然地了解正在发生的事情要容易得多！
