---
authors:
  - name:  Elone Hoo
    link: '@elonehoo'
    url: 'https://github.com/elonehoo'
---

<h1 align="center" style="margin:0;">reactive 的小技巧</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

在 [vue.js](https://cn.vuejs.org) 中，我们可以直接在响应式对象上添加计算属性和方法：

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const counter = reactive({
  count: 0,
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  }
})
</script>
```

这是因为 `this` 被设置为通过方法访问的对象，这恰好是响应式对象。

Vue 的响应性系统使用代理来监视属性何时被访问和更新。

如果我们有一系列计数器，我们可以一遍又一遍地重复使用这个方法：

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const listOfCounter = []

for(const i = 0; i < 10; i++){
  const counter = reactive({
    id:i,
    count: 0,
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  })
  listOfCounter.push(counter)
}
</script>
```

在我们的模板中，我们可以单独使用这些计数器：

```vue
<template>
  <div v-for="counter in listOfCounter" :key="counter.id">
    <button @click="counter.decrement()">-</button>
    {{ counter.count }}}
    <button @click="counter.increment()">+</button>
  </div>
</template>
```

我们也可以使用 ref 使我们的状态响应式，而不是使整个对象响应式：

```vue
<script setup lang="ts">
import { ref } from 'vue'

const counter = {
  count: ref(0),
  increment() {
    this.count.value++
  },
  decrement() {
    this.count.value--
  }
}
</script>
```

这样可以节省一些开销，虽然可能不会被注意到。

但这也感觉更好，因为我们更加深思熟虑地使用响应性，而不是到处都使用它。

这是我们之前的示例，但这次我将添加一个工厂函数，使其更易读：

```vue
<script setup lang="ts">
import {ref} from 'vue'

const createCounter = (i:number) =>{
  id:i,
  count: ref(0),
  increment() {
    this.count.value++
  },
  decrement() {
    this.count.value--
  }
}
</script>
```

当然，我们也可以使用之前的响应式方法来创建一个工厂方法。

有关更多信息，请参阅文档：https://cn.vuejs.org/api/reactivity-core.html#reactive
