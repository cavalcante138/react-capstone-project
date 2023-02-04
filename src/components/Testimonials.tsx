import "./Testimonials.scss";
import { TestimonialsCard } from "./TestimonialsCard";

export const Testimonials = () => {
    return (
        <section className="testimonials">
            <article className="container">
                <div className="row m-4">
                    <div className="col-12">
                        <h2>Testimonials</h2>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-lg-3">
                        <TestimonialsCard />
                    </div>
                    <div className="col-12 col-lg-3">
                        <TestimonialsCard />
                    </div>
                    <div className="col-12 col-lg-3">
                        <TestimonialsCard />
                    </div>
                    <div className="col-12 col-lg-3">
                        <TestimonialsCard />
                    </div>
                </div>
            </article>
        </section>
    )
}