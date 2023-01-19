import styled from "styled-components";
import Moment from 'react-moment';
import moment from "moment";
import isBefore from 'date-fns/isBefore'
import axios from "axios";
import { useEffect, useState, } from "react";
import auth from "../auth/auth";

const DayContainer = styled.div`
border:${props => props.type? "1px solid black":""};
text-align:center;

`

const P = styled.p`
margin:0;
paddding:0;
`




function Day(props) {
  const fodaSe = new Date(2023,props.month,props.day)
  const today = new Date()
  const antes = isBefore(fodaSe, today)

  function isOnReport(){
    for (var i=0; i<props.report?.length;i++){
      console.log(props.report[i])
      if (props.report[i][props.id]){
        console.log("achou")
        return true
      }

    }
  }

  var reported = false
  if (props.isDay && antes){
    reported = isOnReport()
  }


  return (
    <DayContainer type={props.isDay} >
        <p>{props.day}  </p>
        {props.isDay && antes? <a onClick={()=>console.log(props.id)} href={"/dailyforms/"+props.id}> {"->"} </a>:<></>}
        {reported ?<p>ok</p>:<></>}
    </DayContainer>
  );

}
export default Day;
