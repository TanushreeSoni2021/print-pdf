import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

function App() {
  return (
    <>
      <PDFViewer width="100%" height="773vh">
        <MyDocument />
      </PDFViewer>
    </>
  );
}

export default App;
