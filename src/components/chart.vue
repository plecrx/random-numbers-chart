<script setup lang="ts">
defineProps<{
    recordValues: Record<string | number, number>
}>()
const getBarHeight = (value: number) => `${value * 10}px`
</script>

<template>
    <div class="chart">
        <div
            v-for="(occurrences, label) in recordValues"
            :key="`${label}-${occurrences}`"
            class="bar"
            :style="{ height: `${getBarHeight(occurrences)}` }"
            data-testid="chart-bar"
        >
            <span class="label" data-testid="chart-bar-label">{{ label }}</span>
        </div>
    </div>
</template>

<style scoped lang="css">
.chart {
    display: flex;
    min-height: 200px;
    gap: 16px;
}

.bar {
    position: relative;
    background-color: cornflowerblue;
    border: indigo;
    width: 40px;
    text-align: center;
    border-radius: 4px;
    color: indigo;
    margin-top: auto;
}

.label {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
