import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import clientConfig from "../clientConfig";
import { useSelector, useDispatch } from "react-redux";
import { mainSettingActions } from "../store/MainSetting";
import { slide as Menu } from "react-burger-menu";
import { useIsMobile } from "../utils/utils";

interface NavItemProps {
  to: string;
  title: string;
  closeMenu: () => void;
}
const NavItem: React.FC<NavItemProps> = ({ to, title, closeMenu }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? classes.active + " prevent-select" : "prevent-select"
      }
      to={to}
      onClick={closeMenu}
    >
      {title}
    </NavLink>
  );
};

function MainNavigation() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const dispatch = useDispatch();
  const siteLang = clientConfig.siteLang;
  const logoVerticalUrl = useSelector(
    (state: { links: { logoVertical: string } }) => state.links.logoVertical
  );
  const logoHorizontalUrl = useSelector(
    (state: { links: { logoHorizontal: string } }) => state.links.logoHorizontal
  );

  const handleOnClose = () => {
    setMenuIsOpen(false);
  };

  const handleOnOpen = () => {
    setMenuIsOpen(true);
  };

  const isMobile = useIsMobile();

  useEffect(() => {
    dispatch(mainSettingActions.updateIsMobile());
    window.addEventListener("resize", () => {
      dispatch(mainSettingActions.updateIsMobile());
    });

    return () => {
      window.removeEventListener("resize", () => {
        dispatch(mainSettingActions.updateIsMobile());
      });
    };
  }, []);

  const facebookIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
    >
      <g id="Group_2" data-name="Group 2" transform="translate(-718 119)">
        <path
          id="Path_11"
          data-name="Path 11"
          d="M13.636,11.591v1.364H12.272V15h1.364v6.136h2.727V15h1.814l.232-2.045H16.363V11.761c0-.552.055-.845.907-.845h1.139V8.864H16.581c-2.181,0-2.945,1.022-2.945,2.727"
          transform="translate(718 -119)"
          fill="#124b78"
        />
        <path
          id="Path_12"
          data-name="Path 12"
          d="M15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0m0,28.636A13.636,13.636,0,1,1,28.636,15,13.636,13.636,0,0,1,15,28.636"
          transform="translate(718 -119)"
          fill="#124b78"
        />
        <rect
          id="Rectangle_2"
          data-name="Rectangle 2"
          width="30"
          height="30"
          transform="translate(718 -119)"
          fill="none"
        />
      </g>
    </svg>
  );
  const handsIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 23.265 23.147"
    >
      <g
        id="Group_1"
        data-name="Group 1"
        transform="translate(-688.862 119.022)"
      >
        <line
          id="Line_1"
          data-name="Line 1"
          x1="3.567"
          y1="3.615"
          transform="translate(708.083 -106.116)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_1"
          data-name="Path 1"
          d="M11.643,17.843q.2.184.4.384l4.207,4.423"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M4.18,12.717a5.238,5.238,0,0,1-.639.833L.337,16.5"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_3"
          data-name="Path 3"
          d="M17.45,14.562c.051-.049.1-.1.151-.151l4.106-4.252A1.471,1.471,0,0,0,19.59,8.116l.106-.1-.106.1.774-.8a1.471,1.471,0,0,0-2.116-2.043l-.541.568h0l1.036-1.08a1.47,1.47,0,1,0-2.115-2.043l-.924.957.4-.416a1.471,1.471,0,0,0-2.116-2.043"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M7.072,22.65l4.163-4.423a7.809,7.809,0,0,1,3.5-2.1,6.428,6.428,0,0,0,1.478-.627"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_5"
          data-name="Path 5"
          d="M4.738,5.607A1.471,1.471,0,0,0,2.622,7.65l2.444,2.53A1.471,1.471,0,0,0,7.182,8.137"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_6"
          data-name="Path 6"
          d="M7.549,4.284,6.359,3.052A1.47,1.47,0,1,0,4.243,5.094L7.21,8.166A1.47,1.47,0,0,0,9.325,6.123l-.691-.716"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_7"
          data-name="Path 7"
          d="M9.325,6.123A1.471,1.471,0,0,0,11.441,4.08l-.163-.168"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_8"
          data-name="Path 8"
          d="M9.645,2.221,9,1.551A1.47,1.47,0,1,0,6.882,3.593"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_9"
          data-name="Path 9"
          d="M3.4,8.451a1.471,1.471,0,0,0-2.117,2.043l1.7,1.758a1.471,1.471,0,0,0,2.117-2.043"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <path
          id="Path_10"
          data-name="Path 10"
          d="M13.99,1.215,12.312.424A.907.907,0,0,0,11.284.6L9.125,2.739a.592.592,0,0,0-.009.831,1.813,1.813,0,0,0,2.61,0Z"
          transform="translate(689 -119)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.8"
        />
        <rect
          id="Rectangle_1"
          data-name="Rectangle 1"
          width="22.987"
          height="22.987"
          transform="translate(689 -119)"
          fill="none"
        />
      </g>
    </svg>
  );

  const mobileMenuStyles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "15px",
      top: "20px",
    },
    bmBurgerBars: {
      background: clientConfig.primaryColor,
    },
    bmBurgerBarsHover: {
      background: clientConfig.primaryColor,
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: clientConfig.primaryColor,
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgb(234 243 245 / 80%)",
      zIndex: "1001",
    },
  };

  const navItems = (
    <>
      {/* <NavItem closeMenu={handleOnClose} to="/" title="עמוד הבית" /> */}
      <NavItem closeMenu={handleOnClose} to="/about" title="אדות" />
      <NavItem closeMenu={handleOnClose} to="/hills" title="גבעות" />
      <NavItem closeMenu={handleOnClose} to="/gallery" title="גלריה" />
      <NavItem closeMenu={handleOnClose} to="/tour-scedual" title="תאום סיור" />
      <NavItem closeMenu={handleOnClose} to="/contact" title="צור קשר" />
    </>
  );

  return (
    <>
      {isMobile ? (
        <Menu
          onOpen={handleOnOpen}
          onClose={handleOnClose}
          isOpen={menuIsOpen}
          right
          styles={mobileMenuStyles}
        >
          <div className={classes.mobileMenuContainer}>{navItems}</div>
        </Menu>
      ) : undefined}

      <header
        className={classes.header}
        style={{ direction: siteLang === "he" ? "rtl" : "ltr" }}
      >
     
        <nav>
          <div className={classes.rightSection}>
            <Link to="/" className={classes.logoContainer}>
              <img
                className={classes.logo}
                style={{ height: isMobile ? "60px" : "40px" }}
                src={isMobile ? logoVerticalUrl : logoHorizontalUrl}
              />
            </Link>
            {isMobile ? undefined : navItems}
          </div>
          <div
            className={classes.leftSection}
            style={{ marginLeft: isMobile ? "60px" : undefined }}
          >
            <Link
              to="https://www.facebook.com/ariyshag/?locale=he_IL"
              target="_black"
              className={classes.facebookIcon}
            >
              {facebookIcon}
            </Link>
            <Link to="/" className={classes.donateContainer}>
              {handsIcon}
              {isMobile ? "תרומה" : "תרומה למורשה"}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
