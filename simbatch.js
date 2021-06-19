const { sims } = require('./lib');
let { product_id, group_name, action } = require('./config.js')


async function main() {
    // When requesting a group, if the group is NULL, the application will quit.
	const devicesList = await sims.getGroupList(product_id, group_name);
	return devicesList;
}

main()
	.then(devicesList => {
       var r = []; // Store batch of ICCID's
        sims.processChangeState(devicesList,action);
        // For debug: 
        console.log(devicesList)
	})
	.catch(error => {
		console.log(error);
	})
    