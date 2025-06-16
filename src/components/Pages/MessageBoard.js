import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/pageTransitions";

export default function MessageBoard() {
  // load from localStorage or start with empty array
  const [messages, setMessages] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("btsMessages")) || [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");

  // persist every time messages change
  useEffect(() => {
    localStorage.setItem("btsMessages", JSON.stringify(messages));
  }, [messages]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    // prepend newest on top
    setMessages([{ text: input.trim(), timestamp: Date.now() }, ...messages]);
    setInput("");
  }

  return (
    <motion.div
      className="page-container"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <h2>💬 Message Board 💬</h2>
      <p style={{ marginBottom: "1rem" }}>
        Leave messages and connect with other BTS fans! 🎶
      </p>

      {/* submission form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          width: "100%",
          maxWidth: 500,
        }}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your shout-out here..."
          rows={3}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#b19cd9",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Post Message
        </button>
      </form>

      {/* live messages */}
      {messages.length > 0 ? (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "2rem",
            width: "100%",
            maxWidth: 500,
          }}
        >
          {messages.map((msg, i) => (
            <li
              key={msg.timestamp + i}
              style={{
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(8px)",
                borderRadius: "12px",
                padding: "12px 16px",
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              <div style={{ fontStyle: "italic" }}>{msg.text}</div>
              <div
                style={{
                  fontSize: "0.8rem",
                  textAlign: "right",
                  marginTop: "8px",
                  color: "#666",
                }}
              >
                {new Date(msg.timestamp).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem", color: "#555" }}>
          No messages yet — be the first to say 안녕하세요! 👋
        </p>
      )}
    </motion.div>
  );
}
