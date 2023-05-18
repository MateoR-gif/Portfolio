export default function PDFViewer({ info }) {
  const { name, url } = info;
  return (
    <div>
      <h1>Curriculum Vitae</h1>
      <div style={{ width: '100%', height: '500px' }}>
        <iframe src={url} title={name} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}
