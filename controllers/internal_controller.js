ApplicationController = require('../controllers/application_controller')

class InternalController extends ApplicationController {
	constructor(req, res, next){
		super(req, res, next);
		console.log(this);
		//this.validate();
	}

	validate(){
		console.log("hahahahahh");
	}

	hello(next){
		this.res.json({message: "It Worked"});
	}

	locations(){
		console.log(uuidv4());
		Location.create({
	    	helper_id: "122",
	    	uuid: uuidv4()
	  	}).then((location) => this.res.json(location));	
	}
}

module.exports = InternalController;