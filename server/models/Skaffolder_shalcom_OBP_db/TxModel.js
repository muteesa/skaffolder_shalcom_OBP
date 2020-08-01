import TxModelGenerated from "./generated/TxModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await TxModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TxModelGenerated,
  ...customModel
};
