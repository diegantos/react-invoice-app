import './ListItemsView'
import PropTypes from "prop-types";

export const ListItemsView = ({title, items, handleDeleteItem }) => {
    return (
      <>
        <h3>{ title }</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, product, price, quantity }) => (
              <tr key={id}>
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                  <button 
                    onClick={ () => handleDeleteItem(id) }
                    className='btn btn-danger'>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

ListItemsView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}