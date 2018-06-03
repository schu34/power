import addProps from "../utils/addAssign";

class Building{

  constructor(props){

    this.props.power = props.power || 0
    this.props.temp = props.temp || 0
     
    this.tick = this.tick.bind(this);
  }


  tick(neighbors){
    neighbors.forEach(n=>{
      if(n){
        const { addToNeighbors } = n;

        addProps(this.props, addToNeighbors);
      }
    })

    addProps(this.props, this.addToSelf);
  }

}

export default Building;
