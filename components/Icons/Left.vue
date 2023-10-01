<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="wid"
    :height="hei"
    :viewBox="view"
  >
    <path
      fill="currentColor"
      d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "IcOutlineKeyboardArrowLeft",
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
