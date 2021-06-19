const { sims } = require('./lib');
let { product_id, group_name, action } = require('./config.js')


async function main() {
    // When requesting a group, if the group is NULL, the application will quit.
	const devicesList = await sims.getGroupList(product_id, group_name, action);
	return devicesList;
}

main()
	.then(devicesList => {
       var r = []; // Store batch of ICCID's
        sims.processChangeState(devicesList,action);
	})
	.catch(error => {
		console.log(error);
	})
    
