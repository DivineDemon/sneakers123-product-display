<template>
  <div
    class="w-[100%] bg-white flex flex-row items-center space-x-5 rounded-xl shadow-lg"
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
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "AdCard",
  components: { VueIcons },
};
</script>
