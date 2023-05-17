/* import loadingGif from "../../assets/loadingPage/gifs/loadingGif.gif"; */
import "./css/loadingPage.css";
import useLoading from "../../hooks/useLoading";

export default function Loading({ children }) {
  const { msg, loading } = useLoading();

  if (loading) {
    return (
      <div className="loadingPage">
        <p>{msg}</p>
        {/* {switchAsset ? (
          <img src={loadingGif} alt="loadinggif"></img>
        ) : (
          <img src={loadingGif} alt="loadinggif"></img>
        )} */}
      </div>
    );
  }

  return <>{children}</>;
}
