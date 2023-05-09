import { SiSolidity } from 'react-icons/si'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <header className="header font-Handlee shadow-md shadow-pink/40 pb-3">
                <div className="container d_flex flex flex-row justify-between px-10">
                    <div className="categories d_flex flex flex-row gap-2 bg-slate-500/30 h-12  rounded-md mt-1 text-center justify-center items-center">
                        <SiSolidity className='text-lg' />
                        <h4 className='text-lg'> Categorias </h4>
                        <FiChevronDown className='text-2xl' />
                    </div>

                    <div className='navLink flex flex-row items-center'>
                        <ul className={MobileMenu ? "nav" : "link- flex flex-row gap-5 capitalize "} onClick={() => setMobileMenu(false)}>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/pages">Pages</a>
                            </li>
                            <li>
                                <a href="/user">User Acount</a>
                            </li>
                            <li>
                                <a href="/vendor">Vendor Acount</a>
                            </li>
                            <li>
                                <a href="/track">Track  my  order</a>
                            </li>
                            <li>
                                <a href="/Contact">Contact</a>
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <FaTimes className=' text-2xl' /> : <FiMenu className='text-2xl
                            '/>
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar