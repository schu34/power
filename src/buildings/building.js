import addProps from "../utils/addAssign";

class Building{

  constructor(props){

    this.props.power = props.power || 0
    this.props.temp = props.temp || 0
     
    this.tick = this.tick.bind(this);
  }


  tick(neighbors, upgrades){

    neighbors.forEach(n=>{
      if(n){
        nUpgrades = upgrades[n.buildingType];

        addProps(this.props, n.getAddToNeighbors(nUpgrades));
      }
    })

    addProps(this.props, this.addToSelf);
  }

}

export default Building;
