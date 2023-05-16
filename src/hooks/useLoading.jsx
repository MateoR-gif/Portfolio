import { useEffect, useState } from "react";

function useLoading() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [switchAsset, setSwitchAsset] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMsg("Things are happening...");
    }, 100);

    setTimeout(() => {
      setMsg("Actually");
    }, 3000);

    setTimeout(() => {
      setMsg("There's nothing happening");
    }, 5000);

    setTimeout(() => {
      setMsg("This is just some timeouts, inside a Custom Hook");
      setSwitchAsset(!switchAsset);
    }, 8000);

    setTimeout(() => {
      setLoading(false);
    }, 13000);
  }, []);

  return { msg, loading, switchAsset };
}

export default useLoading;
