import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import { IPaste } from "./components/IPaste";
import PasteInput from "./components/PasteInput";
import PasteTable from "./components/PasteTable";
function App(): JSX.Element {
  const [pastes, setPastes] = useState<IPaste[]>([]);
  const [title, setTitle] = useState("Untitled");
  const [text, setText] = useState("");

  useEffect(() => {
    const getPastes = async () => {
      try {
        const response = await fetch("http://localhost:5000/pastes");
        console.log(response);
        const jsonData = await response.json();
        console.log(jsonData);
        setPastes(jsonData.data.pastes);
        console.log(jsonData.data.pastes);
      } catch (err) {
        console.error(err);
      }
    };
    getPastes();
  }, []);

  return (
    <>
      <h1 className="page-title">Paste Bin App</h1>
      {/* <Router>
        <Switch>
          <Route
            path="/pastes"
            exact
            component={() => (
              <NewPaste
                title={title}
                setTitle={setTitle}
                text={text}
                setText={setText}
                pastes={pastes}
              />
            )}
          />
        </Switch>
      </Router> */}
      <div className={"section-container"}>
        <PasteInput
          title={title}
          setTitle={setTitle}
          text={text}
          setText={setText}
        />
        <PasteTable pastes={pastes} />
      </div>
    </>
  );
}

export default App;
