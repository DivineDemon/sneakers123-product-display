<template>
  <div
    class="w-[100%] mt-5 flex flex-row items-center space-x-5 bg-white rounded-xl p-4 shadow-lg"
  >
    <VueIcons :name="'hide'" :size="'w-6 h-6'" />
    <p class="italic flex-1">
      The product exists on 7 additional merchants that don't have an agreement
      with PriceRunner.
    </p>
    <p class="italic underline cursor-pointer">Show all offers</p>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "OfferCard",
  components: { VueIcons },
};
</script>
