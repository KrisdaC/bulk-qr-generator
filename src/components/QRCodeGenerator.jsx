import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import DownloadButton from "./DownloadButton";

const QRCodeGenerator = ({ data }) => {
  const [qrCodes, setQrCodes] = useState([]);
  const appBaseUrl = window.location.origin; // Base URL of the app

  useEffect(() => {
    const generateQRCodes = async () => {
      const codes = await Promise.all(
        data.map(async (item) => {
          // Create redirect URL pointing to the app's redirect route
          const redirectUrl = `${appBaseUrl}/redirect?destination=${encodeURIComponent(
            item.url
          )}&utm_source=${item.utm_source}&utm_medium=${
            item.utm_medium
          }&utm_campaign=${item.utm_campaign}`;
          const qrCode = await QRCode.toDataURL(redirectUrl);
          return { ...item, qrCode };
        })
      );
      setQrCodes(codes);
    };

    generateQRCodes();
  }, [data, appBaseUrl]);

  return (
    <div>
      {qrCodes.map((item, index) => (
        <div key={index}>
          <h3>{item.label || "QR Code"}</h3>
          <img
            src={item.qrCode}
            alt="QR Code"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      ))}
      {qrCodes.length > 0 && <DownloadButton qrCodes={qrCodes} />}
    </div>
  );
};

export default QRCodeGenerator;
