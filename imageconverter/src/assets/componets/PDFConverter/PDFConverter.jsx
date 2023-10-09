import jsPDF from "jspdf";
import "../PDFConverter/PDFConverter.css"

function PDFConverter({ images }) {
    const convertToPDF = () => {
        const pdf = new jsPDF()
        images.forEach((e, i) => {
            const dataUrl = URL.createObjectURL(e);
            pdf.addPage();
            pdf.addImage(dataUrl, 'PNG', 10, 10, 190, 0)
        });
        pdf.save('converted.pdf')
    }
    return (
        <div id="converterBox">
            {images.map((e, i) => {
                return <img src={e} key={i} alt="" />
            })}
            <button onClick={convertToPDF}>Convert</button>
        </div>
    )
}

export default PDFConverter