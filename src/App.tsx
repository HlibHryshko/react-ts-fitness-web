import NavBar from "@/components/navbar/NavBar";
import { useState } from "react";
import { SELECTED_PAGE } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SELECTED_PAGE>(
    SELECTED_PAGE.HOME
  );
  return (
    <div className="App bg-gray-20">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
