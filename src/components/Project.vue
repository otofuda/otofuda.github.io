<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

interface Project {
  title: string,
  repository: string,
  url: string,
};

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true
  },
})
</script>

<template>
  <a
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
    class="project"
  >
    <div class="project__title">{{ project.title }}</div>
    <div class="project__repository">{{ project.repository }}</div>
    <div class="project__url">{{ project.url }}</div>
  </a>
</template>

<style lang="scss" scoped>
.project {
  display: block;
  text-decoration: none;
  color: #333333;
  padding: 32px;
  border-radius: 16px;

  &:hover {
    background: #f0f0f0;
    .project__title {
      text-decoration: underline;
    }
  }

  &__title {
    font-size: 24px;
    margin-bottom: 8px;
  }

  &__repository,
  &__url {
    color: #909090;
    margin-bottom: 8px;
  }
}
</style>
