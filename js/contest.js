//to do 
//add comments

// defining the win condition
var winMoves = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

var boardMoves = [0,0,0,0,0,0,0,0,0,0];
var turns = 0;
result_element = document.getElementById("game_result")

function checkWin()
{
    var win = false;
    for (i = 0; i < winMoves.length; i++)
    {
        if (boardMoves[winMoves[i][0]] == 'o' && boardMoves[winMoves[i][1]] == 'o' && boardMoves[winMoves[i][2]] == 'o')
        {
            result_element.innerHTML = "Computer, wins!\nClick on reset to play again!"
            win = true;
        }
        else if (boardMoves[winMoves[i][0]] == 'x' && boardMoves[winMoves[i][1]] == 'x' && boardMoves[winMoves[i][2]] == 'x')
        {
            result_element.innerHTML = "You win!! Congratulations!"
            win = true;
        }
    }
    if (win){
        result_element.style.display = "block";
        for (i=1; i<10; i++){
            div = document.getElementById(i);
            div.removeEventListener("onclick", checkClick())
        }
    }
    return win;
}

function getBox(condition)
{
    for (i = 0; i < winMoves.length; i++)
    {
        if (boardMoves[winMoves[i][0]] == condition && boardMoves[winMoves[i][1]] == condition && boardMoves[winMoves[i][2]] == '0')
        {
            debugger
            return winMoves[i][2];
        }
        else if (boardMoves[winMoves[i][0]] == condition && boardMoves[winMoves[i][2]] == condition && boardMoves[winMoves[i][1]] == '0')
        {
            debugger
            return winMoves[i][1];
        }
        else if (boardMoves[winMoves[i][1]] == condition && boardMoves[winMoves[i][2]] == condition && boardMoves[winMoves[i][0]] == '0')
        {
            debugger
            return winMoves[i][0];
        }
    }
    return false;
}

function checkClick(boardPosition)
{

    if (boardMoves[boardPosition] === 0)
    {
        var position = document.getElementById(boardPosition);
        position.innerHTML = 'x';
        boardMoves[boardPosition] = 'x';
        turns ++;
        var win = checkWin();
        if (!win){
            smartComputer();
        }
    }
}

function smartComputer()
{
    if (turns >= 9) 
       {
        result_element.innerHTML = "Draw! What a smart game!\nClick on reset to play again!"
        result_element.style.display = "block";
        tunrs ++;
        for (i=1; i<10; i++){
            div = document.getElementById(i);
            div.removeEventListener("onclick", checkClick())
        }
        return false;
       }
    if (boardMoves[5] === 0)
    {
        computerMove = 5;
    }
    else if (getBox('o'))
    {
        computerMove = getBox('o')
    }
    else if (getBox('x'))
    {
        computerMove = getBox('x')
    }
    else {
        do 
        {
            debugger
            computerMove = Math.ceil(Math.random() * 9);
        }
        while(boardMoves[computerMove] != 0);
    }
    var position = document.getElementById(computerMove);
    position.innerHTML = 'o';
    boardMoves[computerMove] = 'o';
    turns ++;
    checkWin();
}

document.getElementById("reset-button").onclick = function (){
    boardMoves = [0,0,0,0,0,0,0,0,0,0];
    turns = 0;
    for (i=1; i<10; i++){
        position = document.getElementById(i);
        position.innerHTML = '';
    }
    result_element.innerHTML = ""
    result_element.style.display = "none";
    }
