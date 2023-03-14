import React, { useEffect } from "react";
import getPlayList from "./api";

const App = () => {
  useEffect(() => {
    getPlayList("PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS").then((res) =>
      console.log(res)
    );
  }, []);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default App;
