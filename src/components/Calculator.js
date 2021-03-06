import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from 'react-bootstrap';

// styles of buttons
const styles = {
  buttonCaculator: {
    backgroundColor: '#e1d9d7',
    borderColor: '#e1d9d7',
    color: '#000'
  },
  buttonAC: {
    backgroundColor: '#e9613f',
    borderColor: '#e9613f',
    color: '#FFF'
  },
  buttonEquals: {
    backgroundColor: '#3f5fff',
    borderColor: '#3f5fff',
    color: '#FFF'
  }
}

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: this.props.initialValue,
      values: null,
      operation: null,
      totally: 0,
      disabled: true,
      disabledEquals: true
    };
  }
  //function that gets operations  
  handleOperation = (e) => {
    if(e.target.name === "+"){
      this.setState({
        operation: 'sum'
      })
    }else if(e.target.name === "-"){
      this.setState({
        operation: 'subtract'
      })
    }else if(e.target.name === "*"){
      this.setState({
        operation: 'multiply'
      })
    }else if(e.target.name === "%"){
      this.setState({
        operation: 'split'
      })
    }
    this.setState({
      disabled: true,
      values: (this.state.values != null ? this.state.values : '') + [e.target.name]
    })
  }
  //function that gets operations and operands 
  handleChange = (e) => {
    this.setState({
      initialValue: 1,
      values: (this.state.values != null ? this.state.values : '') + [e.target.name],
      disabled: false,
      disabledEquals: false
    })
  }
  //function that clear the solution
  handleClear = () => {
    if(this.state.totally === 1){
      this.setState({
        initialValue: 0,
        values: null,
        totally: 0,
        disabled: true,
        disabledEquals: true
      })
    }else{
      if(this.state.values !== null){
        this.setState({
          values: this.state.values.slice(0, -1)
        })
        if(this.state.values.length === 1){
          this.setState({
            disabled: true,
            disabledEquals: true
          })
        }
      }
      
    }
  }
  //function that gets results of the operations
  handleResult = (op) => {
    switch (op) {
      case 'sum':
        if(parseFloat(this.state.values.split("+")[1]) > 0){
          this.setState({
            values: parseFloat(this.state.values.split("+")[0]) + parseFloat(this.state.values.split("+")[1]),
            totally: 1,
            disabledEquals: false
          })
        }
        break;
      case 'subtract':
        if(parseFloat(this.state.values.split("-")[1]) > 0){
          this.setState({
            values: parseFloat(this.state.values.split("-")[0]) - parseFloat(this.state.values.split("-")[1]),
            totally: 1,
            disabledEquals: false
          })
        }
        break;
      case 'multiply':
        if(parseFloat(this.state.values.split("*")[1]) > 0){
          this.setState({
            values: parseFloat(this.state.values.split("*")[0]) * parseFloat(this.state.values.split("*")[1]),
            totally: 1,
            disabledEquals: false
          })
        }
        break;
      case 'split':
        if(parseFloat(this.state.values.split("%")[1]) > 0){
          this.setState({
            values: parseFloat(this.state.values.split("%")[0]) / parseFloat(this.state.values.split("%")[1]),
            totally: 1,
            disabledEquals: false
          })
        }
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <Container>
        <Table bordered>
            <thead>
              <tr>
                <th colSpan="4"><h1>Calculator without Hooks</h1></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td colSpan="4">
                    <label>{this.state.initialValue === 0 ? this.state.initialValue : this.state.values === '' ? 0 : this.state.values}</label>
                  </td>
              </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" disabled={this.state.disabled} name="+" active style={styles.buttonCaculator} onClick={this.handleOperation}>
                    +
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" disabled={this.state.disabled} name="-" active style={styles.buttonCaculator} onClick={this.handleOperation}>
                    -
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" disabled={this.state.disabled} name="*" active style={styles.buttonCaculator} onClick={this.handleOperation}>
                    *
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" disabled={this.state.disabled} name="%" active style={styles.buttonCaculator} onClick={this.handleOperation}>
                    %
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="7" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    7
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="8" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    8
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="9" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    9
                  </Button>
                </td>
                <td rowSpan="4">
                  <Button variant="secondary" size="lg" disabled={this.state.disabledEquals} active style={styles.buttonEquals} onClick={() => this.handleResult(this.state.operation)}>
                    =
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="4" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    4
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="5" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    5
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="6" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    6
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="1" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    1
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="2" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    2
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="3" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    3
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="0" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    0
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="." active style={styles.buttonCaculator} onClick={this.handleChange}>
                    .
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonAC} onClick={this.handleClear}>
                    AC
                  </Button>
                </td>
            </tr>
            </tbody>
        </Table>
      </Container>
    );
  }
}
