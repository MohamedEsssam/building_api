const _ = require("lodash");

class UnitServices {
  constructor(UnitModel, UnitSchema) {
    (this.UnitModel = UnitModel), (this.UnitSchema = UnitSchema);
  }

  /**
   *
   * @returns
   */
  async getAll() {
    const units = await this.UnitModel.find({}).populate(
      "buildings.buildingId"
    );

    if (!units) return;

    return units;
  }

  /**
   *
   * @param {*} unitId
   * @returns
   */
  async getOne(unitId) {
    const unit = await this.UnitModel.findOne({ _id: unitId }).populate(
      "buildings.buildingId"
    );

    if (!unit) return;

    return unit;
  }

  /**
   *
   * @param {*} number
   * @param {*} name
   * @param {*} area
   * @param {*} numberOfBuilding
   * @param {*} buildings
   * @returns
   */
  async create(number, name, area, numberOfBuilding, buildings) {
    const { error } = this.UnitSchema({
      number,
      name,
      area,
      numberOfBuilding,
      buildings,
    });
    if (error) return;

    let unit = await new this.UnitModel({
      number,
      name,
      area,
      numberOfBuilding,
      buildings,
    });
    await unit.save();

    logger.info(`Unit is successfully created.`, {
      number,
      name,
      area,
      numberOfBuilding,
      buildings,
    });

    return unit;
  }

  /**
   *
   * @param {*} unitId
   * @param {*} newUnitObject
   * @returns
   */
  async update(unitId, newUnitObject) {
    let unit = await this.UnitModel.findOne({ _id: unitId });
    if (!unit) return;

    await unit.updateOne(
      _.pick(newUnitObject, [
        "number",
        "name",
        "area",
        "buildings",
        "numberOfBuilding",
      ])
    );

    logger.info(`Unit is successfully updated.`, { unitId, newUnitObject });

    return this.getOne(unitId);
  }

  /**
   *
   * @param {*} unitId
   * @returns
   */
  async delete(unitId) {
    const unit = await this.UnitModel.findOne({ _id: unitId });
    if (!unit) return;

    await unit.deleteOne({ _id: unitId });

    logger.info(`Unit is successfully deleted.`, { unit });

    return unit;
  }
}

module.exports = UnitServices;
