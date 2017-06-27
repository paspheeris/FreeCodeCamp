class Vec 
{
    constructor(x = 0, y = 0) 
    {
        this.x = x;
        this.y = y;
    }
}
class Line //should thsi extend Vec?
{
    constructor(x1, y1, x2, y2)
    {
        //super();
        this.beginPoint = new Vec(x1, y1);
        this.endPoint = new Vec(x2, y2);
    }
}
class Player 
{
    constructor(symbol, human=true)
    {
        this.score = 0;
        this.symbol = symbol;
        this.human = human;
    }
}
class DataStore 
{
    constructor()
    {
        this.state = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
    eraseState() 
    {
        this.state = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
    getRandOpenSquare()
    {
        let randX = Math.floor(Math.random() * 3);
        let randY = Math.floor(Math.random() * 3);        

        let s = this.state[randY][randX];
        if(s === null) {
            // console.log(randX, randY);
            return [randX, randY];
        } else {
            // console.log('repick');
            return this.getRandOpenSquare();
        }
    }
}
class TicTacToe
{
    constructor(canvas) 
    {
        this.SQUARE_WIDTH = 200;
        this._context = canvas.getContext('2d');
        this.players = [new Player('X', true), 
                        new Player('O', false)];
        this.dataStore = new DataStore;
        this.playerTurn = 0;
        this.winFlag = false;
        
        this.drawBoard(canvas);
        this.drawGrid();
        this._context.save();
        
    }
    drawBoard(canvas)
    {
        this._context.fillStyle = '#000';
        this._context.fillRect(0, 0, 600, 600);
    }
    drawGrid() 
    {
        const gridLines = [
            new Line(canvas.width / 3, 0, canvas.width / 3, canvas.height),
            new Line((canvas.width / 3) * 2, 0, (canvas.width / 3) * 2, canvas.height),
            new Line(0, canvas.height / 3, canvas.width, canvas.height / 3),
            new Line(0, (canvas.height / 3) * 2, canvas.width, (canvas.height / 3) * 2)
         ];
        // console.log(this);
        this._context.strokeStyle = '#fff';
        gridLines.forEach(line => {           
            // console.log(this);
            this._context.beginPath();                this._context.moveTo(line.beginPoint.x, line.beginPoint.y);
            this._context.lineTo(line.endPoint.x, line.endPoint.y);
            this._context.stroke();
        });
    }
    clickDetection(clickX, clickY) 
    //When the canvas is clicked, returns which square was clicked, event => [x, y]
    {
        let coords = [];
        //First column, second, third
        if(clickX < canvas.width / 3){
            coords[0] = 0;
        } else if (clickX < (canvas.width / 3) * 2) {
            coords[0] = 1;            
        } else {
            coords[0] = 2;            
        }
        //First row, second, third
        if(clickY < canvas.height / 3){
            coords[1] = 0;
        } else if (clickY < (canvas.height / 3) * 2) {
            coords[1] = 1;            
        } else {
            coords[1] = 2;            
        }
        return coords;
    }
    //Checks if a move should be made, ie if the coord is currently null. If a move should be made, calls drawMove
    makeMove(coord) 
    {
        // console.log('coord in makeMove:', coord);
        // console.log(this.state[coord[1]][coord[0]]);
        let symbol = this.dataStore.state[coord[1]][coord[0]];
        //Make the move if the square is currently null
        if(symbol === null) {
            // console.log(this);
            symbol = this.players[this.playerTurn].symbol;
            this.dataStore.state[coord[1]][coord[0]] = symbol;
            // console.log(symbol);
            this.drawMove(coord, symbol);
        }
        // console.table(this.dataStore.state);
    }
    drawLine(startVec, endVec) 
    {
        this._context.beginPath();
        this._context.moveTo(startVec.x, startVec.y);
        this._context.lineTo(endVec.x, endVec.y);
        this._context.stroke();        
    }
    drawMove(coord, symbol) 
    {
        console.log('coord in drawMove:', coord);
        
        let beginPathPoint = new Vec(((coord[0] * 200) + 10),
                                     (coord[1] * 200) + 10);
        let endPathPoint = new Vec(((coord[0] * 200) + 190),
                                    (coord[1] * 200) + 190);
        let centerPoint = new Vec(((beginPathPoint.x + endPathPoint.x) / 2),
                                    (beginPathPoint.y + endPathPoint.y) / 2);
        // console.log(centerPoint);
        // console.log(beginPathPoint);
        // console.log(endPathPoint);
        this._context.beginPath();
        if(symbol === 'X') {
            this.drawLine(beginPathPoint, endPathPoint);

            beginPathPoint.x += 180;
            endPathPoint.x -= 180;
            this.drawLine(beginPathPoint, endPathPoint);
        } else if (symbol === 'O') {
            this._context.arc(centerPoint.x, centerPoint.y, 90, 0, 2 * Math.PI);
            this._context.stroke();
        }
        //Swap who's up next
        this.playerTurn === 0 ? this.playerTurn = 1 : this.playerTurn = 0;
        // console.table(this.dataStore.state);
    }
    checkForWinner() 
    {
        let state = this.dataStore.state;
        let winner = false;
        state.forEach((subArr, index) => {
            //Row winner
            if(subArr.every((val, index) => val === 'X') || subArr.every((val, index) => val === 'O')) {
                // console.log('winner');
                winner = [index, "row"];
            }
        });
        //Column winner
        state[0].forEach((val, index) => {
            if( val !== null &&
                state[1][index] === val &&
               state[2][index] === val) {
                winner = [index, "col"];
            } else if(val !== null &&
                      state[1][index + 1] === val &&
                      state[2][index + 2] === val ||

                      val !== null &&
                      state[1][index - 1] === val &&
                      state[2][index - 2] === val) {
                      winner = [index, 'diag'];
                    //   console.log({winner});

               }
        });
        // console.log({winner});
        // return winner;
        if(winner) {
            this.handleWin(winner);
            this.winFlag = true;
        }
        return winner;
    }
    handleWin(winner) 
    {
        //Draw winning line
        // console.log(this.playerTurn);
        const winningPlayer = this.playerTurn === 0 ? 1 : 0;
        // console.log(this.playerTurn);
        
        let w = this.SQUARE_WIDTH;
        let square = winner[0];
        // console.log(square);
        if(winner[1] === "row") {
            let startVec = new Vec(0, 
                                    (square * w) + (w / 2));
            let endVec = new Vec(w * 3,
                                (square * w) + (w / 2));
            this.drawLine(startVec, endVec);
        }else if(winner[1] === "col") {
            let startVec = new Vec((square * w) + (w / 2), 
                                    0);
            let endVec = new Vec((square * w) + (w / 2), 
                                    w * 3);
            this.drawLine(startVec, endVec);

        }else if(winner[1] === "diag") {
            // console.log(square);
            let startVec = new Vec((square * w * 1.5), 
                                    0);
            let endVec = new Vec(square === 0 ? w * 3: 0, 
                                    w * 3);
            this.drawLine(startVec, endVec);

        }
        //Show modal ('winner x, click to continue)
        //includes click listener that will this.clearBoard() and dismiss the modal
        this.showModalMessage(`Player ${winningPlayer + 1} has won. Click to continue`)

        //Increment score and show new scores
        const newScore = this.players[winningPlayer].score += 1;
        playerScores[winningPlayer].textContent = newScore;
        // console.log(this.playerTurn);
        

    }
    clearBoard() 
    {
        // console.log('clearing board after a winf');
         this.drawBoard(canvas);
         this.drawGrid();

         this.dataStore.eraseState();
         this.winFlag = false;
    }
    computerMove() 
    {
        if(!this.checkForFullBoard()) {
        let coord = this.dataStore.getRandOpenSquare();

        this.drawMove(coord, this.players[1].symbol);

        this.dataStore.state[coord[1]][coord[0]] = this.players[1].symbol;
        }
    }
    showModalMessage(message)
    {
        const modalText = document.createElement('p');
        modalText.textContent = message;
        winModalDiv.appendChild(modalText);
        modalText.parentNode.style.display = "block";

        modalText.parentNode.addEventListener('click', e => {
            this.clearBoard();
            modalText.parentNode.style.display = 'none';
            modalText.textContent = '';
            // computerMoveMonitor();
        });
    }
    showIntroModal() 
    {
        const introModal = document.createElement('div');
        introModal.innerHTML = `
                                <p>Please select a symbol<p>
                                <span class="symbol">X</span>
                                <br />          
                                <span class="symbol">O</span>
                                `;
        introModalDiv.appendChild(introModal);
        introModalDiv.style.display = "block";
        const symbols = document.querySelectorAll('.symbol');
        symbols.forEach(el => {
            el.style.fontSize = "30px";
            el.addEventListener('click', e => {
                // console.log(el.textContent);
                const choice = el.textContent;
                this.players[0].symbol = choice;
                this.players[1].symbol = choice === 'X' ? 'O' : 'X';
                introModalDiv.style.display = 'none';
            });
        });
    }
    checkForFullBoard() 
    {   
        let flag = true;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(this.dataStore.state[i][j] === null) {
                    flag = false;
                    break;
                }
                if (flag === false) {
                    break;
                }
            }
        }
        console.log({flag});
        if(flag) {
            this.handleTie();
        }
        return flag;
    }
    handleTie() 
    {
        this.showModalMessage('Tie game. Click to continue');

    }
}

const body = document.querySelector('.body');
const canvas = document.getElementById('ticTacToe');
const playerScores = document.querySelectorAll('.player-score');
const winModalDiv = document.querySelector('.win-modal');
const introModalDiv = document.querySelector('.intro-modal');
const ttt = new TicTacToe(canvas);

ttt.showIntroModal();

canvas.addEventListener('click', event => {
    // console.log(event.offsetX, event.offsetY);
    let coord = ttt.clickDetection(event.offsetX, event.offsetY);
    // console.log(coord);
    if(ttt.playerTurn === 0 && ttt.winFlag === false) {
        ttt.makeMove(coord);
        // ttt.checkForWinner();
        if(!ttt.checkForWinner()) {
            ttt.checkForFullBoard();
        }
    }
});

window.setInterval(computerMoveMonitor, 1000);

function computerMoveMonitor() {
   
    if(ttt.players[1].human === false && ttt.playerTurn === 1 && 
       ttt.winFlag === false) {
        //    console.log('in if');
        ttt.computerMove();
        // ttt.checkForWinner();    
        if(!ttt.checkForWinner()) {
            ttt.checkForFullBoard();
        }       
    }
}
