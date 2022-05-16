/* 
    16개의 성향을 포함한 하나의 배열
    객체 하나당 키 
    type: 16개의 성격유형 중 하나 (예: INTP)
    description: 해당 성격에 대한 설명(창작하기)
    기타 다른 키는 본인이 만들고 싶은 앱에 맞게 만들기!
*/		

import ENFJ from '../image/quest/ENFJ.png'
import ENFP from '../image/quest/ENFP.jpeg'
import ENTJ from '../image/quest/ENTJ.jpg'
import ENTP from '../image/quest/ENTP.jpg'
import ESFJ from '../image/quest/ESFJ.jpg'
import ESFP from '../image/quest/ESFP.jpg'
import ESTJ from '../image/quest/ESTJ.png'
import ESTP from '../image/quest/ESTP.png'

import INFJ from '../image/quest/INFJ.jpg'
import INFP from '../image/quest/INFP.jpg'
import INTJ from '../image/quest/INTJ.png'
import INTP from '../image/quest/INTP.png'
import ISFJ from '../image/quest/ISFJ.jpg'
import ISFP from '../image/quest/ISFP.jpg'
import ISTJ from '../image/quest/ISTJ.JPG'
import ISTP from '../image/quest/ISTP.jpg'


export const resultcontent = [{
    type: "ISTJ",
    imagePath: ISTJ,
    mention: "세상의 소금형 ",
    submention: "한번 시작한 일은 끝까지 해내는 타입",
    description: "여행 스타일",
    subdescription : "스스로 여행 일정을 계획하고, 정리하는 타입",
  },{
    type: "ISFJ",
    imagePath: ISFJ,
    mention: "임금 뒤편의 권력형",
    submention: "설실하고 온화하며 협조를 잘하는 타입",
    description: "여행 스타일",
    subdescription: "함께 가는 친구들의 의견을 모아서 일정을 섬세하게 정리하는 타입"
  },{
    type: "INFJ",
    imagePath: INFJ,
    mention: "예언자형",
    submention : "사람과 관련된 뛰어난 통찰력을 가지고 있는 타입",
    description: "여행 스타일",
    subdescription : "숙소에서는 뭘 할지, 영화를 본다면 어떤 영화를 볼 지 고민하는 타입"
  },{
    type: "INTJ",
    imagePath: INTJ,
    mention: "과학자형",
    submention : "전체적인 부분을 조합하여 비전을 제시하는 타입",
    description: "여행 스타일",
    subdescription : "여행지를 검색한 후, 여행지의 역사부터 기후 그리고 이슈까지 파악하는 타입"
  },{
    type: "ISTP",
    imagePath: ISTP,
    mention: "백과사전형",
    submention : "논리적이고 뛰어난 상황 적응력을 가지고 있는 타입",
    description: "여행 스타일",
    subdescription : "평소에는 내성적이지만, 여행지에서는 대담한 모습을 보이는 타입"
  },{
    type: "ISFP",
    imagePath: ISFP,
    mention: "성인군자형",
    submention : "따듯한 감성을 가지고 있는 겸손한 타입",
    description: "여행 스타일",
    subdescription : "조식이 맛있거나 일몰, 일출이 아름다운 숙소처럼 디테일을 중요시하는 타입"
  },{
    type: "INFP",
    imagePath: INFP,
    mention: "잔다르크형",
    submention : "이상적인 세상을 만들어 가는 타입",
    description: "여행 스타일",
    subdescription : "여행 전 갈까 말까 고민하지만, 결국 떠밀려서 가도 즐겁게 다녀오는 타입",
  },{
    type: "INTP",
    imagePath: INTP,
    mention: "아이디어 뱅크형",
    submention : "비평적인 관점을 가지고 있는 뛰어난 전략가 타입",
    description: "여행 스타일",
    subdescription : "가장 효율적인 이동 수단을 먼저 고민하는 타입"
  },{
    type: "ESTP",
    imagePath: ESTP,
    mention: "수완좋은 활동가형",
    submention : "친구, 운동, 음식 등 다양한 활동을 선호하는 타입",
    description: "여행 스타일",
    subdescription : "여행지에서 먹거나 사용한 아이템으로 사업을 구상하는 타입"
  },{
    type: "ESFP",
    imagePath: ESFP,
    mention: "사교적인 유형",
    submention : "분위기를 고조시키는 우호적 타입",
    description: "여행 스타일", 
    subdescription: "숙소 근처에서 즐길 거리를 찾는 타입"
  },{
    type: "ENFP",
    imagePath: ENFP,
    mention: "스파크형",
    submention : "열정적으로 새로운 관계를 만드는 타입",
    description: "여행 스타일",
    subdescription : "함께 가는 여행 메이트에게 맛집을 공유하는 타입"
  },{
    type: "ENTP",
    imagePath: ENTP,
    mention: "발명가형",
    submention : "풍부한 상상력을 가지고 새로운 것에 도전하는 타입",
    description: "여행 스타일",
    subdescription : "선택한 곳을 가야 하는 이유를 구구절절 설명하는 타입"
  },{
    type: "ESTJ",
    imagePath: ESTJ,
    mention: "사업가형",
    submention : "사무적, 실용적, 현실적으로 일을 많이하는 타입",
    description: "여행 스타일",
    subdescription : "여행 계획이 틀어지려는 직감이 오면 화가 치밀어 오르는 타입"
  },{
    type: "ESFJ",
    imagePath: ESFJ,
    mention: "친선도모형",
    submention : "친절과 현실감을 바탕으로 타인에게 봉사하는 타입",
    description: "여행 스타일",
    subdescription : "리액션이 좋아서 친구가 공유한 여행 내용을 모두 호응해주는 타입"
  },{
    type: "ENFJ",
    imagePath: ENFJ,
    mention: "언변능숙형",
    submention : "타인의 성장을 도모하고 협동하는 타입",
    description: "여행 스타일",
    subdescription : "여행 가방 안에 없는 준비물이 없는 타입"
  },{
    type: "ENTJ",
    imagePath: ENTJ,
    mention: "지도자형",
    submention : "비전을 가지고 사람들을 활력적으로 이끌어가는 타입",
    description: "여행 스타일",
    subdescription : "여행지에서 문제가 발생하면 빠르게 역할 분담하는 타입"
  }]