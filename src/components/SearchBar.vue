<template>
  <div>
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search by name"
      class="search-input"
    />
    <!-- <button @click="sortByBioLength">Sort by Bio Length {{ sortOrder }}</button> -->
  </div>
</template>

<script>
import UserProfile from "./UserProfile.vue";
import { useUserStore } from "./store/store";
import { ref } from "vue";

export default {
  components: {
    UserProfile,
  },
  setup() {
    const state = useUserStore();
    const searchTerm = ref("");
    return { state, searchTerm };
  },

  data() {
    return {};
  },

  methods: {
    filteredUsers() {
      let searchLength = this.searchTerm.length;
      let search = this.searchTerm.toLowerCase();
      let users = this.state.defaultUsers;
      if (!this.searchTerm) {
        return this.state.defaultUsers;
      }
      return users.filter((user) => {
        let userName = user.name.toLowerCase().slice(0, searchLength);
        console.log(user);
        return userName.includes(search.toLowerCase());
      });
    },
  },

  //   methods: {
  //     sortByBioLength() {
  //       // Keep track of the number of clicks
  //       this.sortByBioClicks++;

  //       console.log(this.sortByBioClicks);

  //       if (this.sortByBioClicks === 1) {
  //         this.sortOrder = "asc";
  //         this.users = this.users.sort((a, b) => a.bio.length - b.bio.length);
  //       } else if (this.sortByBioClicks === 2) {
  //         this.sortOrder = "desc";
  //         this.users = this.users.sort((a, b) => b.bio.length - a.bio.length);
  //       } else {
  //         // On the third click, return the user arr to its default state
  //         this.sortOrder = "";
  //         this.sortByBioClicks = 0;
  //         this.users = [...this.defaultUsers];
  //       }
  //     },
  //   },

  watch: {
    searchTerm() {
      this.filteredUsers();
    },
  },
};
</script>

<style></style>
