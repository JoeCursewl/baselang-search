import './login.css'
import { useLoadingStore } from '../Loading-store'
import { useState } from 'react'
import { login } from '../services/login'
import { setCookie } from '../services/setCookie'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const [loading, setLoading] = useState(false)
    const { API_URL, setAuthToken } = useLoadingStore()
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        const { username, password } = e.target.elements

        const { error, result } = await login(`${API_URL}auth/login`, setLoading, username.value, password.value)
        
        if (error) {
            alert(error)
        }

        if (result) {
            setCookie('authToken', result.token, { maxAge: 7200, secure: true });
            setAuthToken(result.token)
            navigate('/')
        }
    }

    return (
        <section className='sec-login-cn'>
            <div className='sec-login-all'>

                <form className='form-login' onSubmit={(e) => {handleLogin(e)}}>

                    <div className='form-group'>
                        <label>Correo Electrónico</label>
                        <input type="text" name='username'/>
                    </div>

                    <div className='form-group'>
                        <label>Contraseña</label>
                        <input type="password" name='password'/>
                    </div>

                    {loading === false ? <div className='form-button'>
                        <button>Iniciar Sesión</button>
                    </div> : "Cargando..."}

                </form>

            </div>
        </section>
    )
} 