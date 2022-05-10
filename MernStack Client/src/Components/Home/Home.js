import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../../img/slide/1.jpg";
import slide2 from "../../img/slide/2.jpg";
import slide3 from "../../img/slide/3.jpg";
import InventoryItem from "../Inventory/InventoryItem";

function Home() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide1} class="d-block w-100" alt="slide1" />
          </div>
          <div class="carousel-item">
            <img src={slide2} class="d-block w-100" alt="slide2" />
          </div>
          <div class="carousel-item">
            <img src={slide3} class="d-block w-100" alt="slide3" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div>

        <InventoryItem></InventoryItem>
        <Link to="/Inventory" class="btn btn-primary">get Inventory</Link>

      </div>
    </div>
  );
}

export default Home;
