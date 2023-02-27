<template>
  <div id="app" class="w-screen h-screen m-0 p-0 overflow-x-hidden">
    <NavBar />
    <FeedBack />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FeedBack from "./components/Modals/FeedBack.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FeedBack,
  },
};
</script>
