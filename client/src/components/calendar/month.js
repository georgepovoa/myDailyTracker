import styled from "styled-components";
import Day from "./day";
import getDay from 'date-fns/getDay'


const MonthContainerContainer = styled.div`
display:flex
flex-direction:rows;
`
const MonthContainer = styled.div`

display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
border:1px solid black;
margin:15px;
`


function Month(props) {

  const weekDay = getDay(new Date(2023, props.index, 1))
  const dias = ["dom", "seg", "ter", "quar", "qui", "sex", "sab"]

  const getDays = () => {
    return new Date(2023, props.index +1, 0).getDate();
  };

  const daysInMonth = [...Array(getDays())]
    return (
    <MonthContainerContainer>
      <p>{props.name}</p><p>{daysInMonth.length} {props.index}</p>
      <MonthContainer className="month">

        
        {dias.map(i => { return (<Day day={i}></Day>) })}

        {[...Array(weekDay)].map((x,i) => {
          return <Day day={""} index={i} isDay={false} ></Day>
        }) }
        { daysInMonth.map((x,i) => {
          return <Day day={i+1} index={i} isDay={true} id = {props.index*31 + i}  key = {(props.index+1)*31 + i} month = {props.index} report = {props.report}></Day>
        }) }
        
      </MonthContainer>
    </MonthContainerContainer>
  );
}

export default Month;
