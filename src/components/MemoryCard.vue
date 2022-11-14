<template>
  <div
    class="flip-card bg-transparent aspect-square"
    @click="$emit('toggle-card', props.tree)"
  >
    <div
      class="flip-card-inner relative w-full h-full transition-transform duration-700 rounded-md border shadow-sm"
    >
      <div
        class="flip-card-front p-4 rounded-md w-full h-full absolute flex items-center justify-center"
      >
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
      </div>
      <div
        class="flip-card-back p-4 rounded-md w-full h-full absolute flex flex-col items-center gap-2"
      >
        <img :src="props.tree.icon" class="w-4/5 aspect-square rounded-full" />
        <h1 class="title transition-opacity duration-500">
          {{ props.tree.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Tree } from "@/assets/data";
import type { PropType } from "vue";

const props = defineProps({
  tree: {
    type: Object as PropType<Tree>,
    required: true,
  },
});

defineEmits(["toggle-card"]);
</script>

<style>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  perspective: 1000px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card.open .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card.guessed .flip-card-inner {
  transform: rotateY(180deg);
}

.title {
  opacity: 0;
}
.flip-card.guessed .title {
  opacity: 1;
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the back side */
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
