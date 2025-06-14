import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useSearch } from '@tanstack/react-router'

const AuthPage = () => {
    const search = useSearch({ from: '/auth' })
    const [login, setLogin] = useState(true)

    useEffect(() => {
        if (search.mode === 'register') setLogin(false)
        else setLogin(true)
    }, [search.mode])

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
        </div>
    )
}

export default AuthPage