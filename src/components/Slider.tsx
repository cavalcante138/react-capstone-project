import { ButtonLittleLemon } from "./ButtonLittleLemon"
import "./Slider.scss";
import restaurantImage from "../assets/restauranfood.jpg";
import { useHistory } from "react-router-dom";

export const Slider = () => {

    const history = useHistory();

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
                        onClick={() => history.push("/booking")}
                        />
                </article>
                <div className="col-12 col-md-12 col-lg-6">
                <img src={restaurantImage} alt="The best food" />
                </div>
            </div>
            </div>
        </section>
    )
}