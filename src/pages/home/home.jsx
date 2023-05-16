import { Folder } from './components/folder';
import './css/home.css'
import { folderStructure } from './components/folderStructure';

export default function Home() {
  return (
    <article className="home">
      <Folder {...folderStructure} />
    </article>
  )
}
