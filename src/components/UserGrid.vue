<template>
  <div>
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search by name"
      class="search-input"
    />
    <button @click="sortByBioLength">Sort by Bio Length {{ sortOrder }}</button>
  </div>
  <div class="user-grid">
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
      defaultUserOrder: [],
      sortOrder: "asc",
      toggleCounter: 0,
    };
  },

  created() {
    this.defaultUsers = this.users;
    fetch("testData.json")
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
        this.defaultUsers = [...this.users];
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

  methods: {
    sortByBioLength() {
      // Keep track of the number of clicks
      this.sortByBioClicks++;

      if (this.sortByBioClicks === 1) {
        this.sortOrder = "asc";
        this.users = this.users.sort((a, b) => a.bio.length - b.bio.length);
      } else if (this.sortByBioClicks === 2) {
        this.sortOrder = "desc";
        this.users = this.users.sort((a, b) => b.bio.length - a.bio.length);
      } else {
        // On the third click, return the user arr to its default state
        this.sortOrder = "";
        this.sortByBioClicks = 0;
        this.users = [...this.defaultUsers];
      }
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
