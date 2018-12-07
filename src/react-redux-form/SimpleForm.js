import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {Form,Control,Errors} from "react-redux-form";

import { connect} from "react-redux";

class SimpleForm extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      showError:false
    }
  }
  static propTypes = {
 
  }

  handleSubmit = (val) => {
    console.log("dada",val);
  }


  render() {
    return (
      <div>
        <Form 
            style={{paddingTop:"15px",display:"inline-grid"}}
            model="user">

            
            <label >FirstName : </label>
            <Control.text
                model="user.firstName"
                validators={{
                    required:(val) => !!val.length,
                    minLength:(val) => val.length > 8,
                }}
            />
            {this.state.showError && <Errors 
            style={{padding:"10px"}}
                model="user.firstName"
                messages={{
                    required:"Firstname is required.",
                    minLength:"Firstname must be more than 8 characters."
                }}
            />}
              <label >Lastname : </label>
            <Control.text
                model="user.lastName"
                validators={{
                    required:(val) => !!val.length,
                    minLength:(val) => val.length > 8,
                }}
            />
            {this.state.showError && <Errors 
            style={{padding:"10px"}}
                model="user.lastName"
                messages={{
                    required:"Lastname is required.",
                    minLength:"LastName must be more than 8 characters."
                }}
            />}
              <label >Email ID : </label>
            <Control.text
                model="user.email"
                validators={{
                    required:(val) => !!val.length,
                    minLength:(val) => val.length > 8,
                }}
            />
            {this.state.showError && <Errors 
            style={{padding:"10px"}}
                model="user.email"
                messages={{
                    required:"email is required.",
                    minLength:"email must be more than 8 characters."
                }}
            />}
              <label >Mobile No : </label>
            <Control.text
                model="user.phoneNo"
                validators={{
                    required:(val) => !!val.length,
                    minLength:(val) => val.length > 10,
                }}
            />
            {this.state.showError && <Errors 
            style={{padding:"10px"}}
                model="user.phoneNo"
                messages={{
                    required:"Phone Number is required.",
                    minLength:"phone Number must be more than 10 characters."
                }}
            />}
            <button>Submit!</button>
    
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({  

})

export default connect(mapStateToProps)(SimpleForm);