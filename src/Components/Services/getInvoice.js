import { Invoice } from "../Data/invoice"

export const getInvoice = () => {

    // let total = 0
    // Invoice.items.forEach(({price, quantity}) => {
    //     total = total + price * quantity
    // })

    const total = Invoice.items
        .map( item => item.price * item.quantity )
        .reduce( ( acc, currentValue ) => acc + currentValue, 0)


    return {...Invoice, total}
}