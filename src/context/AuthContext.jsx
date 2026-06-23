import { createContext, useState, useEffect } from 'react'
import userAxios from '../configs/api'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getMe = async () => {
            try {
                const { data } = await userAxios.get('/api/user/me')
                setUser(data.user)
            } catch (error) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        getMe()
    }, [])

    const login = (userData) => {
        setUser(userData)
    }

    const logout = async () => {
        await userAxios.post('/api/user/logout')
        setUser(null)
    }

    if (loading) return null

    const value = { user, login, logout }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;