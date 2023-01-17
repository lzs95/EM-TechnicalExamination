<template>
  <div class="user-profile">
    <div class="user-profile-img-container">
      <img
        :src="profile.picture"
        alt="Profile picture"
        class="user-profile-img"
      />
    </div>
    <div class="user-profile-info">
      <h2 class="user-profile-name">{{ profile.name }}</h2>
      <p class="user-profile-bio">{{ truncateText(120) }}</p>
    </div>
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
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
}

.user-profile:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.user-profile-img-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid rgb(14, 14, 18);
  overflow: hidden;
  margin-right: 1rem;
}

.user-profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-profile-info {
  flex: 1;
}

.user-profile-name {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.user-profile-bio {
  color: gray;
}

@media (max-width: 768px) {
  .user-profile {
    flex-wrap: wrap;
  }
  .user-profile-img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  .user-profile-content {
    width: 100%;
  }
}
</style>
