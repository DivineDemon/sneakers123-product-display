<template>
  <div id="home" class="bg-gray-100">
    <!-- Product Card -->
    <div class="bg-white">
      <BreadCrumbs />
      <ProductCard />
      <InfoTabs />
    </div>
    <!-- Sale Info -->
    <div>
      <FilterOptions />
    </div>
  </div>
</template>

<script>
import InfoTabs from "@/components/InfoTabs.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import ProductCard from "@/components/ProductCard.vue";
import FilterOptions from "@/components/FilterOptions.vue";

export default {
  name: "HomeView",
  components: {
    InfoTabs,
    BreadCrumbs,
    ProductCard,
    FilterOptions,
  },
};
</script>
