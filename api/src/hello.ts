export default async function handleRequest(params: Record<string, any>, context: Record<string, any>) {
    console.log('Received params:', params);
    return {
        message: 'Hi Aicode',
    };
}

handleRequest({ test: 'value' }, {}).then(response => console.log('Response:', response));
