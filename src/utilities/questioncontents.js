/* 
    12개의 질문을 포함한 하나의 배열
    질문 12가지가 들어갈 예정이며, 객체로 들어간다.{}
    객체 하나당 키 
    number : 문항 번호 
    question : 질문 내용
    answer1 : 첫번째 선택지(+)
    answer2 : 두번째 선택지(-)
    type : e, s, t, j 중 한 가지 유형
*/

export const questioncontent = [{
    number: 1,
    question: "새로운 경험은",
    answer1 : "언제나 해보고 싶어!",
    answer2 : "새로운 거는 싫은데...",
    type: "e"
  },{
    number: 2,
    question: "나의 여행 테마는",
    answer1 : "쉬러가는 힐링이 메인이지!",
    answer2 : "여기저기 다니며 먹는거지!",
    type: "s"
  },{
    number: 3,
    question: "여행에 대한 계획은 ",
    answer1 : "장소만 정하고 나머진 가서 생각해~",
    answer2 : "하나부터 열까지 꼼꼼하게 정해야지!",
    type: "t"
  },{
    number: 4,
    question: "관광 명소를 고를 때",
    answer1 : "사람이 많이 가는 곳으로!",
    answer2 : "조금은 한적한 곳으로!",
    type: "j"
  },{
    number: 5,
    question: "숙소를 골라야하는데 ",
    answer1 : "잠만 잘 수 있으면 다 OK",
    answer2 : "리뷰부터 확인해야지",
    type: "e"
  },{
    number: 6,
    question: "여행 중에 나는",
    answer1 : "내가 대장이다!!!",
    answer2 : "누군가가 앞서서 움직이겠지~",
    type: "s"
  },{
    number: 7,
    question: "여행가서 사진을 찍을 때 ",
    answer1 : "여행 후 남는 건 추억뿐 무조건 찍자!",
    answer2 : "왔다는 경험으로도 충분해~",
    type: "t"
  },{
    number: 8,
    question: "여행 중 일정에 문제가 생기면 ",
    answer1 : "새로운 일정을 다시 만들어야지!",
    answer2 : "어쩔수 없지 다음 일정으로 넘어가자",
    type: "j"
  },{
    number: 9,
    question: "가려했던 식당에 대기 시간이 길다면 ",
    answer1 : "기다리기 보단 다른 곳으로 가자",
    answer2 : "그래도 원래 계획한 곳이니까 기다리자",
    type: "e"
  },{
    number: 10,
    question: "식당에서 음식이 나오면",
    answer1 : "음식은 먹고 보는 거지",
    answer2 : "기다려! 사진부터 찍어야해!",
    type: "s"
  },{
    number: 11,
    question: "나는 지쳤는데 친구들이 더 놀자하면",
    answer1 : "미안해... 난 이제 틀렸...어",
    answer2 : "그래! 뭐하고 더 놀건데?",
    type: "t"
  },{
    number: 12,
    question: "여행을 마치고 돌아와서",
    answer1 : "바로 짐 정리하고 일상으로 돌아가볼까",
    answer2 : "아... 다시 여행가고 싶다",
    type: "j"
}]