/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";

const ReactCounter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export const QCounter = qwikify$(ReactCounter);
