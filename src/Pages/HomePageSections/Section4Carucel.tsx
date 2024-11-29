import { useRef, useCallback, useState } from "react";
import classes from "./Section4Carucel.module.css";
import { Hill } from "../../store/Hills"; // interface of hill
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Navigation styles
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import { plusIcon } from "../../assest/icons/plusIcon";
import { Link } from "react-router-dom";

interface CaruselProps {
  caruselItems: Hill[];
}

const Carusel: React.FC<CaruselProps> = ({ caruselItems }) => {
  const sliderRef = useRef<SwiperCore | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slidePrev(); // Access the Swiper instance directly
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slideNext(); // Access the Swiper instance directly
  }, []);

  const updateNavigationState = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const leftArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 37.635 37.636"
    >
      <g id="Group_1" data-name="Group 1" transform="translate(-422 340)">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M37.635,18.818A18.817,18.817,0,1,1,18.817,0,18.818,18.818,0,0,1,37.635,18.818"
          transform="translate(422 -340)"
          fill="#5a3622"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M21.778,31.248l3.08-3.08-9.35-9.35,9.35-9.35-3.08-3.081L9.348,18.818Z"
          transform="translate(422 -340)"
          fill="#fff"
        />
      </g>
    </svg>
  );

  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 37.635 37.636"
    >
      <g id="Group_2" data-name="Group 2" transform="translate(-1785.732 340)">
        <path
          id="Path_3"
          data-name="Path 3"
          d="M1363.732,18.818a18.817,18.817,0,1,1,18.818,18.818,18.818,18.818,0,0,1-18.818-18.818"
          transform="translate(422 -340)"
          fill="#5a3622"
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M1379.589,6.387l-3.08,3.08,9.35,9.35-9.35,9.35,3.08,3.081,12.43-12.431Z"
          transform="translate(422 -340)"
          fill="#fff"
        />
      </g>
    </svg>
  );

  let pageData: any = <div>loading</div>;
  if (caruselItems.length > 0) {
    pageData = (
      <div className={classes.caruselContainer}>
        <div
          className={`${classes.arrowButton} ${classes.rightArrowButton} ${
            isBeginning ? classes.arrowButtonDisabeled : undefined
          }`}
          onClick={handlePrev}
        >
          {rightArrow}
        </div>
        <div
          className={`${classes.arrowButton} ${classes.leftArrowButton} ${
            isEnd ? classes.arrowButtonDisabeled : undefined
          }`}
          onClick={handleNext}
        >
          {leftArrow}
        </div>

        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          pagination={false}
          onSwiper={(swiper) => (sliderRef.current = swiper)} // Assign the Swiper instance
          onSlideChange={(swiper) => updateNavigationState(swiper)} // Update state on slide change
          navigation={false}
          modules={[Navigation]}
          breakpoints={{
            501: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
        >
          {caruselItems.map((item) => {
            return (
              <SwiperSlide>
                <HillItem
                  id={item.id}
                  title={item.title}
                  backImageUrl={item.featuredImage}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }

  return <div>{pageData}</div>;
};

export default Carusel;

interface HillItemProps {
  id: number; // id of the hill in the database
  title: string;
  backImageUrl: string;
}
const HillItem: React.FC<HillItemProps> = ({ id, title, backImageUrl }) => {
  const style = { backgroundImage: `url(${backImageUrl})` };
  return (
    <Link key={id} to={`/hills/${id}`} replace className={classes.CaruselItem} style={style}>
      <div className={classes.hoverIcon}>{plusIcon}</div>
      <div className={classes.ovelay}></div>
      <div className={classes.title}>{title}</div>
    </Link>
  );
};
