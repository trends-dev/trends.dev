<script setup lang="ts">
import {ref} from 'vue';

const hover = ref<boolean>(false)
</script>

<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="w-100px h-100px rounded-lg"
    :class="[ hover ? 'bg-green' : 'bg-sky']"
  />
</template>
