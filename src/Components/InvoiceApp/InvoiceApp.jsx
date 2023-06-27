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
        <div className="container">
          <h2>Factura</h2>
          <ul className="list-group">
            <li className="list-group-item">Id: {id}</li>
            <li className="list-group-item">Id: {name}</li>
          </ul>

          <h3>Datos del cliente</h3>
          <ul className="list-group">
            <li className="list-group-item">
              {nameClient} {lastName}
            </li>
            <li className="list-group-item">{country}</li>
            <li className="list-group-item">{city}</li>
            <li className="list-group-item">
              {street} {number}
            </li>
          </ul>

          <h3>Datos de la empresa</h3>
          <ul className="list-group">
            <li className="list-group-item">{companyName}</li>
            <li className="list-group-item">{fiscalNumber}</li>
          </ul>

          <h3>Productos de la factura</h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ id, product, price, quantity }) => (
                <tr key={id}>
                  <td>{product}</td>
                  <td>{price}</td>
                  <td>{quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
}