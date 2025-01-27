import { useRef, useCallback, useState } from "react";
import classes from "./Section4Carucel.module.css";
import { Hill as HillType } from "../../types/hill";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import { Navigation } from "swiper/modules";
import { plusIcon } from "../../assest/icons/plusIcon";
import { Link } from "react-router-dom";
import { leftArrow, rightArrow } from "../../utils/icons";
interface CaruselProps {
  caruselItems: HillType[];
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
          slidesPerView={1}
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
                  key={item.id}
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
  const splitTitle = title.split("גבעת").map((part, index) => (
    <span key={index}>
      {part}
      {index < title.split("גבעת").length - 1 && <span>גבעת<br /></span>}
    </span>
  ));
  return (
    <Link
      key={id}
      to={`/hills/${id}`}
      className={classes.CaruselItem}
      style={style}
    >
      <div className={classes.hoverIcon}>{plusIcon}</div>
      <div className={classes.ovelay}></div>
      <div className={classes.title}>{splitTitle}</div>
    </Link>
  );
};
