import { useSelector } from "react-redux";

export const useIsMobile = () => {
  const mobile = useSelector(
    (state: { mainSetting: { isMobile: boolean } }) =>
      state.mainSetting.isMobile
  );
  return mobile;
};

export const useGetPageData = () => {
  let data = "123";
  return data;
};
