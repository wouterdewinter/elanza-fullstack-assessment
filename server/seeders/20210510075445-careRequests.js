"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "careRequests",
      [
        {
          careType: "household",
          startDate: new Date("2021-05-10"),
          endDate: new Date("2021-05-11"),
          clientName: "Mr. Johnson",
          extraInformation: "",
          isOpen: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          careType: "medical",
          startDate: new Date("2021-05-15"),
          endDate: new Date("2021-05-16"),
          clientName: "Mrs. Smith",
          extraInformation: "",
          isOpen: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          careType: "medical",
          startDate: new Date("2021-05-12"),
          endDate: new Date("2021-05-13"),
          clientName: "Mr. Brown",
          extraInformation: "",
          isOpen: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("careRequests", null, {});
  },
};
