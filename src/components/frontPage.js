import React, { Component } from 'react';
import { Button, Input, Form, Icon } from 'semantic-ui-react';

class FrontPage extends Component {
 constructor(props) {
   super(props)
   this.state = {
     username: '',
   }
   this.onSubmit = this.onSubmit.bind(this)
   this.onChange = this.onChange.bind(this)
 }

 onSubmit(e) {
     alert("Submitted")
   e.preventDefault()
   this.props.onSubmit(this.state.username)
 }

 onChange(e) {
    this.setState({ username: e.target.value })
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="ui header red">What is your username?</h2>
          <Form onSubmit={this.onSubmit}>
            <Input
              type="text"
              placeholder="Your full name"
              onChange={this.onChange}
            />
            <Button>Enter</Button>
          </Form>
        </div>
      </div>
    )
  }
}

 export default FrontPage
