<template>
  <ul class="flex flex-col">
    <!-- Ad -->
    <li
      class="bg-white flex flex-row items-center space-x-5 rounded-xl shadow-lg"
    >
      <div
        class="rounded-l-xl px-1 py-6 bg-green-200 text-green-500 flex items-center justify-center"
      >
        <span class="text-xs uppercase rotate-[-90deg]">ad</span>
      </div>
      <div class="flex-1 flex flex-col items-start justify-center">
        <p class="text-md font-semibold text-gray-700">From Nike UK</p>
        <h1 class="text-lg font-semibold text-blue-500">
          Nike Air Force 1'07 Men's Shoes - White
        </h1>
      </div>
      <div class="flex flex-row items-center justify-center space-x-2 pr-3">
        <h1 class="text-2xl font-bold">£109.95</h1>
        <VueIcons :name="'chevron-right'" :size="'w-4 h-4 text-blue-500'" />
      </div>
    </li>
    <!-- Product -->
    <li class="mt-5 rounded-xl bg-white shadow-lg">
      <div
        class="flex flex-row items-center space-x-10 border-b border-gray-200"
      >
        <div class="p-5 border-r border-gray-300">
          <VueIcons :name="'chevron-down'" :size="'w-6 h-6 text-gray-600'" />
        </div>
        <img
          src="@/assets/img/kickscrew.png"
          alt="shop-logo"
          class="w-12 h-6"
        />
      </div>
      <div class="flex flex-row items-center py-5 pl-5 space-x-10">
        <h1 class="flex-1 text-lg font-semibold text-blue-500">
          Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111 (Size: US
          9)
        </h1>
        <VueIcons :name="'box'" :size="'w-6 h-6 text-green-500'" />
        <div class="flex flex-row items-center justify-center space-x-2 pr-3">
          <h1 class="text-2xl font-bold">£109.95</h1>
          <VueIcons :name="'chevron-right'" :size="'w-4 h-4 text-blue-500'" />
        </div>
      </div>
    </li>
    <li class="mt-5 rounded-xl bg-white shadow-lg">
      <div
        class="flex flex-row items-center space-x-10 border-b border-gray-200"
      >
        <div class="p-5 border-r border-gray-300">
          <VueIcons :name="'chevron-down'" :size="'w-6 h-6 text-gray-600'" />
        </div>
        <img
          src="@/assets/img/kickscrew.png"
          alt="shop-logo"
          class="w-12 h-6"
        />
      </div>
      <div class="flex flex-row items-center py-5 pl-5 space-x-10">
        <h1 class="flex-1 text-lg font-semibold text-blue-500">
          Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111 (Size: US
          9)
        </h1>
        <VueIcons :name="'box'" :size="'w-6 h-6 text-green-500'" />
        <div class="flex flex-row items-center justify-center space-x-2 pr-3">
          <h1 class="text-2xl font-bold">£109.95</h1>
          <VueIcons :name="'chevron-right'" :size="'w-4 h-4 text-blue-500'" />
        </div>
      </div>
    </li>
    <!-- Offers -->
    <li
      class="mt-5 flex flex-row items-center space-x-5 bg-white rounded-xl p-4 shadow-lg"
    >
      <VueIcons :name="'hide'" :size="'w-6 h-6'" />
      <p class="italic flex-1">
        The product exists on 7 additional merchants that don't have an
        agreement with PriceRunner.
      </p>
      <p class="italic underline cursor-pointer">Show all offers</p>
    </li>
    <!-- Product -->
    <li class="mt-5 rounded-xl bg-white shadow-lg">
      <div
        class="flex flex-row items-center space-x-10 border-b border-gray-200"
      >
        <div class="p-5 border-r border-gray-300">
          <VueIcons :name="'chevron-down'" :size="'w-6 h-6 text-gray-600'" />
        </div>
        <img
          src="@/assets/img/kickscrew.png"
          alt="shop-logo"
          class="w-12 h-6"
        />
      </div>
      <div class="flex flex-row items-center py-5 pl-5 space-x-10">
        <h1 class="flex-1 text-lg font-semibold text-blue-500">
          Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111 (Size: US
          9)
        </h1>
        <VueIcons :name="'box'" :size="'w-6 h-6 text-green-500'" />
        <div class="flex flex-row items-center justify-center space-x-2 pr-3">
          <h1 class="text-2xl font-bold">£109.95</h1>
          <VueIcons :name="'chevron-right'" :size="'w-4 h-4 text-blue-500'" />
        </div>
      </div>
    </li>
    <li class="mt-5 rounded-xl bg-white shadow-lg">
      <div
        class="flex flex-row items-center space-x-10 border-b border-gray-200"
      >
        <div class="p-5 border-r border-gray-300">
          <VueIcons :name="'chevron-down'" :size="'w-6 h-6 text-gray-600'" />
        </div>
        <img
          src="@/assets/img/kickscrew.png"
          alt="shop-logo"
          class="w-12 h-6"
        />
      </div>
      <div class="flex flex-row items-center py-5 pl-5 space-x-10">
        <h1 class="flex-1 text-lg font-semibold text-blue-500">
          Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111 (Size: US
          9)
        </h1>
        <VueIcons :name="'box'" :size="'w-6 h-6 text-green-500'" />
        <div class="flex flex-row items-center justify-center space-x-2 pr-3">
          <h1 class="text-2xl font-bold">£109.95</h1>
          <VueIcons :name="'chevron-right'" :size="'w-4 h-4 text-blue-500'" />
        </div>
      </div>
    </li>
    <!-- Savings -->
    <li
      class="w-[75%] place-self-center mt-5 rounded-lg flex flex-row items-center justify-center space-x-10 p-5 border border-gray-300"
    >
      <img src="@/assets/img/savings.svg" alt="savings" class="w-12 h-12" />
      <p class="flex flex-row space-x-2">
        <span class="font-bold">Too expensive?</span>
        <span>Get a notification as soon as the price drops.</span>
      </p>
      <button class="bg-primary text-white px-4 py-2 rounded-md">
        Price alert
      </button>
    </li>
    <!-- Product -->
    <li class="mt-5 rounded-xl bg-white shadow-lg">
      <div
        class="flex flex-row items-center space-x-10 border-b border-gray-200"
      >
        <div class="p-5 border-r border-gray-300">
          <VueIcons :name="'chevron-down'" :size="'w-6 h-6 text-gray-600'" />
        </div>
        <img
          src="@/assets/img/kickscrew.png"
          alt="shop-logo"
          class="w-12 h-6"
        />
      </div>
      <div class="flex flex-row items-center py-5 pl-5 space-x-10">
        <h1 class="flex-1 text-lg font-semibold text-blue-500">
          Air Force 1 '07 'Triple ' Air Force Skate Shoes CW2288-111 (Size: US
          9)
        </h1>
        <VueIcons :name="'box'" :size="'w-6 h-6 text-green-500'" />
        <div class="flex flex-row items-center justify-center space-x-2 pr-3">
          <h1 class="text-2xl font-bold">£109.95</h1>
          <VueIcons :name="'chevron-right'" :size="'w-4 h-4 text-blue-500'" />
        </div>
      </div>
    </li>
    <!-- Show More -->
    <li
      class="cursor-pointer w-[10%] mt-5 text-center flex flex-row space-x-3 place-self-center"
    >
      <VueIcons :name="'plus-circle'" :size="'w-6 h-6'" />
      <span>Show more</span>
    </li>
  </ul>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "ShopList",
  components: {
    VueIcons,
  },
};
</script>
