import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import QRCodeGenerator from "./components/QRCodeGenerator";
import DownloadButton from "./components/DownloadButton";
import DownloadTemplateButton from "./components/DownloadTemplateButton";

const App = () => {
  const [fileData, setFileData] = useState([]);
  const [baseUrl, setBaseUrl] = useState("");

  const handleFileProcessed = (data) => {
    setFileData(data);
  };

  return (
    <div>
      <h1>Bulk QR Code Generator</h1>
      <DownloadTemplateButton />
      <FileUpload onFileProcessed={handleFileProcessed} />
      {fileData.length > 0 && (
        <>
          <QRCodeGenerator data={fileData} baseUrl={baseUrl} />
        </>
      )}
    </div>
  );
};

export default App;
