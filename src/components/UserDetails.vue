<template>
  <div class="user-details">
    <img :src="user.picture" alt="Profile picture" class="profile-picture" />
    <h2>{{ user.name }}</h2>
    <p>{{ user.bio }}</p>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>
