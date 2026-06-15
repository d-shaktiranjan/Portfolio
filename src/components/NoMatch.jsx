import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "../style/noMatch.css";
import { usePageMetadata } from "../hooks/usePageMetadata";

export const NoMatch = () => {
  usePageMetadata({
    title: "Page Not Found | Shakti Ranjan Debata",
    description: "The page you tried to open does not exist.",
  });

  const [sec, changeSec] = useState(5);

  useEffect(() => {
    const timerId = setInterval(() => {
      changeSec((currentSec) => currentSec - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="container flex min-height no-match">
      <div className="main-heading accent">404</div>
      <div className="main-heading">Page not found</div>
      <div>Redirect to Home in {sec} Sec</div>
      {sec <= 0 && <Navigate to="/" replace />}
    </div>
  );
};
