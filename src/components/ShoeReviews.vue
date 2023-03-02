<template>
  <div
    class="w-screen bg-white p-11 border-b border-gray-300 flex flex-col items-start space-y-4"
  >
    <h1 class="text-3xl text-black font-semibold mb-1">Reviews</h1>
    <p class="w-[43%]">
      Let us know your thoughts on a product or view reviews from others. Please
      note that PriceRunner does not verify whether the user has used or
      purchased the product.
    </p>
    <div class="w-[75%] flex flex-row items-center justify-between">
      <div
        class="flex flex-row items-center justify-center space-x-3 text-2xl font-semibold"
      >
        <VueIcons :name="'star'" :size="'w-8 h-8 text-yellow-500'" />
        <span>4.7</span>
        <span>·</span>
        <span>438 reviews</span>
      </div>
      <span class="font-semibold text-black hover:underline">Show all</span>
    </div>
    <div class="w-[75%] grid grid-cols-3 gap-x-3">
      <!-- Review Card -->
      <div
        class="col-span-1 w-full h-full bg-gray-100 rounded-lg flex flex-col items-center justify-start p-3"
      >
        <div class="grid grid-cols-12 gap-x-2">
          <!-- Profile -->
          <img
            src="@/assets/img/sweden.png"
            alt="profile"
            class="row-span-2 col-span-2 w-full p-3"
          />
          <!-- Username -->
          <div
            class="col-span-10 row-span-1 flex flex-row items-end justify-start space-x-2"
          >
            <span class="font-semibold">shoelover1</span>
            <img src="@/assets/img/sweden.png" alt="country" class="w-4 pb-1" />
          </div>
          <!-- Rating -->
          <div
            class="col-span-10 row-span-1 flex flex-row items-start justify-start space-x-2"
          >
            <div class="flex flex-row items-center justify-center space-x-1">
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
            </div>
            <span class="text-gray-400 text-xs">a month ago</span>
          </div>
        </div>
        <!-- Content -->
        <div class="flex flex-col items-start justify-start space-y-2">
          <p class="text-gray-700 font-semibold">
            That's so nice! Really want shoes like that:)
          </p>
          <p class="text-lg">
            IT'S GOOD AND DOESN'T RUIN AS MUCH AS ALL THE OTHER SHOES!...
          </p>
          <p>
            <span class="text-gray-400">This review is for</span>
            <span class="text-black font-semibold">White/Pure Platinum</span>
          </p>
        </div>
      </div>
      <!-- Review Card -->
      <div
        class="col-span-1 w-full h-full bg-gray-100 rounded-lg flex flex-col items-center justify-start p-3"
      >
        <div class="grid grid-cols-12 gap-x-2">
          <!-- Profile -->
          <img
            src="@/assets/img/sweden.png"
            alt="profile"
            class="row-span-2 col-span-2 w-full p-3"
          />
          <!-- Username -->
          <div
            class="col-span-10 row-span-1 flex flex-row items-end justify-start space-x-2"
          >
            <span class="font-semibold">shoelover1</span>
            <img src="@/assets/img/sweden.png" alt="country" class="w-4 pb-1" />
          </div>
          <!-- Rating -->
          <div
            class="col-span-10 row-span-1 flex flex-row items-start justify-start space-x-2"
          >
            <div class="flex flex-row items-center justify-center space-x-1">
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
            </div>
            <span class="text-gray-400 text-xs">a month ago</span>
          </div>
        </div>
        <!-- Content -->
        <div class="flex flex-col items-start justify-start space-y-2">
          <p class="text-gray-700 font-semibold">
            That's so nice! Really want shoes like that:)
          </p>
          <p class="text-lg">
            IT'S GOOD AND DOESN'T RUIN AS MUCH AS ALL THE OTHER SHOES!...
          </p>
          <p>
            <span class="text-gray-400">This review is for</span>
            <span class="text-black font-semibold">White/Pure Platinum</span>
          </p>
        </div>
      </div>
      <!-- Review Card -->
      <div
        class="col-span-1 w-full h-full bg-gray-100 rounded-lg flex flex-col items-center justify-start p-3"
      >
        <div class="grid grid-cols-12 gap-x-2">
          <!-- Profile -->
          <img
            src="@/assets/img/sweden.png"
            alt="profile"
            class="row-span-2 col-span-2 w-full p-3"
          />
          <!-- Username -->
          <div
            class="col-span-10 row-span-1 flex flex-row items-end justify-start space-x-2"
          >
            <span class="font-semibold">shoelover1</span>
            <img src="@/assets/img/sweden.png" alt="country" class="w-4 pb-1" />
          </div>
          <!-- Rating -->
          <div
            class="col-span-10 row-span-1 flex flex-row items-start justify-start space-x-2"
          >
            <div class="flex flex-row items-center justify-center space-x-1">
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
              <VueIcons :name="'star'" :size="'w-4 text-yellow-500'" />
            </div>
            <span class="text-gray-400 text-xs">a month ago</span>
          </div>
        </div>
        <!-- Content -->
        <div class="flex flex-col items-start justify-start space-y-2">
          <p class="text-gray-700 font-semibold">
            That's so nice! Really want shoes like that:)
          </p>
          <p class="text-lg">
            IT'S GOOD AND DOESN'T RUIN AS MUCH AS ALL THE OTHER SHOES!...
          </p>
          <p>
            <span class="text-gray-400">This review is for</span>
            <span class="text-black font-semibold">White/Pure Platinum</span>
          </p>
        </div>
      </div>
    </div>
    <button
      class="py-2 px-3 bg-white border border-black rounded-lg text-black flex flex-row items-center justify-center space-x-2"
    >
      <VueIcons :name="'pencil'" :size="'w-6 h-6'" />
      <span class="text-lg font-semibold">Post a review</span>
    </button>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "ShoeReviews",
  components: { VueIcons },
};
</script>
