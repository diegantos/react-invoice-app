import { ClientView } from '../ClientView/ClientView'
import { CompanyView } from '../CompanyView/CompanyView'
import { InvoiceView } from '../InvoiceView/InvoiceView'
import { ListItemsView } from '../ListItemsView/ListItemsView'
import { getInvoice } from '../Services/getInvoice'
import './InvoiceApp'

export const InvoiceApp = () => {

    const invoice = getInvoice()
    const { id, name, client ,company, items} = invoice

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

              <ListItemsView title='Productos de la factura' items={items} />
            </div>
          </div>
        </div>
      </>
    );
}