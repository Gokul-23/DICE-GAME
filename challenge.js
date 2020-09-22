var score, roundScore, activePlayer, gamePlaying, lastDice, winningScore;
init();
document.querySelector('.btn-roll').addEventListener('click', function(){
   
    if(gamePlaying){
        
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' +dice1+ '.png';
        document.getElementById('dice-2').src = 'dice-' +dice2+ '.png';
        
        var input = document.querySelector('.final-score').value;
       
        if(input)
            {
                winningScore = input;
            }
        else{
            winningScore = 200;
        }
        
        
        if(dice1 === 6 && dice2 ===6){
            score[activePlayer] =0;
            document.querySelector('#score-' +activePlayer).textContent='0';
            nextPlayer();
        }
        else if(dice1!==1 || dice2!==1)
            {
                roundScore += dice1 + dice2;
                document.querySelector('#current-' +activePlayer).textContent = roundScore;
            }
        else{
                score[activePlayer]+=roundScore;
                document.querySelector('#score-' +activePlayer).textContent=score[activePlayer];
              nextPlayer();
         
        }
        if(roundScore >= winningScore){
            score[activePlayer]+=roundScore;
            document.querySelector('#score-' +activePlayer).textContent=score[activePlayer];
            document.querySelector('#name-' +activePlayer).textContent='Winner!!!!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' +activePlayer+ '-panel').classList.add('Winner');
            document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
            gamePlaying=false;
       }
        
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  
    if(gamePlaying){
    score[activePlayer] += roundScore;
    document.querySelector('#score-' +activePlayer).textContent=score[activePlayer];
        
        
        
    if(score[activePlayer] >= winningScore){
            document.querySelector('#name-' +activePlayer).textContent='Winner!!!!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' +activePlayer+ '-panel').classList.add('Winner');
            document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
            gamePlaying=false;
       }
       else{
         nextPlayer();
       }
   }
    
});

function nextPlayer(){
    activePlayer ===0 ? activePlayer=1 : activePlayer =0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
                score = [0,0];
            roundScore =0;
            activePlayer =0;
            winningScore = 200;
            gamePlaying = true;
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';

            document.getElementById('score-0').textContent='0';
            document.getElementById('score-1').textContent='0';
    
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
    
            document.getElementById('name-0').textContent='Player 1';
            document.getElementById('name-1').textContent='Player 2';
    
            document.querySelector('.final-score').value = '';        
    
            document.querySelector('.player-0-panel').classList.add('Winner');
            document.querySelector('.player-1-panel').classList.add('Winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');


}