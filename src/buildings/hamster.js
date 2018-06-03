import Building from "./Building";

class Hamster extends Building{

  getAddToSelf(upgrades) {
    return {
      power: 0.1
      heat: 0.5
    }
  }

  getAddToNeighbors(upgrades) {
    return {
      power: 0,
      heat: this.heat * .5;
    }
  }

}
