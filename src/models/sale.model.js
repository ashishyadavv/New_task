module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("sale", {
      Region: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      Item_type: {
        type: Sequelize.STRING
      },
      Sales_chan: {
        type: Sequelize.STRING
      },
      Order_priority: {
        type: Sequelize.STRING
      },
      Order_date: {
        type: Sequelize.DATE
      },
      Order_id: {
        type: Sequelize.STRING
      },
      Ship_date: {
        type: Sequelize.DATE
      }
      ,
      Units_sold: {
        type: Sequelize.INTEGER
      },
      Unit_price: {
        type: Sequelize.DOUBLE
      },
      Unit_cost: {
        type: Sequelize.DOUBLE
      },
      Total_revenue: {
        type: Sequelize.DOUBLE
      },
      Total_cost: {
        type: Sequelize.DOUBLE
      },
      Total_profit: {
        type: Sequelize.DOUBLE
      },
     

    });
  
    return Sale;
  };