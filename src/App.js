import { useState, useCallback, useMemo } from "react";
import "./styles.css";
import { ChildArea } from "./components/ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onchengeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  // const onclickCountup = () => {
  //   setcount(count + 1);
  // };

  const temp = useMemo(() => 1 + 3, []);

  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onchengeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
