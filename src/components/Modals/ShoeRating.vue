<template>
  <div>
    <button
      @click="show"
      class="flex flex-row items-center justify-center space-x-2 px-5 border-r border-gray-500"
    >
      <VueIcons :name="'pencil'" :size="'w-5 h-5'" />
      <span class="font-medium">Rate</span>
    </button>
    <modal
      name="rating-modal"
      :height="'auto'"
      :width="'640px'"
      :clickToClose="false"
    >
      <div class="w-full h-full flex flex-col items-center justify-start p-10">
        <!-- Close Button -->
        <button
          @click="hide"
          class="cursor-pointer hover:bg-gray-100 rounded-full p-3 absolute top-3 right-3"
        >
          <VueIcons :name="'wrong'" :size="'w-6 h-6'" />
        </button>
        <img
          src="@/assets/img/angle1.png"
          alt="shoe"
          class="bg-gray-100 p-2 rounded-xl w-24 h-24 place-self-center"
        />
        <p class="mt-8 mb-5 text-lg font-bold text-gray-800">
          What do you think about Nike Air Force 1 '07 M - White
        </p>
        <!-- Rating -->
        <div
          class="w-[100%] flex flex-row items-center justify-center space-x-1 border-b border-gray-200 pb-10"
        >
          <VueIcons
            :name="'star'"
            :size="'w-14 h-14 text-gray-300 hover:text-yellow-500'"
          />
          <VueIcons
            :name="'star'"
            :size="'w-14 h-14 text-gray-300 hover:text-yellow-500'"
          />
          <VueIcons
            :name="'star'"
            :size="'w-14 h-14 text-gray-300 hover:text-yellow-500'"
          />
          <VueIcons
            :name="'star'"
            :size="'w-14 h-14 text-gray-300 hover:text-yellow-500'"
          />
          <VueIcons
            :name="'star'"
            :size="'w-14 h-14 text-gray-300 hover:text-yellow-500'"
          />
        </div>
        <label
          for="feedback"
          class="mt-5 w-[100%] text-left text-lg font-semibold text-gray-800"
          >Title</label
        >
        <input
          type="email"
          class="mt-1 w-[100%] border border-gray-200 p-2 rounded-lg"
          placeholder="If you would like a response from us"
        />
        <label
          for="feedback"
          class="mt-5 w-[100%] text-left text-lg font-semibold text-gray-800"
          >Describe what you think about the product</label
        >
        <textarea
          name="feedback"
          id="feedback"
          class="mt-1 w-[100%] h-[175px] border border-gray-200 rounded-lg p-2"
        ></textarea>
        <div
          class="mt-5 w-[100%] place-self-start flex flex-row items-center space-x-5"
        >
          <button
            class="px-5 py-2 bg-primary text-white font-semibold rounded-lg"
          >
            Publish
          </button>
          <button
            @click="hide"
            class="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "ShoeRating",
  components: {
    VueIcons,
  },
  methods: {
    show() {
      this.$modal.show("rating-modal");
    },
    hide() {
      this.$modal.hide("rating-modal");
    },
  },
};
</script>
