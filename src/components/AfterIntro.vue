<template>
  <div class="container flex md:flex-nowrap flex-wrap justify-between gap-10 mb-20">
    <div v-for="item,index in 2" :key="index" class="relative md:flex justify-around items-center bg-[#FBFBFB]">
      <div class="md:w-6/12 relative flex w-full md:block justify-center">
        <img class="md:absolute top-[-160px] md:m-0  " src="../../public/imagePos.png" alt="" />
      </div>
      <div class="md:text-end text-left md:pr-8 md:w-10/12 px-10 " >
        <h2 class="font-extrabold text-[24px] pt-8"  >SUMMER CACTUS</h2>
        <h2 class="font-extrabold text-[24px] pb-2"   >& SUCCULENTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          distinctio, porro ipsam necessitatibus quis enim!
        </p>
        <button
          class="mb-8 my-5 ease-linear font-bold rounded-[6px] bg-[#46A358] text-white px-8 py-2 hover:text-[#46A358] hover:bg-white"
        >
          Find more
        </button>
        <img class="absolute left-0 bottom-0" src="../../public/Ellipse.png" alt="some">
      </div>
    </div>
<!-- <div class="relative md:flex justify-around items-center bg-[#FBFBFB]">
      <div class="w-6/12 relative">
        <img class="absolute top-[-160px]" src="../../public/imagePos.png" alt="" />
      </div>
      <div class="text-end pr-8 w-10/12" >
        <h2 class="font-extrabold text-[24px] pt-8"  >SUMMER CACTUS</h2>
        <h2 class="font-extrabold text-[24px] pb-2"   >& SUCCULENTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          distinctio, porro ipsam necessitatibus quis enim!
        </p>
        <button
          class="mb-8 my-5 ease-linear font-bold rounded-[6px] bg-[#46A358] text-white px-8 py-2 hover:text-[#46A358] hover:bg-white"
        >
          Find more
        </button>
        <img class="absolute left-0 bottom-0" src="../../public/Ellipse.png" alt="some">
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
