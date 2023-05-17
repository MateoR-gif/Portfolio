import { useEffect, useState } from "react";

function useLoading() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMsg("Welcome");
    }, 100);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return { msg, loading };
}

export default useLoading;
