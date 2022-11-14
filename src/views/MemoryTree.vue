<template>
  <div
    class="max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
    v-if="!done"
  >
    <MemoryCard
      @toggle-card="checkCard"
      v-for="tree in cards"
      :key="tree.id"
      :tree="tree"
      :class="{
        open: opened.includes(tree.guessId),
        guessed: guessed.includes(tree.id),
      }"
    />
  </div>

  <div v-else>
    Finito in {{ moves }} <button @click="startGame">Di nuovo</button>
  </div>
</template>

<script lang="ts" setup>
import MemoryCard from "@/components/MemoryCard.vue";
import { computed, ref } from "vue";
import { trees } from "../assets/data";
import type { Tree } from "../assets/data";

const opened = ref<Array<string>>([]);
const guessed = ref<Array<number>>([]);
const cards = ref<Array<Tree>>([]);
const moves = ref<number>(0);

function checkCard(tree: Tree) {
  if (tree.guessId === opened.value.at(0)) return;
  if (guessed.value.includes(tree.id)) return;

  if (opened.value.length < 2) {
    opened.value.push(tree.guessId);
  }

  if (opened.value.length === 2) {
    moves.value += 1;
    const guessA = opened.value.at(0).replace("A_", "").replace("B_", "");
    const guessB = opened.value.at(1).replace("B_", "").replace("A_", "");
    setTimeout(() => {
      if (guessA === guessB) {
        guessed.value.push(tree.id);
      }
      opened.value = [];
    }, 1000);
  }
}

const done = computed(() => {
  return guessed.value.length === trees.length / 2;
});

function startGame() {
  moves.value = 0;
  cards.value = trees.slice().sort(() => Math.random() - 0.5);
  opened.value = [];
  guessed.value = [];
}

startGame();
</script>
