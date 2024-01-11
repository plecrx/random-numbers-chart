import { POST } from '@/utils/http'

export type SearchRandomIntegersParams = {
    base: 2 | 8 | 10 | 16
    col: number
    format: 'plain' | 'html'
    max: number
    min: number
    num: number
}
export const searchRandomIntegers = async (params: SearchRandomIntegersParams): Promise<string[]> => {
    const { num, min, max, col, base, format } = params

    return await POST(
        `/integers/?num=${num}&min=${min}&max=${max}&col=${col}&base=${base}&format=${format}`,
        null
    )
}
