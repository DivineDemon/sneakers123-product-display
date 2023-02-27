<template>
  <div class="home">
    <!-- Product Card -->
    <div class="bg-white">
      <BreadCrumbs />
      <ProductCard />
      <InfoTabs />
    </div>
    <!-- Sale Info -->
    <div class="bg-gray-300"></div>
  </div>
</template>

<script>
import InfoTabs from "@/components/InfoTabs.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "HomeView",
  components: {
    InfoTabs,
    BreadCrumbs,
    ProductCard,
  },
};
</script>
