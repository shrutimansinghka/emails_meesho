var InternalController = require('../internal_controller')
var uuidv4 = require('uuid/v4');
var Mail = require('../../models/mails');
var multiparty = require('multiparty')

class EmailController extends ApiController {
	constructor(req, res, next){
		super(req, res, next);
		this.validate();
	}

	validate(){
		console.log("check");
	}

	index(next){

	}

    create() {
        var self = this;
        // console.log(self.req)
        var form = new multiparty.Form();
        form.parse(self.req, function(err, fields, files) {

            fields = JSON.parse(fields.data[0])
 
            var attachments = []
            if(files && Object.keys(files).length) {
                _.forIn(files, function(value, key){
                    value.forEach(function(val) {
                        var fileKey = "Attachment_" + randomTimestamp().toString() + "." + val.originalFilename.split('.').pop()
                        attachments.push({file: val, key:fileKey})
                    })
                })
            }
            
            console.log("request received");
            self.res.json({status: true, message: "Sent Successfully"})
        })
    }

    getMailParams(params) {
        var keys = ["from", "to", "cc", "bcc", "subject", "body"];
        return _.pick(params, keys);
    }


}

module.exports = UserController;