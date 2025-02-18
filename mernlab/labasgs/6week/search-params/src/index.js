import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function useSearchParams() {
  const [params, setParams] = useState(() => new URLSearchParams(window.location.search));

  useEffect(() => {
    const handlePopState = () => {
      setParams(new URLSearchParams(window.location.search));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const updateParams = (newParams) => {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState(null, "", newUrl);
    setParams(new URLSearchParams(searchParams));
  };

  return [params, updateParams];
}

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetParam = () => {
    setSearchParams({ path:'profile',user: "pavan"});
  };

  const handleClearParam = () => {
    setSearchParams({ user: null, theme: null });
  };

  return (
    <div>
      <h1>useSearchParams Hook</h1>
      <p>Current Params: {searchParams.toString()}</p>
      <button onClick={handleSetParam}>Set Params</button>
      <button onClick={handleClearParam}>Clear Params</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);