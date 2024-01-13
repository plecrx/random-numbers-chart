import { beforeEach, describe, expect, it, vitest } from 'vitest'
import {
    createSearchRandomIntegers,
    SearchRandomIntegersDependencies,
    SearchRandomIntegersParams
} from '../../../src/features/integersList/searchRandomIntegers'
import { Mocks } from '../../utils'

describe('Search Random Integers Feature', () => {
    let mocks: Mocks<SearchRandomIntegersDependencies>
    let searchRandomIntegers: (params: SearchRandomIntegersParams) => Promise<string[]>
    beforeEach(() => {
        mocks = { httpPost: vitest.fn() }
        searchRandomIntegers = createSearchRandomIntegers(mocks)
    })

    it('should properly call POST', async () => {
        const params: SearchRandomIntegersParams = {
            base: 2,
            col: 1,
            format: 'plain',
            max: 10,
            min: 0,
            num: 200
        }

        await searchRandomIntegers(params)

        expect(mocks.httpPost).toHaveBeenCalledWith(
            `/integers/?num=200&min=0&max=10&col=1&base=2&format=plain`,
            null
        )
    })
})
