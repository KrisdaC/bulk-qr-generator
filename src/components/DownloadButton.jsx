import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const DownloadButton = ({ qrCodes }) => {
  const handleDownload = async () => {
    const zip = new JSZip();

    for (let i = 0; i < qrCodes.length; i++) {
      const { qrCode, utm_source, utm_medium, utm_campaign } = qrCodes[i];
      const fileName = `${utm_source}_${utm_medium}_${
        utm_campaign || "default"
      }.png`;

      // Convert data URL to a Blob
      const response = await fetch(qrCode);
      const blob = await response.blob();

      zip.file(fileName, blob);
    }

    // Generate the ZIP file and prompt download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "qr_codes.zip");
    });
  };

  return <button onClick={handleDownload}>Download QR Codes</button>;
};

export default DownloadButton;
