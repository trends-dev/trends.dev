<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()

console.log(frontmatter.value.authors)
</script>

<template>
  <div class="flex justify-around items-center">
    <dl v-for="item in frontmatter.authors" class="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 dark:xl:border-slate-200/5">
      <dt class="sr-only">Authors</dt>
      <dd>
        <ul
          style="list-style: none;"
          class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"
        >
          <li style="list-style: none;" class="flex items-center space-x-2">
              <img
                v-if="item.gravatar"
                :src="'https://github.com/' + item.gravatar + '.png'"
                alt="author image"
                class="w-10 h-10 rounded-full"
              />
              <img
                v-else-if="item.avatar"
                :src="item.avatar"
                alt="author image"
                class="w-10 h-10 rounded-full"
              />
              <dl class="text-sm font-medium leading-5 whitespace-nowrap">
                <dt class="sr-only">Name</dt>
                <dd class="text-gray-900 dark:text-white">{{ item.name }}</dd>
                <dt v-if="item.twitter" class="sr-only">Twitter</dt>
                <dd v-if="item.twitter">
                  <a
                    :href="'https://twitter.com/' + item.twitter"
                    target="_blank"
                    rel="noopnener noreferrer"
                    class="link"
                    >{{ item.twitter }}</a
                  >
                </dd>
              </dl>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>
