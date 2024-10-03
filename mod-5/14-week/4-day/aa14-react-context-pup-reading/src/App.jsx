import PupForm from "./components/PupForm";
import PupImage from "./components/PupImage";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div id="app">
      <PupForm goodOleFashionPropDrilling={{theme: theme, setterFunc: setTheme}} />
      <PupImage />
    </div>
  );
};

export default App;
