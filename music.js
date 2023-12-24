// 배경음 실행 관련
  const cards = document.querySelectorAll('.door');
  const clickEffect = document.querySelector('.clickEffect');
  cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
      clickEffect.pause();
      clickEffect.currentTime =0;
      clickEffect.volume = 0.9;
      clickEffect.play();
    })
  })


    const soundElement = document.querySelector('.sound');
    const stopElement = document.querySelector('.stop');
    const bgm = document.querySelector('.bgm');
    bgm.autoplay = true;
    bgm.loop = true;
    soundElement.addEventListener('click', function() {
        bgm.volume = 0.3;
        bgm.play();

    });
  
    stopElement.addEventListener('click', function() {
      bgm.pause();
      //bgm.currentTime = 0;
    });