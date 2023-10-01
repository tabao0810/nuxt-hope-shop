<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="wid"
    :height="hei"
    :viewBox="view"
  >
    <path
      fill="currentColor"
      d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "IcOutlineKeyboardArrowRight",
  props: {
    wid: {
      type: String,
    },
    hei: {
      type: String,
    },
    view: {
      type: String,
      default: "0 0 22 22",
    },
  },
};
</script>
