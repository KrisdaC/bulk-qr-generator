import React from "react";
import { CSVLink } from "react-csv";

const DownloadTemplateButton = () => {
  const headers = [
    { label: "url", key: "url" },
    { label: "utm_source", key: "utm_source" },
    { label: "utm_medium", key: "utm_medium" },
    { label: "utm_campaign", key: "utm_campaign" },
  ];

  const data = [
    { utm_source: "", utm_medium: "", utm_campaign: "" }, // Example row
  ];

  return (
    <CSVLink
      data={data}
      headers={headers}
      filename="utm_template.csv"
      className="btn btn-primary"
    >
      Download CSV Template
    </CSVLink>
  );
};

export default DownloadTemplateButton;
