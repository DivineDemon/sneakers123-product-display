<template>
  <div>
    <button @click="show" :class="modalState ? inactive : active">
      Feedback
    </button>
    <modal
      name="feedback-modal"
      :height="'auto'"
      :width="'640px'"
      :clickToClose="false"
    >
      <div class="p-10 w-[100%] h-[100%] flex flex-col items-center">
        <!-- Close Button -->
        <button
          @click="hide"
          class="cursor-pointer hover:bg-gray-200 rounded-full p-3 absolute top-3 right-3"
        >
          <VueIcons :name="'wrong'" :size="'w-6 h-6'" />
        </button>
        <h1 class="w-[100%] text-left text-3xl font-bold text-gray-800">
          Thank you from helping us improve!
        </h1>
        <p class="mt-5 w-[100%]">
          If you enter your email address, we will save it in order to get back
          to you. Once we have processed your inquiry, we will delete your email
          address.
        </p>
        <label
          for="feedback"
          class="mt-5 w-[100%] text-left text-lg font-semibold text-gray-800"
          >Your feedback</label
        >
        <textarea
          name="feedback"
          id="feedback"
          class="mt-1 w-[100%] h-[175px] border border-gray-200 rounded-lg p-2"
        ></textarea>
        <label
          for="feedback"
          class="mt-5 w-[100%] text-left text-lg font-semibold text-gray-800"
          >Your email</label
        >
        <input
          type="email"
          class="mt-1 w-[100%] border border-gray-200 p-2 rounded-lg"
          placeholder="If you would like a response from us"
        />
        <div
          class="mt-5 w-[100%] place-self-start flex flex-row items-center space-x-5"
        >
          <button
            class="px-5 py-2 bg-primary text-white font-semibold rounded-lg"
          >
            Submit
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
  name: "FeedBack",
  components: {
    VueIcons,
  },
  data() {
    return {
      modalState: false,
      active:
        "m-0 rotate-[-90deg] px-5 py-3 rounded-t-md fixed top-1/2 right-[-13px] z-10 bg-white border border-gray-500 hover:border-primary text-gray-600",
      inactive:
        "m-0 rotate-[-90deg] px-5 py-3 rounded-t-md fixed top-1/2 right-[-13px] z-10 border-0 bg-primary text-white font-semibold",
    };
  },
  methods: {
    show() {
      this.modalState = true;
      this.$modal.show("feedback-modal");
    },
    hide() {
      this.modalState = false;
      this.$modal.hide("feedback-modal");
    },
  },
};
</script>
