<script setup lang="ts">
import projects from './assets/projects'
import Project from './components/Project.vue'
</script>

<template>
  <img
    class="logo"
    alt="Otofuda OSS"
    src="https://avatars.githubusercontent.com/u/66667646"
  />
  <h1>
    <a href="https://github.com/otofuda">
      OTOFUDA Open Source Projects
    </a>
  </h1>

  <Project
    v-for="project in projects"
    :key="`proj_${project.title}`"
    :project="project"
  />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  margin: 40px 32px 0;

  .logo {
    width: 200px;
    height: 200px;
    border-radius: 32px;
    border: 12px solid #ffffff;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, .2);
    margin-bottom: 0;
    margin-bottom: 64px;
  }

  h1 {
    margin: 0;
    margin-bottom: 32px;
    > a {
      color: #333333;
    }
  }
}
</style>
