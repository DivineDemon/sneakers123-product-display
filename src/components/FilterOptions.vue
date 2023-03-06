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
        class="bg-white rounded-md shadow-lg flex flex-row items-center justify-start space-x-2 relative"
      >
        <div class="flex flex-row items-center justify-center p-2">
          <input
            id="delivery"
            type="text"
            placeholder="Delivery Options"
            v-model="finalDelivery"
            @click="show"
            class="focus:border-0 focus:outline-0 focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0 cursor-pointer"
          />
          <VueIcons :name="'chevron-down'" :size="'w-4 h-4 text-black'" />
        </div>
        <!-- Dropdown -->
        <div
          class="w-[100%] z-50 absolute top-11 left-[-8px] flex flex-col items-start justify-center bg-white rounded-md shadow-xl border border-gray-300"
          :class="{ hidden: !showDeliveryOptions }"
        >
          <p
            v-for="option in deliveryOptions"
            :key="option.id"
            class="hover:bg-gray-200 hover:text-primary w-[100%] px-3 py-2 cursor-pointer"
            :class="{
              'text-primary': finalDelivery === option.name,
            }"
            @click="updateDeliveryOption(option.name)"
          >
            {{ option.name }}
          </p>
        </div>
      </li>
    </ul>
    <div
      class="bg-white rounded-md flex flex-row shadow-lg items-center justify-start space-x-2 relative"
    >
      <div class="flex flex-row items-center justify-center p-2">
        <input
          id="sort"
          type="text"
          :placeholder="finalSort"
          v-model="finalSort"
          @click="show"
          class="focus:border-0 focus:outline-0 focus:ring-0 focus-visible:border-0 focus-visible:outline-0 focus-visible:ring-0 cursor-pointer"
        />
        <VueIcons :name="'chevron-down'" :size="'w-4 h-4 text-black'" />
      </div>
      <!-- Dropdown -->
      <div
        class="w-[100%] z-50 absolute top-11 left-[-8px] flex flex-col items-start justify-center bg-white rounded-md shadow-xl border border-gray-300 cursor-pointer"
        :class="{ hidden: !showSortOptions }"
      >
        <p
          v-for="option in sortOptions"
          :key="option.id"
          class="hover:bg-gray-200 hover:text-primary w-[100%] px-3 py-2"
          :class="{
            'text-primary': finalSort === option.name,
          }"
          @click="updateSortOption(option.name)"
        >
          {{ option.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";
import FilterList from "./Modals/FilterList.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FilterOptions",
  data() {
    return {
      count: 0,
      showDeliveryOptions: false,
      showSortOptions: false,
      deliveryOptions: [
        {
          id: 1,
          name: "Show all",
        },
        {
          id: 2,
          name: "Home delivery",
        },
        {
          id: 3,
          name: "Store pickup",
        },
        {
          id: 4,
          name: "Storage box",
        },
        {
          id: 5,
          name: "Service point",
        },
      ],
      sortOptions: [
        { id: 1, name: "Lowest Price" },
        { id: 2, name: "Fastest Delivery" },
      ],
      finalDelivery: "",
      finalSort: "Lowest Price",
    };
  },
  components: {
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
    updateSort(payload) {
      this.finalSort = payload;
    },
    stockUpdate() {
      this.setStockOnly(!this.getStockOnly);
    },
    deliveryIncludedUpdate() {
      this.setDeliveryIncluded(!this.getDeliveryIncluded);
    },
    updateDeliveryOption(val) {
      this.finalDelivery = val;
      this.setDeliveryOption(val);
    },
    updateSortOption(val) {
      this.finalSort = val;
      this.setSortOption(val);
    },
    show(e) {
      if (e.target.id === "delivery") {
        this.showDeliveryOptions = !this.showDeliveryOptions;
      } else {
        this.showSortOptions = !this.showSortOptions;
      }
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
      this.finalDelivery = newVal;
    },
    finalSort(newVal) {
      this.setSortOption(newVal);
    },
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
