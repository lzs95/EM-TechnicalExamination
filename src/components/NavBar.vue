<template>
  <nav>
    <div class="search-bar">
      <SearchBar />
      <UserFilter />
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import UserFilter from "./UserFilter.vue";

export default {
  components: {
    SearchBar,
    UserFilter,
  },
  data() {
    return {};
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(215, 215, 215);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  margin: 5%;
}

@media (max-width: 600px) {
  .nav {
    height: 40px;
  }
}
</style>
