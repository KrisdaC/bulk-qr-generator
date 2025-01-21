import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract the destination from the query parameters
    const params = new URLSearchParams(location.search);
    let destination = params.get("destination");

    if (destination) {
      // Check if the destination starts with http:// or https://
      if (
        !destination.startsWith("http://") &&
        !destination.startsWith("https://")
      ) {
        destination = `https://${destination}`;
      }

      // Redirect to the destination
      window.location.href = destination;
    }
  }, [location]);

  return <p>Redirecting...</p>;
};

export default Redirect;
