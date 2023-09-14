<script setup>
const { data: blogs, pending } = await useFetch("/api/blogs/get-all-blogs");
useHead({
  title: "Tin tức",
  meta: [{ name: "description", content: "Trang tin tức về Hope" }],
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-12">
        <div class="blog__icon-link">
          <NuxtLink to="/" class="blog__icon-text"
            ><i class="fa fa-home px-1"></i>home</NuxtLink
          >
          <span class="blog__icon-text-active">news</span>
        </div>
      </div>
      <div class="col-lg-3 d-lg-block d-none">
        <SidebarBlog />
      </div>
      <div class="col-lg-9 col-12">
        <div v-for="blog in blogs.Blog" :key="blog._id" class="single-blog">
          <NuxtLink :to="`/blogs/${blog._id}`">
            <img :src="blog.image" alt="" loading="lazy" />
          </NuxtLink>

          <div class="blog-router-detail">
            <div class="blog_details_list">
              <div class="blog_details-icon">
                {{ FormatDate(blog.createdAt) }}
              </div>
            </div>
            <NuxtLink :to="`/blogs/${blog._id}`" class="blog_info_details">
              <h2>
                {{ blog.description }}
              </h2>

              <p>
                {{ blog.text }}
              </p>

              <div class="blog-router-btn">
                <a class="readmore_link" title="Images">Đọc thêm</a>

                <a class="comments_link">
                  <span>{{ blog.comments.length }}</span> bình luận
                </a>
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCount > 1"
              :page-count="getPaginationCount"
              :page-range="2"
              :margin-pages="2"
              :click-handler="clickCallback"
              :prev-text="'←'"
              :next-text="'→'"
              :container-class="'pagination'"
              :page-class="'page-item'"
              :page-link-class="'page-link'"
              :prev-class="'page-item'"
              :prev-link-class="'page-link'"
              :next-class="'page-item'"
              :next-link-class="'page-link'"
              :hide-prev-next="true"
            >
            </paginate>
          </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.blog__icon-link {
  text-transform: uppercase;
  text-align: left;
  position: relative;
  padding: 20px 0 5px;
  font-size: 10px;
  margin-bottom: 30px;
  &::before {
    content: "";
    position: absolute;
    height: 10px;
    border-bottom: 0.5px solid #ccc;
    top: 32px;
    width: 100%;
  }
  .blog__icon-text {
    margin-right: 14px;
    cursor: pointer;
    color: black;
    text-decoration: none;
    transition: all linear 0.3s;
    &:hover {
      color: #ff343b;
      text-decoration: none;
    }
  }
  .blog__icon-text-active {
    color: #ff343b;
    &::before {
      content: "";
      position: absolute;
      height: 10px;
      top: 22px;
      border-left: 1px solid #ff343b;
      left: 46px;
    }
  }
}
.blog-router-detail {
  margin: 10px 0 20px 0;
  text-align: left;
}
.blog_info_details {
  color: #222;
  h2 {
    text-align: left;
    font-size: 27px;
    margin: 0;
    height: 32px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    transition: all linear 0.3s;
    &:hover {
      text-decoration: none;
      color: #ff343b;
    }
  }
  p {
    margin: 4px 0 8px 0;
    text-align: left;
    line-height: 1.6;
    height: 74px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-indent: 20px;
    text-align: justify;
    white-space: normal;
  }
}
.single-blog {
  img {
    transition: all linear 0.3s;
  }
  &:hover {
    img {
      filter: brightness(90%);
    }
  }
}
.blog-router-btn {
  display: flex;
  .readmore_link,
  .comments_link {
    border: 1px solid #a5a9ac;
    border-radius: 3px;
    padding: 8px 10px;
    color: #444;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s linear;
    margin: 0 4px;
    font-weight: 600;
    &:hover {
      background: #ff343b;
      border: 1px solid #ff343b;
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
