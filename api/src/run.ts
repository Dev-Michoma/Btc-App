import { getOfferFromPaybis } from "./provider";

export default async function handleRequest(params: Record<string, any>, context: Record<string, any>) {
    console.log('Received params:', params);
    const btc = await getOfferFromPaybis(100);
    return {
        message:btc,
    };
}

handleRequest({ test: 'value' }, {}).then(response => console.log('Response:', response));
