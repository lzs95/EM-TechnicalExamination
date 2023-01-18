<template>
  <nav class="nav-bar">
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
.nav-bar {
  display: flex;
  align-items: center;
  height: 10%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(68, 75, 94);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin: 5%;
}

@media (max-width: 768px) {
  .nav-bar {
    display: flex;
    align-items: center;
    justify-items: center;
    height: 10%;
    width: 100%;
    margin-bottom: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
