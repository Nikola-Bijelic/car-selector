<template>
  <div v-if="message" class="error">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin: 10px 0;
}
</style>