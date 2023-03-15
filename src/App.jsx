import React, { useEffect, useState } from "react";
import getPlayList from "./api";

const App = () => {
 

  getVideoplaylist("PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS");

  console.log(state);

  // useEffect(() => {
  //   getPlayList("PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS").then((res) =>
  //     console.log("inner", res)
  //   );
  // }, []);

  // console.log(data.fav);

  return (
    <div>
      <h1>hello world{data}</h1>
    </div>
  );
};

export default App;
