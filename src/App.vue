<template>
  <!-- <h1>Hello World</h1> -->
  <div name="app-body">
    <NavBar />
    <UserGrid />
  </div>
</template>

<script>
import UserGrid from "./components/UserGrid.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
    UserGrid,
  },
};
</script>

<style>
.app-body {
  display: flex;
  flex-flow: column;
  width: 100%;
}
</style>
