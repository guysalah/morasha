import classes from "./Section2.module.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ReactNode } from "react";
import Item from "./Section2Item";

interface Section2Props {
  pageData: any;
  loading: boolean;
}

const Section2: React.FC<Section2Props> = ({ pageData, loading }) => {

  let boxes: ReactNode = (
    <>
      <Item loading />
      <Item loading />
      <Item loading />
    </>
  );
  if (pageData) {
    interface InfoBox {
      box_title: string;
      box_background_color: string;
      popup_background_color: string;
      full_description: string; //HTML STRING
      short_description: string; //HTML STRING
      icon_name: string;
    }
    const boxesData: InfoBox[] = pageData.homePageData.info_boxes;

    boxes = boxesData.map((item, index) => (
      <Item
        key={index}
        title={item.box_title}
        shortDescription={item.short_description}
        boxBackgroundColor={item.box_background_color}
        iconName={item.icon_name}
        fullDescription={item.full_description}
        popupBackgroundColor={item.popup_background_color}
      />
    ));
  }

  return <div className={classes.sction2}>{boxes}</div>;
};
export default Section2;
