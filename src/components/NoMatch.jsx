import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../style/noMatch.css";

export const NoMatch = () => {
  document.title = "Shakti | Backend Developer";
  const [sec, changeSec] = useState(5);

  setInterval(() => {
    changeSec(sec - 1);
  }, 1000);

  return (
    <div className="container flex min-height no-match">
      <div className="main-heading accent">404</div>
      <div className="main-heading">Page not found</div>
      <div>Redirect to Home in {sec} Sec</div>
      {sec === 0 && <Navigate to="/" />}
    </div>
  );
};
