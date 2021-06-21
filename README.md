# SIMBatchTools

This repo is a very quick hack together for batch SIM management for Particle SIMs.

These scripts were written in a short amount of time and may not follow best style guide practices. Everything should perform as intended.

## Setup

1. Clone the repository to your local machine
2. cd into SIMBatchTools working directory
3. `npm install`
4. cp config.sample.js config.js

## Usage

`node reactivate.js` to reactivate SIMs
`node deactivate.js` to deactivate SIMs

`node simbatch.js` to reactivate/deactivate SIMs based on groups

## Configuration

A config.js file has been included to put in any predefined variables.

Variables can also be specified with environment variables at runtime

For instance, to pass your access_token, you may set it in the `config.js` file.  
Alternatively, you may set it at runtime using environment variables. For example:  

`ACCESS_TOKEN=1234 node deactivate.js`

OR

`GROUP_NAME=GroupNameHere ACTION=deactivate/reactivate node simbatch.js`

Environment variable values will always take precedent over config.js set values if both are specified.

## Use Case with Groups
After cloning the project locally, making a copy of the config.js file, you'll have several variables needed to proceed in order to successfully create a batch run for a Group of SIM's from a product.

module.exports ={

	base_url: 'https://api.particle.io/v1',
	
	access_token:  "ACCESS_TOKEN-HERE" || process.env.ACCESS_TOKEN, // access token for user or product
	
	product_id: "1234" || process.env.PRODUCT_ID, // an empty product_id defaults to the user's own personal SIMs and not a product
	
	group_name: "deprecated" || process.env.GROUP_NAME,
	
	action: "deactivate" || process.env.ACTION,
	
	perPage: "10000" || process.env.PER_PAGE, // page. Bumped up to 500,
	
	isSync: process.env.IS_SYNC
	
}

`access_token`

Looking at the access_token variable, this is where you need to put a token in order to access a specific product and/or SIM. If you're impersonating a user from the admin.particle.io console, when you access the console for the user, go to the Events icon on the left, and click on the "View events from Terminal" which will provide a full URL for a request but we only want the end part, the token itself.

`product_id`

The product_id is exactly that, the product we're trying to access and the ID generated for it (e.g. 1234). On the left side you'll see the second option from the top called 'Products', by clicking that you'll see all the products available on the account/we're trying to access and at the bottom, an ID exists that we want to copy and put in this variable.

`group_name`

As the name suggests, this is the group name that is attached to the SIM's we're looking to do a 'batch' run on (e.g. BoronUS-East or deprecated like the sample shows).

`action`

The action is what we're trying to accomplish. Currently, you can only `reactivate` or `deactivate`. Deactivate will shutdown all SIM's and Reactivate will bring all SIM's back.

After you've filled out all of these values, you can just type `node simbatch.js` to run this project as it's now pre-filled out with our task we're trying to accomplish.

### Product IDs

Product IDs must be used when doing batch operations on SIMs within a product. 

If you do not specify a product ID, the script will instead target SIMs in your personal user account (the SIMs located at https://console.particle.io/sims )

## Todo:

- Clean up code
- Implement cleaner CLI interface for different states
- Implement functionality to specify SIMs manually.
- Implement functionality to set MB limit when reactivating
- Implement update data allowance endpoint
- Implement releasing SIMs endpoint.
- Overhaul config.js to .env configuration
