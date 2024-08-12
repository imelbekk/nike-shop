import React from "react";
import "../../ui/Home.css";
import Nike from "../../assets/nike.mp4";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import nike_jump2 from "../../assets/nike_sport/nike G.T jump 2.png";
import nike_zoom from "../../assets/nike_sport/nike zoom.png";
import nike_mer_vapor from "../../assets/nike_sport/nike mercurial vapor.png";
import nike_merc from "../../assets/nike_sport/nike mercurial.png";
import nike_phantom from "../../assets/nike_sport/nike phantom.png";
import nike_victory from "../../assets/nike_sport/nike victory.png";
import air_force_1 from "../../assets/nike_classic/air force.png";
import air_vapor from "../../assets/nike_classic/air vapor.png";
import air_max from "../../assets/nike_classic/air max.png";
import blazer from "../../assets/nike_classic/blazer.png";
import dunk from "../../assets/nike_classic/dunk.png";
import vemero from "../../assets/nike_classic/vemero.png";
import dunk_big from "../../assets/dunk.webp";

export default function home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(max-width: 1135px)':{
        slides:{
          perView: 2,
          spacing: 15
        },
      },
      '(max-width: 570px)':{
        slides:{
          perView: 1,
          spacing: -170
        },
      },
      '(max-width: 490px)':{
        slides:{
          perView: 1,
          spacing: -100
        },
      },
      '(max-width: 410px)':{
        slides:{
          perView: 1,
          spacing: -50
        },
      },
      '(max-width: 490px)':{
        slides:{
          perView: 1,
          spacing: -100
        },
      },
    },
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div className="container">
      <div className="video">
        <video src={Nike} autoPlay muted loop></video>
      </div>

      <div className="title">
        <h6>Win on Air</h6>

        <p>
          Meet the next generation of Nike Air. Engineered to the exact
          specifications of championship athletes
        </p>

        <div className="air_buttons">
          <button>Experience Air</button>
          <button>Shop Air</button>
        </div>
      </div>

      <div className="nike_sport">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src={nike_jump2} alt="nike" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={nike_zoom} alt="nike" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={nike_mer_vapor} alt="nike" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src={nike_merc} alt="" />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src={nike_phantom} alt="nike" />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src={nike_victory} alt="nike" />
          </div>
        </div>
      </div>

      <div className="one_air_force">
        <img src={dunk_big} alt="nike" className="dunk_big" />
      </div>

      <div className="shop_classics">
        <h6>Shop by Classics</h6>

        <div className="classic_air">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1 classic_card">
              <img src={air_force_1} alt="nike" />
              <h1>Air force</h1>
            </div>
            <div className="keen-slider__slide number-slide2 classic_card">
              <img src={air_vapor} alt="nike" />
              <h1>Air Vapor</h1>
            </div>
            <div className="keen-slider__slide number-slide3 classic_card">
              <img src={air_max} alt="nike" />
              <h1>Air Max</h1>
            </div>
            <div className="keen-slider__slide number-slide4 classic_card">
              <img src={blazer} alt="nike" />
              <h1>Blazer</h1>
            </div>
            <div className="keen-slider__slide number-slide5 classic_card">
              <img src={vemero} alt="nike" />
              <h1>Vemero</h1>
            </div>
            <div className="keen-slider__slide number-slide6 classic_card">
              <img src={dunk} alt="nike" />
              <h1>Dunk</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
