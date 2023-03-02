<template>
  <div
    class="w-screen bg-white p-11 border-b border-gray-300 flex flex-col items-start space-y-4"
  >
    <h1 class="text-3xl text-black font-semibold mb-1">
      Questions and Answers
    </h1>
    <p>Ask a question about the product and get answers from other members.</p>
    <button
      class="py-2 px-3 bg-white border border-black rounded-lg text-black flex flex-row items-center justify-center space-x-2"
    >
      <VueIcons :name="'pencil'" :size="'w-6 h-6'" />
      <span class="text-lg font-semibold">Ask a question</span>
    </button>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "PostQuestion",
  components: { VueIcons },
};
</script>
