import { getInvoice } from '../Services/getInvoice'
import './InvoiceApp'

export const InvoiceApp = () => {

    const invoice = getInvoice()
    const { id, name, client, company, items} = invoice
    const { name: nameClient, lastName, address } = client
    const { country, city, street, number } =  address
    const { name: companyName, fiscalNumber } = company

    return (
      <>
        <div className="container">
          <div className="card my-5">
            <div className="card-header">Factura</div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">Id: {id}</li>
                <li className="list-group-item">Nombre: {name}</li>
              </ul>

              <div className="row my-3">
                <div className="col">
                  <h3>Datos del cliente</h3>
                  <ul className="list-group">
                    <li className="list-group-item active">
                      {nameClient} {lastName}
                    </li>
                    <li className="list-group-item">
                      {city}, {country}
                    </li>
                    <li className="list-group-item">
                      {street} {number}
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h3>Datos de la empresa</h3>
                  <ul className="list-group">
                    <li className="list-group-item active">{companyName}</li>
                    <li className="list-group-item">{fiscalNumber}</li>
                  </ul>
                </div>
              </div>

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
          </div>
        </div>
      </>
    );
}