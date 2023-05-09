import Categories from "./Categories"
import SliderCard from "./SliderCard"


const Home = () => {
    return (
        <>
            <section className="Home">
                <div className="container flex flex-row justify-between">
                    <Categories/>
                    <SliderCard/>
                </div>
            </section>
        </>
    )
}

export default Home