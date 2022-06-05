import React, { useState } from "react";
import "./Home.css"
import { CSVReader } from "react-papaparse";

const Home = () => {
  const [file ,setFile]=useState("")

  const handleOnDrop = (data,file) => {
    console.log(data);
    setFile(file.name)
        console.log(file.name);
  };
  const handleOnError = (err, file, inputElem, reason) => {
    console.log("handleOnError:", err);
  };
  const handleOnRemoveFile = (data) => {
    console.log("handleOnRemoveFile:", data);
        setFile('')

  };

  return (
    <>
    <div className="container">
   
      
     <div className="input">
           <h3>File Name</h3>
         <input type="text"  value={file} onChange={"noChange"}/>
        <div className="csv">
            <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          onRemoveFile={handleOnRemoveFile}
          addRemoveButton
          config={{ header: true, dynamicTyping: true }}
        >
          <span>Drop CSV file here or click to import.</span>
        </CSVReader>
        <button>uploas</button>
      </div>
     </div>

     <div className="siderbar">
     <h1>this h1</h1>
     </div>

    </div>  
    </>
  );
};

export default Home;
