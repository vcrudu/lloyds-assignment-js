const axios = require("axios");
const constants = require("../common/constants");

class OpenBanking {
    static async getBranches(brandName, location) {
        try {
            const response = await axios.get(constants.OPEN_BANKING_URL);
            const CurrentBrand = response.data.data[0]?.Brand?.find(brand => brand.BrandName === brandName);
            if (CurrentBrand !== undefined) {
                return CurrentBrand.Branch.filter(branch => branch.PostalAddress?.TownName?.toLowerCase() === location.toLowerCase());
            } else return [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

module.exports = OpenBanking;