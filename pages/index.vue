<template>
  <div class="flex flex-col py-10">
    <div>
      <h2 class="text-2xl font-bold text-center">Nuxt Movies App</h2>
    </div>
    <div class="flex justify-center items-center h-32">
      <input
        v-model="searchTerm"
        type="text"
        class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10"
    >
      <div v-for="movie in data?.results">
        <MovieCard :movie="movie" />
      </div>
    </div>

    <div class="flex justify-center" v-if="data?.results.length">
      <button
        v-if="!disabledPrevious"
        class="px-4 py-2 border rounded-lg"
        @click="page -= 1"
      >
        Prev
      </button>
      <div class="px-4 py-2 border rounded-lg">{{ page }}</div>
      <button
        v-if="!disabledNext"
        class="px-4 py-2 border rounded-lg"
        @click="page += 1"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { APIResponse } from "~/types/APIResponse";

const searchTerm = ref("");
const page = ref(1);

const disabledPrevious = computed(() => {
  return page.value === 1;
});

const disabledNext = computed(() => {
  return page.value + 1 === data.value?.total_pages;
});

const debounceSearchTerm = refDebounced(searchTerm, 700)

const url = computed(() => {
  return `api/movies/search?query=${debounceSearchTerm.value}&page=${page.value}`;
});

const { data } = await useFetch<APIResponse>(url);
</script>
