const mongoose = require('mongoose');

const companyDataSchema = new mongoose.Schema({
 
    dataOfCompany:{type:String},
    Class:{type:String},
    LinkedIn_Followers:{type:String},
    Involvement:{type:String}
    


});

    

const CompanyModal = mongoose.model('CompanyData', companyDataSchema);

module.exports = CompanyModal;
