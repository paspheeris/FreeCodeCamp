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
}
class TicTacToe
{
    constructor(canvas) 
    {
        this._context = canvas.getContext('2d');
        this.players = [new Player('X', true), 
                        new Player('O', false)];
        this.dataStore = new DataStore;
        this.playerTurn = 1;
        
        this.drawBoard(canvas);
        this.drawGrid();
        
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
    drawMove(coord, symbol) 
    {
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
            this._context.moveTo(beginPathPoint.x, beginPathPoint.y);
            this._context.lineTo(endPathPoint.x, endPathPoint.y);
            this._context.stroke();

            this._context.moveTo(beginPathPoint.x + 180, beginPathPoint.y);
            this._context.lineTo(endPathPoint.x - 180, endPathPoint.y);
            this._context.stroke();
        } else if (symbol === 'O') {
            this._context.arc(centerPoint.x, centerPoint.y, 90, 0, 2 * Math.PI);
            this._context.stroke();
        }
        //Swap who's up next
        this.playerTurn === 0 ? this.playerTurn = 1 : this.playerTurn = 0;
        console.table(this.dataStore.state);
    }
    checkForWinner() 
    {
        let winner = false;
        this.dataStore.state.forEach((subArr, index) => {
            //Row winner
            if(subArr.every((val, index) => val === 'X') || subArr.every((val, index) => val === 'O')) {
                console.log('winner');
                winner = true;
            }
            });
        return winner;
    }
}

const canvas = document.getElementById('ticTacToe');
const ttt = new TicTacToe(canvas);

canvas.addEventListener('click', event => {
    // console.log(event.offsetX, event.offsetY);
    let coord = ttt.clickDetection(event.offsetX, event.offsetY);
    // console.log(coord);
    ttt.makeMove(coord);
    if(ttt.checkForWinner()) {
        console.log('time for a new game')
    }
});