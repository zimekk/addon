import React, { useCallback, useState } from "react";

export default function () {
  const [text, setText] = useState("World");
  const onChangeText = useCallback((e) => setText(e.target.value));

  return (
    <div>
      <input value={text} onChange={onChangeText} />
      <div>{text}</div>
    </div>
  );
}
