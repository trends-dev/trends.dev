---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    twitter: '@elonehoo'
---

<h1 align="center" style="margin:0;">使用 shallowRef</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

我们可以使用 [shallowRef](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref) 优化 [Vue.js](https://cn.vuejs.org/) 应用程序中的反应性：

```vue
<script setup lang="ts">
const user = shallowRef({
  name: 'Elone Hoo',
  friends:[
    {
      name: 'Fenta',
      friends:[
        // ...
      ]
    },
    {
      name:'Luna',
      friends:[
        // ...
      ]
    }
  ]
})
</script>
```

Reactivity _only_ 在 ref 本身的值改变时触发：

```vue
<script setup lang="ts">
// 触发响应式更新
user.value = matthew
</script>
```

但是修改任何嵌套属性都不会触发任何东西：

```vue
<script setup lang="ts">
// 不会触发响应式更新
user.value.name = 'Hoo Elone'
</script>
```

向大型对象添加深度反应性可能会消耗大量性能，因此这对于节省一些 CPU 周期很有用。

如果有必要，我们还可以手动触发反应式更新：

```vue
<script setup lang="ts">

// 每当用户更改时记录它
watchEffect(Q => console.log(user));

// 更新嵌套状态（不会发生日志记录）
user.value.name = 'Elone Hoo';

// 强制触发响应式更新
triggerRef(user); 

// [用户对象]
</script>
```

有关更多信息，请参阅文档：https://cn.vuejs.org/api/reactivity-advanced.html#shallowref
