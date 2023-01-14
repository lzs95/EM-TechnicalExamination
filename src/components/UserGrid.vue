<template>
  <h1>UserGrid</h1>
  <div class="user-grid">
    <UserProfile v-for="user in users" :key="user.id" :profile="user" />
  </div>
</template>

<script>
import UserProfile from "./UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch("testData.json")
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.user-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>
