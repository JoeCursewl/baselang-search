export const infoProfile = async (url: string, setLoading: (state: boolean) => void, authToken: string, setProfile: (state: any) => void) => {
    setLoading(true)
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const data = await response.json()
        setLoading(false)
        setProfile(data)
        return { result: data }
    } catch (error) {
      console.log(error)
      return { error: error }  
    }
}