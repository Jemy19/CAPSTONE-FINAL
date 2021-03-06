import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import React, {useState} from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { setDoc, doc, collection, addDoc, Timestamp, serverTimestamp, getDoc } from "firebase/firestore";
import {auth, db, storage} from '../../firebase'
import { v4 as uuid } from 'uuid'
import './newtransaction.css'
import {useNavigate} from 'react-router-dom'
const initialState = {
  name: "",
  description: "",
  address: "",
  date:"",
  amount:"",
}

function Newtransaction() {

  const [data,setData] = useState(initialState)
  const { name, description,date, address, amount,entry} = data
  const navigate = useNavigate()
  const transactionid = uuid()
    const handleAdd = async (e) => {
    
        e.preventDefault();

          await setDoc(doc(db, "transaction", transactionid), {
            ...data,
            timeStamp: serverTimestamp(),
          })
        navigate('/transactionlist')
      };

    const handleInput = (e) =>{
        const id = e.target.id
        const value = e.target.value
       
        setData({...data, [id] : value})
    }
  


      const [value,setValue]=useState('');
  
      const handleSelect=(e)=>{
          console.log(e);
          setValue(e)

      }
      return (
        <>
        <Container id="TransactionForm-container" className="d-grid h-100">
    <Form id="TransactionForm-Form" className="text-center w-100" onSubmit = {handleAdd}>
        <h3>Transaction Form</h3>
        <Form.Group controlId="Reference Number">
        <FloatingLabel controlId="floatingInput" label="Reference Number" className="mb-3">
              <Form.Control id ="transid" type="Reference Number" size="lg" placeholder="Reference Number" readOnly  value = {transactionid} autoComplete="Reference Number" className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
            <Form.Group controlId="Name">
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
              <Form.Control id = "name" type="name" size="lg" placeholder="FullName" autoComplete="FullName" value = {name} className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
    
        <Form.Group controlId="Description">
        <FloatingLabel controlId="floatingInput" label="Description" className="mb-3">
              <Form.Control id = "description" type="Description" size="lg" placeholder="Description" autoComplete="Description" value = {description || ""} className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="Address">
            <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
              <Form.Control id = "address" type="address" size="lg" placeholder="Address" autoComplete="address" value = {address || ""} className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
            
           

                <Form.Group className="mb-3" controlId="Date">
          <FloatingLabel controlId="floatingInput" label="Date" className="mb-3">
          <Form.Control type="date" name="datepic" placeholder="Date" id = 'date' value={date} onChange = {handleInput}/>
          </FloatingLabel>
        </Form.Group>


    
    
                
                 <Form.Select aria-label="Default select example" id = 'entry' onChange = {handleInput}>
                    <option>Type of entry</option>
                    <option value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                  </Form.Select>
        
    
            <Form.Group className="mb-3" controlId="Amount">
            <FloatingLabel controlId="floatingInput" label="Amount" className="mb-3">
              <Form.Control id = "amount" type="Amount" size="lg" placeholder="Amount" value = {amount || ""} autoComplete="Amount" className="position-relative" onChange={handleInput}/>
              </FloatingLabel>
            </Form.Group>
            
    
            <div className="d-grid">
              <Button variant="primary" size="lg" type= 'submit'>Submit</Button>
            </div>
    </Form>
        </Container>
        </>
      );
  
 }
    export default Newtransaction