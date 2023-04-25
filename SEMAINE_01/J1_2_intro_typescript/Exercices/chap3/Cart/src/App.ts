import {  MockDetails, MockDelivery } from "./data/MockProducts";
import { Delivery, ProductDelivery, Details } from "./def";
import Product  from "./Product";

const delivery : ProductDelivery[] = MockDelivery.filter( p => p.delivery == Delivery.Special);

const ids : number[] = delivery.map(p => p.id);
// tous les produits avec details et son statut delivery
const products: Array<Product<Details, Delivery>> = MockDetails.map(
    p => {
        const pDel : ProductDelivery = MockDelivery.find(pD => pD.id == p.id);
        const product : Product<Details, Delivery> = new Product<Details, Delivery>(p,pDel.delivery);

        return product;
    }
 );

 const specials: Array<Product<Details, Delivery>> = products.filter(p=>p.option == Delivery.Special);

 console.log(specials)