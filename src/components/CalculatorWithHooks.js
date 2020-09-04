import React, { useState } from 'react';
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
  
function CalculatorWithHooks() {
  const [initialValue, setInitialValue] = useState(0);
  const [values, setValues] = useState(null);
  const [operation, setOperation] = useState(null);
  const [totally, setTotally] = useState(0);
  
  //function that gets operations and operands 
  const handleChange = (e) => {
    if(e.target.name === "+"){
      setOperation('sum')
    }else if(e.target.name === "-"){
      setOperation('subtract')
    }else if(e.target.name === "*"){
      setOperation('multiply')
    }else if(e.target.name === "%"){
      setOperation('split')
    }
    setInitialValue(1)
    setValues((values != null ? values : '') + [e.target.name])
  }
  //function that clear the solution
  const handleClear = () => {
    if(totally === 1){
        setInitialValue(0)
        setValues(null)
        setTotally(0)
    }else{
        setValues(values.slice(0, -1))
    }
  }
  //function that gets results of the operations
  const handleResult = (op) => {
    switch (op) {
      case 'sum':
        setValues(parseFloat(values.split("+")[0]) + parseFloat(values.split("+")[1]))
        setTotally(1)
        break;
      case 'subtract':
        setValues(parseFloat(values.split("-")[0]) - parseFloat(values.split("-")[1]))
        setTotally(1)
        break;
      case 'multiply':
        setValues(parseFloat(values.split("*")[0]) - parseFloat(values.split("*")[1]))
        setTotally(1)
        break;
      case 'split':
        setValues(parseFloat(values.split("%")[0]) - parseFloat(values.split("%")[1]))
        setTotally(1)
        break;
      default:
        break;
    }
  }
  return (
    <Container>
        <Table bordered>
            <thead>
                <th colSpan="4"><h1>Calculator with Hooks</h1></th>
            </thead>
            <tbody>
              <tr>
                  <td colSpan="4">
                    <label>{initialValue === 0 ? initialValue : values === '' ? 0 : values}</label>
                  </td>
              </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="+" active style={styles.buttonCaculator} onClick={handleChange}>
                    +
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="-" active style={styles.buttonCaculator} onClick={handleChange}>
                    -
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="*" active style={styles.buttonCaculator} onClick={handleChange}>
                    *
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="%" active style={styles.buttonCaculator} onClick={handleChange}>
                    %
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="7" active style={styles.buttonCaculator} onClick={handleChange}>
                    7
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="8" active style={styles.buttonCaculator} onClick={handleChange}>
                    8
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="9" active style={styles.buttonCaculator} onClick={handleChange}>
                    9
                  </Button>
                </td>
                <td rowSpan="4">
                  <Button variant="secondary" size="lg" active style={styles.buttonEquals} onClick={() => handleResult(operation)}>
                    =
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="4" active style={styles.buttonCaculator} onClick={handleChange}>
                    4
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="5" active style={styles.buttonCaculator} onClick={handleChange}>
                    5
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="6" active style={styles.buttonCaculator} onClick={handleChange}>
                    6
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="1" active style={styles.buttonCaculator} onClick={handleChange}>
                    1
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="2" active style={styles.buttonCaculator} onClick={handleChange}>
                    2
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="3" active style={styles.buttonCaculator} onClick={handleChange}>
                    3
                  </Button>
                </td>
            </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" name="0" active style={styles.buttonCaculator} onClick={handleChange}>
                    0
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" name="." active style={styles.buttonCaculator} onClick={handleChange}>
                    .
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" active style={styles.buttonAC} onClick={handleClear}>
                    AC
                  </Button>
                </td>
            </tr>
            </tbody>
        </Table>
      </Container> 
  );
}
export default CalculatorWithHooks