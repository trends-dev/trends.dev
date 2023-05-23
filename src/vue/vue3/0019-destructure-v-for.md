---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">解构v-for</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

你知道我们可以在 [vue.js](https://cn.vuejs.org) 的 v-for 中解构吗？

```vue
<li v-for="{name, id} in users" :key="id">
  {{ name }}
</li>
```

更广为人知的是，我们可以使用这样的元组从 v-for 中获取索引：

```vue
<li v-for="(user, index) in users" :key="index">
  {{ index + 1 }} - {{ user.name }}
</li>
```

使用对象时，我们还可以抓取key：

```vue
<li v-for="(value,key) in {name:'EloneHoo',released:'2023'}">
{{ key }}: {{ value }}
</li>
```

也可以将这两种方法结合起来，获取键以及属性的索引：

```vue
<li v-for="(value,key,index) in {name:'EloneHoo',released:'2023'}">
#{{ index + 1 }}. {{ key }}: {{ value }}
</li>
```
