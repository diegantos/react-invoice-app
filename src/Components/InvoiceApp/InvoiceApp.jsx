import { getInvoice } from '../Services/getInvoice'
import './InvoiceApp'

export const InvoiceApp = () => {

    const invoice = getInvoice()

    return(
        <>
            <h2>Factura</h2>
            <ul>
                <li>Id: { invoice.id }</li>
                <li>Id: { invoice.name }</li>
            </ul>
        </>
    )
}