import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react'
import MyContext from '../context/MyContext'


const FormWrap = styled.section`
  margin: 0 auto;
  background: #e9e5d6;
  width: 575px;
  height: 430px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const MyInput = styled.input`
  padding: 0.5em;
  border: 2px solid #464e2e;
  background-color: #e9e5d6;
  border: 0;
  border-bottom: 2px solid #9a9a9a;
  margin: 5px 0px 15px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: #9a9a9a;
  }
`;

const MyCheckbox = styled.input`
  &[type="checkbox"] {
    color: #bf4f74;
    outline: none;
  }
`;

const MyLabel = styled.label`
  font-weight: 400;
  font-size: 13px;
`;
const MyCheckboxContainer = styled.section`
  display: flex;
  margin-bottom: 15px;
`;
const SpanRecuerdame = styled.span`
  margin-left: 5px;
  color: #9a9a9a;
`;

const ButtonGreenForm = styled.button`
  /* Estilos específicos para el botón en el formulario */
  width: 400px;
  height: 40px;
  background: #464e2e;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1.3px 1.5px 2px rgba(0, 0, 0, 0.2);
  transition: border-color 0.2s;

  &:active {
    transform: translateY(1px);
    background-color: #3d4425;
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
    box-shadow: 1.5px 1.5px 2px rgba(0, 0, 0, 0.2);
  }
`;

const Parrafo = styled.p`
  margin-top: 25px;
  font-size: 14px;
  text-align: center;
`;

const SpanReg = styled.span`
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
`;
const MyH1 = styled.h1`
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  padding-top: 10px;
`;
//////////////////////////////////////////////////////
const Form = () => {

  const navigate = useNavigate()
  const {myData, setMyData} = useContext(MyContext)
  const [formData, setFormData] = useState({
    usuario: "",
    password: ""
  })
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState(null)

  const loginRequest = async (credentials) => {
    try {
      const results = await fetch(`${import.meta.env.VITE_BASE_URL || import.meta.env.VITE_LOCAL_URL}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
        credentials: 'include',
        mode: 'cors'
      })

      const data = await results.json()
      if(checkStatus(data)){
        redirectPage('/')
        setTimeout(() => {
          setMyData(data.data.attributes.user) //context con datos del usuario
        }, 1100);
        
      } 
      return 
    } catch (error) {
      console.log("Error de solicitud: ", error)
    }
  }

  const submitLogin = (e) => {
    e.preventDefault();
    setErrors(null)
    setStatus('')
    const {name, value} = e.target
    setFormData({ ...formData, [name]: value})
    loginRequest(formData)
    return
  };

  const checkInputErrors = (inputName) => {
    if(errors){
      const err = errors.find(el => el.path === inputName)
      return err !== undefined ? err.msg : false
    }
    return 
  }
  
  const checkStatus = (results) => {
    if(results.errors !== undefined ){
        if(results.errors[0].status){
          const err = results?.errors[0].message
          setStatus(err) 
        } else {
          const err = results.errors
          setErrors(err)
        }
      return false
    } 
      const response = results?.data.attributes.message
      setStatus(response)
    return true
  }

  const redirectPage = (route) => {
    setTimeout(() => {
      navigate(route)
    }, 1000)
  }


  return (
    <FormWrap>
      <MyForm onSubmit={submitLogin}>
        {status && <span>{status}</span>}
        <MyH1>Iniciar sesión</MyH1>
        <MyInput
          type="email"
          placeholder="Email"
          name="usuario"
          onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
        />
        {checkInputErrors('usuario')
        &&
        <span>
          {checkInputErrors('usuario')}
        </span>
        }
        
        <MyInput
          type="password"
          placeholder="Contaseña"
          name="password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {checkInputErrors('password')
        &&
        <span>
          {checkInputErrors('password')}
        </span>
        }
        <MyCheckboxContainer>
          <MyCheckbox type="checkbox" />
          <MyLabel>
            <SpanRecuerdame>Recuérdame</SpanRecuerdame>
          </MyLabel>
        </MyCheckboxContainer>
          <ButtonGreenForm>Iniciar sesión</ButtonGreenForm>
        <Parrafo>
          ¿No tienes una cuenta? <br />
          <Link to="/signup">
            <SpanReg>Regístrate aquí</SpanReg>
          </Link>
        </Parrafo>
      </MyForm>
    </FormWrap>
  );
};

export default Form;
