let scores = highScore.results;
console.log(scores); 
// let names = document.getElementById('name');
let scores1 = document.getElementById('scores');
let scoreDiv = document.getElementById('high_score');

for (let i=0; i<10; i++) {
    let p = document.createElement('p');
    p.innerHTML = `${scores[i].place} ${scores[i].name}`;
    scoreDiv.appendChild(p);
    let p1 = document.createElement('p');
    p1.innerHTML = `${scores[i].score}`;
    scores1.appendChild(p1);
    
}
scores1.style.float = 'right';