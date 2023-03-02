<template>
  <div>
    <button
      @click="show"
      v-if="!modalState"
      class="absolute bottom-1 right-10 rounded-md w-[360px] px-4 py-2 bg-primary text-white font-semibold flex flex-row items-center justify-between"
    >
      <span>My products</span>
      <VueIcons :name="'chevron-double-up'" :size="'w-5 h-5 text-white'" />
    </button>
    <modal
      name="member-modal"
      :height="'auto'"
      :width="'360px'"
      :clickToClose="false"
      :shiftX="0.97"
      :shiftY="0.995"
    >
      <h1
        class="px-3 py-4 w-[100%] text-center font-semibold text-gray-700 border-b border-gray-200"
      >
        My products
      </h1>
      <!-- Close Button -->
      <button
        @click="hide"
        class="cursor-pointer hover:bg-gray-100 rounded-full m-1 p-3 absolute top-0 right-0"
      >
        <VueIcons :name="'wrong'" :size="'w-6 h-6'" />
      </button>
      <div
        class="px-5 pt-5 flex flex-col items-center justify-center space-y-3"
      >
        <h1 class="text-xl text-gray-700 font-semibold text-center">
          Become a member to save products
        </h1>
        <p class="w-[100%] text-gray-400 text-[14px] text-justify">
          A PriceRunner membership is great if you're someone whoe enjoys
          shopping smart, easily and safely online.
        </p>
        <button
          class="w-[100%] text-center text-white bg-primary rounded-lg px-4 py-1"
        >
          Become a member or sign in
        </button>
        <img
          src="@/assets/img/nonmember.svg"
          alt="non-member"
          class="w-40 place-self-end"
        />
      </div>
      <div
        class="w-[100%] flex flex-row items-center justify-between py-3 bg-gray-100"
      >
        <button
          id="lists"
          @click="activateFooter"
          class="w-[33%] flex flex-col items-center justify-center"
          :class="{ 'text-primary': activeFooter === 'lists' }"
        >
          <VueIcons :name="'heart'" :size="'w-6 h-6'" />
          <span class="text-xs">My lists</span>
        </button>
        <button
          id="alert"
          @click="activateFooter"
          class="w-[33%] flex flex-col items-center justify-center"
          :class="{ 'text-primary': activeFooter === 'alert' }"
        >
          <VueIcons :name="'bell'" :size="'w-6 h-6'" />
          <span class="text-xs">Price alerts</span>
        </button>
        <button
          id="recent"
          @click="activateFooter"
          class="w-[33%] flex flex-col items-center justify-center"
          :class="{ 'text-primary': activeFooter === 'recent' }"
        >
          <VueIcons :name="'eye'" :size="'w-6 h-6'" />
          <span class="text-xs">Recently viewed</span>
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
import VueIcons from "@/utils/VueIcons.vue";

export default {
  name: "BecomeMember",
  data() {
    return {
      modalState: false,
      activeFooter: "lists",
    };
  },
  components: {
    VueIcons,
  },
  methods: {
    show() {
      this.modalState = true;
      this.$modal.show("member-modal");
    },
    hide() {
      this.modalState = false;
      this.$modal.hide("member-modal");
    },
    activateFooter(e) {
      switch (e.target.id) {
        case "lists":
          this.activeFooter = "lists";
          break;
        case "alert":
          this.activeFooter = "alert";
          break;
        case "recent":
          this.activeFooter = "recent";
          break;
        default:
          this.activeFooter = "lists";
      }
    },
  },
};
</script>
