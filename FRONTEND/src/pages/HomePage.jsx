import React from 'react'
import UrlForm from '../components/UrlForm'
import { useNavigate } from '@tanstack/react-router'

const HomePage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate({ to: '/auth', search: { mode: 'login' } })
  }

  const handleRegister = () => {
    navigate({ to: '/auth', search: { mode: 'register' } })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center mb-2 text-blue-700">Welcome to URL Shortener!</h1>
        <p className="text-center text-gray-700 mb-4 text-lg">
          Instantly shorten your long links and share them with ease.
        </p>
        <div className="mb-4 text-sm text-gray-600 text-center">
          <span className="font-semibold">How it works:</span> Paste your long URL below, click "Shorten", and get a shareable short link in seconds!
        </div>
        <UrlForm />

        <div className="mt-6 text-xs text-gray-400 text-center">
          No account needed to shorten links. Register to track your URLs!
        </div>
      </div>
    </div>
  )
}

export default HomePage