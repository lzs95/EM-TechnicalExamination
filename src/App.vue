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
