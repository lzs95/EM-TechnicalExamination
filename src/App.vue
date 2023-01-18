<template>
  <!-- <h1>Hello World</h1> -->
  <div class="app-body">
    <NavBar />
    <UserGrid />
  </div>
</template>

<script>
import UserGrid from "./components/UserGrid.vue";
import NavBar from "./components/NavBar.vue";
import { useUserStore } from "./components/store/store";

export default {
  components: {
    NavBar,
    UserGrid,
  },
  setup() {
    const state = useUserStore();
    return { state };
  },

  async mounted() {
    await fetch("testData.json")
      .then((response) => response.json())
      .then((data) => {
        this.state.setUsers(data);
        this.state.setDeafultUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.app-body {
  display: flex;
  flex-flow: column;
  margin-top: 5%;
  width: 100%;
}
</style>
