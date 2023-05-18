import PDFViewer from "../home/components/PDFViewer";

export default function Content({ info }) {
  const { type } = info;
  switch (type) {
    case 'CV':
      return (
        <>
          <PDFViewer info={info} />
        </>
      )
  }
}
