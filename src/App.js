import React from "react";

export default function App({ greeting }) {
  return <div>{greeting || "Hello World!"}</div>;
}
