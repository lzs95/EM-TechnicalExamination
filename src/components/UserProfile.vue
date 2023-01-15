<template>
  <div class="user-profile" @click="viewDetails(profile)">
    <img :src="profile.picture" alt="Profile picture" class="profile-picture" />
    <h2>{{ profile.name }}</h2>
    <p>{{ truncateText(30) }}</p>
  </div>
</template>

<script>
export default {
  props: ["profile"],

  methods: {
    truncateText(length) {
      let truncatedText = this.profile.bio.substring(0, length);
      let lastIndex = truncatedText.lastIndexOf(" ");
      return truncatedText.substring(0, lastIndex) + "...";
    },

    viewDetails(user) {
      this.$emit("view-details", user);
    },
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
