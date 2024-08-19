export const prerender = false;

import { CosmosClient } from '@azure/cosmos';
import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';


export async function load({ params, cookies }) {
    console.log('SvelteKit load function processed a request.');
    cookies.set('cookie1', 'cookievalue1', {'path': '/'});
    return {
        items: [
            {'id': 1, 'title': "Item1", 'price': 10.00}
        ]
    };
}

export const actions = {
    delete: async ({ cookies, request }) => {
        return fail(401, 'Unauthorized')
        //Uncomment to enable mutations (and remove line above)
        // const client = new CosmosClient({
        //     endpoint: env.COSMOSDB_ENDPOINT,
        //     key: env.COSMOSDB_KEY
        // });

        // console.log('SvelteKit delete action processed a request.');

        // const data = await request.formData();
        // const itemId = data.get('id');
        
        // const database = client.database('SWAStore');
        // const container = database.container('Items');

        // try{
        //     await container.item(itemId, itemId).delete();
        //     return {
        //         success: true
        //     };
        // }
        // catch (error){
        //     return fail(500, 'Failed to delete item.')
        // }
    }
}
