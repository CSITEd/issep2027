<script setup>
import { useData } from 'vitepress'

// Small callback to the home page hero: same photo, on every page except
// the home page itself (which already has the full-size hero).
const { frontmatter, page } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== 'home'" class="page-banner">
    <h1 class="page-banner-title">{{ page.title }}</h1>
  </div>
</template>
