import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vitest } from 'vitest'
import {
    createRandomIntegersStore,
    IntegersStoreDependencies,
    useRandomIntegersStore
} from '../../src/stores/useRandomIntegers.store'
import { Mocks } from '../utils'

describe('Search Random Integers Feature', () => {
    let mocks: Mocks<IntegersStoreDependencies>
    let randomIntegersStore: ReturnType<typeof useRandomIntegersStore>

    beforeEach(() => {
        setActivePinia(createPinia())
        mocks = {
            searchRandomIntegers: vitest.fn().mockReturnValue(['1'])
        }
        randomIntegersStore = createRandomIntegersStore(mocks)
    })

    it('should have default value in the store', () => {
        expect(randomIntegersStore()).toEqual(
            expect.objectContaining({
                integersArray: {}
            })
        )
    })

    it('should call search integers with correct params', () => {
        const params = {
            base: undefined,
            col: 0,
            format: undefined,
            max: 0,
            min: 0,
            num: 0
        }
        randomIntegersStore().searchIntegers(params)

        expect(mocks.searchRandomIntegers).toHaveBeenCalledWith(params)
    })

    it('should set integers array', async () => {
        const params = {
            base: undefined,
            col: 0,
            format: undefined,
            max: 0,
            min: 0,
            num: 0
        }
        await randomIntegersStore().searchIntegers(params)

        expect(randomIntegersStore().integersArray).toEqual({1: 1})
    })
})
