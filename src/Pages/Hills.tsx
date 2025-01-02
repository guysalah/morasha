import { useEffect, useMemo } from "react";
import { useGetHills } from "../utils/getHills";
import { useSelector, useDispatch } from "react-redux";
import { hillsActions } from "../store/Hills";
import { Hill as HillType } from "../types/hill";
import logoPattern from "../assest/patterns/logo_pattern.jpg";
import styles from "./Hills.module.css";
import HillItem from "./HillItem";

interface RootState {
  hills: { hills: HillType[] };
}

const Hills: React.FC = () => {
  const hills = useSelector((state: RootState) => state.hills.hills);
  console.log(hills);
  const dispatch = useDispatch();

  const shouldFetchHills = hills.length === 0;
  const { data, error, loading } = useGetHills(shouldFetchHills);

  useEffect(() => {
    if (shouldFetchHills && data && !loading) {
      dispatch(hillsActions.updateHills(data));
    }
  }, [data, loading, shouldFetchHills, dispatch]);

  const hillContainerStyles = useMemo(() => {
    return {
      minHeight: "80vh",
      backgroundImage: `url(${logoPattern})`,
    };
  }, []);


  return (
    <div className={styles.hillsContainer} style={hillContainerStyles}>
      <div className={styles.hills}>
        {hills.length === 0 ? (
          <>
            <HillItem loading={true} />
            <HillItem loading={true} />
            <HillItem loading={true} />
            <HillItem loading={true} />
            <HillItem loading={true} />
            <HillItem loading={true} />
          </>
        ) : (
          hills.map((hill) => <HillItem hill={hill} key={hill.id} loading={false} />)
        )}
      </div>
    </div>
  );
};

export default Hills;
