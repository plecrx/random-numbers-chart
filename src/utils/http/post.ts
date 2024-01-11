import { httpClient } from '@/utils/http/httpClient.ts'
export const POST = async (endpoint: string, body?: unknown): Promise<string[]> => {
    const url = `${import.meta.env.VITE_API}${endpoint}`
    const response = await httpClient(url, {
        method: 'Post',
        body: JSON.stringify(body) || null,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    const contentType = response.headers.get('Content-Type')

    if (contentType === 'text/plain;charset=UTF-8') {
        if (!response.body) {
            return []
        }

        return decodeReadableStream(response.body)
    }

    /* if (contentType === 'application/json') return response.json() */

    throw new Error('Type de contenu non pris en charge')
}

const decodeReadableStream = async (readableStream: ReadableStream): Promise<string[]> => {
    const reader = readableStream.getReader()
    const chunks: Uint8Array[] = []

    let isDone = false

    while (!isDone) {
        const { done, value } = await reader.read()

        if (done) {
            isDone = true
        }

        if (value) {
            chunks.push(value)
        }
    }

    reader.releaseLock()

    return decodeChunksToStringArray(chunks)
}

const decodeChunksToStringArray = (chunks: Uint8Array[]): string[] => {
    return (
        chunks.reduce(
            (acc: string[], chunk: Uint8Array) =>
                acc.concat(new TextDecoder().decode(chunk.buffer).split('\n').slice(0, -1)),
            []
        ) || []
    )
}
