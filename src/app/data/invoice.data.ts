
import { Client } from "../models/client";
import { Invoice } from "../models/invoice";

// Definimos un objeto de tipo Invoice con la información de la factura


export const invoiceData: any = {

   
    id: 1234,
    name: 'Productos tecnológicos',
    type: 'Venta',
    issueDate: new Date(),
    dueDate: new Date(),
    client: {
        name: 'Juan',
        lastName: 'Perez García',
        email: 'micliente@example.com',
        phone: 123456789,
        address: 'Calle López Gómez 123',
            number: 1234,
            street: 'Calle 123',
            city: 'Lisboa',
            province: 'Lisboa',
            postalCode: 12345,
            country: 'Portugal'
        
        
    },
    company: {
        name: 'Empresa s.a',
        address: 'Calle Falsa 123',
        phone: 123456789,
        email: 'miempresa@example.com',
        creationDate: formatDate(new Date(), '/', '/'),
        fiscalNumber: 123456789,
        city: 'Madrid',
        postalCode: 28001,
        country: 'España',
        description: 'Empresa dedicada a la fabricación y distribución de productos tecnológicos.',
        logo: 'assets/images/logo1.png'
    },
    items: [
        {
            id: 1,
            product: 'Motherboard',
            quantity: 8,
            price: 100
        },
        {
            id: 2,
            product: 'CPU',
            quantity: 2,
            price: 200
        },
        {
            id: 3,
            product: 'Memory RAM 16GB DDR4 3200MHz',
            quantity: 5,
            price: 50
        }, 
    ],

  

    
}

export const clientsData: Client[] = [
    {
        id: 1,
        name: 'Juan',
        lastname: 'Perez García',
        email: 'micliente@example.com',
        phone: 123456789,
        address: 'Calle López Gómez 123',
        city: 'Lisboa',
        province: 'Lisboa',
        postalCode: 12345,
        country: 'Portugal'
    },
    {
        id: 2,
        name: 'Maria',
        lastname: 'Gomez',
        email: 'maria.gomez@example.com',
        phone: 987654321,
        address: 'Avenida Siempre Viva 742',
        city: 'Barcelona',
        province: 'Barcelona',
        postalCode: 8001,
        country: 'España'
    }
];



function formatDate(date: Date, p0: string, p1: string): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

