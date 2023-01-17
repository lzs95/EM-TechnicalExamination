<template>
  <div>
    <select class="filter-drop" v-model="sortOrder" @change="sortUsers">
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
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
      sortOrder: "asc",
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
};
</script>

<style>
.filter-drop {
  width: 150px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.filter-drop:focus {
  border: 2px solid rgb(125, 180, 229);
  outline: none;
}

@media (max-width: 600px) {
  .filter-drop {
    font-size: 14px;
    margin: 10px;
  }
}
</style>
