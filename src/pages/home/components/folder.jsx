import { useState } from "react";

export function Folder({ name, files, subfolders }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFolder = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="folder">
            <span className="folder-name" onClick={toggleFolder}>
                {isOpen ? '↱  ' + name : '↳  ' + name}
            </span>
            {isOpen && (
                <ul className="folder-list">
                    {files.map((file) => (
                        <li key={file} className="file">
                            {file}
                        </li>
                    ))}
                    {subfolders.map((subfolder) => (
                        <Folder key={subfolder.name} {...subfolder} />
                    ))}
                </ul>
            )}
        </div>
    );
}