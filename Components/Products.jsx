import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classes from "../modules/Products.module.scss";
import Eye from "../img/view_709612.png";
import Heart from "../img/heart_1077035.png";
import StarGray from "../img/icons8-star-50.png";
import StarYellow from "../img/icons8-star-48.png";
import Next from '../img/arrow.png';
import Back from '../img/back.png';

function FetchAllItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/Shop/techniques");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        const itemsWithDiscount = data.map((item) => {
          const discountPercentage = calculateDiscountPercentage(
            item.oldPrice,
            item.price
          );
          return { ...item, discountPercentage };
        });
        setItems(itemsWithDiscount);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
  }, []);

  const calculateDiscountPercentage = (oldPrice, price) => {
    if (oldPrice && price) {
      const discount = ((oldPrice - price) / oldPrice) * 100;
      return "-" + Math.round(discount) + "%";
    }
    return "0%";
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const swiperRef = React.useRef(null);

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  return (
    <div className={classes["Box"]}>
      <div className={classes["buttons"]}>
        <button onClick={handlePrevClick}><img src={Back} alt="Back" /></button>
        <button onClick={handleNextClick}><img src={Next} alt="Next" /></button>
      </div>
      <div className={classes["box-row"]}>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {items.map((item) => (
            <SwiperSlide key={item._id}>
              <div className={classes["child"]}>
                <div className={classes["child1"]}>
                  <p className={classes["Discount"]}>{item.discountPercentage}</p>
                  {item.imageData && (
                    <img
                      className={classes["image"]}
                      src={`data:${item.imageContentType};base64,${arrayBufferToBase64(item.imageData.data)}`}
                      alt={item.name}
                    />
                  )}

                  <div className={classes["inside"]}>
                    <img className={classes["icon"]} src={Heart} alt="Heart icon" />
                    <img className={classes["icon"]} src={Eye} alt="Eye icon" />
                  </div>
                </div>
                <div className={classes["info"]}>
                  <h2>{item.name}</h2>
                  <div className={classes["Prices"]}>
                    <p className={classes["New"]}>${item.price}</p>
                    <p className={classes["Old"]}>${item.oldPrice}</p>
                  </div>
                  <div className={classes["rating"]}>
                    <img className={classes["star"]} src={StarYellow} alt="Yellow star" />
                    <img className={classes["star"]} src={StarYellow} alt="Yellow star" />
                    <img className={classes["star"]} src={StarYellow} alt="Yellow star" />
                    <img className={classes["star"]} src={StarYellow} alt="Yellow star" />
                    <img className={classes["star"]} src={StarGray} alt="Gray star" />
                    <p>({item.rating})</p>
                  </div>
                </div>
                <button className={classes["addToCart"]}>Add to Cart</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FetchAllItems;
