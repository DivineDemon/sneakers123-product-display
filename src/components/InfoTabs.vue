<template>
  <ul
    class="w-[100%] mt-5 my-5 flex flex-row items-center justify-start space-x-14 pl-11 shadow-lg"
  >
    <li
      id="prices"
      class="p-3 cursor-pointer"
      :class="{ 'border-b-2 border-black font-bold': activeTab === 'prices' }"
      @click="activateTab"
    >
      Prices
    </li>
    <li
      id="reviews"
      class="p-3 cursor-pointer"
      :class="{ 'border-b-2 border-black font-bold': activeTab === 'reviews' }"
      @click="activateTab"
    >
      Reviews and tests
    </li>
    <li
      id="stats"
      class="p-3 cursor-pointer"
      :class="{ 'border-b-2 border-black font-bold': activeTab === 'stats' }"
      @click="activateTab"
    >
      Statistics
    </li>
    <li
      id="info"
      class="p-3 cursor-pointer"
      :class="{ 'border-b-2 border-black font-bold': activeTab === 'info' }"
      @click="activateTab"
    >
      Product information
    </li>
  </ul>
</template>

<script>
export default {
  name: "InfoTabs",
  data() {
    return {
      activeTab: "prices",
    };
  },
  methods: {
    activateTab(e) {
      console.log(e.target.id);
      switch (e.target.id) {
        case "prices":
          this.activeTab = "prices";
          break;
        case "reviews":
          this.activeTab = "reviews";
          break;
        case "stats":
          this.activeTab = "stats";
          break;
        case "info":
          this.activeTab = "info";
          break;
        default:
          this.activeTab = "prices";
          break;
      }
    },
  },
};
</script>

<style scoped>
ul::before {
  box-shadow: 0px 15px 5px gray;
}
</style>
