import { useCallback, useRef, MutableRefObject, useState } from "react";
import classes from "../HillPage.module.css";
import { Link } from "react-router-dom";
import clientConfig from "../../clientConfig";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Hill as HillType } from "../../types/hill";
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";

import nonTopImage from "../../assest/non_top_image.jpg";

interface Section1Props {
  loading: boolean;
}

const Section1: React.FC<Section1Props> = ({ loading }) => {
  const data = useSelector(
    (state: { hill: { hill: HillType } }) => state.hill.hill
  );

  const sliderRef = useRef() as MutableRefObject<SwiperCore | null>;

  const loader = (
    <div className={classes.section1Container}>
      <div style={{ padding: "40px" }}>
        <Skeleton
          height={500}
          width="100%"
          // baseColor={clientConfig.secondaryColor}
          // highlightColor="white"
          style={{ borderRadius: "20px", marginTop: "40px" }}
        />
      </div>
    </div>
  );

  if (loading || Object.keys(data).length === 0) {
    return loader;
  }

  const myPagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span  class="' +
        className +
        " " +
        classes.paginationBullet +
        '" style="background-color: ' +
        clientConfig.secondaryColor +
        ';">' +
        (index + 1) +
        "</span>"
      );
    },
  };

  return (
    <div className={classes.section1Container}>
      <Link
        to={data.acf.donate_url}
        target="_blank"
        style={{ backgroundColor: clientConfig.secondaryColor }}
        className={classes.donateButton}
      >
        {data.title ? `תרומה ל${data.title} >>` : ""}
      </Link>
      <div style={{ height: "30px" }}></div>
      <div className={classes.topImage}>
        <h1
          style={{ backgroundColor: clientConfig.secondaryColor, zIndex: 1 }}
          className={classes.topImageTitle}
        >
          {data.title?.split("גבעת").map((part: string, index: number) =>
            index === 0 ? (
              <>
                גבעת
                <br />
                {part}
              </>
            ) : (
              part
            )
          )}
        </h1>

        {data.acf.top_image.length > 1 ? (
          <Swiper
            style={{ zIndex: 0 }}
            onSwiper={(swiper) => {
              sliderRef.current = swiper;
              swiper.autoplay.start();
            }}
            className={classes.topImageContent}
            slidesPerView={1}
            pagination={myPagination}
            modules={[Navigation, Autoplay, EffectFade, Pagination]}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
          >
            {data.acf.top_image.map((image, index) => {
              return (
                <SwiperSlide
                  className={classes.topImageContent}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  key={index}
                ></SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div
            style={{
              backgroundImage: `url(${
                data.acf.top_image[0] ? data.acf.top_image[0] : nonTopImage
              })`,
            }}
            className={classes.topImageContent}
          ></div>
        )}
      </div>
      <div className={classes.aboutTextContainer}>
        <div
          style={{ color: clientConfig.darkBrownColor }}
          className={classes.aboutText}
        >
          {parse(data.acf.about_text)}
        </div>
      </div>
    </div>
  );
};

export default Section1;
