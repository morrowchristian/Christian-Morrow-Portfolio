import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button className="dark-toggle" onClick={() => setDark(!dark)}>
      {dark ? "Light" : "Dark"}
    </button>
  );
};

export default DarkModeToggle;