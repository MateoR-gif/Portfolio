export default function PDFViewer({ info }) {
  const { name, url } = info;
  return (
    <div className="PDFViewer">
      <h1>Curriculum Vitae</h1>
      <div style={{ width: '100%', height: '90%' }}>
        <iframe src={url} title={name} style={{ width: '100%', height: '100%' }} allow="autoplay"/>
      </div>
    </div>
  )
}
