<template>
  <div id="app" class="overflow-x-hidden">
    <NavBar />
    <FeedBack />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FeedBack from "./components/FeedBack.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FeedBack,
  },
};
</script>
