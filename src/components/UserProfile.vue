<template>
  <div class="user-profile-card">
    <div class="user-profile-info">
      <div class="user-profile-img-container">
        <img
          :src="profile.picture"
          alt="Profile picture"
          class="user-profile-img"
        />
      </div>
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
.user-profile-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #748cab;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  z-index: 1;
}

.user-profile-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid rgb(160, 255, 149);
  cursor: pointer;
}

.user-profile-img-container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #f0ebd8;
  overflow: hidden;
  margin-right: 1rem;
}

.user-profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f0ebd8;
}

.user-profile-name {
  margin-top: 30px;
  font-weight: bold;
  margin-bottom: 0.5rem;
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
