import classes from "./Section3.module.css";
import { Hill as HillType } from "../../types/hill";
import { useSelector } from "react-redux";
import { CSSProperties } from "react";

interface Section1Props {
  loading: boolean;
}

const Row = ({
  image1,
  image2,
  flexDirection,
}: {
  image1: string;
  image2: string;
  flexDirection: CSSProperties["flexDirection"];
}) => {
  return (
    <div className={classes.row} style={{ flexDirection }}>
      <div
        className={classes.item1}
        style={{ backgroundImage: `url(${image1})` }}
      >
        <img className={classes.mobileImage} src={image1} alt="" />
      </div>
      <div
        className={classes.item2}
        style={{ backgroundImage: `url(${image2})` }}
      >
        <img className={classes.mobileImage} src={image2} alt="" />
      </div>
    </div>
  );
};

const Section3: React.FC<Section1Props> = ({ loading }) => {
  const data = useSelector(
    (state: { hill: { hill: HillType } }) => state.hill.hill
  );
  if (loading) return <div className={classes.section1Container}>loading</div>;
  if (!data || !data.acf) return <div></div>;

  if (!data.acf) return null;
  const { gallery } = data.acf;

  let rows = null;
  if (gallery.length > 0) {
    rows = gallery.map((item, index) => {
      return (
        <Row
          key={index}
          image1={item.row.image1.sizes.large}
          image2={item.row.image2.sizes.large}
          flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
        />
      );
    });
  }
  return (
    <div className={classes.section3Container}>
      <div className={classes.section3Content}>{rows}</div>
    </div>
  );
};

export default Section3;
