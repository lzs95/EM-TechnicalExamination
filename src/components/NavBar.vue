<template>
  <nav>
    <div class="search-bar">
      <SearchBar />
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  components: {
    SearchBar,
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
  width: 100%; /* this makes the navbar cover the whole width of the page */
  position: fixed; /* this keeps the navbar fixed at the top of the page */
  top: 0; /* this positions the navbar at the top of the page */
  left: 0; /* this positions the navbar at the left of the page */
  background-color: rgb(215, 215, 215);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  margin: 5%;
}
</style>
