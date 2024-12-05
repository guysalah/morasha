import { useParams, Link } from "react-router-dom";
import { useGetHill } from "../utils/getHill";
import classes from "./HillPage.module.css";
import GoogleMapSection from "./HillPageSections/GoogleMapSection";
import Section1 from "./HillPageSections/Section1";
import Section2 from "./HillPageSections/Section2";
import Section3 from "./HillPageSections/Section3";
import { useDispatch } from "react-redux";
import { hillActions } from "../store/Hill";
import { useEffect } from "react";

function HillPage() {
  const params = useParams();

  const hillId = params.hillId ? parseInt(params.hillId) : 0;
  const { data, error, loading } = useGetHill(hillId);
  const dispatch = useDispatch();

  let map = null;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(hillActions.updateHill([data]));
  }, [data, dispatch]);

  if (
    data !== null &&
    data.acf &&
    +data.acf.coordinates.latitude > 0 &&
    +data.acf.coordinates.longitude > 0
  ) {
    map = (
      <GoogleMapSection
        hillId={hillId}
        latitude={+data.acf.coordinates.latitude}
        longitude={+data.acf.coordinates.longitude}
      />
    );
  }

  return (
    <div className={classes.HillPage} key={hillId}>
      <Section1 loading={loading} />
      {map}
      <Section2 loading={loading} />
      <Section3 loading={loading} />
    </div>
  );
}

export default HillPage;
