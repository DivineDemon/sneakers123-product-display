<template>
  <!-- Product -->
  <div
    class="w-[100%] mt-5 rounded-xl bg-white shadow-lg"
    :class="{ 'opacity-60': !shop.stock }"
  >
    <div
      v-if="shop.stock"
      class="flex flex-row items-center space-x-10 border-b border-gray-200"
    >
      <div class="p-5 border-r border-gray-300">
        <VueIcons :name="'chevron-down'" :size="'w-6 h-6 text-gray-600'" />
      </div>
      <img
        :src="require('@/assets/img/' + shop.shopLogo)"
        alt="shop-logo"
        class="w-12 h-6"
      />
    </div>
    <div class="flex flex-row items-center py-5 pl-5 space-x-10">
      <h1 v-if="shop.stock" class="flex-1 text-lg font-semibold text-blue-500">
        {{ shop.name }}&nbsp;(Size: {{ shop.size }})
      </h1>
      <div v-else class="flex flex-col flex-1">
        <p class="text-sm text-gray-400">{{ shop.shopName }}</p>
        <h1 class="flex-1 text-lg text-gray-400">
          {{ shop.name }}&nbsp;(Size: {{ shop.size }})
        </h1>
      </div>
      <VueIcons
        v-if="shop.stock"
        :name="'box'"
        :size="'w-6 h-6 text-green-500'"
      />
      <VueIcons v-else :name="'x-box'" :size="'w-6 h-6 text-gray-400'" />
      <div
        v-if="shop.stock"
        class="flex flex-row items-center justify-center space-x-2 pr-3"
      >
        <h1 class="text-2xl font-bold">£{{ shop.price }}</h1>
        <VueIcons :name="'chevron-right'" :size="'w-4 h-4 text-blue-500'" />
      </div>
      <div
        v-else
        class="flex flex-row items-center justify-center space-x-2 pr-3"
      >
        <h1 class="text-2xl font-bold">£109.95</h1>
        <VueIcons :name="'chevron-right'" :size="'w-4 h-4 text-gray-400'" />
      </div>
    </div>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "ShopCard",
  props: {
    shop: Object,
  },
  components: { VueIcons },
};
</script>
