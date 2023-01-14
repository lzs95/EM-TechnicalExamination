<template>
  <div class="user-grid">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search by name"
      class="search-input"
    />
    <!-- Loop through users -->
    <div v-for="user in sortedUsers" :key="user.id" class="user-profile">
      <UserProfile :profile="user" />
    </div>
  </div>
</template>

<script>
import UserProfile from "./UserProfile.vue";
import { ref } from "vue";

export default {
  components: {
    UserProfile,
  },
  setup() {
    const searchTerm = ref("");
    return { searchTerm };
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

  computed: {
    filteredUsers() {
      if (!this.searchTerm) {
        return this.users;
      }
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },

    sortedUsers() {
      console.log(
        this.filteredUsers.sort((a, b) => a.name.localeCompare(b.name))
      );
      return this.filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
    },
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
