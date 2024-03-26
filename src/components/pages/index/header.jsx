import React, { useEffect, useRef } from "react";
import img from "../../../assets/images/230724_WORKOUTMEALS3503_crop_300x.webp";
import persone from "../../../assets/images/hero_homepage_large_4d9a636f-2b95-4aa5-a834-540a7d680e9c.webp";
import { headerAnimation } from "../../animations/home animations/header";

export const Header = () => {
  let myHeaderSection = useRef(null);

  useEffect(() => {
    headerAnimation(myHeaderSection);
  }, []);
  return (
    <section className="header" ref={(e) => (myHeaderSection = e)}>
      <div className="image-with-text">
        <div className="text">
          <h1 className="title">
            FEED <b>YOUR</b> POTENTIAL
          </h1>
          <h3 className="mini-title">STRONGER.FASTER.FITTER.FULLER.</h3>
          <p className="descrption">
            Delicious, nutritious, ready-to-go healthy meals, designed by
            experts to get you closer to your goals at any level. Let's do this
          </p>
          <div className="btn">About US</div>
        </div>
        <div className="image">
          <img src={persone} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="left-side">
          <h1 className="title">Step Up to</h1>
          <div className="img">
            <img src={img} alt="img" />
          </div>
          <h1 className="title">the plate</h1>
        </div>
        <div className="right-side">
          <h2 className="title">About Our Meals</h2>
          <div className="text">
            Feed your run, your ride, your laps, your lifts. Feed your race day,
            your rest day, your good day, your bad days. Catering to a huge
            range of dietaries, our ever-changing menu of ready-to-go sports
            meals make it easy to keep on top of what you eat.
          </div>
        </div>
      </div>
      {/* <div className="background"></div> */}
    </section>
  );
};
