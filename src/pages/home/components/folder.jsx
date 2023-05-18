import { useState } from "react";

export function Folder({ name, files, subfolders, handleContentInfo }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <span className="folder-name" onClick={toggleFolder}>
        {isOpen ? "↱ " + name : "↳ " + name}
      </span>
      {isOpen && (
        <ul className="folder-list">
          {files.map((file) => (
            <li key={file.name} className="file">
              <a
                onClick={() =>
                  handleContentInfo({
                    name: file.name,
                    type: file.type,
                    url: file.url,
                  })
                }
              >
                {file.name}
              </a>
            </li>
          ))}
          {subfolders.map((subfolder) => (
            <Folder
              key={subfolder.name}
              {...subfolder}
              handleContentInfo={handleContentInfo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
