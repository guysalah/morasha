import { Button, ButtonProps } from "@mui/material";
import clientConfig from "../../clientConfig";
import { useIsMobile } from "../../utils/utils";

interface ButtonWithIconProps extends ButtonProps {
  hillName: string;
  icon: React.ReactNode;
  title: string;
  fontSize?: string;
}

export const CustomButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  hillName,
  icon,
  title,
  fontSize,
  ...props
}) => {
  const isMobile = useIsMobile();

  return (
    <Button
      {...props}
      sx={{
        backgroundColor: clientConfig.secondaryColor,
        color: "white",
        fontFamily: "var(--primary-font)",
        fontSize: "1rem",
        padding: "2px 15px 0px 10px",
        borderRadius: "100px",
        fontWeight: "600",
        letterSpacing: isMobile ? "0.01em" : "0px",
        width: isMobile ? "130px" : "140px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        "&:hover": {
          backgroundColor: clientConfig.secondaryColorHover,
        },
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <div
          style={{
            width: isMobile ? "20px" : "28px",
            height: isMobile ? "20px" : "28px",
            position: "relative",
            top: "-2px",
          }}
        >
          {icon}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              fontSize: fontSize ? fontSize : "1.3rem",
              margin: "0px",
              lineHeight: "1.2rem",
            }}
          >
            {title}
          </p>
          {/* <p
            style={{
              fontSize: ".8rem",
              margin: "0px",
              lineHeight: ".9rem",
            }}
          >
            {hillName}
          </p> */}
        </div>
      </div>
    </Button>
  );
};
