import react , {Component} from "react";

class Ninjas extends Component{
    render(){

        const {ninjas}  = this.props;
        return(
            <div className="ninja">
                <div>Name : {name}</div>
                <div>Age : {age} </div>
            </div>
        )
    }
}

export default Ninjas;
