import { About } from "./About";
import { Slider } from "./Slider";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";

export const Main = () => {
    return (
        <main className="container-fluid">
            <Slider />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}