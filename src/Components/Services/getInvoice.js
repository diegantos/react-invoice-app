import { Invoice } from "../Data/invoice"

export const getInvoice = () => {

    // let total = 0
    // Invoice.items.forEach(({price, quantity}) => {
    //     total = total + price * quantity
    // })

    const total = calculateTotal(Invoice.items)

    return {...Invoice, total}
}

export const calculateTotal = (items = []) => {
    return items
        .map( item => item.price * item.quantity )
        .reduce( ( acc, currentValue ) => acc + currentValue, 0)
}