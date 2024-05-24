export const login = async (url: string, setLoading: (state: boolean) => void, username: string, password: string) => {
    setLoading(true)
    try {

        if (username.trim() === '' || password.trim() === '') {
            throw new Error('Por favor, introduce un nombre de usuario y una contraseña')
        }

        if (username.length < 3 || password.length < 3) {
            throw new Error('El nombre de usuario y la contraseña deben tener al menos 3 caracteres')
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.trim(),
                password: password.trim()
            })
        })

        if (!response.ok) {
            throw new Error(`Error al Iniciar Sesión: ${response.statusText}`)
        }

        const data = await response.json()
        setLoading(false)
        return { result: data }

    } catch (error) {
        setLoading(false)
        return { error: error }
    }
}