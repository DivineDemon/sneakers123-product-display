<template>
  <div class="flex flex-col">
    <!-- Ad -->
    <AdCard />
    <div
      v-for="shop in shopList"
      :key="shop.id"
      class="w-[100%] flex flex-col items-center"
    >
      <ShopCard :shop="shop" />
      <!-- Offers -->
      <OfferCard v-if="!shop.contract" />
      <!-- Savings -->
      <SavingsCard
        v-if="shop.id === Math.floor(Math.random() * shopList.length)"
      />
    </div>
    <!-- Show More -->
    <div
      class="cursor-pointer w-[10%] my-5 text-center flex flex-row space-x-3 place-self-center"
    >
      <VueIcons :name="'plus-circle'" :size="'w-6 h-6'" />
      <span>Show more</span>
    </div>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";
import AdCard from "./cards/AdCard.vue";
import OfferCard from "./cards/OfferCard.vue";
import SavingsCard from "./cards/SavingsCard.vue";
import ShopCard from "./cards/ShopCard.vue";

export default {
  name: "ShopList",
  data() {
    return {
      shopList: [
        {
          id: 1,
          contract: true,
          shopName: "KicksCrew",
          name: "Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111",
          size: "US 9",
          price: "109.95",
          shopLogo: "kickscrew.png",
          stock: false,
        },
        {
          id: 2,
          contract: false,
          shopName: "KicksCrew",
          name: "Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111",
          size: "US 9",
          price: "109.95",
          shopLogo: "kickscrew.png",
          stock: true,
        },
        {
          id: 3,
          contract: true,
          shopName: "KicksCrew",
          name: "Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111",
          size: "US 9",
          price: "109.95",
          shopLogo: "kickscrew.png",
          stock: true,
        },
        {
          id: 4,
          contract: true,
          shopName: "KicksCrew",
          name: "Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111",
          size: "US 9",
          price: "109.95",
          shopLogo: "kickscrew.png",
          stock: false,
        },
        {
          id: 5,
          contract: true,
          shopName: "KicksCrew",
          name: "Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111",
          size: "US 9",
          price: "109.95",
          shopLogo: "kickscrew.png",
          stock: true,
        },
        {
          id: 6,
          contract: true,
          shopName: "KicksCrew",
          name: "Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111",
          size: "US 9",
          price: "109.95",
          shopLogo: "kickscrew.png",
          stock: true,
        },
        {
          id: 7,
          contract: true,
          shopName: "KicksCrew",
          name: "Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111",
          size: "US 9",
          price: "109.95",
          shopLogo: "kickscrew.png",
          stock: true,
        },
      ],
    };
  },
  components: {
    VueIcons,
    AdCard,
    OfferCard,
    SavingsCard,
    ShopCard,
  },
};
</script>
