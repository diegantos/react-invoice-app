import { useState } from "react";
import "./FormItems";

export const FormItems = ({handle}) => {

  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState

  const onInputChange = ({ target: { name, value}}) => {
    setFormItemsState({
        ...formItemsState,
        [name]: value
    })
  }

  const onInvoiceItemSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) return;
    if (price.trim().length <= 1) return;
    if (isNaN(price.trim()))
      return alert("El precio debe ser un valor numérico");
    if (quantity.trim().length < 1) return;
    if (isNaN(quantity.trim()))
      return alert("La cantidad debe ser un valor numérico mayor de 0");

    handle(formItemsState);

    setFormItemsState({
        product:'',
        price:'',
        quantity:'',
    })
  };

  return (
    <>
      <form className="w-50" onSubmit={onInvoiceItemSubmit}>
        <input
          type="text"
          name="product"
          placeholder="Producto"
          className="form-control mt-3 mb-3"
          value={product}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Precio"
          className="form-control mb-3"
          value={price}
          onChange={event => onInputChange(event)}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Cantidad"
          className="form-control mb-3"
          value={quantity}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-primary">
          Añadir producto
        </button>
      </form>
    </>
  );
};
