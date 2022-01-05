import {GoogleSpreadsheet} from 'google-spreadsheet'
import credentials from '../../Credentials.json'

const doc = new GoogleSpreadsheet('1f3vtsBEe2AaP0gtzy2wh_OxmGtu9t2FYYbanro8EeCo')


export default async (req, res) => {

  try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom: 'abc123',
      Promo: 'asdfqwert'
    })
    res.end(req.body)
  }catch (err){
    console.log(err)
    res.end('error')
  }

}