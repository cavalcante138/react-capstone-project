import "./Specials.scss"
import { ButtonLittleLemon } from "./ButtonLittleLemon"
import special1 from "../assets/greek-salad.jpg";
import special2 from "../assets/bruchetta.svg";
import special3 from "../assets/lemon-dessert.jpg";



import { SpecialsCard } from "./SpecialsCard";

export const Specials = () => {
    return (
        <section className="specials container">
            <div className="row">
                <div className="special-title-container special-marketing-phrase">
                    <h2>This weeks specials!</h2>
                    <ButtonLittleLemon 
                    title={"Online Menu"} 
                    onClick={
                        () => console.log("Online Menu")
                    }
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-lg-4">
                    <SpecialsCard
                    title={"Greek salad"}
                    description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}
                    image={special1}
                    imageAlt={"Special"}
                    price={12.99}
                    onClick={
                        () => console.log("Order Now")
                    }
                    />
                </div>
                <div className="col-12 col-lg-4">
                    <SpecialsCard
                    title={"Bruchetta"}
                    description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}
                    image={special2}
                    imageAlt={"Special"}
                    price={5.99}
                    onClick={
                        () => console.log("Order Now")
                    }
                    />
                </div>
                <div className="col-12 col-lg-4">
                <SpecialsCard
                    title={"Lemon Dessert"}
                    description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    image={special3}
                    imageAlt={"Special"}
                    price={5}
                    onClick={
                        () => console.log("Order Now")
                    }
                />
                </div>
            </div>
        </section>
    )
}