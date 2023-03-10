<template>
  <div>
    <button @click="show" class="bg-white rounded-md p-2 shadow-lg">
      <VueIcons :name="'adjustments'" :size="'w-6 h-6'" />
    </button>
    <modal
      name="filter-list-modal"
      :width="'500px'"
      :height="'auto'"
      :clickToClose="false"
      :adaptive="true"
      :scrollable="true"
    >
      <h1
        class="px-3 py-4 w-[100%] text-center font-semibold text-gray-700 border-b border-gray-200"
      >
        Filter
      </h1>
      <!-- Close Button -->
      <button
        @click="hide"
        class="cursor-pointer hover:bg-gray-100 rounded-full m-1 p-3 absolute top-0 right-0"
      >
        <VueIcons :name="'wrong'" :size="'w-6 h-6'" />
      </button>
      <!-- Store Options -->
      <p class="w-[28%] font-semibold text-black mx-5 mt-5 place-self-start">
        Store Options
      </p>
      <div
        class="m-5 pb-5 flex flex-col space-y-5 items-start border-b border-gray-200"
      >
        <div class="flex flex-row items-center space-x-3">
          <input
            v-model="stock"
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <span>Only in stock</span>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            v-model="devInc"
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <span>Price incl. delivery</span>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            v-model="variants"
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <span>Show all variants</span>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            v-model="unverified"
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <span>Show unverified stores</span>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            v-model="authorized"
            disabled
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <div class="flex flex-row items-center space-x-3">
            <span class="text-gray-400">Only authorized sellers</span>
            <VueIcons
              :name="'shield'"
              :size="'w-8 h-8 text-blue-500 rounded-full p-2 bg-gray-100'"
            />
          </div>
        </div>
        <div class="flex flex-row items-center space-x-3">
          <input
            v-model="international"
            type="checkbox"
            class="w-6 h-6 rounded-md"
            :style="{ accentColor: 'black' }"
          />
          <div class="flex flex-col">
            <span>International store</span>
            <p class="text-xs">
              <span class="text-xs text-gray-500">Price from</span> ??96.76
            </p>
          </div>
        </div>
      </div>
      <!-- Delivery Options -->
      <p class="w-[28%] font-semibold text-black mx-5 mb-5 place-self-start">
        Delivery Options
      </p>
      <div class="m-5 pb-5 flex flex-col space-y-5 items-start">
        <div class="flex flex-col items-center space-y-3">
          <!-- Radio -->
          <div
            v-for="option in deliveryOptions"
            :key="option.id"
            class="pt-3 w-[100%] flex flex-row items-center justify-center space-x-2"
          >
            <label class="container flex flex-row items-center justify-start">
              <span class="text-[16px] flex items-center">{{
                option.name
              }}</span>
              <input
                v-model="deliveryOption"
                type="radio"
                name="radio"
                :value="option.name"
                class="flex items-center"
                @click="checkDeliveryOption"
              />
              <span
                class="checkmark flex items-center border border-gray-300 hover:border-black"
              />
            </label>
          </div>
        </div>
      </div>
      <!-- Button -->
      <div class="w-[100%] p-5 border-t border-gray-300">
        <button
          class="w-[100%] bg-primary text-white rounded-lg font-semibold p-3"
        >
          Show results
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FilterList",
  data() {
    return {
      stock: false,
      devInc: false,
      variants: false,
      unverified: false,
      authorized: false,
      international: false,
      deliveryOption: "Show all",
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
    };
  },
  components: {
    VueIcons,
  },
  computed: {
    ...mapGetters(["getStockOnly", "getDeliveryIncluded", "getDeliveryOption"]),
  },
  methods: {
    ...mapMutations([
      "setStockOnly",
      "setDeliveryIncluded",
      "setDeliveryOption",
      "setVariants",
      "setUnverified",
      "setAuthorized",
      "setInternational",
    ]),
    show() {
      this.$modal.show("filter-list-modal");
    },
    hide() {
      this.$modal.hide("filter-list-modal");
    },
    checkDeliveryOption(e) {
      this.setDeliveryOption(e.target.value);
    },
  },
  watch: {
    stock(newVal) {
      this.setStockOnly(newVal);
    },
    devInc(newVal) {
      this.setDeliveryIncluded(newVal);
    },
    variants(newVal) {
      this.setVariants(newVal);
    },
    unverified(newVal) {
      this.setUnverified(newVal);
    },
    authorized(newVal) {
      this.setAuthorized(newVal);
    },
    international(newVal) {
      this.setInternational(newVal);
    },
    getStockOnly(newVal) {
      this.stock = newVal;
    },
    getDeliveryIncluded(newVal) {
      this.devInc = newVal;
    },
    getDeliveryOption(newVal) {
      this.deliveryOption = newVal;
    },
  },
};
</script>

<style scoped>
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ffffff;
  border-radius: 50%;
}

/* On mouse-over, add a white background color */
.container:hover input ~ .checkmark {
  background-color: #ffffff;
}

/* When the radio button is checked, add a black background */
.container input:checked ~ .checkmark {
  background-color: black;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 5px;
  left: 5px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: white;
}
</style>
