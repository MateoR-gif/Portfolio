export default function PDFViewer({ info }) {
  const { largeName, url, name } = info;
  return (
    <div className="PDFViewer">
      <h1>{largeName}</h1>
      <div style={{ width: '100%', height: '90%' }}>
        <iframe src={url} title={name} style={{ width: '100%', height: '100%' }} allow="autoplay"/>
      </div>
    </div>
  )
}
