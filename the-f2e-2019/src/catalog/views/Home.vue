<template>
  <div class="home">
    <img alt="Vue logo" src="@catalog/assets/logo.png">
    <h1 class="header">大衛就是小狐狸 - 精神時光屋 2019</h1>
    <div class="nav">
      <router-link
        v-for="({ path, name }, index) in routes"
        :to="path"
        :key="`home-nav-${index}`"
      >{{ getName(name) }}</router-link>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import routes from '@routes';

export default {
  name: 'home',
  data: () => ({
    routes,
  }),
  methods: {
    getName(name) {
      return name;
    },
  },
};
</script>
