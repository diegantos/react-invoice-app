import { useEffect, useState } from 'react'
import { ClientView } from '../ClientView/ClientView'
import { CompanyView } from '../CompanyView/CompanyView'
import { InvoiceView } from '../InvoiceView/InvoiceView'
import { ListItemsView } from '../ListItemsView/ListItemsView'
import { getInvoice, calculateTotal } from '../Services/getInvoice'
import { Totalview } from '../TotalView/TotalView'
import './InvoiceApp'

const invoiceInitial = {
  id: 10,
  name: "Componentes Pc",
  client: {
    name: "Pepe",
    lastName: "Doe",
    address: {
      country: "Spain",
      city: "Madrid",
      street: "Calle Uno",
      number: 12,
    },
  },
  company: {
    name: "Mi propia compañia",
    fiscalNumber: 123456,
  },
  items: [
    {
      id: 1,
      product: "Cpu Intel I7",
      price: 499,
      quantity: 1,
    },
    {
      id: 2,
      product: "Corsair Keyboard Mecanico",
      price: 150,
      quantity: 2,
    },
    {
      id: 3,
      product: "Monitor Asus",
      price: 350,
      quantity: 1,
    },
  ],
};

export const InvoiceApp = () => {

    const [ invoice, setInvoice ] = useState(invoiceInitial)

    const [items, setItems] = useState([]);

    const [productValue, setProductValue] = useState("");
    const [priceValue, setPriceValue] = useState("");
    const [quantityValue, setQuantityValue] = useState("");

    const [total, setTotal] = useState(0)
    const [counter, setCounter] = useState(4);

    useEffect(() => {
      const data = getInvoice()
      setInvoice(data)
      setItems(data.items)
    }, [])

    useEffect(() => {
      console.log('Price, product o quantity has changed')
    },[priceValue, productValue, quantityValue])

    useEffect(() => {
      console.log('Counter has changed')
    },[counter])

    useEffect(() => {
      console.log('Items has changed')
      setTotal(calculateTotal(items))
    },[items])

    // const invoice = getInvoice()
    const { id, name, client, company } = invoice;

    // const [ invoiceItemsState, setInvoiceItemsState ] = useState({
    //   productValue: '',
    //   priceValue: '',
    //   quantityValue: '',
    // })

    // const { productValue, priceValue, quantityValue } = invoiceItemsState

    const onInvoiceItemSubmit = (event) => {
      event.preventDefault();

      if (productValue.trim().length <= 1) return;
      if (priceValue.trim().length <= 1) return;
      if (isNaN(priceValue.trim()))
        return alert("El precio debe ser un valor numérico");
      if (quantityValue.trim().length < 1) return;
      if (isNaN(quantityValue.trim()))
        return alert("La cantidad debe ser un valor numérico mayor de 0");

      setItems([
        ...items,
        {
          id: { counter },
          product: productValue.trim(),
          price: +priceValue.trim(), //dos formas de convertir a Int
          quantity: parseInt(quantityValue.trim(), 10),
        },
      ]);
      setProductValue("");
      setPriceValue("");
      setQuantityValue("");
      setCounter(counter + 1);
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

              <form className="w-50" onSubmit={onInvoiceItemSubmit}>
                <input
                  type="text"
                  name="product"
                  placeholder="Producto"
                  className="form-control mt-3 mb-3"
                  value={productValue}
                  onChange={(event) => {
                    setProductValue(event.target.value);
                  }}
                />
                <input
                  type="text"
                  name="price"
                  placeholder="Precio"
                  className="form-control mb-3"
                  value={priceValue}
                  onChange={(event) => {
                    setPriceValue(event.target.value);
                  }}
                />
                <input
                  type="text"
                  name="quantity"
                  placeholder="Cantidad"
                  className="form-control mb-3"
                  value={quantityValue}
                  onChange={(event) => {
                    setQuantityValue(event.target.value);
                  }}
                />
                <button type="submit" className="btn btn-primary">
                  Añadir producto
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}