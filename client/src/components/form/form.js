import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import auth from '../auth/auth';


const FormsContainer = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(12, 1fr);
grid-column-gap: 0px;
grid-row-gap: 10px;
justify-items: center;
margin-top:35px;

`


const FieldContainer = styled.div`
display:flex;
flex-direction:column;
width:fit-content;
text-align: center;


`

const RadioContainer = styled.div`
display:flex;
flex-direction:row;

`

const RadioContainerContainer = styled.div`
display:flex;
flex-direction:row;
`

const FormsButton = styled.button`
background:none;
border:none;
color:${props => props.selected ? "black" : "gray"};
`


const SubmitButton = styled.button`
background:none;
border:none;
color:${"black"};
`



export default function DailyForms() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [exercicio, setExercicio] = useState()

    const [dorCabeca, setDorCabeca] = useState()
    const [codar, setCodar] = useState()
    const [acordar, setAcordar] = useState()
    const [sleepTime, setSleepTime] = useState()
    const [jogar, setJogar] = useState()
    const [role, setRole] = useState()
    const [agua, setAgua] = useState()
    const [refeicoes, setRefeicoes] = useState()
    const [limpeza, setLimpeza] = useState()
    const [leitura, setLeitura] = useState()
    const [currentUser,setCurrentUser] = useState();

    useEffect(() => {
        // Update the document title using the browser API
        setCurrentUser(auth.getCurrentUser)
      },[]);


    let { dayID } = useParams();
    console.log(dayID)

    async function onSubmit(){
       var postObj = {
            "userEmail": currentUser?.email,
            "dayId": dayID,
            "exercicio": exercicio,
            "dorCabeca": dorCabeca,
            "codar": codar,
            "acordar": acordar,
            "sleepTime": sleepTime,
            "jogar": jogar,
            "role": role,
            "agua": agua,
            "refeicoes": refeicoes,
            "limpeza": limpeza,
            "leitura": leitura,
        }
        const response = await axios.post("http://localhost:3333/report",postObj)
        console.log(response.data)
    };
    return (
        <FormsContainer>
            <FieldContainer>

                <h4>Fez exercício ? </h4>
                <div>
                    <FormsButton onClick={() => setExercicio(true)} selected={exercicio}>Sim</FormsButton>
                    <FormsButton onClick={() => setExercicio(false)} selected={exercicio == false}>Não</FormsButton>
                </div>
            </FieldContainer>

            <FieldContainer>

                <h4>Teve dor de cabeca?</h4>
                <div>
                    <FormsButton onClick={() => setDorCabeca(true)} selected={dorCabeca}>Sim</FormsButton>
                    <FormsButton onClick={() => setDorCabeca(false)} selected={dorCabeca == false}>Não</FormsButton>
                </div>
            </FieldContainer>

            <FieldContainer>

                <h4>Codou ? </h4>
                <div>
                    <FormsButton onClick={() => setCodar(true)} selected={codar}>Sim</FormsButton>
                    <FormsButton onClick={() => setCodar(false)} selected={codar == false}>Não</FormsButton>
                </div>
            </FieldContainer>
            <FieldContainer>

                <h4>Acordou bem ? </h4>
                <div>
                    <FormsButton onClick={() => setAcordar(true)} selected={acordar}>Sim</FormsButton>
                    <FormsButton onClick={() => setAcordar(false)} selected={acordar == false}>Não</FormsButton>
                </div>
            </FieldContainer>
            <FieldContainer>

                <h4>Dormiu mais que 6 horas ? </h4>
                <div>
                    <FormsButton onClick={() => setSleepTime(true)} selected={sleepTime}>Sim</FormsButton>
                    <FormsButton onClick={() => setSleepTime(false)} selected={sleepTime == false}>Não</FormsButton>
                </div>
            </FieldContainer>
            <FieldContainer>

                <h4>Jogou ? </h4>
                <div>
                    <FormsButton onClick={() => setJogar(true)} selected={jogar}>Sim</FormsButton>
                    <FormsButton onClick={() => setJogar(false)} selected={jogar == false}>Não</FormsButton>
                </div>
            </FieldContainer>
            <FieldContainer>

                <h4>Saiu para algum lugar ? </h4>
                <div>
                    <FormsButton onClick={() => setRole(true)} selected={role}>Sim</FormsButton>
                    <FormsButton onClick={() => setRole(false)} selected={role == false}>Não</FormsButton>
                </div>
            </FieldContainer>

            <FieldContainer>

                <h4>2L de água ? </h4>
                <div>
                    <FormsButton onClick={() => setAgua(true)} selected={agua}>Sim</FormsButton>
                    <FormsButton onClick={() => setAgua(false)} selected={agua == false}>Não</FormsButton>
                </div>
            </FieldContainer>

            <FieldContainer>

                <h4>3 refeições ? </h4>
                <div>
                    <FormsButton onClick={() => setRefeicoes(true)} selected={refeicoes}>Sim</FormsButton>
                    <FormsButton onClick={() => setRefeicoes(false)} selected={refeicoes == false}>Não</FormsButton>
                </div>
            </FieldContainer>

            <FieldContainer>

                <h4>Arrumou alguma coisa do quarto ? </h4>
                <div>
                    <FormsButton onClick={() => setLimpeza(true)} selected={limpeza}>Sim</FormsButton>
                    <FormsButton onClick={() => setLimpeza(false)} selected={limpeza == false}>Não</FormsButton>
                </div>
            </FieldContainer>

            <FieldContainer>

                <h4>Leu alguma coisa relevante ?</h4>
                <div>
                    <FormsButton onClick={() => setLeitura(true)} selected={leitura}>Sim</FormsButton>
                    <FormsButton onClick={() => setLeitura(false)} selected={leitura == false}>Não</FormsButton>
                </div>
            </FieldContainer>


            <br></br>
            <SubmitButton onClick={() => onSubmit()}>Submit</SubmitButton>

        </FormsContainer>




    );
}

// exercício -
// dor de cabeca -
// codar -
// acordar bem -
// sleep time -
// gaming -
// sair -
// water intake -
// mood -
// all meals -
// cleaned things -
// read -