import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from 'react-bootstrap';

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
      initialValue: 0,
      values: null,
      operation: null
    };
  }
  handleChange = (e) => {
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
      [e.target.name]: [e.target.name],
      initialValue: 1,
      values: (this.state.values != null ? this.state.values : '') + [e.target.name]
    })
  }
  handleClear = () => {
    this.setState({
      initialValue: 0,
      values: null
    })
  }
  handleResult = (op) => {
    console.log(op)
    switch (op) {
      case 'sum':
        this.setState({
          values: parseInt(this.state.values.split("+")[0]) + parseInt(this.state.values.split("+")[1])
        })
        break;
      case 'subtract':
        this.setState({
          values: parseInt(this.state.values.split("-")[0]) - parseInt(this.state.values.split("-")[1])
        })
        break;
      case 'multiply':
        this.setState({
          values: parseInt(this.state.values.split("*")[0]) * parseInt(this.state.values.split("*")[1])
        })
        break;
      case 'split':
        this.setState({
          values: parseInt(this.state.values.split("%")[0]) / parseInt(this.state.values.split("%")[1])
        })
        break;
      default:
        console.log('break')
        break;
    }
  }
  render() {
    return (
      <Container>
        <Table bordered>
            <thead>
              <tr>
                  <td colSpan="4">
                    <label>{this.state.initialValue === 0 ? this.state.initialValue : this.state.values}</label>
                  </td>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="+" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    +
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="-" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    -
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="*" active style={styles.buttonCaculator} onClick={this.handleChange}>
                    *
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="%" active style={styles.buttonCaculator} onClick={this.handleChange}>
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
                  <Button variant="secondary" size="lg" active style={styles.buttonEquals} onClick={() => this.handleResult(this.state.operation)}>
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
