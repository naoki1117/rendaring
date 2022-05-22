import { memo } from "react";

import React from "react";

const style = {
  width: "100%",
  height: "200px"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  const data = [...Array(2000).keys()];
  console.log(data);
  return (
    <>
      {open ? (
        <div className="openSec" style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
