<template>
  <div>
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search by name"
      class="search-input"
    />
  </div>
</template>

<script>
import { useUserStore } from "./store/store";
import { ref } from "vue";

export default {
  setup() {
    const state = useUserStore();
    const searchTerm = ref("");
    return { state, searchTerm };
  },

  computed: {
    filteredUsersName() {
      let searchLength = this.searchTerm.length;
      let search = this.searchTerm.toLowerCase();
      let users = this.state.defaultUsers;
      if (!this.searchTerm) {
        return users;
      }
      return users.filter((user) => {
        let userName = user.name.toLowerCase().slice(0, searchLength);
        return userName.includes(search.toLowerCase());
      });
    },
  },

  watch: {
    searchTerm: {
      immediate: true,
      handler() {
        this.state.displayedUsers = this.filteredUsersName;
      },
    },
  },
};
</script>

<style>
.search-input {
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.search-input:focus {
  border: 2px solid rgb(125, 180, 229);
  outline: none;
}

@media (max-width: 768px) {
  .search-input {
    font-size: 14px;
  }
}
</style>
