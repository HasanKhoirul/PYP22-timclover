import React from "react";
import ImageHero from "assets/images/img-hero.svg";

import Button from "elements/Button";

export default function Hero(props) {
  function showInformation() {
    window.scrollTo({
      top: props.refInformation.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <div className="hero pt-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="font-weight-bold line-height-1 mt-3">
              SIMPUL Adalah <br />
              Aplikasi Terpercaya Untuk Kamu Belajar!!
            </h1>
            <p
              className="mb-4 font-weight-light w-75"
              style={{ lineHeight: "170%" }}
            >
              Tempat Pembelajaran Di Bidang Teknologi 
              Seperti : NFT, TRADING DAN FINANCE
            </p>

            <Button
              className="btn px-5 btn-show"
              hasShadow
              isPrimary
              onClick={showInformation}
            >
              Lihat Selengkapnya
            </Button>
          </div>
          <div className="col d-none d-md-block pl-5">
            <div>
              <img src={ImageHero} style={{ width: 500 }} alt="Img hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
