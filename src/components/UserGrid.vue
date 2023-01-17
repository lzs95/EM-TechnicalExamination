<template>
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
    <div
      v-for="user in this.state.displayedUsers"
      :key="user.id"
      class="user-profile"
      @click="openModal(user)"
    >
      <UserProfile :profile="user" />
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
      userDetails: null,
      sortOrder: "",
      sortByBioClicks: 0,
    };
  },

  methods: {
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  justify-content: space-between;
  margin-top: 5%;
}

.user-profile {
  width: 30%;
  margin: 10px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .user-profile {
    width: calc(
      50% - 20px
    ); /* take up 1/2 of the available space on smaller screens */
  }
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
