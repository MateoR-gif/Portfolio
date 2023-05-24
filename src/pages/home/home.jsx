import "../../css/home/home.css";
import { useState } from "react";
import { folderStructure } from "../../components/home/FolderStructure";
import { Folder } from "../../components/home/Folder";
import Content from "../../pages/content/Content";

export default function Home() {
  const [isContentShow, setIsContentShow] = useState(false);
  const [contentInfo, setContentInfo] = useState();

  const handleContentInfo = (info) => {
    setContentInfo(info);
    setIsContentShow(true);
  };

  if (isContentShow) {
    return (
      <article>
        <Content info={contentInfo} />
        <br />
        <p className="goback link" onClick={() => setIsContentShow(false)}>
          {"Go back"}
        </p>
      </article>
    );
  }

  return (
    <article className="home">
      <Folder {...folderStructure} handleContentInfo={handleContentInfo} />
    </article>
  );
}
