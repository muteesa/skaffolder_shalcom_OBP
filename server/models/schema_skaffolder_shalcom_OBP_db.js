// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Skaffolder_shalcom_OBP_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Account
      * ------------------------------------
      */
    class Account extends Sequelize.Model{}
    Account.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      balance: {
        type: Sequelize.FLOAT
      },
      
      begin_balance: {
        type: Sequelize.FLOAT
      },
      
      begin_balance_time_stamp: {
        type: Sequelize.DATE
      },
      
      credit_balance: {
        type: Sequelize.FLOAT
      },
      
      description: {
        type: Sequelize.STRING
      },
      
      type: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      account_user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "customer_account",
          key: '_id',
        },
      },
        
      transactions:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Tx",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "account", timestamps: false }
    );



    /**
      * ------------------------------------
      * Tx
      * ------------------------------------
      */
    class Tx extends Sequelize.Model{}
    Tx.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      account_id: {
        type: Sequelize.FLOAT
      },
      
      amount: {
        type: Sequelize.FLOAT
      },
      
      balance: {
        type: Sequelize.FLOAT
      },
      
      description: {
        type: Sequelize.STRING
      },
      
      time_stamp: {
        type: Sequelize.DATE
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      transactions: {
        type: Sequelize.INTEGER,
        references: {
          model: Account,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "tx", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      country: {
        type: Sequelize.STRING
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      user_accounts:  {
        type: Sequelize.INTEGER,
        references: {
          model: "customer_account",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * customer_account
      * ------------------------------------
      */
    class customer_account extends Sequelize.Model{}
    customer_account.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      account_id: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      account_user: {
        type: Sequelize.INTEGER,
        references: {
          model: Account,
          key: '_id',
        }
      },
      user_accounts: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "customer_account", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
