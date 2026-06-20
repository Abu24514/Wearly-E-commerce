import React, { useState, useEffect, useContext } from 'react'
import { GoDotFill } from 'react-icons/go'
import { HiChevronDown, HiOutlineArrowRightOnRectangle, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2"
import { IoBagOutline, IoClose, IoSearchOutline } from 'react-icons/io5'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const { setShowSearch, getCartCount } = useContext(ShopContext)
    const { token, user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow = visible ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [visible])

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/collection', label: 'Collection' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
    ]

    return (
        <>
            <nav className="sticky top-0 z-30 bg-white flex items-center justify-between px-6 sm:px-10 py-5 border-b border-neutral-200">

                {/* Logo */}
                <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-gray-900 relative inline-flex items-end gap-0.5">
                    Wearly
                    <span className='mb-1'>
                        <GoDotFill size={8} className='text-red-500' />
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className='hidden md:flex gap-10'>
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `text-sm font-medium tracking-wide transition-colors duration-200
                                    ${isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`
                                }
                            >
                                {({ isActive }) => (
                                    <span className='flex flex-col items-center gap-1'>
                                        {label}
                                        <span className={`h-[1.5px] w-1/2 bg-gray-900 rounded-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div className='flex items-center gap-5'>
                    <button
                        onClick={() => setShowSearch(true)}
                        className='text-gray-600 hover:text-gray-900 transition-colors'>
                        <IoSearchOutline size={20} />
                    </button>

                    {token ? (
                        <>
                            {/* User Dropdown */}
                            <div className='relative group'>
                                <button className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer'>
                                    <HiOutlineUser size={18} className='text-gray-500' />
                                    <HiChevronDown size={13} className='text-gray-400' />
                                </button>

                                <div className='absolute right-0 top-full pt-2 hidden group-hover:block z-50'>
                                    <div className='bg-white border border-gray-100 rounded-xl w-44   overflow-hidden'>

                                        {/* Header */}
                                        <div className='px-3.5 py-3 border-b border-gray-100'>
                                            <p className='text-sm font-medium text-gray-800'>{user?.name || 'User'}</p>
                                            <p className='text-xs text-gray-400 mt-0.5'>{user?.email || ''}</p>
                                        </div>

                                        {/* Items */}
                                        <div className='py-1'>
                                            <p className='flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer transition-all'>
                                                <HiOutlineUser size={15} className='text-gray-400' />
                                                My Profile
                                            </p>
                                            <p className='flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer transition-all'>
                                                <HiOutlineShoppingBag size={15} className='text-gray-400' />
                                                Orders
                                            </p>

                                            <div className='my-1 border-t border-gray-100' />

                                            <p onClick={handleLogout} className='flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer transition-all'>
                                                <HiOutlineArrowRightOnRectangle size={15} className='text-red-400' />
                                                Logout
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Cart */}
                            <Link to='/cart' className='relative text-gray-600 hover:text-gray-900 transition-colors'>
                                <IoBagOutline size={20} />
                                <span className='absolute -top-1.5 -right-2 w-4 h-4 bg-gray-900 text-white rounded-full text-[9px] flex items-center justify-center font-display font-semibold leading-none'>
                                    {getCartCount()}
                                </span>
                            </Link>
                        </>
                    ) : (
                        <Link to='/login' className='text-gray-600 text-sm hover:text-gray-900 transition-colors border rounded-lg px-3 py-2'>
                            Login
                        </Link>
                    )}

                    {/* Hamburger */}
                    <button
                        onClick={() => setVisible(true)}
                        className='text-gray-600 hover:text-gray-900 transition-colors md:hidden'
                    >
                        <HiOutlineMenuAlt3 size={22} />
                    </button>
                </div>
            </nav>

            {/* Backdrop */}
            <div
                onClick={() => setVisible(false)}
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300
                    ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden
                transform transition-transform duration-300 ease-in-out
                ${visible ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className='flex flex-col h-full'>
                    {/* Sidebar Header */}
                    <div className='flex items-center justify-between px-6 py-5 border-b border-gray-100'>
                        <span className='font-display text-xl font-bold tracking-tight text-gray-900'>
                            Wearly
                        </span>
                        <button
                            onClick={() => setVisible(false)}
                            className='text-gray-500 hover:text-gray-900 transition-colors'
                        >
                            <IoClose size={22} />
                        </button>
                    </div>

                    {/* Sidebar Links */}
                    <div className='flex flex-col mt-4 px-4'>
                        {navLinks.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                onClick={() => setVisible(false)}
                                className={({ isActive }) =>
                                    `px-3 py-3.5 rounded-lg text-sm font-medium tracking-wide transition-all
                                    ${isActive ? 'text-gray-900 bg-gray-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar