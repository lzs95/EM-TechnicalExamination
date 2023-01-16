<template>
  <div class="modal" v-show="isVisible" @click="close">
    <div class="modal-content">
      <img
        :src="user.picture"
        alt="Profile picture"
        class="profile-picture-modal"
      />
      <div class="modal-header">
        <h2 class="modal-title">{{ user.name }}</h2>
      </div>
      <!-- <UserDetails :user="user" /> -->
      <div class="modal-bio">
        <p>{{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetails from "./UserDetails.vue";
import { ref } from "vue";

export default {
  props: ["user"],

  components: {
    UserDetails,
  },

  data() {
    return {
      isVisible: ref(true),
    };
  },

  methods: {
    close() {
      this.isVisible = false;
      this.$emit("close");
    },
  },
};
</script>

<style>
.profile-picture-modal {
  display: flex;
  align-self: center;
  border-radius: 5%;
  box-shadow: 0px 0px 5px rgb(35, 35, 35);
  width: 30%;
  height: auto;
}

.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 100;
  overflow: hidden;
}

.modal-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  width: 70%;
  height: 50%;
  max-width: 600px;
  overflow: auto;
}

.modal-header {
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
}

.modal-title {
  font-size: 2em;
  font-weight: bold;
  margin: 0;
}

.modal-bio {
  overflow: hidden;
  max-height: 400px;
  overflow-y: auto;
}
</style>
