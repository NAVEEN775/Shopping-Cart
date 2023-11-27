import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Banner() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100 h-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmU1t_Al8s1BUaFjbwNU75lb-BOE9XvEVGQ&usqp=CAU"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://avatars.githubusercontent.com/u/32949016?s=280&v=4"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="..." alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
