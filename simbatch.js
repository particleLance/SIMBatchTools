const { sims } = require('./lib');
let { product_id, group_name, action } = require('./config.js')


async function main() {
    // When requesting a group, if the group is NULL, the application will quit.
	const devicesList = await sims.getGroupList(product_id, group_name);
	return devicesList;
}

main()
	.then(devicesList => {
        	sims.processChangeState(devicesList,action);
	})
	.catch(error => {
		console.log(error);
	})
    
