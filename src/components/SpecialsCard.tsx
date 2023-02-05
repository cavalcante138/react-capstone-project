import { MdDeliveryDining } from 'react-icons/md';


interface Props{
    title: string;
    price: number;
    description: string;
    image: string;
    imageAlt: string;
    onClick: () => void;
}

export const SpecialsCard = ({
title,
price,
description,
image,
imageAlt,
onClick
}: Props) => {
    return (
        <div className="special">
        <div className="special-image-container">
            <img src={image} alt={imageAlt} />
        </div>
        <article className="special-info-container">
            <div className="special-info-container-desc">
            <div className="special-title-container">
                <h4>{title}</h4>
                <span className="price">
                    {`$${price.toFixed(2)}`}
                </span>
            </div>
            <p className="mt-2 special-info-description">
            {description}
            </p>
            </div>
            <button 
            aria-label="On Click"
            onClick={onClick}
            className="order-delivery-btn"
            >Order a delivery
            <MdDeliveryDining
            size={26}
            />
            </button>
        </article>
    </div>
    )
}