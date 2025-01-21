import React, { useState } from "react";
import Papa from "papaparse";

const FileUpload = ({ onFileProcessed }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const expectedHeaders = ["url", "utm_source", "utm_medium", "utm_campaign"];

  const validateHeaders = (headers) => {
    return expectedHeaders.every((header) => headers.includes(header));
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    Papa.parse(uploadedFile, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const { data, meta } = result;
        const headers = meta.fields;

        if (!validateHeaders(headers)) {
          setError("Invalid CSV file. Please use the provided template.");
          setFile(null);
          return;
        }

        setError("");
        onFileProcessed(data);
      },
      error: (err) => {
        setError("Error reading the file. Please try again.");
        console.error(err);
      },
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {file && <p>Uploaded: {file.name}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
