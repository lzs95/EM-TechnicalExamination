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
    >
      <UserProfile :profile="user" @click="openModal(user)" />
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.user-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

/* Responsive */
@media (max-width: 1000px) {
  .user-grid {
    display: grid;
    grid-template-columns: 50% 50%;
  }
}
@media (max-width: 768px) {
  .user-grid {
    display: flex;
    flex-direction: column;
    margin-top: calc(20% - 20px);
  }
  .user-profile {
    justify-content: center;
    align-items: center;
    width: 90%;
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
