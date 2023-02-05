import { ImStarEmpty, ImStarFull } from "react-icons/im"
import avatar from "../assets/Mario-and-Adrian-A.jpg";

export const TestimonialsCard = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <div className="testimonials-content-star-rating">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
        </div>
        <div className="testimonials-content-author">
          <div className="testimonials-content__author__image">
            <img src={avatar} alt="Author" />
          </div>
          <div className="testimonials-content__author__name">
            <h3>John Doe</h3>
            <p>CEO, Company</p>
          </div>
        </div>
        <div className="testimonials-content-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet
            nisl.
          </p>
        </div>
      </div>
    </div>)
}