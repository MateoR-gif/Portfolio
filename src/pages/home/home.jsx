import { Folder } from './components/folder';
import './css/home.css'
import { useState } from 'react';
import { folderStructure } from './components/folderStructure'
import Content from '../about/content';

export default function Home() {

  const [isContentShow, setIsContentShow] = useState(false);
  const [contentInfo, setContentInfo] = useState();

  const handleContentInfo = (info) => {
    console.log('me hicieron clic')
    setContentInfo(info)
    setIsContentShow(true)
  }

  if (isContentShow) {
    return (
      <article>
        <Content info={contentInfo} />
        <p className='goback' onClick={() => setIsContentShow(false)}>{'Go back'}</p>
      </article>
    )
  }

  return (
    <article className="home">
      <Folder
        {...folderStructure}
        handleContentInfo={handleContentInfo} />
    </article>
  )
}
