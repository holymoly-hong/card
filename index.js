// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
    // 기존에 모달이 있다면 제거합니다.
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 요소를 생성합니다.
    const modal = document.createElement('div');
    modal.className = 'modal hidden';

    // 모달 내용을 담는 컨테이너를 생성합니다.
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content zoomIn';

    // 이미지를 표시할 요소를 생성합니다.
    const image = document.createElement('div');
    image.style.backgroundImage = `url(${imageUrl})`;
    image.alt = 'Door Image';
    image.style.width = '100%';
    image.style.height = '211px';
    

    // 텍스트를 표시할 요소를 생성합니다.
    const textElement = document.createElement('p');
    textElement.textContent = text;

    // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
    modalContent.appendChild(image);
    modalContent.appendChild(textElement);

    // 모달에 모달 컨텐트를 추가합니다.
    modal.appendChild(modalContent);

    // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
    modal.addEventListener('click', () => {
        modal.remove(); // 모달을 문서에서 제거합니다.
    });

    // 문서에 모달을 추가합니다.
    document.body.appendChild(modal);
    // 모달을 표시합니다.
    setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
    {"number" : 1, "message" : "안녕 🧦"},
    {"number" : 2, "message" : "우리는 우여곡절이 많았어 😐"},
    {"number" : 3, "message" : "이제는 좋은일이 훨씬 더 많이 생길거같아 🍀"},
    {"number" : 4, "message" : "비온뒤 땅이 굳는다라는 말이있잖아!!! 🙏"},
    {"number" : 5, "message" : "같이 노래도 듣고 공유하자 👨🏻‍🎤"},
    {"number" : 6, "message" : "가끔 무기력할때도 있지만...다온이랑 내가 있으니깐ㅎㅎ"},
    {"number" : 7, "message" : "다온이를 따라해봤어용 냐앙~ 😸"},
    {"number" : 8, "message" : "뒷통수에 새집을 키우는 나지만^_^ 💦"},
    {"number" : 9, "message" : "화이트크리스마스다 ⛄️"},
    {"number" : 10, "message" : "완젼 행복해 🐶"},
    {"number" : 11, "message" : "스노우걸 ⛄️"},
    {"number" : 12, "message" : "트리걸 🎄"},
    {"number" : 13, "message" : "쭈디 산책 같이 시켜서 재밌었어 🦮"},
    {"number" : 14, "message" : "우리 귀여웠지...💖"},
    {"number" : 15, "message" : "다음에 같이 클럽도 가보자 🪩"},
    {"number" : 16, "message" : "잠도 쿨쿨 자고~💤"},
    {"number" : 17, "message" : "술도 마시고 놀자 🎶"},
    {"number" : 18, "message" : "해적처럼~ 🏴‍☠️"},
    {"number" : 19, "message" : "강아지 또 산책시키자"},
    {"number" : 20, "message" : "같이 있으면 힐링돼!!"},
    {"number" : 21, "message" : "머리에 두건을 둘렀어 🧖🏻‍♀️"},
    {"number" : 22, "message" : "억까 커플모자 🧢"},
    {"number" : 23, "message" : "진짜 커플모자 🧢"},
    {"number" : 24, "message" : "메리크리스마스"}
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
    door.addEventListener('click', () => {

        // 상위 div의 class 번호를 찾아서 image url에 사용합니다
        const imageUrl = `image/card/card-${index+1}.png`;
        
        // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
        const doorDiv = document.querySelector(`.day-${index+1}`)
        const backDiv = doorDiv.querySelector(`.back`);
        
        const style = window.getComputedStyle(backDiv);
        const pTag = backDiv.querySelector('p')
        const text = modalMessageList[index]['message']
        
        // showModal 함수를 호출하여 모달을 표시합니다.
        showModal(imageUrl, text);
        // alert('이벤트 캘린더를 엽니다.');
    });
});