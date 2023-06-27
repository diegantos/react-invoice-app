import { getInvoice } from '../Services/getInvoice'
import './InvoiceApp'

export const InvoiceApp = () => {

    const invoice = getInvoice()
    const { id, name, client, company, items} = invoice
    const { name: nameClient, lastName, address } = client
    const { country, city, street, number } =  address
    const { name: companyName, fiscalNumber } = company
    // const { product, price, quantity } = items

    return (
      <>
        <h2>Factura</h2>
        <ul>
          <li>Id: { id }</li>
          <li>Id: { name }</li>
        </ul>

        <h3>Datos del cliente</h3>
        <ul>
          <li>{ nameClient } { lastName }</li>
          <li>{ country }</li>
          <li>{ city }</li>
          <li>{ street } { number }</li>
        </ul>

        <h3>Datos de la empresa</h3>
        <ul>
            <li>{ companyName }</li>
            <li>{ fiscalNumber }</li>
        </ul>

        <h3>Productos de la factura</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                { items.map(({ id, product, price, quantity })=>(
                    <tr key={ id }>
                        <td>{ product }</td>
                        <td>{ price }</td>
                        <td>{ quantity }</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </>
    );
}