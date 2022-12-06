//Import React from "react";

import { render } from "@testing-library/react";

export default class FormTest extends React.Component{
    constructor(props){
        super(props);
    

    this.state ={
        user: {
            username: props.username,
            password: props.password
        }
    }
}
//asdasdasdasdasd

render(){
    return (
        <div>
        <label>
          First Name: 
        </label>
        <input type="text" value={this.state.customer.firstName}/>
        <br/>
        <label>
          Last Name:
        </label>
        <input type="text" value={this.state.customer.lastName}/>
        <br/>
        <label>
          Status:
        </label>
        <select value={this.state.customer.status}>
          <option value="PENDING">
            Pending
          </option>
          <option value="APPROVED">
            Approved
          </option>
        </select>
      </div>
    );
}
}


/*
function HelloWorld(props)
{
    return <p> Hello WOrld </p>;
}

export default HelloWorld;*/