import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styles.css";
import { Link } from "react-router-dom";



const content = [
  {
    title: "Apple se lance dans l'architecture ARM ! Arriverons t-ils à tenir leur promesse de puissance ?",
    description:
      "En rompant leur contrat avec Intel, Apple s'engage à l'avenir à fournir toute leur gamme en puce avec architecture ARM. La puissance sera t-elle au rendez-vous ?",
    button: "Lire plus",
    image: "https://i.imgur.com/BCtCqNO.jpg",
    user: "L'équipe HardShop",
    userProfile: "https://imgur.com/u7h24fM.jpg",
  },
  {
    title: "Ca y est ! Les Nouvelles RTX 3000 séries ont été annoncée !",
    description:
      "Venez consulter les trois futures références de NVidia. J'appelle la 3070, la 3080 et la monstrueuse RTX 3090 avec ses 24 Go de GDDR6X",
    button: "Découvrir",
    image: "https://i.imgur.com/q2MZEWb.jpg",
    user: "L'équipe HardShop",
    userProfile: "https://imgur.com/u7h24fM.jpg",
  },
  {
    title: "La gamme Altyk",
    description:
      "Des PC tout fait ! Pour tout les budgets !",
    button: "Buy now",
    image: "https://i.imgur.com/RrJpgvy.jpg",
    user: "L'équipe HardShop",
    userProfile: "https://imgur.com/u7h24fM.jpg",
  },
];

class Slid extends Component {
  render() {
    return (
      <div>
        <Slider className="slider-wrapper" autoplay={3000}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Link to="/News"><button>{item.button}</button></Link>
              </div>
              <section>
                <img src={item.userProfile} alt={item.user} />
                <span>
                  Posté par <strong>{item.user}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Slid;
