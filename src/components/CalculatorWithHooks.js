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
  
function CalculatorWithHooks(props) {
  console.log(props.initialValue)
  const [initialValue, setInitialValue] = useState(props.initialValue);
  const [values, setValues] = useState(null);
  const [operation, setOperation] = useState(null);
  const [totally, setTotally] = useState(0);
  const [disabled, setDiseabled] = useState(true);
  const [disabledEquals, setdisabledEquals] = useState(true);
  //function that gets operations  
  const handleOperation = (e) => {
    if(e.target.name === "+"){
        setOperation('sum')
    }else if(e.target.name === "-"){
        setOperation('subtract')
    }else if(e.target.name === "*"){
        setOperation('multiply')
    }else if(e.target.name === "%"){
        setOperation('split')
    }
    setValues((values != null ? values : '') + [e.target.name])
    setDiseabled(true)
  }
  //function that gets operands 
  const handleChange = (e) => {
    setInitialValue(1)
    setValues((values != null ? values : '') + [e.target.name])
    setDiseabled(false)
    setdisabledEquals(false)
  }
  //function that clear the solution
  const handleClear = () => {
    if(totally === 1){
        setInitialValue(0)
        setValues(null)
        setTotally(0)
        setDiseabled(true)
        setdisabledEquals(true)
    }else{
        if(values !== null){
            setValues(values.slice(0, -1))
            if(values.length === 1){
                setDiseabled(true)
                setdisabledEquals(true)
            }
        }
    }
  }
  //function that gets results of the operations
  const handleResult = (op) => {
    switch (op) {
      case 'sum':
        if(parseFloat((values.split("+")[1])) > 0){
            setValues(parseFloat(values.split("+")[0]) + parseFloat(values.split("+")[1]))
            setTotally(1)
            setdisabledEquals(false)
        }
        break;
      case 'subtract':
        if(parseFloat((values.split("-")[1])) > 0){
            setValues(parseFloat(values.split("-")[0]) - parseFloat(values.split("-")[1]))
            setTotally(1)
            setdisabledEquals(false)
        }
        break;
      case 'multiply':
        if(parseFloat((values.split("*")[1])) > 0){
            setValues(parseFloat(values.split("*")[0]) * parseFloat(values.split("*")[1]))
            setTotally(1)
            setdisabledEquals(false)
        }
        break;
      case 'split':
        if(parseFloat((values.split("%")[1])) > 0){
            setValues(parseFloat(values.split("%")[0]) / parseFloat(values.split("%")[1]))
            setTotally(1)
            setdisabledEquals(false)
        }
        break;
      default:
        break;
    }
  }
  return (
    <Container>
        <Table bordered>
            <thead>
                <tr>
                    <th colSpan="4"><h1>Calculator with Hooks</h1></th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td colSpan="4">
                    <label>{initialValue === 0 ? initialValue : values === '' ? 0 : values}</label>
                  </td>
              </tr>
            <tr>
                <td>
                  <Button variant="secondary" size="lg" disabled={disabled} name="+" active style={styles.buttonCaculator} onClick={handleOperation}>
                    +
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" disabled={disabled} name="-" active style={styles.buttonCaculator} onClick={handleOperation}>
                    -
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg" disabled={disabled} name="*" active style={styles.buttonCaculator} onClick={handleOperation}>
                    *
                  </Button>
                </td>
                <td>
                  <Button variant="secondary" size="lg"  disabled={disabled} name="%" active style={styles.buttonCaculator} onClick={handleOperation}>
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
                  <Button variant="secondary" size="lg"  disabled={disabledEquals} active style={styles.buttonEquals} onClick={() => handleResult(operation)}>
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