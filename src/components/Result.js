import React, { useState, useEffect } from 'react';
import { Title, Button } from '../styles/myComponents';
import { resultcontent } from '../utilities/resultcontents';
import './result.css';


const Result = props => {
    const [myCharacter, setCharacter] = useState({})

    useEffect(() => {
        const { e, s, t, j } = props.points
        let result = "";
        result += e > 0 ? "E" : "I"
        result += s > 0 ? "S" : "N"
        result += t > 0 ? "T" : "F"
        result += j > 0 ? "J" : "P"
        const finalResult = resultcontent.filter(content => {
            return content.type === result
        })
        setCharacter(finalResult[0])
    }, [])

    return <div>
        <Title>
            <h2 className="res_h2" style={{ color: "white" }}>{myCharacter.type}</h2>
            <div style={{display: "flex"}}>
                <div className="parent" style={{width: "50%"}}>
                    <img className="img_cls" src={myCharacter.imagePath} width="300px" height="300px"
                    alt=""/>
                </div>
                <div className="parent" style={{width: "50%"}}>
                    <p className="res_p child" style={{ color: "yellow" }}>{myCharacter.mention}</p>
                    <p className="res_p child" style={{ color: "white" }}>{myCharacter.submention}</p>
                    <p className="res_p child" style={{ color: "yellow" }}>{myCharacter.description}</p>
                    <p className="res_p child" style={{ color: "white" }}>{myCharacter.subdescription}</p>
                </div>
            </div>
        </Title>
        <br/><br/>
        <Button className="btn btn--blue" onClick={props.goToHome}>다시하기</Button>
        <p className="res_ptag" style={{ color: "white" }}>다시 여행을 마음 편히 다니는 날이 오기를..</p>
    </div>
}

export default Result