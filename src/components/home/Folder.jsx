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
            <li key={file.name} className="file link">
              <a
                onClick={() =>
                  handleContentInfo({
                    name: file.name,
                    type: file.type,
                    largeName: file.largeName,
                    url: file.url,
                    description: file.description
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
