import NavBar from "@/components/navbar/NavBar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="App bg-gray-20">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
