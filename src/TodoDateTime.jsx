import { useEffect, useState } from "react";
// import styles from "./Todo.module.css";
export const TodoDateTime = () => {
  // usestate for date-time
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formatteddate = date.toLocaleDateString();
      const formatedtime = date.toLocaleTimeString("en-US", {
        hour12: true,
      });
      setDateTime(`${formatteddate} - ${formatedtime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>{dateTime}</h2>
    </>
  );
};
