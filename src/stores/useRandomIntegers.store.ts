import {
    searchRandomIntegers,
    SearchRandomIntegersParams
} from '@/features/integersList/searchRandomIntegers.ts'
import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useRandomIntegersStore = defineStore('integersList', () => {
    const integersArray = ref<Record<number, number>>([])

    const searchIntegers = async (params: SearchRandomIntegersParams) => {
        integersArray.value = groupIntegersByValue(await searchRandomIntegers(params))
    }

    const groupIntegersByValue = (integersArray: string[]) => {
        const occurrences: Record<string, number> = {};

        integersArray.forEach((integer) => {
            occurrences[integer] = (occurrences[integer] || 0) + 1;
        });

        return occurrences;
    }

    return { integersArray, searchIntegers }
})
