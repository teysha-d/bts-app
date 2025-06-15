import React, { useState } from "react";

export default function MessageBoard() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setList((l) => [...l, text.trim()]);
    setText("");
  };

  return (
    <div className="message-board">
      <h2>Share your BTS story</h2>
      <form onSubmit={submit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here…"
        />
        <button type="submit">Post</button>
      </form>
      <div className="messages">
        {list.map((m, i) => (
          <div key={i} className="message">
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}
