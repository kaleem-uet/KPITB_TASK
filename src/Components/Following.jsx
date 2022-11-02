import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "../img/profile.png";
import location from "../img/l.png";
import './g.css';
import axios from 'axios';

function Following() {
  const [userName,setUserName]=useState('');
  const [Follower,setFollower]=useState('');
  const [Following,setFollowing]=useState('');



    useEffect(() => {
      axios
      .get("https://api.github.com/users/kaleem-uet")
      .then((res) => {
        setUserName(res.data);
        console.log("data",res.data)
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("https://api.github.com/users/kaleem-uet/followers")
      .then((res) => {
        setFollower(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("https://api.github.com/users/kaleem-uet/following")
      .then((res) => {
        setFollowing(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
      // 
    },[])
  
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          height: 458,
          width: 484,
          backgroundColor: "white",
          borderRadius: 20,
          display: "flex",
          alignItems: "centert",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: 40, width: "80%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <div style={{ marginLeft: 20, flexDirection: "column" }}>
              <h4 style={{ fonSize: 18, marginLefft: 30 }}>{userName.login}</h4>
              <div style={{ justifyContent: "space-around", display: "flex" }}>
                <div>
                  <h5>Follower {Follower.length} </h5>
                </div>
                <div style={{ marginLeft: 30 }}>
                  <h5> following {Following.length}</h5>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <div style={{ marginLeft: 20 }}>
              <h4>Follower</h4>
            </div>
            <div>
              <Button variant="dark">back</Button>
            </div>
          </div>
          <div className="scroll-container">
          <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
            <img src={logo} alt="Logo" style={{ width: 30, height: 30,borderRadius:20 }} />
            <div style={{ marginLeft: 20 }}>
              <h4>name</h4>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
            <img src={logo} alt="Logo" style={{ width: 30, height: 30,borderRadius:20 }} />
            <div style={{ marginLeft: 20 }}>
              <h4>name</h4>
            </div>
          </div>
          
          
          
          </div>
          <div style={{ marginTop:10, display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
          
          <Button variant="dark" size="lg">
          Repositeries
        </Button><Button variant="dark" size="lg">
        view Profile on git hub
        </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Following;
