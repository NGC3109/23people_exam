import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Form, Container } from 'react-bootstrap';

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
      initialValue: 0
    };
    
  }
  handleChangle = () => {
    this.setState({

    })
  }
  
  render() {
    return (
      <Container>
        <Table bordered>
            <thead>
            <tr>
                <td colSpan="4">
                  <Form.Control type="result" style={{textAlign: 'right'}} value={this.state.initialValue}/>
                </td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    +
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    -
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    *
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    %
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    7
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    8
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    9
                  </Button>
                </td>
                <td rowSpan="4">
                  <Button variant="secondary" size="lg" active style={styles.buttonEquals}>
                    =
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    4
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    5
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    6
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    1
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    2
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    3
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    0
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonCaculator}>
                    .
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonAC}>
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
