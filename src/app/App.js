import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  // BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor  from "../hooks/AnimatedCursor";
import { useNavigate } from "react-router-dom";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const navigate = useNavigate();

  const commands = {
    whoami: () => navigate("/"),
    about: () => navigate("/about")
  };

  return (
    <div>
      <div className="App">
        <div className='stars' ></div>
        <div className='stars2' ></div>
        <div className="section">
            <div className='span'></div>
            <div className='span'></div>
            <div className='span'></div>
            <div className='span'></div>
            <div className='span'></div>
            <div className='span'></div>
            <div className='span'></div>
            <div className='span'></div>
            <div className='span'></div>
        </div>
      </div>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <div>
          <Headermain />
          <AppRoutes />
        </div>
        <div style={{height: "4vh", position: "fixed", bottom: "0px", zIndex: "10", width: "100vw"}}>
          <TerminalContextProvider>
            <ReactTerminal
              commands={commands}
              enableInput={true}
              theme={"dark"}
              showControlButtons={false}
              showControlBar={false}
              style={{height: "5vh"}}
            />
          </TerminalContextProvider>
        </div>
      </ScrollToTop>
    </div>
  );
}
