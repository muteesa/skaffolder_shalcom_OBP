// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_skaffolder_shalcom_OBP_db";
import UserModel from "../models/Skaffolder_shalcom_OBP_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.skaffolder_shalcom_OBP_db.host +
        ":" +
        properties.skaffolder_shalcom_OBP_db.port +
        "//" +
        properties.skaffolder_shalcom_OBP_db.user +
        "@" +
        properties.skaffolder_shalcom_OBP_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.skaffolder_shalcom_OBP_db.name,
      properties.skaffolder_shalcom_OBP_db.user,
      properties.skaffolder_shalcom_OBP_db.password,
      {
        host: properties.skaffolder_shalcom_OBP_db.host,
        dialect: properties.skaffolder_shalcom_OBP_db.dialect,
        port: properties.skaffolder_shalcom_OBP_db.port,
        logging: false
      }
    );
    this.dbConnection_skaffolder_shalcom_OBP_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_skaffolder_shalcom_OBP_db;
  }
}

export default new Database();
