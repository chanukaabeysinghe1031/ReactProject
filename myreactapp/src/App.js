import Ninjas from "./Ninjas";
import {Component} from "react";

class App extends Component{

    state = {
        ninjas : [
            {name : 'name1', age : 33, id : 1},
            {name : 'name2', age : 44, id : 2},
            {name : 'name3', age : 36, id : 3},
            {name : 'name4', age : 29, id : 4},
        ]
    }
    render(){
        return (
            <div className="App">
                <h1>Welcome Chanuka Abeysinghe</h1>
                <Ninjas ninjas = {this.state.ninjas} />
            </div>
        );
    }

}

export default App;
