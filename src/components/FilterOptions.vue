<template>
  <div class="w-[100%] flex flex-row mb-7">
    <ul class="flex-1 flex flex-row items-center justify-start space-x-5">
      <li
        class="relative"
        :class="{ 'border-2 border-black rounded-md': count > 0 }"
      >
        <FilterList />
        <span
          v-if="count > 0"
          class="bg-primary text-white text-xs rounded-full absolute pb-[2px] top-[-8px] right-[-8px] w-4 h-4 flex items-center justify-center"
          >{{ count }}</span
        >
      </li>
      <li
        @click="stockUpdate"
        class="bg-white rounded-md p-2 shadow-lg flex flex-row space-x-2 cursor-pointer"
        :class="{ 'border-2 border-black': getStockOnly }"
      >
        <VueIcons :name="'box'" :size="'w-6 h-6'" />
        <span>Only in Stock</span>
      </li>
      <li
        @click="deliveryIncludedUpdate"
        class="bg-white rounded-md p-2 shadow-lg flex flex-row space-x-2 cursor-pointer"
        :class="{ 'border-2 border-black': getDeliveryIncluded }"
      >
        <VueIcons :name="'truck'" :size="'w-6 h-6'" />
        <span>Price incl. delivery</span>
      </li>
      <li
        class="bg-white rounded-md shadow-lg flex flex-row items-center justify-start space-x-2"
      >
        <dropdown
          :options="deliveryOptions"
          :selected="finalDelivery"
          :placeholder="'Delivery Options'"
          :closeOnOutsideClick="true"
          class="my-dropdown-toggle"
          v-on:updateOption="updateDelivery"
        >
        </dropdown>
      </li>
    </ul>
    <div
      class="bg-white rounded-md flex flex-row shadow-lg items-center justify-start space-x-2"
    >
      <dropdown
        :options="sortOptions"
        :selected="finalSort"
        :placeholder="'Lowest Price'"
        :closeOnOutsideClick="true"
        class="my-dropdown-toggle"
        v-on:updateOption="updateSort"
      >
      </dropdown>
    </div>
  </div>
</template>

<script>
import dropdown from "vue-dropdowns";
import VueIcons from "@/utils/VueIcons.vue";
import FilterList from "./Modals/FilterList.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FilterOptions",
  data() {
    return {
      count: 0,
      deliveryOptions: [
        { name: "Show All" },
        { name: "Home delivery" },
        { name: "Store pickup" },
        { name: "Storage box" },
        { name: "Service point" },
      ],
      finalDelivery: "",
      sortOptions: [{ name: "Lowest Price" }, { name: "Fastest Delivery" }],
      finalSort: "",
    };
  },
  components: {
    dropdown,
    VueIcons,
    FilterList,
  },
  computed: {
    ...mapGetters([
      "getFilterCount",
      "getStockOnly",
      "getDeliveryIncluded",
      "getDeliveryOption",
      "getSortOption",
    ]),
  },
  methods: {
    ...mapMutations([
      "setFilterCount",
      "setStockOnly",
      "setDeliveryIncluded",
      "setDeliveryOption",
      "setSortOption",
    ]),
    updateDelivery(payload) {
      this.finalDelivery = payload;
    },
    updateSort(payload) {
      this.finalSort = payload;
    },
    stockUpdate() {
      this.setStockOnly(!this.getStockOnly);
    },
    deliveryIncludedUpdate() {
      this.setDeliveryIncluded(!this.getDeliveryIncluded);
    },
  },
  watch: {
    getStockOnly(newVal) {
      if (newVal) {
        this.count++;
        this.setFilterCount(this.count);
      } else {
        this.count--;
        this.setFilterCount(this.count);
      }
    },
    getDeliveryIncluded(newVal) {
      if (newVal) {
        this.count++;
        this.setFilterCount(this.count);
      } else {
        this.count--;
        this.setFilterCount(this.count);
      }
    },
    getDeliveryOption(newVal) {
      console.log(newVal);
      this.finalDelivery = { name: newVal };
    },
    finalDelivery(newVal) {
      this.setDeliveryOption(newVal);
    },
    finalSort(newVal) {
      this.setSortOption(newVal);
    },
  },
  created() {
    this.count = this.getFilterCount;
  },
};
</script>

<style scoped>
.my-dropdown-toggle {
  margin: 0 !important;
  padding: 0 !important;
  border-radius: 6px !important;
  color: black !important;
}

::v-deep .dropdown-toggle {
  background-color: transparent !important;
  color: black !important;
  font-weight: normal !important;
  background-image: none !important;
}

::v-deep .dropdown-menu a {
  color: black;
  font-weight: normal;
}
::v-deep .dropdown-menu a:hover {
  color: #eb145f;
}
</style>
