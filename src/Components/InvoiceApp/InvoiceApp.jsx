import { useEffect, useState } from 'react'
import { ClientView } from '../ClientView/ClientView'
import { CompanyView } from '../CompanyView/CompanyView'
import { InvoiceView } from '../InvoiceView/InvoiceView'
import { ListItemsView } from '../ListItemsView/ListItemsView'
import { getInvoice, calculateTotal } from '../Services/getInvoice'
import { Totalview } from '../TotalView/TotalView'
import './InvoiceApp'
import { FormItems } from '../FormItems/FormItems'

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 12,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: []
};

export const InvoiceApp = () => {

    const [invoice, setInvoice ] = useState(invoiceInitial)
    const { id, name, client, company } = invoice;

    const [items, setItems] = useState([]);

    const [total, setTotal] = useState(0);

    const [counter, setCounter] = useState(4);

    const [activeForm, setActiveForm] = useState(false)

    useEffect(() => {
      const data = getInvoice()
      setInvoice(data)
      setItems(data.items)
    }, [])

    useEffect(() => {
      setTotal(calculateTotal(items));
    }, [items]);

    const handleAddItems = ({product, price, quantity}) => {

      setItems([...items,
        {
          id: counter,
          product: product.trim(),
          price: +price.trim(), //dos formas de convertir a Int
          quantity: parseInt(quantity.trim(), 10),
        },
      ]);

      setCounter(counter + 1);
    };

    const onActiveForm = () => {
      setActiveForm(!activeForm)
    }

    return (
      <>
        <div className="container">
          <div className="card my-5">
            <div className="card-header">
              <h2>Factura</h2>
            </div>
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

              <button className="btn btn-secondary" onClick={onActiveForm}>
                {!activeForm ? "Agregar nuevo producto" : 'Ocultar agregar producto'}
              </button>
              {activeForm && <FormItems handle={(newItem) => handleAddItems(newItem)} />}
            </div>
          </div>
        </div>
      </>
    );
}