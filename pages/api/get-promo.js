import {GoogleSpreadsheet} from 'google-spreadsheet'
import credentials from '../../Credentials.json'

const doc = new GoogleSpreadsheet('1f3vtsBEe2AaP0gtzy2wh_OxmGtu9t2FYYbanro8EeCo')

export default async (req, res) => {

  try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('B4:B6')

    const mostrarPromocaoCell = sheet.getCell(3,1)
    const textPromocaoCell = sheet.getCell(5,1)


    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textPromocaoCell.value
    })) 

  }catch (err){
    res.end(JSON.stringify({
    showCoupon: false,
    message: ''
  }))
  }

  
}