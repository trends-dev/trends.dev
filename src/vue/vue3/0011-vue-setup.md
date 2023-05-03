---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">setup 小技巧</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

在 [vue.js](https://cn.vuejs.org) 中，使用 `<script setup>` 是推荐的方法，它可以减少很多样板代码。

不要写这样的代码：

```vue
<script>
import { ref, computed } from 'vue'

export define {
  setup(){
    const name = ref('')

    const isNamPresent = computed(() => {
      return name.value.length > 0
    })

    function submitName(){
      console.log(name.value)
    }

    return {
      name,
      isNamePresent,
      submitName
    }
  }
}
</script>
```

使用 `<script setup>` 后，代码变成了这样：

```vue
<script setup>
import { ref, computed } from 'vue'

const name = ref('')

const isNamPresent = computed(() => {
  return name.value.length > 0
})

function submitName(){
  console.log(name.value)
}
</script>
```

首先，我们在脚本标签中添加了单词“setup”，启用了这种编写 Vue 组件的新模式。

其次，我们将 setup 函数中的代码提取出来，并用它替换了我们现有的导出对象。

请注意，您在脚本标签中声明的所有内容都可以在组件模板中使用。

这包括组件、非响应式变量或常量，以及实用函数或其他库。

有关更多信息，请参阅文档：https://cn.vuejs.org/guide/extras/composition-api-faq.html
