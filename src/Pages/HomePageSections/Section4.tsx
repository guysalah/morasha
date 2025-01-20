import { useEffect } from "react";
import clacess from "./Section4.module.css";
import { useGetHills } from "../../utils/getHills";
import hillsTopImage from "../../assest/home/hills_top_image.png";
import { useDispatch, useSelector } from "react-redux";
import { hillsActions } from "../../store/Hills";
import Carusel from "./Section4Carucel";
import { Hill as HillType } from "../../types/hill";

interface Section4Props {}

const Section4: React.FC<Section4Props> = () => {
  interface RootState {
    hills: { hills: HillType[] };
  }

  // Access the hills from Redux
  const hills = useSelector((state: RootState) => state.hills.hills);

  const dispatch = useDispatch();
  const { data, error, loading } = useGetHills();
  //   console.log(data)

  useEffect(() => {
    // If hills array is empty, fetch new data and update the Redux store
    if (hills.length === 0 && data && !loading) {
      dispatch(hillsActions.updateHills(data)); // Update the Redux state when data is available
    }
  }, [data, loading, hills, dispatch]);

  return (
    <div className={clacess.container}>
      <div className={clacess.topImage}>
        <img src={hillsTopImage} alt="Hills" />
      </div>
      <div className={clacess.title}>הגבעות שלכם</div>
      <Carusel caruselItems={hills} />
    </div>
  );
};

export default Section4;
