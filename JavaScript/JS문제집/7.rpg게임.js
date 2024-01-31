const juntobtn = document.querySelector("#juntobtn");
const sangseong = document.querySelector("#sangseong");
const section2Box = document.querySelector(".section2-box2");

const lv = document.querySelector(".level");


let count = 0;
let maxHp = 20;
let goblinHp = 20;

let pllv = 0;

let check = false;

let result1;
let result2;

juntobtn.addEventListener("click",(e) => {
  if(check == false){
    alert("캐릭터를 생성해주세요")
    return;
  }

  

})

sangseong.addEventListener("click" , (e) => {
    count++

    check = true;
  
    result1 = prompt("직업을 선택해주세요", "전사, 마법사 둘중하나")

    result2 = prompt("성별을 선택해주세요", "남자, 여자");


    if(result1 == "전사" && result2 == "남자"){
        const section = document.querySelector("#section1-box2-div1");
        const shala = document.querySelector(".section2-box2");
         
        const player = {
            name: "홍길동",
            job: "전사",
            gender: "남자",
            level: 1,
            hp: 20,
            attack: 15,
            defense: 5,
            exp: 30,
            gold: 70,
            weapon: null,
            armor: null
          };
          
          const monster = {
            name: "Goblin",
            hp: 20,
            attack: 8,
            defense: 2,
            expReward: 15,
            dropRate: 1
          };

          const items = {
            sword: { name: "검", attackBonus: 5, price: 20 },
            shield: { name: "방패", defenseBonus: 3, price: 15 },
            potion: { name: "물약", hpBonus: 20, price: 10 }
          };

          console.log(items.sword.attackBonus)
          
          
          

        let str = '';

        section.style.display = "block";
        
        let playerName = player.name;
        let playerHp = player.hp;
        let playerLevel = player.level;
        let attack = player.attack;
        let defense = player.defense;
        let exp = player.exp;
        let gold = player.gold;

       let monsterName = monster.name;
       let monsterhp = monster.hp;
       let monsterattack = monster.attack;
       let monsterdefense = monster.defense;
       let monsterexpReward = monster.expReward;
       let dropRate = monster.dropRate;

        
            juntobtn.addEventListener("click",(e) => {
               
           

              const randomNumber = Math.floor(Math.random() * 2);

              const randomNumber2 = Math.floor(Math.random() *3);
              
              
              
   
              console.log(randomNumber)
                 str += `${playerName}이 ${monsterName}을 공격하였습니다 ! <br><br>
                 ${monsterName}의 체력이 ${monsterhp}에서 ${monsterhp - attack} 가 되었습니다!<br><br>
                   ${monsterName}이 ${playerName}을 공격하였습니다 ! <br><br>
                   ${playerName}의 체력이 ${playerHp + defense}에서 ${(playerHp + defense) - monsterattack} 가 되었습니다 !<br><br> `;

                   
                  monsterhp = monsterhp - attack;
                  playerHp = playerHp - monsterattack;

                   if(monsterhp <= 0){
                    
                    if(randomNumber == 1){
                        if(randomNumber2 == 0){
                           str += `${items.sword.name}을/를 흭득하였습니다!!<br><br>` ;
                           attack += items.sword.attackBonus
                        } 
                        if(randomNumber2 == 1){
                           str += `${items.shield.name}을/를 흭득하였습니다!!<br><br>`;
                           defense += items.shield.defenseBonus
                            
                        } 
                        if(randomNumber2 == 2){
                           str += `${items.potion.name}을/를 흭득하였습니다!!<br><br>` ;
                           playerHp += items.potion.hpBonus
                        } 

                   }
                    
                   str += `${monsterName}을 물리쳤습니다!<br><br>
                   ------------------------------------------------------------------<br><br>`;
                       
                   
                   str += `경험치를 ${monsterexpReward} 흭득하였습니다<br><br>
                   -----------------------------------------------------------------<br><br>`;

                   
                    playerHp = maxHp;
                    monsterhp = goblinHp;
                    pllv += monsterexpReward;
                     if(pllv == exp){
                           str += `플레이어의 레벨이 올랏습니다!! <br><br>`;
                           count++
                           lv.innerHTML = count;
                           
                           pllv = 0;
                     }

                      } 
                    
                    


                 section2Box.innerHTML = str;

               
                   
                 
            })


    }


    
})


