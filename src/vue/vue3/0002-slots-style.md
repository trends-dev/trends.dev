---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">插槽样式</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

如果我们想要将样式应用于 [Vue.js](https://cn.vuejs.org/) 组件中的插槽内容，可以使用 `:slotted` 伪选择器。例如：

```vue
<style scoped>
  :slotted(p) {
    margin: 15px 5px;
  }
</style>
```

此外，还可以使用 :global 将样式应用于全局范围，即使在 `<style scoped>` 块内。例如：

```vue
<style scoped>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
```

如果需要添加很多全局样式，则添加第二个 `<style>` 块可能更容易。例如：

```vue
<style scoped>
  :slotted(p) {
    margin: 15px 5px;
   }
</style>

<style>
   body {
     margin:0;
     padding:0; 
   } 
 </style> 
```

有关更多信息，请参阅文档：https://cn.vuejs.org/api/sfc-css-features.html
