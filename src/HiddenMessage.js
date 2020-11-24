import React, { useState } from "react";

export default function HiddenMessage({ children }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={setShowMessage}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  );
}
