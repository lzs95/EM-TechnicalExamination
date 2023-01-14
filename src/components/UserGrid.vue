<template>
  <div class="user-grid">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search by name"
      class="search-input"
    />
    <!-- Loop through users -->
    <div v-for="user in filteredUsers" :key="user.id" class="user-profile">
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
      let searchLength = this.searchTerm.length;
      let search = this.searchTerm.toLowerCase();
      let users = this.users;

      if (!this.searchTerm) {
        return users;
      }
      return users.filter((user) => {
        let userName = user.name.toLowerCase().slice(0, searchLength);
        return userName.includes(search.toLowerCase());
      });
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
