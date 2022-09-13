import "./styles.css";
import react, { useState, useEffect } from "react";
const useWindowScrollPositions = () => {
  const [scroll, setScroll] = useState({
    scrollX: 0,
    scrollY: 0
  });

  useEffect(() => {
    window.addEventListener("scroll", updatescollPosition);
  }, []);
  const updatescollPosition = () => {
    setScroll({ scrollX: window.scrollX, scrollY: window.scrollY });
  };
  return scroll;
};
export default function App() {
  const { scrollX, scrollY } = useWindowScrollPositions();
  return (
    <div className="App">
       <h2>Start editing to see some magic happen!</h2>
       <h2>Start editing to see some magic happen!</h2>
       <h2>Start editing to see some magic happen!</h2>
       <h2>Start editing to see some magic happen!</h2>
       <h2>Start editing to see some magic happen!</h2>
       <h2>Start editing to see some magic happen!</h2>
       <h2>Start editing to see some magic happen!</h2>
        <h2>Start editing to see some magic happen!</h2>
      <h1></h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
