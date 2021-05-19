"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "requests",
      [
        {
          careType: "household",
          startDate: "2021-05-21",
          endDate: "2021-05-21",
          clientName: "Renan",
          extraInformation: "no extra info",
          open: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          careType: "medical",
          startDate: "2021-05-20",
          endDate: "2021-05-20",
          clientName: "Andressa",
          extraInformation: "no extra info",
          open: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("requests", null, {});
  },
};
