import styled from "styled-components";
import Month from "./month";
import add from 'date-fns/add'
import { format, compareAsc } from 'date-fns'
import { useEffect, useState, } from "react";
import auth from "../auth/auth";

import axios from "axios";






const YearContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

`

const meses = ["janeiro",

"fevereiro",

"março",

"abril",

"maio",

"junho",

"julho",

"agosto",

"setembro",

"outubro",

"novembro",

"dezembro"]

const hoje = format(new Date(),"dd/MM/yyyy")

console.log(hoje)


function Year() {

  const [trava,setTrava] = useState("");
  const [currentUser,setCurrentUser] = useState();
  const [reports, setReports] = useState();



  useEffect(() => {
    // Update the document title using the browser API
    const email = auth.getCurrentUser()?.email

    axios.get("http://localhost:3333/reports/"+email).then((response) => {
      setReports(response.data.report)
    }, (error) => {
      console.log(error);
    });


  },[trava]);  

  console.log(reports)
  return (
    <>
    <p>{hoje}</p>
    <YearContainer >
      {meses.map((i,index) =>{
        return <Month name = {i} index = {index} report = {reports}></Month>
      })}
    </YearContainer>
    </>
  );
}

export default Year;




