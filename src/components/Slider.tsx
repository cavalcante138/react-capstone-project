import { ButtonLittleLemon } from "./ButtonLittleLemon"
import "./Slider.scss";
import restaurantImage from "../assets/restauranfood.jpg";

export const Slider = () => {
    return (
        <section className="slider">
            <div className="container">
            <div className="row">
                <article className="col">
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
                <div className="col">
                <img src={restaurantImage} alt="Restaurant" />
                </div>
            </div>
            </div>
        </section>
    )
}