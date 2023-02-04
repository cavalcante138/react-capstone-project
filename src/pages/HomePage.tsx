import { About } from "../components/About";
import { Slider } from "../components/Slider";
import { Specials } from "../components/Specials";
import { Testimonials } from "../components/Testimonials";

export const HomePage = () => {
    return (
        <main className="container-fluid">
            <Slider />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}