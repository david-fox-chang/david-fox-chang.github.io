<template>
  <div class="home">
    <img alt="Vue logo" src="@catalog/assets/logo.png">
    <h1 class="header">大衛就是小狐狸 - 精神時光屋 2019</h1>
    <div class="nav">
      <router-link
        v-for="({ name, text }, index) in $router.options.routes"
        :to="{ name }"
        :key="`home-nav-${index}`"
      >{{ getName(text) }}</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    getName(name) {
      return name;
    },
  },
};
</script>
