import Logo from '/public/Logo.png'
import { FaSearch, FaShoppingBasket } from 'react-icons/fa'

const Search = () => {
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
    return (
        <>
            <section className="search px-10">
                <div className="flex flex-row justify-between items-center">
                    <div className="logo whith ">
                        <img src={Logo} alt='' width={65} />
                    </div>

                    <div className="search-box flex flex-row justify-center items-center rounded-full border-violet border-2  py-2 font-Handlee gap-10 px-10 mx-32 w-1/2">
                        <FaSearch className=' text-purple text-xl flex flex-row' />
                        <input type='text' placeholder='Buscar producto' className=' font-Handlee w-full' />
                        <span className='border-l-2 border-purple px-2'>Categorias</span>
                    </div>

                    <div className='icon'>
                        <div className='cart'>
                            <a href='/cart' className='flex flex-row justify-center'>
                                <FaShoppingBasket className='text-3xl text-purple flex flex-row' />
                                <span className='relative bottom-28 top-0 right-3 w-5 h-5 rounded-full text-center bg-red-600 text-white'>0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search