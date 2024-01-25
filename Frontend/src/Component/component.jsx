import { useState } from "react";
import axios from "axios"
import "./component.scss"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

export const Componets = ({ heading, UserName, UserEmail, UserPassword, firstBtn, way, anotherpage, ancorTag }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [logged, setLogged] = useState("");
  const navigate = useNavigate();
  // enter data =>
  const handleOnchange = (e) => {
    let { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  // data send to backend =>
  const PostApi = async () => {
    try {
      let { name, email, password } = data;
      let URL = `http://localhost:8080${way}`;
      let response = await axios.post(URL, { name, email, password });
      setLogged(response.data.massage)
    } catch (error) {
      console.log("the error is ->", error)
    }
  }

  // submit data =>
  const handleSubmit = (e) => {
    e.preventDefault();
    PostApi();
    if (way !== "/login") {
      navigate("/login")
    }
    setLogged(true)
  }

  const formData = [
    {
      Name: "name",
      Value: data.name,
      placeName: "Name.....",
      type: "text",
      span: UserName
    },
    {
      Name: "email",
      Value: data.email,
      placeName: "Email.....",
      type: "email",
      span: UserEmail
    },
    {
      Name: "password",
      Value: data.password,
      placeName: "Password.....",
      type: "password",
      span: UserPassword
    }
  ]

  return (
    <div className="parent">
      <h1 className="msg">{logged}</h1>
      <div className="container">
        <h1>{heading}</h1>
        <div className="login-container">
          {
            formData.map((element, i) => {
              let { Name, Value, placeName, type, span } = element;
              return (
                <>
                  {
                    (span) && (
                      <label className="lable" htmlFor="name" key={i}>
                        <span>{span === true ? "Name" : span}</span>
                        <input value={Value} onChange={handleOnchange} type={type} name={Name} placeholder={placeName} required />
                      </label>
                    )
                  }
                </>
              )
            })
          }
        </div>
        <button className="login" onClick={handleSubmit}>{firstBtn}</button>
        <Link to={anotherpage}>{ancorTag}</Link>
      </div >
    </div>
  )
}