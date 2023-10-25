import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PDFViewer width="800" height="600">
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default App;
