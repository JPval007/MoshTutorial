import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Warning, you are becoming a pro
        </Alert>
      )}
      <Button color="info" onClick={() => setAlertVisibility(true)}>
        Dismiss
      </Button>
    </div>
  );
}

export default App;
