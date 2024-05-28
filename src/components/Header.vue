<script setup>
import { ref } from "vue";
const isActive = ref(false);
const close = ref(false);

const modal = () => {
  close.value = true;
};
</script>
<template>
  <div class="container">
    <div class="flex justify-between items-center py-8 border-b">
      <div class="flex items-center gap-2">
        <img src="../../public/Vector (5).png" alt="" />
        <p class="text-[#46A358] font-bold">GREENSHOP</p>
      </div>
      <div class="flex justify-between items-center gap-20">
        <a
          href="#"
          class="font-normal text-[#3D3D3D] hover:text-green-700 hover:font-bold duration-300 hover:border-b-2"
          >Home</a
        >
        <a
          href="#"
          class="text-[#3D3D3D] hover:text-green-700 hover:font-bold duration-300 hover:border-b-2"
          >Shop</a
        >
        <a
          href="#"
          class="text-[#3D3D3D] hover:text-green-700 hover:font-bold duration-300 hover:border-b-2"
          >Plant Care</a
        >
        <a
          href="#"
          class="font-normal text-[#3D3D3D] hover:text-green-700 hover:font-bold duration-300 hover:border-b-2"
          >Blogs</a
        >
      </div>
      <div class="flex justify-between items-center gap-6">
        <img src="../../public/loop.png" alt="" />
        <div class="relative pr-2">
          <img src="../../public/korzina.png" alt="" />
          <div
            class="font-serif absolute px-[5px] border-[3px] rounded-full text-[#fff] bg-[#46A358] text-[10px] top-[-4px] right-[-2px]"
          >
            6
          </div>
        </div>
        <button
          class="bg-[#46A358] flex items-center gap-2 px-5 py-2 rounded-[6px]" @click="modal"
        >
          <img src="../../public/Logout.png" alt="" />
          <span class="Login text-[#fff]" >Login</span>
        </button>
      </div>
    </div>
    <div
      @click="close = false"
      :class="{ hidden: !close }"
      class="z-10 bg-black/55 fixed inset-0"
    ></div>
    <div
      :class="{ hidden: !close }"
      class="fixed z-20 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-white px-3"
    >
      <button
        @click="close = false"
        class="text-[30px] w-[100%] text-end font-medium"
      >
        &times;
      </button>
      <div
        class="flex flex-wrap items-center justify-center divide-[#999] mt-[10px]"
      >
        <button
          :class="{ 'text-[#46A358]': !isActive }"
          class="font-medium text-2xl text-center w-[94px]"
          @click="isActive = false"
        >
          Login
        </button>
        <button
          :class="{ 'text-[#46A358]': isActive }"
          class="font-medium text-2xl text-center w-[120px]"
          @click="isActive = true"
        >
          Register
        </button>

        <div v-if="!isActive" class="flex flex-wrap">
          <p class="mt-[50px] text-center text-[#3D3D3D] text-[13px] w-[100%]">
            Enter your username and password to login.
          </p>

          <input
            placeholder="Login"
            type="text"
            name=""
            id=""
            class="px-[14px] py-[10px] border border-[#46A358] placeholder:text-[#A5A5A5] rounded-md mx-auto w-[60%] mt-[30px]"
          />
          <input
            placeholder="Password"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] border border-[#46A358] placeholder:text-[#A5A5A5] rounded-md mx-auto w-[60%] mt-[30px]"
          />
          <a
            href="mailto:youremail@example.com"
            class="mt-[14px] text-[#46A358] leading-[14px] w-[60%] text-right mx-auto cursor-pointer"
          >
            Forgot Password?
          </a>

          <button
            class="px-[100px] py-[14px] text-[16px] font-medium text-[#fff] border rounded-md bg-[#46A358] mt-[27px] w-[60%] mx-auto"
          >
            Login
          </button>

          <p class="my-[10px] text-[13px] w-[60%] mx-auto text-center relative">
            <svg
              class="items-center absolute ml-10 size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <path
                fill="#ffc107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
              />
              <path
                fill="#ff3d00"
                d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
              />
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
              />
              <path
                fill="#1976d2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
              />
            </svg>
            Login with Google
          </p>
          <p class="mt-[10px] text-[13px] w-[60%] mx-auto text-center relative">
            <svg class="absolute items-center size-6 ml-10"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 128 128"
            >
              <rect
                width="118.35"
                height="118.35"
                x="4.83"
                y="4.83"
                fill="#3d5a98"
                rx="6.53"
                ry="6.53"
              />
              <path
                fill="#fff"
                d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
              />
            </svg>
            Login with Facebook
          </p>
        </div>

        <div v-else class="flex flex-wrap">
          <p class="mt-[20px] text-center text-[#3D3D3D] text-[13px] w-[100%]">
            Enter your username and password to login.
          </p>
          <input
            placeholder="Username"
            type="text"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[60%] mt-[14px]"
          />
          <input
            placeholder="Email"
            type="email"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[60%] mt-4"
          />
          <input
            placeholder="Password"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[60%] mt-4"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[60%] mt-4"
          />
          <button
            class="px-[100px] py-[14px] text-[16px] font-medium text-[#fff] text-center border rounded-md bg-[#46A358] mt-[27px] w-[60%] mx-auto"
          >
            Register
          </button>
      
          <p class="mt-[20px] text-[13px] w-[60%] mx-auto text-center relative">
            <svg
              class="items-center absolute ml-10 size-6"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <path
                fill="#ffc107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
              />
              <path
                fill="#ff3d00"
                d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
              />
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
              />
              <path
                fill="#1976d2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
              />
            </svg>
            Register with Google
          </p>
          <p class="mt-[20px] text-[13px] w-[60%] mx-auto text-center">
            <svg class="absolute items-center size-6 ml-10"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 128 128"
            >
              <rect
                width="118.35"
                height="118.35"
                x="4.83"
                y="4.83"
                fill="#3d5a98"
                rx="6.53"
                ry="6.53"
              />
              <path
                fill="#fff"
                d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
              />
            </svg>
            
            Register with Facebook
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu,
.icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}

.menu {
  display: flex;
  gap: 50px;
  color: #3d3d3d;
  border: 3px solid transparent;
}

.a {
  transition: all 0.1s;
}

.a:hover {
  font-weight: 900;
  border-bottom: 3px solid #46a358;
}

</style>
