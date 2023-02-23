<template>
  <div id="app" class="overflow-x-hidden">
    <NavBar />
    <FeedBack />
    <router-view />
    <ProductCard />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FeedBack from "./components/FeedBack.vue";
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FeedBack,
    ProductCard,
  },
};
</script>
