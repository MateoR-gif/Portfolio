import PDFViewer from "../home/components/PDFViewer";
import ProjectViewer from "../home/components/ProjectViewer";

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
