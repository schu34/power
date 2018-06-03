import addAssign from "../utils/addAssign";

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

        addAssign(this.props, addToNeighbors);
        addAssign(this.props, this.addToSelf)

      }
    })
  }

}

export default Building;
