<template>
  <!-- <div>
     <input
      v-model="searchTerm"
      type="text"
      placeholder="Search by name"
      class="search-input"
    />
    <button @click="sortByBioLength">Sort by Bio Length {{ sortOrder }}</button>   
  </div> -->
  <Transition name="fade">
    <Modal
      v-if="userDetails"
      :user="userDetails"
      ref="modal"
      @close="closeModal"
    />
  </Transition>
  <div class="user-grid">
    <!-- Loop through users -->
    <div v-for="user in users" :key="user.id" class="user-profile">
      <UserProfile :profile="user" />
      <button @click="openModal(user)">View Details</button>
    </div>
  </div>
</template>

<script>
import UserProfile from "./UserProfile.vue";
import { useUserStore } from "./store/store";
import Modal from "./Modal.vue";

export default {
  components: {
    UserProfile,
    Modal,
  },
  setup() {
    const state = useUserStore();
    return { state };
  },

  data() {
    return {
      users: [],
      userDetails: null,
      defaultUserOrder: [],
      sortOrder: "",
      sortByBioClicks: 0,
    };
  },

  mounted() {
    fetch("testData.json")
      .then((response) => response.json())
      .then((data) => {
        this.users = this.state.setUsers(data);
        this.state.displayStuff;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // computed: {
  //   filteredUsers() {
  //     let searchLength = this.searchTerm.length;
  //     let search = this.searchTerm.toLowerCase();
  //     let users = this.users;

  //     if (!this.searchTerm) {
  //       return users;
  //     }
  //     return users.filter((user) => {
  //       let userName = user.name.toLowerCase().slice(0, searchLength);
  //       return userName.includes(search.toLowerCase());
  //     });
  //   },
  // },

  methods: {
    // sortByBioLength() {
    //   // Keep track of the number of clicks
    //   this.sortByBioClicks++;

    //   console.log(this.sortByBioClicks);

    //   if (this.sortByBioClicks === 1) {
    //     this.sortOrder = "asc";
    //     this.users = this.users.sort((a, b) => a.bio.length - b.bio.length);
    //   } else if (this.sortByBioClicks === 2) {
    //     this.sortOrder = "desc";
    //     this.users = this.users.sort((a, b) => b.bio.length - a.bio.length);
    //   } else {
    //     // On the third click, return the user arr to its default state
    //     this.sortOrder = "";
    //     this.sortByBioClicks = 0;
    //     this.users = [...this.defaultUsers];
    //   }
    // },

    openModal(user) {
      this.userDetails = user;
    },
    closeModal() {
      this.userDetails = null;
    },
  },
};
</script>

<style scoped>
.user-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding-top: 10%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
