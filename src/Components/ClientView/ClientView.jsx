import './ClientView'

export const ClientView = ({title, client}) => {

    const { name, lastName, address } = client;
    const { country, city, street, number } = address;

    return (
      <>
        <h3>{ title }</h3>
        <ul className="list-group">
          <li className="list-group-item active">
            { name } { lastName }
          </li>
          <li className="list-group-item">
            {city}, {country}
          </li>
          <li className="list-group-item">
            {street} {number}
          </li>
        </ul>
      </>
    );
}