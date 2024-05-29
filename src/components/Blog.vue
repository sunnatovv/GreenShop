<template>
  <div class="container">
    <h2 class="text-[#3D3D3D] text-[32px] text-center font-bold">
      Our Blog Posts
    </h2>
    <p class="text-[#727272] text-center font-normal pt-2">
      We are an online plant shop offering a wide range of cheap and trendy
      plants.
    </p>

    <div class="grid md:grid-cols-4 gap-20 mt-[35px] md:px-0 px-4">
        <OneGrid v-for="item in 4"/>
    </div>
  </div>
</template>

<script>
import OneGrid from './OneGrid.vue';
export default {
    components: {
        OneGrid
    }
};
</script>

<style lang="scss" scoped></style>
