<template>
  <div class="blog__right-sidebar">
    <h2 class="blog__right-title">newsletter</h2>
    <div class="blog__right-email">
      <input type="email" placeholder="email@example.com" />
      <button>Subscribe</button>
    </div>
  </div>
  <div class="add_r_sidebar">
    <NuxtLink to="/" class="banner_block">
      <img
        src="https://file.hstatic.net/1000003969/file/5_4e8bbd11e68d4e08a72d2d9b4738f03b.jpg"
        alt=""
      />
    </NuxtLink>
  </div>
  <div class="add_r_sidebar">
    <NuxtLink to="/" class="banner_block">
      <img
        src="https://file.hstatic.net/1000003969/file/3_bdbb2eb57de648dabcdb98fb58fb360d.jpg"
        alt=""
      />
    </NuxtLink>
  </div>
  <div class="add_r_sidebar">
    <NuxtLink to="/" class="banner_block">
      <img
        src="https://file.hstatic.net/1000003969/file/1_bd94c2d5fef549f2ae4465bb6732fc0f.jpg"
        alt=""
      />
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
.blog__right-title {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    border-bottom: 0.5px solid #ccc;
    left: 0;
    top: 30px;
    width: 100%;
  }
  &::before {
    content: "";
    position: absolute;
    border-bottom: 3px solid #ccc;
    left: 0;
    top: 28px;
    width: 15%;
  }
}
.blog__right-email {
  input {
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    outline-color: #ff343b;
  }
  button {
    /* float: left; */
    display: flex;
    justify-content: left;
    align-items: flex-start;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0 0;
    background: #555;
    border: 0px;
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    transition: all linear 0.2s;
    /* clear: both; */
    &:hover {
      background: #ff343b;
    }
  }
}
.add_r_sidebar {
  margin-top: 16px;

  .banner_block {
    position: relative;
    top: 0;
    left: 0;
    cursor: default;
  }
  &:hover {
    .banner_block {
      cursor: pointer;
      top: -10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transition: all linear 0.3s;
    }
  }
}
</style>
