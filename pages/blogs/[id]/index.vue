<script setup>
const { id } = useRoute().params;
const { data: BlogDetail, pending } = await useFetch(`/api/blogs/${id}`);
const cmt = reactive({
  id: Math.floor(Math.random() * 10000),
  name: "",
  content: "",
});
useHead({
  title: BlogDetail.description,
  meta: [{ property: "og:title", content: `${BlogDetail.text}` }],
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <NuxtLink to="/" class="blog__icon-text"
            ><i class="fa fa-home px-1"></i>home</NuxtLink
          >
          <NuxtLink to="/blogs" class="blog__icon-text blog__icon-text-detail"
            >news</NuxtLink
          >
          <span class="blog__icon-text-active">blog detail</span>
        </div>
      </div>

      <div class="col-lg-9">
        <div class="blog__router-detail">
          <img
            :src="BlogDetail.image"
            alt=""
            class="h-100 w-100"
            loading="lazy"
            style="object-fit: cover"
          />
        </div>
        <div class="blog-router-detail">
          <div class="blog_details_list">
            <div class="blog_details-icon">
              {{ FormatDate(BlogDetail.createdAt) }}
            </div>
          </div>
          <div class="blog_info-details">
            <h2>
              {{ BlogDetail.description }}
            </h2>

            <p>
              {{ BlogDetail.text }}
            </p>
          </div>
        </div>
        <div class="text-left">
          <h3>
            <span>{{ BlogDetail.comments.length }}</span> bình luận
          </h3>
        </div>

        <div v-for="(cmt, index) in BlogDetail.comments" :key="index">
          <div class="listComment mt-3">
            <div class="commentImg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbGozsS9QP10p16rZiCrQD0koXVkI4c7LwUHab9dkmFRcN0VqCkB37f2y0EnySItwykg&usqp=CAU"
                alt=""
              />
            </div>
            <div class="commentContent">
              <div class="commentContent_list">
                <p class="commentContent_name">{{ cmt.name }}</p>
                <p class="commentContent_cnt">{{ cmt.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="blog__detail-cmt">
          <h5>Thêm bình luận</h5>
          <div class="row">
            <div class="col-lg-12">
              <input
                type="text"
                placeholder="Name"
                class="blog__detail-text"
                v-model="cmt.name"
              />
            </div>
            <div class="col-lg-12">
              <textarea
                type="text"
                placeholder="Message"
                class="blog__detail-text blog__detail-text-2 mt-2"
                rows="4"
                cols="50"
                v-model="cmt.content"
              />
            </div>
          </div>
          <div class="blog__detail-link">
            <a href="" @click.prevent="postComment()">Đăng</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3 d-lg-block d-none">
        <SidebarBlog />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.blog__router-detail {
  width: 100%;
  height: 480px;
}
.blog__icon-text-detail::before {
  content: "";
  position: absolute;
  height: 10px;
  top: 22px;
  border-left: 1px solid #ff343b;
  left: 92px;
}
.blog_info-details {
  color: #222;
  h2 {
    text-align: left;
    font-size: 27px;
    margin: 0;
  }
  p {
    margin: 4px 0 8px 0;
    text-align: left;
    line-height: 1.6;
    text-indent: 20px;
    text-align: justify;
    white-space: normal;
  }
}
.listComment {
  display: flex;
  align-items: center;
  .commentImg {
    min-width: 45px;
    height: 45px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.commentContent {
  margin-left: 10px;
  background-color: #e9e9e9;
  border-radius: 8px;
  flex-grow: inherit;
  .commentContent_list {
    padding: 4px 12px;
    p {
      margin: 0;
      line-height: 18px;
      text-align: left;
      &:first-child {
        text-transform: capitalize;
        font-weight: 550;
      }
      &:last-child {
        width: 100%;
        word-break: break-word;
        margin-top: 4px;
      }
    }
  }
}
.blog__detail-cmt {
  margin-bottom: 20px;
  h5 {
    font-size: 20px;
    border-bottom: 1px solid #464646;
    padding: 10px 0px;
    margin-bottom: 16px;
    text-align: left;
  }
}
.blog__detail-text {
  border: 1px solid #ececec;
  height: 40px;
  line-height: 40px;
  margin-bottom: 11px;
  padding: 0 15px;
  width: 100%;
  outline: none;
  &:focus {
    background-color: rgb(250, 250, 240);
  }
}
.blog__detail-text-2 {
  height: 80px;
}
.blog__detail-link {
  text-align: left;
  padding: 10px 0;
  a {
    background: #ff343b;
    color: #fff;
    font-weight: bold;
    height: 43px;
    margin-bottom: 0;
    margin-top: 8px;
    transition: all 0.3s ease 0s;
    width: 120px;
    border: 0;
    padding: 10px 20px;
    border-radius: 4px;
  }
}
</style>
