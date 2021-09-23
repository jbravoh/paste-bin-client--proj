import React from "react";
import styles from "../css/PasteInput.module.css";

interface PasteInputProps {
  title: string;
  text: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function PasteInput({
  title,
  text,
  setTitle,
  setText,
}: PasteInputProps): JSX.Element {
  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const body = { title, text };
      const response = await fetch("http://localhost:5000/pastes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location.href = "/pastes";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitForm} className={styles.formContainer}>
        <label className={styles.label}>Title</label>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label className={styles.label}>New Paste</label>
        <textarea
          className={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
