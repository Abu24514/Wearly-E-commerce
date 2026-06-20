import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState('')
    const [user, setUser] = useState(null)

    const login = (tokenValue, userData) => {
        setToken(tokenValue)
        setUser(userData)
    }

    const logout = () => {
        setToken('')
        setUser(null)
    }

    const value = { token, user, login, logout }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;