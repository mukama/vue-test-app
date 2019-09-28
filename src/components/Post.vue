<template>
  <div class="post bg-white px-2 py-3 mb-4 pl-4 rounded shadow-lg flex" v-bind:class="{ slideInUp, slideInDown }">
    <div class="pr-4">{{ post.title }}</div>
    <div class="flex flex-col justify-center ml-auto">
      <button @click="moveUp(index)" class="p-2 rounded up" v-if="index > 0">
        <svg class="h-2 w-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.835 240.835">
          <path
            d="M129.007 57.819c-4.68-4.68-12.499-4.68-17.191 0L3.555 165.803c-4.74 4.74-4.74 12.427 0 17.155 4.74 4.74 12.439 4.74 17.179 0l99.683-99.406 99.671 99.418c4.752 4.74 12.439 4.74 17.191 0 4.74-4.74 4.74-12.427 0-17.155L129.007 57.819z"
          />
        </svg>
      </button>
      <button @click="moveDown(index)" class="p-2 rounded down" v-if="index < 4">
        <svg class="h-2 w-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.811 240.811">
          <path
            d="M220.088 57.667l-99.671 99.695-99.671-99.707a12.147 12.147 0 0 0-17.191 0c-4.74 4.752-4.74 12.451 0 17.203l108.261 108.297c4.74 4.752 12.439 4.752 17.179 0L237.256 74.859c4.74-4.752 4.74-12.463 0-17.215-4.728-4.729-12.428-4.729-17.168.023z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { MOVE_UP, MOVE_DOWN } from "../store/types";

export default {
  name: "Post",
  props: {
    post: Object,
    index: Number,
    slideInUp: Boolean,
    slideInDown: Boolean,
  },
  methods: {
    ...mapActions({
      moveUp: MOVE_UP,
      moveDown: MOVE_DOWN
    })
  }
};
</script>

<!-- Animations from https://github.com/daneden/animate.css -->
<style scoped>
button {
  transition: all 500ms;
}

button:hover {
  background: #00ff86;
}

@keyframes slideInDown {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
.slideInDown {
  animation-name: slideInDown;
  animation-duration: 400ms;
}

  
@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
.slideInUp {
  animation-name: slideInUp;
  animation-duration: 400ms;
}
</style>
