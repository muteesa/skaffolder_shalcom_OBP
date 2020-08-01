import Customer_accountModelGenerated from "./generated/Customer_accountModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Customer_accountModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Customer_accountModelGenerated,
  ...customModel
};
