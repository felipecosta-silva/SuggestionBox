import {GoogleSpreadsheet} from 'google-spreadsheet'
import credentials from '../../Credentials.json'

const doc = new GoogleSpreadsheet('1f3vtsBEe2AaP0gtzy2wh_OxmGtu9t2FYYbanro8EeCo')


export default async (req, res) => {

  try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('B4:B6')
    const mostrarPromocaoCell = sheetConfig.getCell(3,1)
    const textPromocaoCell = sheetConfig.getCell(5,1)

    let Cupom = ''
    let Promo = ''

    if(mostrarPromocaoCell.value === 'VERDADEIRO') {
      // TODO: gerar cupom
      Cupom = 'temporario'
      Promo = textoCell.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Nota: 5,
      'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      Cupom,
      Promo
    })
    res.end(req.body)
  }catch (err){
    console.log(err)
    res.end('error')
  }

}