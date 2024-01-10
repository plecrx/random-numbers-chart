<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~/stores/counter'

defineProps<{ msg: string }>()

const { count } = storeToRefs(useCounterStore())
const { increment } = useCounterStore()
</script>

<template>
  <h1 class="text-5xl text-dark dark:text-light">{{ msg }}</h1>

  <div class="text-center">
    <button
      class="rounded-md border-transparent py-2 px-4 text-light font-bold bg-indigo-800 hover:bg-indigo-600 cursor-pointer"
      type="button"
      @click="increment"
    >
      count is {{ count }}
    </button>
    <p class="text-dark dark:text-light my-10">
      Edit
      <code class="bg-rose-100 text-dark dark:text-pink font-bold px-2 py-1 rounded"
        >components/CounterCard.vue</code
      >
      to test HMR
    </p>
  </div>
</template>
