<template>
  <div class="w-[75%] flex flex-row px-11 pb-11">
    <ul class="flex-1 flex flex-row items-center justify-start space-x-5">
      <li class="bg-white rounded-md p-2 shadow-lg">
        <VueIcons :name="'adjustments'" :size="'w-6 h-6'" />
      </li>
      <li class="bg-white rounded-md p-2 shadow-lg flex flex-row space-x-2">
        <VueIcons :name="'box'" :size="'w-6 h-6'" />
        <span>Only in Stock</span>
      </li>
      <li class="bg-white rounded-md p-2 shadow-lg flex flex-row space-x-2">
        <VueIcons :name="'truck'" :size="'w-6 h-6'" />
        <span>Price incl. delivery</span>
      </li>
      <li
        class="bg-white rounded-md p-2 shadow-lg flex flex-row items-center justify-start space-x-2"
      >
        <span>Delivery Options</span>
        <VueIcons :name="'chevron-down'" :size="'w-4 h-4'" />
      </li>
    </ul>
    <button
      class="bg-white rounded-md flex flex-row shadow-lg p-2 items-center justify-start space-x-2"
    >
      <span>Lowest Price</span>
      <VueIcons :name="'chevron-down'" :size="'w-4 h-4'" />
    </button>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "FilterOptions",
  components: {
    VueIcons,
  },
};
</script>
