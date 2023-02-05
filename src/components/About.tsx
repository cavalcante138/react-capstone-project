import restaurantImage from "../assets/restaurant.jpg";
import restaurantImage2 from "../assets/restaurant-b.jpg";
import "./About.scss"

export const About = () => {
    return (
        <section className="about container">
            <div className="row">
                <article className="col-12 col-lg-6">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat 
                    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </article>
                <div className="col-12 col-lg-6">
                  <div className="about-img-container">
                      <img src={restaurantImage} alt="Little Lemon restaurant view" className="about-img about-image-1" />
                      <img src={restaurantImage2} alt="Little Lemon restaurant view" className="about-img about-image-2" />
                  </div>
                </div>
            </div>
        </section>
    )
}
