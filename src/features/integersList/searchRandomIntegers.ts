import { POST } from '@/utils/http'

export type SearchRandomIntegersParams = {
    base: 2 | 8 | 10 | 16
    col: number
    format: 'plain' | 'html'
    max: number
    min: number
    num: number
}

export type SearchRandomIntegersDependencies = {
    httpPost: typeof POST
}

export type SearchRandomIntegersResponse = (params: SearchRandomIntegersParams) => Promise<string[]>

export const createSearchRandomIntegers =
    (dependencies: SearchRandomIntegersDependencies): SearchRandomIntegersResponse =>
    async (params) => {
        const { num, min, max, col, base, format } = params
        const { httpPost } = dependencies
        return await httpPost(
            `/integers/?num=${num}&min=${min}&max=${max}&col=${col}&base=${base}&format=${format}`,
            null
        )
    }

export const searchRandomIntegers: SearchRandomIntegersResponse = createSearchRandomIntegers({
    httpPost: POST
})
