import { getOfferFromGuardian, getOfferFromMoonPay, getOfferFromPaybis, getOfferFromTransac } from "./provider";

export default async function handleRequest(params: Record<string, any>, context: Record<string, any>) {
    console.log('Received params:', params);
    const paybis= await getOfferFromPaybis(100);
    const guardarian = await getOfferFromGuardian(100);
    const moonpay = await getOfferFromMoonPay(100);
    const transak = await getOfferFromTransac(100);
    return {
        paybis ,guardarian ,moonpay ,transak
    };
}

handleRequest({ test: 'value' }, {}).then(response => console.log('Response:', response));

// handleRequest({ }, {}).then(response => console.log('Response:', response));
