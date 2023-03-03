<template>
  <div
    class="w-[75%] mt-5 rounded-lg flex flex-row items-center justify-center space-x-10 p-5 border border-gray-300"
  >
    <img src="@/assets/img/savings.svg" alt="savings" class="w-12 h-12" />
    <p class="flex flex-row space-x-2">
      <span class="font-bold">Too expensive?</span>
      <span>Get a notification as soon as the price drops.</span>
    </p>
    <button @click="show" class="bg-primary text-white px-4 py-2 rounded-md">
      Price alert
    </button>
  </div>
</template>

<script>
export default {
  name: "SavingsCard",
  methods: {
    show() {
      this.$modal.show("price-alert-modal");
    },
  },
};
</script>
