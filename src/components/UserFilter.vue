<template>
  <div>
    <select class="filter-drop" v-model="sortOrder" @change="sortUsers">
      <option value="desc">Descending</option>
      <option value="asc">Ascending</option>
    </select>
  </div>
</template>

<script>
import { useUserStore } from "./store/store";

export default {
  setup() {
    const state = useUserStore();
    return { state };
  },
  data() {
    return {
      sortOrder: "desc",
    };
  },

  methods: {
    sortUsers() {
      if (this.sortOrder === "asc") {
        this.state.displayedUsers.sort((a, b) => a.bio.length - b.bio.length);
      } else {
        this.state.displayedUsers.sort((a, b) => b.bio.length - a.bio.length);
      }
    },
  },

  mounted() {
    this.sortUsers();
  },
};
</script>

<style>
.filter-drop {
  width: 150px;
  padding: 12px 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.filter-drop:focus {
  border: 2px solid rgb(125, 180, 229);
  outline: none;
}

@media (max-width: 768px) {
  .filter-drop {
    font-size: 14px;
  }
}
</style>
