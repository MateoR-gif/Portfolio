import loadingGif from "../../assets/loadingPage/gifs/loadingGif.gif";
import customHook from "../../assets/loadingPage/img/customHook.jpg";
import "./css/loadingPage.css";
import useLoading from "../../hooks/useLoading";

export default function Loading({ children }) {
  const { msg, loading, switchAsset } = useLoading();

  if (loading) {
    return (
      <div className="loadingPage">
        <p>{msg}</p>
        {switchAsset ? (
          <img src={loadingGif} alt="loadinggif"></img>
        ) : (
          <img src={customHook} alt="customHook"></img>
        )}
      </div>
    );
  }

  return <>{children}</>;
}
