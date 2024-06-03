<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Email from "../components/email.vue";
import Shop_location from "../components/Shop_root.vue";
import Shop_intro from "../components/Shop-intro.vue";
import Intro_text from "../components/intro-text.vue";
import Releted_prod from "../components/releted-prod.vue";
</script>
<template>
  <div>
    <Header />
    <Shop_location />
    <Shop_intro />
    <Intro_text />
    <Releted_prod />
    <!-- <Email /> -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
