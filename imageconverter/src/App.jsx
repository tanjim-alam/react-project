import { useState } from 'react'
import './App.css'
import FileInput from './assets/componets/fileInput/FileInput'
import PDFConverter from './assets/componets/PDFConverter/PDFConverter'

function App() {
  const [image, setImage] = useState([])
  console.log(image)
  return (
    <div id='parent'>
      <div id='box'>
        <FileInput onFilesSelected={setImage} />
        <PDFConverter images={image} />
      </div>
    </div>
  )
}

export default App
