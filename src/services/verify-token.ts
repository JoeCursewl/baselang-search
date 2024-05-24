export const verifyToken = async (url: string, authToken: string, setIsLoading: (bool: boolean) => void, setIsAuthorized: (state: boolean) => void) => {
    setIsLoading(true)
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }
        })

        if (!response.ok) {
            setIsAuthorized(false)
            throw new Error(`JWT Inválido! ${response.statusText}`)
        }

        setIsLoading(false)
        setIsAuthorized(true)
        return { result: "JWT Válido" }
    } catch (error) {
        setIsLoading(false)
        setIsAuthorized(false)
        return { error: error }
    }
}