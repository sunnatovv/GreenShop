<script setup>
import Header from "../components/Header.vue";
import Intro from "../components/Intro.vue";
import Intro2 from "../components/Intro2.vue";
import AfterIntro from "../components/AfterIntro.vue";
import Blog from "../components/Blog.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header />
  <Intro />
  <Intro2 />
  
  <div class="container flex justify-end gap-1 my-16">
    <button
    class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
    >
      1
    </button>
    <button
    class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
    >
    2
  </button>
  <button
  class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
    >
    3
  </button>
  <button
      class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
      >
      4
    </button>
    <button
    class="border rounded-[4px] border-[#E5E5E5] py-1 px-3 hover:bg-[#46A358] hover:text-white"
    >
    <img src="/down.png" alt="" />
  </button>
</div>

<AfterIntro />
<Blog />
<Footer />
<router-view />
</template>

<style scoped></style>
