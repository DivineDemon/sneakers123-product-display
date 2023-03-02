<template>
  <div id="home" class="bg-gray-100">
    <!-- Product Card -->
    <div class="bg-white">
      <BreadCrumbs />
      <ProductCard />
      <InfoTabs />
    </div>
    <!-- Sale Info -->
    <div class="w-[75%] px-11">
      <FilterOptions />
      <ShopList />
    </div>
    <RelatedProducts />
    <ShoeReviews />
    <PostQuestion />
    <ProductInformation />
    <PopularSearches />
    <NewsLetter />
    <BecomeMember />
  </div>
</template>

<script>
import InfoTabs from "@/components/InfoTabs.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import ProductCard from "@/components/ProductCard.vue";
import FilterOptions from "@/components/FilterOptions.vue";
import ShopList from "@/components/ShopList.vue";
import BecomeMember from "@/components/Modals/BecomeMember.vue";
import RelatedProducts from "@/components/RelatedProducts.vue";
import ShoeReviews from "@/components/ShoeReviews.vue";
import PostQuestion from "@/components/PostQuestion.vue";
import ProductInformation from "@/components/ProductInformation.vue";
import PopularSearches from "@/components/PopularSearches.vue";
import NewsLetter from "@/components/NewsLetter.vue";

export default {
  name: "HomeView",
  components: {
    InfoTabs,
    ShopList,
    BreadCrumbs,
    ProductCard,
    FilterOptions,
    BecomeMember,
    RelatedProducts,
    ShoeReviews,
    PostQuestion,
    ProductInformation,
    PopularSearches,
    NewsLetter,
  },
};
</script>
