import { useEffect } from "react";
import { useGetHills } from "../utils/getHills";
import { useSelector, useDispatch } from "react-redux";
import { hillsActions } from "../store/Hills";
import { Hill as HillType } from "../types/hill";


interface RootState {
  hills: { hills: HillType[] };
}

const Hills: React.FC = () => {
  // Access the hills from Redux
  const hills = useSelector((state: RootState) => state.hills.hills);
  const dispatch = useDispatch();

  const { data, error, loading } = useGetHills();

  useEffect(() => {
    if (error) {
      console.error("Failed to fetch hills:", error);
      return;
    }
    if (hills.length === 0 && data && !loading) {
      console.log('Raw data:', JSON.stringify(data[0], null, 2));
      dispatch(hillsActions.updateHills(data));
    }
  }, [data, loading, hills, error, dispatch]);

  return <div style={{ height: "80vh" }}>גבעות</div>;
};

export default Hills;
