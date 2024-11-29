import { useEffect } from "react";
import { useGetHills } from "../utils/getHills";
import { useSelector, useDispatch } from "react-redux";
import { hillsActions } from "../store/Hills";

interface Hill {
  id: number;
  title: string;
  featuredImage: string;
}
interface RootState {
  hills: { hills: Hill[] };
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
    // If hills array is empty, fetch new data and update the Redux store
    if (hills.length === 0 && data && !loading) {
      dispatch(hillsActions.updateHills(data)); // Update the Redux state when data is available
    }
  }, [data, loading, hills, error, dispatch]);

  return <div>גבעות</div>;
};

export default Hills;
