export const httpClient = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
    const response = await fetch(input, init)
    if (!response.ok) {
        throw new Error(`[${response.status}] ${response.statusText}`)
    }
    return response
}
