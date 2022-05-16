import React from "react";
import { Title, Button } from '../styles/myComponents';
import '../styles/Home.css';
import '../styles/btn.css';

const Home = (props) => { //goTOGame을 받아서 props 사용

    return <div className="div_home" style={{ textAlign: 'center' }}>
        <Title>
            <h1>MBTI별 여행 스타일 테스트</h1>
        </Title>
        <Button onClick={props.goToGame} className="btn btn--blue">
            시작하기
        </Button>
        <p>MADE BY 여행가고 싶다</p>
    </div>
}

export default Home