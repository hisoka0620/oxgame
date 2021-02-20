  
  const BoxCase = document.getElementById('box'); //id:boxを取得


// domを生成(div,p)
for(let i=0;i<9;i++){
  const div = document.createElement('div');        
  div.setAttribute('class',`box box${i+1}`);
  BoxCase.appendChild(div);
  const p = document.createElement('p');
  div.appendChild(p);
}
// domを取得
  const box1 = document.querySelector('.box1');
  const box2 = document.querySelector('.box2');
  const box3 = document.querySelector('.box3');
  const box4 = document.querySelector('.box4');
  const box5 = document.querySelector('.box5');
  const box6 = document.querySelector('.box6');
  const box7 = document.querySelector('.box7');
  const box8 = document.querySelector('.box8');
  const box9 = document.querySelector('.box9');

  box1.addEventListener('click',handleClick);
  box2.addEventListener('click',handleClick);
  box3.addEventListener('click',handleClick);
  box4.addEventListener('click',handleClick);
  box5.addEventListener('click',handleClick);
  box6.addEventListener('click',handleClick);
  box7.addEventListener('click',handleClick);
  box8.addEventListener('click',handleClick);
  box9.addEventListener('click',handleClick);
  
  let first = "◯"; //先行
  let count=0;
  //クリックイベント
  function handleClick(){
    this.removeEventListener('click',handleClick);
    const p = this.querySelector('p'); //p要素を取得
    count++;
   if(first==="◯"){
    this.removeEventListener('click',handleClick);
    p.textContent = "◯";
    reverseClick();
   }else{
    this.removeEventListener('click',handleClick);
    p.textContent = "×";
    reverseClick();
   }
    victory();
    if(count===9){
      draw();
    }
  }

  //チェンジイベント
  function reverseClick(){
   if(first==="◯"){
     first = "×";
   }else{
     first = "◯";
   }
  }

  //勝利イベント
  function victory(){

    const id = document.getElementById('box');
    const p1 = id.querySelector('div.box1 > p');
    const p2 = id.querySelector('div.box2 > p');
    const p3 = id.querySelector('div.box3 > p');
    const p4 = id.querySelector('div.box4 > p');
    const p5 = id.querySelector('div.box5 > p');
    const p6 = id.querySelector('div.box6 > p');
    const p7 = id.querySelector('div.box7 > p');
    const p8 = id.querySelector('div.box8 > p');
    const p9 = id.querySelector('div.box9 > p');

    //◯の勝ちパターン

    //横列
    if(p1.textContent === "◯" && p2.textContent === "◯" && 
      p3.textContent === "◯"){
      alert('◯の勝ち');             
      reset();
    }
    if(p4.textContent === "◯" && p5.textContent === "◯" && 
      p6.textContent === "◯"){
      alert('◯の勝ち');
      reset();
    }
    if(p7.textContent === "◯" && p8.textContent === "◯" && 
      p9.textContent === "◯"){
      alert('◯の勝ち');
      reset();
      }
    //縦列  
    if(p1.textContent === "◯" && p4.textContent === "◯" && 
      p7.textContent === "◯"){
      alert('◯の勝ち');             
      reset();
    }
    if(p2.textContent === "◯" && p5.textContent === "◯" && 
      p8.textContent === "◯"){
      alert('◯の勝ち');
      reset();
    }
    if(p3.textContent === "◯" && p6.textContent === "◯" && 
      p9.textContent === "◯"){
      alert('◯の勝ち');
      reset();
      }
    //斜め列  
    if(p1.textContent === "◯" && p5.textContent === "◯" && 
      p9.textContent === "◯"){
      alert('◯の勝ち');
      reset();
    }
    if(p3.textContent === "◯" && p5.textContent === "◯" && 
      p7.textContent === "◯"){
      alert('◯の勝ち');
      reset();
    }

    //×の勝ちパターン
    //横列
    if(p1.textContent === "×" && p2.textContent === "×" && 
      p3.textContent === "×"){
      alert('×の勝ち');
      reset();
    }
    if(p4.textContent === "×" && p5.textContent === "×" && 
      p6.textContent === "×"){
        alert('×の勝ち');
        reset();
    }
    if(p7.textContent === "×" && p8.textContent === "×" && 
      p9.textContent === "×"){
        alert('×の勝ち');
        reset();
    }
    //縦列
    if(p1.textContent === "×" && p4.textContent === "×" && 
      p7.textContent === "×"){
      alert('×の勝ち');
      reset();
    }
    if(p2.textContent === "×" && p5.textContent === "×" && 
      p8.textContent === "×"){
        alert('×の勝ち');
        reset();
    }
    if(p3.textContent === "×" && p6.textContent === "×" && 
      p9.textContent === "×"){
        alert('×の勝ち');
        reset();
    }
    //斜め列
    if(p1.textContent === "×" && p5.textContent === "×" && 
      p9.textContent === "×"){
        alert('×の勝ち');
        reset();
    }
    if(p3.textContent === "×" && p5.textContent === "×" && 
      p7.textContent === "×"){
        alert('×の勝ち');
        reset();
    }
  }
  //ドローイベント
  function draw(){
    alert('引き分けです');
    document.location.reload();
  }
  //リセットイベント
  function reset(){
   alert('リセットします');
   document.location.reload();
  }




