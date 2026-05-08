const express = require("express");
const router = express.Router();
const data = require("../data/countries.json");

router.get("/", (request, response) =>{
    response.status(200).json(data);
});

router.get("/:CountryId", (request, response) =>{
   
    const requestedCountryId = request.params.CountryId;

    const country = data.countries.filter(countryInData => {
        if(countryInData.id.toString() === requestedCountryId) {
            return countryInData;
        }
    });
    response.status(200).json(country);

});

module.exports = router;