const _ = require("lodash");

class BuildingServices {
  constructor(BuildingModel, BuildingSchema) {
    (this.BuildingModel = BuildingModel),
      (this.BuildingSchema = BuildingSchema);
  }

  /**
   *
   * @returns
   */
  async getAll() {
    const buildings = await this.BuildingModel.find({});

    if (!buildings) return;

    return buildings;
  }

  /**
   *
   * @param {*} buildingId
   * @returns
   */
  async getOne(buildingId) {
    const building = await this.BuildingModel.findOne({ _id: buildingId });

    if (!building) return;

    return building;
  }

  /**
   *
   * @param {*} buildingObject
   * @returns
   */
  async create(buildingObject) {
    const { error } = this.BuildingSchema(buildingObject);
    if (error) return;

    let building = await new this.BuildingModel(buildingObject);
    await building.save();

    logger.info(`Building is successfully created.`, { buildingObject });

    return building;
  }

  /**
   *
   * @param {*} buildingId
   * @param {*} newBuildingObject
   * @returns
   */
  async update(buildingId, newBuildingObject) {
    let building = await this.BuildingModel.findOne({ _id: buildingId });
    if (!building) return;

    await building.updateOne(newBuildingObject);

    logger.info(`Building is successfully updated.`, {
      buildingId,
      newBuildingObject,
    });

    return this.getOne(buildingId);
  }

  /**
   *
   * @param {*} buildingId
   * @returns
   */
  async delete(buildingId) {
    const building = await this.BuildingModel.findOne({ _id: buildingId });
    if (!building) return;

    await building.deleteOne({ _id: buildingId });

    logger.info(`Building is successfully deleted.`, { building });

    return building;
  }
}

module.exports = BuildingServices;
