<script setup lang="ts">
import Button from '@/components/button.vue'
import Chart from '@/components/chart.vue'
import PageLayout from '@/layouts/page-layout.vue'
import { useRandomIntegersStore } from '@/stores/useRandomIntegers.store.ts'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { SearchRandomIntegersParams } from '../features/integersList/searchRandomIntegers.ts'
const { integersArray } = storeToRefs(useRandomIntegersStore())
const { searchIntegers } = useRandomIntegersStore()

const params: SearchRandomIntegersParams = {
    num: 100,
    min: 0,
    max: 10,
    col: 1,
    base: 10,
    format: 'plain'
}
const handleSearchButtonClick = () => {
    searchIntegers(params)
}

onBeforeMount(() => searchIntegers(params))
</script>

<template>
    <PageLayout>
        <h1>{{ 'Distribution de nombres' }}</h1>

        <div class="content-wrapper">
            <Chart :recordValues="integersArray" />
            <Button @click="handleSearchButtonClick"> Refresh </Button>
        </div>
    </PageLayout>
</template>

<style lang="css" scoped>
.content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
}
</style>
