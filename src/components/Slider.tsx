import { ButtonLittleLemon } from "./ButtonLittleLemon"
import "./Slider.scss";
import restaurantImage from "../assets/restauranfood.jpg";

export const Slider = () => {
    return (
        <section className="slider">
            <div className="container">
            <div className="row">
                <article className="col-12 col-md-12 col-lg-6">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    We are a family owned mediterranean restaurant, focused on traditional recipes 
                    served with a modern twist.
                    </p>
                    <ButtonLittleLemon
                        title="Reserve a Table" 
                        onClick={() => console.log("Reserve a table")}
                        />
                </article>
                <div className="col-12 col-md-12 col-lg-6">
                <img src={restaurantImage} alt="Restaurant" />
                </div>
            </div>
            </div>
        </section>
    )
}