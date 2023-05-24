import PDFViewer from "../../components/content/PDFViewer";
import ProjectViewer from "../../components/content/ProjectViewer";

export default function Content({ info }) {
  const { type } = info;
  switch (type) {
    case 'PDF':
      return (
        <>
          <PDFViewer info={info} />
        </>
      )
    case 'Project':
      return(
        <>
          <ProjectViewer info={info} />
        </>
      )
  }
}
