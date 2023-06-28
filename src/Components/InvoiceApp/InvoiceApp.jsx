import { useState } from 'react'
import { ClientView } from '../ClientView/ClientView'
import { CompanyView } from '../CompanyView/CompanyView'
import { InvoiceView } from '../InvoiceView/InvoiceView'
import { ListItemsView } from '../ListItemsView/ListItemsView'
import { getInvoice } from '../Services/getInvoice'
import { Totalview } from '../TotalView/TotalView'
import './InvoiceApp'

export const InvoiceApp = () => {

    const invoice = getInvoice()
    const { total, id, name, client, company, items: itemsInitial } = invoice;

    const [ productValue, setProductValue ] = useState('')
    const [ priceValue, setPriceValue ] = useState(0)
    const [ quantityValue, setQuantityValue ] = useState(0)
    const [ items, setItems ] = useState(itemsInitial)

    return (
      <>
        <div className="container">
          <div className="card my-5">
            <div className="card-header">Factura</div>
            <div className="card-body">
              <InvoiceView id={id} name={name} />

              <div className="row my-3">
                <div className="col">
                  <ClientView title="Datos del cliente" client={client} />
                </div>

                <div className="col">
                  <CompanyView title="Datos de la empresa" company={company} />
                </div>
              </div>

              <ListItemsView title="Productos de la factura" items={items} />
              <Totalview total={total} />

              <form>
                <input
                  type="text"
                  name="product"
                  placeholder="Producto"
                  className="form-control mt-3 mb-3"
                  onChange={(event) => {
                    console.log(event.target.value);
                    setProductValue(event.target.value)
                  }}
                />
                <input
                  type="text"
                  name="price"
                  placeholder="Precio"
                  className="form-control mb-3"
                  onChange={(event) => {
                    console.log(event.target.value);
                    setPriceValue(event.target.value)
                  }}
                />
                <input
                  type="text"
                  name="quantity"
                  placeholder="Cantidad"
                  className="form-control mb-3"
                  onChange={(event) => {
                    console.log(event.target.value);
                    setQuantityValue(event.target.value)
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
}