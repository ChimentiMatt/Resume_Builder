import TemplateSelect from "./components/TemplateSelect";
import TemplateOne from "./components/TemplateOne"

import { useState } from "react";

function App() {
  const [template, setTemplate] = useState(1)

  return (
    <div className="App">
      { template === null && <TemplateSelect setTemplate={setTemplate}/> }
  

      { template === 1 && <TemplateOne />}
    </div>
  );
}

export default App;
