import React, { useEffect, useState } from 'react';
import EsquemaEletricoETE from "../../assets/documentos/EsquemaEletricoETE.pdf";
import cloretoFerrio from "../../assets/documentos/FISPQ Cloreto Férrico.pdf"
import sodaCaustica from "../../assets/documentos/FISPQ SODA CÁUSTICA LÍQUIDA.pdf"
import manualDeOperacao from "../../assets/documentos/Manual de Operação ETE e ETDI.pdf"
import { ContainerDoc } from './Documentations.styled';

//mockando lista de documentação
const pdfList = [
  {
    nameDisplay: "Esquema Elétrico ETE",
    url: EsquemaEletricoETE
  },
  {
    nameDisplay: "Manual de Operação",
    url: manualDeOperacao
  },
  {
    nameDisplay: "FIPQ Soda Cáustica",
    url: sodaCaustica
  },
  {
    nameDisplay: "FISPQ Cloreto Férrico",
    url: cloretoFerrio
  }
];

const Documentations = () => {
  const [selectValue, setSelectValue] = useState('');
  const [pdfUrl, setPDFUrl] = useState(EsquemaEletricoETE);

  const handlePdfView = () => { // removed selectValue from parameter since it was not being used



    const pdfFound = pdfList.find((pdfDoc) => pdfDoc.nameDisplay === selectValue)
    if (pdfFound) {
      setPDFUrl(pdfFound.url)
    }
  }
  return (
    <ContainerDoc>
      <div className='header'>
        <div className='select-doc'>
          <select className='doc-select' value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
            {pdfList.map((pdf) => (
            <option key={pdf.nameDisplay} value={pdf.nameDisplay}>{pdf.nameDisplay}</option>
            ))}
          </select>
          <button onClick={handlePdfView} className='btn btn-primary'>Visualizar</button> {/* passed function directly instead of an anonymous function */}
        </div>
      </div>
      <div className='doc-view'>
        <embed src={pdfUrl} type='application/pdf' width='100%' height='100%' />
      </div>
    </ContainerDoc>
  )
}

export default Documentations;
