import { useSelector } from "react-redux";

export const useIsMobile = () => {
  const mobile = useSelector(
    (state: { mainSetting: { isMobile: boolean } }) =>
      state.mainSetting.isMobile
  );
  return mobile;
};
