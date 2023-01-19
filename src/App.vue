<template>
  <!-- <h1>Hello World</h1> -->
  <div class="app-body">
    <NavBar />
    <div class="grid-wrapper">
      <UserGrid />
    </div>
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

  mounted() {
    fetch("https://api.jsonbin.io/v3/b/63c8bfb7dfc68e59d5863aed/latest")
      .then(async (response) => {
        let result = await response.json();
        return result;
      })
      .then((data) => {
        this.state.setUsers(data.record);
        this.state.setDeafultUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #3e5c76;
}
.app-body {
  display: flex;
  flex-flow: column;
}

.grid-wrapper {
  margin-top: 13vh;
}
</style>
