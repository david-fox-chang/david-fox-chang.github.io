<template>
  <div class="week-1-wrapper">
    <h1>week-1</h1>
  </div>
</template>

<script>
export default {
  name: 'week-1',
};
</script>

<style lang="less">
@import '../styles/font-roboto.css';
@import '../styles/material-icons.css';
@import '../styles/background.less';
</style>

<script>

const week1HtmlSize = () => ['html']
  .forEach(name => document.querySelector(name).classList.toggle(`week-1-${name}`));

export default {
  name: 'week-1',
  beforeCreate: week1HtmlSize,
  beforeDestroy: week1HtmlSize,
};
</script>
