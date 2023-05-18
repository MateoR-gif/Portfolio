export default function PDFViewer({ info }) {
  const { name, url } = info;
  return (
    <div className="PDFViewer">
      <h1>Curriculum Vitae</h1>
      <div style={{ width: '100%', height: '90%' }}>
        <iframe src="https://drive.google.com/file/d/14B0lbWCsl4p-w2VN938hhSi8PC36Ciex/preview" width="640" height="480" allow="autoplay"></iframe>F
      </div>
    </div>
  )
}
