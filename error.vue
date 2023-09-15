<template>
  <div class="hastech-404-area-list">
    <div class="hastech-404-content">
      <h2>{{ error.statusCode }}! Ooops.</h2>
      <h3>{{ error.message }}</h3>
    </div>
    <div class="error-heading">
      <h2>This page is not available</h2>
      <h3>
        We're sorry, but the Web address you've entered is no longer available.
      </h3>
    </div>

    <div class="error-back-home">
      <button @click.prevent="handleClearError">Go home...</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);
const handleClearError = () => {
  clearError({ redirect: "/" });
};
</script>

<style lang="scss">
.hastech-404-area-list {
  text-align: center;
  padding: 100px 0 30px;
  height: 100vh;
  background-image: url("https://i.pinimg.com/550x/47/cf/91/47cf91aaeaf4ad5e7d792a125a09697b.jpg");

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  h2 {
    font-size: 80px;
    font-weight: 600;
    color: #f65656;
  }
  .error-heading {
    h2 {
      color: #333;
      font-size: 28px;
      font-weight: normal;
      line-height: 34px;
      margin-bottom: 10px;
      margin-top: 18px;
      text-transform: uppercase;
    }
  }
}
.error-back-home {
  button {
    background-color: #333;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    padding: 9px 25px 6px;
    text-transform: uppercase;
    margin-left: 16px;
    text-decoration: none;
    transition: all linear 0.3s;
    &:hover {
      background-color: #f65656;
    }
  }
}
</style>
