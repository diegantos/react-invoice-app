
export const Invoice = {
    id: 10,
    name: 'Componentes Pc',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'Spain',
            city: 'Madrid',
            street: 'Calle Uno',
            number: 12
        },
    },
    company: {
        name: 'Company',
        fiscalNumber: 123456
    },
    items: [
        {
            product: 'Cpu Intel I7',
            price: 499,
            quantity: 1,
        },
        {
            product: 'Corsair Keyboard Mecanico',
            price: 150,
            quantity: 1,
        },
        {
            product: 'Monitor Asus',
            price: 350,
            quantity: 1,
        }
    ]
}