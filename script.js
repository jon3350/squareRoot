
const submitBtn = document.querySelector('#submitBtn');
const inputBox = document.querySelector('#num-input');
const answer = document.querySelector('.answer-display');
const savedKey = '123';
// changeColor(submitBtn);
// changeColor(inputBox);
// changeColor(answer);
submitBtn.addEventListener('click', e => {
    const span = document.createElement('span');
    const ans = Math.sqrt(inputBox.value);
    span.innerText = "Answer: " + ans;
    answer.innerText = "";
    answer.append(span);
    localStorage.setItem(savedKey, ans);
    updateHistory();
})

updateHistory();
function updateHistory() {
    const history = document.querySelector('.history');
    history.innerText = "History: " + localStorage.getItem(savedKey);
}


function changeColor(element) {
    element.style.backgroundColor = "#000";
}