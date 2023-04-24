---
authors:
  - name:  Elone Hoo
    gravatar: elonehoo
    twitter: '@elonehoo'
---

<h1 align="center" style="margin:0;">组合式的小技巧</h1>

<script setup>
import Author from '@theme/components/Author.vue'
import AuthorGrop from '@theme/components/AuthorGrop.vue'
import MouseListenerEvent from '@theme/components/vue/vue3/MouseListenerEvent.vue'
</script>

<AuthorGrop>
  <Author />
</AuthorGrop>

下面是一些我们在编写组合式 API 时可能会用到的小技巧。

1. 以最终目标为导向，先编写返回值。

> 一旦我们知道如何使用可组合项，填写实现细节就会变得更加容易。

2. 将选项对象用作参数。

> 这样可以轻松添加新参数，而不会破坏现有代码，并且我们不会再弄乱参数的顺序。

3. 保持组合式的小巧精悍。

拥抱 UNIX 哲学，确保每个可组合项只做一件事情，并且做得很好。

4. 命名一致性：使用 use、create、on_ 等。

5. 在任何异步逻辑之前，始终确保您的响应性已连接。

> 通过使用 null 的 ref，您可以在逻辑完成后更新这些值。
>
> 无需等待。

6. 如果我们的组合式中有很多效果，请使用 `effectScope` 将它们分组。

> 这样可以更轻松地清理您的响应性。
>
> 如果我们有大型对象，请改用 `shallowRef` ，以防止 Vue 递归地使整个对象响应。

当然，您需要使用 `triggerRef` 来触发它的任何响应效果，但这可以提高性能。

以下是使可以我们的组合式更加灵活的一些提示：

7. 如果我们正在使用 `watch，请使` `immediate` 和 `flush` 可配置。

8. 接受 `ref` 和基本值作为输入。

> 通过将变量通过 `ref` 传递，我们将重用现有的 `ref` 或创建一个新的 `ref`。

9. 如果我们在组合式中需要的是基本类型而不是 `ref` ，则可以使用 `unref` 来实现相同的效果。

有关更多信息，请参阅文档：https://cn.vuejs.org/guide/extras/composition-api-faq.html
