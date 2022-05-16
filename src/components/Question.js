import React from "react";
import { Title, Button } from '../styles/myComponents';
import { questioncontent } from '../utilities/questioncontents';

const Question = (props) => {

    
    return <div className="div_home">
        <Title>
            <h3>Q{questioncontent[props.count].number}</h3>
            <h2>{questioncontent[props.count].question}</h2>
        </Title>
        <Button className="btn btn--blue" onClick={ () => props.selectAnswer(1, questioncontent[props.count].type) }>
            {questioncontent[props.count].answer1}
        </Button>
        <br />
        <Button className="btn btn--blue" onClick={ () => props.selectAnswer(2, questioncontent[props.count].type) }>
            {questioncontent[props.count].answer2}
        </Button>
    </div>
}

export default Question