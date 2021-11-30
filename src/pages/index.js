import Hero from "../components/Hero"
import Header from "../components/Header"
import Section from "../components/Section2"
import Section3 from "../components/Section3"
import SmoothScroll from "../utils/smoothScroll"

const PageOne = () => {
    return (
        <>
            <Header />
            <SmoothScroll>
                <Hero />
                <Section3 />
                <Section />
            </SmoothScroll>
        </>
    )
}

export default PageOne
