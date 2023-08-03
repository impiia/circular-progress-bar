import React, { useState, useEffect } from "react";
import CircularProgressBar from "./CircularProgressBar";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Имитация изменения прогресса каждую секунду (для тестирования)
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <CircularProgressBar progress={progress} />
    </div>
  );
};

export default App;
