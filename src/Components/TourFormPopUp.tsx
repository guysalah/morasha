import styles from "./TourFormPopUp.module.css";
import TourForm from "./TourForm";
import { useDispatch } from "react-redux";
import { mainSettingActions } from "../store/MainSetting";
import { useSelector } from "react-redux";

const TourFormPopUp = () => {
  const dispatch = useDispatch();
  const closeTourFormPopUp = () => {
    dispatch(mainSettingActions.setTourFormPopUp(false));
    dispatch(mainSettingActions.setSelectedTourName(""));
    dispatch(mainSettingActions.setSelectedTourEmail(""));
    dispatch(mainSettingActions.setSelectedTHillId(""));
    dispatch(mainSettingActions.setTourFormSent(false));
  };

  interface MainSettingRootState {
    mainSetting: {
      selectedTourName: string;
      tourFormSent: boolean;
    };
  }

  const selectedTourName = useSelector(
    (state: MainSettingRootState) => state.mainSetting.selectedTourName
  );

  const tourFormSent = useSelector(
    (state: MainSettingRootState) => state.mainSetting.tourFormSent
  );

  return (
    <div className={styles.tourFormPopUp}>
      <div className={styles.tourFormPopUpContent}>
        <div onClick={closeTourFormPopUp} className={styles.tourFormPopUpClose}>
          <div>X</div>
        </div>

        {tourFormSent ? (
          <div className={styles.tourFormPopUpTitle}>
            <h2>הודעתך נשלחה</h2>
            <h2>ניצור איתך קשר בהקדם האפשרי</h2>
          </div>
        ) : (
          <div className={styles.tourFormPopUpTitle}>
            <h2>תאום סיום</h2>
            <h2>ל{selectedTourName}</h2>
          </div>
        )}
        <TourForm />
      </div>
    </div>
  );
};

export default TourFormPopUp;
