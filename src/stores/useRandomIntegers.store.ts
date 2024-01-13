import {
    searchRandomIntegers,
    SearchRandomIntegersParams,
    SearchRandomIntegersResponse
} from '@/features/integersList/searchRandomIntegers.ts'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export type IntegersStoreDependencies = {
    searchRandomIntegers: SearchRandomIntegersResponse
}
export const createRandomIntegersStore = ({ searchRandomIntegers }: IntegersStoreDependencies) =>
    defineStore('integersList', () => {
        const integersArray = ref<Record<number, number>>({})

        const searchIntegers = async (params: SearchRandomIntegersParams) => {
            integersArray.value = groupIntegersByValue(await searchRandomIntegers(params))
        }

        const groupIntegersByValue = (integersArray: string[]) => {
            const occurrences: Record<string, number> = {}

            integersArray.forEach((integer) => {
                occurrences[integer] = (occurrences[integer] || 0) + 1
            })

            return occurrences
        }

        return { integersArray, searchIntegers }
    })

export const useRandomIntegersStore = () => createRandomIntegersStore({ searchRandomIntegers })
