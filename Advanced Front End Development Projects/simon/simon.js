class Model {
    constructor()
    {
        this.sequence = [];
        this.count = 0;

        this.playerSeq = [];
        this.playerSeqCount = 0;
        this.awaiting = false;

        this.colors = ['green', 'red', 'yellow', 'blue'];
        this.appState = {
            on: false,
            strict: false
        }
    }
    getSequence()
    {
        return this.sequence;
    }
    get randomColor()
    {
        console.log('fn: model.randomColor');
        return this.colors[Math.floor(Math.random() * 4)];
    }
    incrementSequence()
    {
        console.log('fn: model.incrementSequence');        
        this.count++;
        // console.log(this.sequence);
        this.sequence.push(this.randomColor);
    }
    emptySequence()
    {
        this.count = 0;
        this.sequence = [];
    }
    getCountString()
    {
        return this.count.toString();
    }
    getPlayerSeq() 
    {
        return this.playerSeq;
    }
    getPlayerSeqCount() 
    {
        return this.playerSeqCount;
    }
    emptyPlayerSeq()
    {
        this.playerSeqCount = 0;
        this.playerSeq = [];
    }
    getPlayerSeqStatus()
    {
        let compLast = this.sequence[this.count - 1];
        let playerLast = this.playerSeq[this.playerSeqCount - 1];
        //If the player hasn't made as many moves
        // if(this.getPlayerSeqCount() < this.count) {
        //     return 'unresolved';
        // } 
        if (this.playerSeqCount > 0 &&
            this.playerSeq[this.playerSeqCount - 1] !== this.sequence[this.playerSeqCount - 1]) {
            return 'failed';
        } else if (this.getPlayerSeqCount() === this.count &&
                    compLast === playerLast &&
                    this.getPlayerSeqCount() > 0) {
            return 'matched';
        } else {
            return "unresolved";
        }
    }
}
class Controller {
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
        this.eventDispatcher();
    }
    eventDispatcher()
    {
        document.addEventListener('click', e => {
            // console.log(e.target.classList);
            //create array from DOMtokenlist
            const classListing = Array.from(e.target.classList);
            // console.log(classListing);
            if(classListing.includes('on-off')) this.onOffButton(e);            
            if(classListing.includes('start-button')) this.startButton(e);
            if(classListing.includes('strict-button')) this.strictButton(e);
            if(classListing.includes('color-button')) this.colorClick(e);
            
        });
    }
    onOffButton()
    {
        console.log('fn: controller.onOffButton()')
        if(this.model.appState.on === true) {
            this.model.emptySequence;
            this.model.emptyPlayerSeq;
            this.view.renderCountDisplaySync('');
        } else {
            this.model.appState.on = !this.model.appState.on;
        }
        // console.log(this.model.appState.on);
    }
    startButton() 
    {
        if(this.model.appState.on === false) return;
        this.model.emptySequence();
        console.log('fn: controller.startButton()');

        this.view.renderCountDisplayAsync('--')
            .then(() => {
                this.playSequence();
            });
        // this.view.renderCountDisplay(this.model.getCountString());
        // this.model.incrementSequence();
        // this.model.getSequence();
    }
    strictButton()
    {
        if(this.model.appState.on === false) return;
        console.log('fn: controller.strictButton()');
    }
    playSequence()
    {
        console.log('fn: controller.playSequence');
        if(this.model.count === 0) this.model.incrementSequence();
        this.view.renderCountDisplaySync(this.model.getCountString());

        this.model.awaiting = false;
        this.view.renderSequenceAsync(this.model.getSequence())
            .then(() => {
                return this.awaitingtPlayer();
            })
            .then((status) => {
                console.log('resolving promis', status);
                if(status === 'matched'){
                    this.model.incrementSequence();
                    this.playSequence();
                } else if (status === 'failed') {
                    this.playSequence();
                }
            })
    }
    awaitingtPlayer()
    {
        console.log('fn: controller.awaitingPlayer');
        this.model.awaiting = true;

        
        return new Promise((res, rej) => {
            const interv = setInterval(() => {
                let status = this.model.getPlayerSeqStatus();
                if(status === 'failed') {
                    console.log('failure');
                    clearInterval(interv);
                    this.view.renderCountDisplayAsync('!!')
                        .then(() => {
                            this.model.emptyPlayerSeq();
                            this.model.awaitingtPlayer = false;
                            res(status);
                        });
                } else if (status === 'matched') {
                    console.log('matched');
                    this.model.emptyPlayerSeq();
                    clearInterval(interv);             
                    this.model.awaitingtPlayer = false;                           
                    res(status);
                } 
                else if (status === 'unresolved') {
                    // console.log('unresolved');
                }
            }, 250);
        });
    }
    colorClick(e)
    {
        if(this.model.awaiting === false) return;
        if(this.model.appState.on === false) return;

        let color = Array.from(e.target.classList)[0];
        console.log('fn: controller.colorClick');
        // console.log(Array.from(e.target.classList));
        this.view.animate(color);
        this.model.playerSeq.push(color);
        this.model.playerSeqCount++;
    }
    getOnOffStatus() 
    {
        return this.model.appState.on;
    }
}
class View {
    constructor()
    {
        // console.log(this);
        this.colorButtons = document.querySelectorAll('.color-button');
        // console.log(this.colorButtons);
        this.green = document.querySelector('.green');
        this.red = document.querySelector('.red');
        this.yellow = document.querySelector('.yellow');
        this.blue = document.querySelector('.blue');
        this.countDisplay = document.querySelector('.count-display');
        this.startButton = document.querySelector('.start-button');
        this.strictButton = document.querySelector('.strict-button');
        this.strictIndicator = document.querySelector('.strict-indicator');
        this.onOff = document.querySelector('.on-off'); 
        this.audio = {
                    green: document.querySelector('audio[data-key="green"]'),
                    red: document.querySelector('audio[data-key="red"]'),
                    blue: document.querySelector('audio[data-key="blue"]'),
                    yellow: document.querySelector('audio[data-key="yellow"]')           
                    }   
    }
    renderCountDisplayAsync(string) {
        console.log('fn view.renderCountDisplayAsync()');
        console.log(this.countDisplay.textContent === '');
        this.countDisplay.textContent = '';
        return new Promise((res, rej) => { 
            let i = 0;
            this.countDisplay.innerText = string;  
            const interv = setInterval(() => {
                i++;
                this.countDisplay.textContent = this.countDisplay.textContent === string ? 
                    "" :
                    string;
                if(i >= 4) {
                    clearInterval(interv);
                    res();
                }
            }, 300);
        }
    )}
    renderCountDisplaySync(string) {
        this.countDisplay.textContent = string;
    }
    renderSequenceAsync(arr) {
        console.log('fn: view.renderSequenceAsync');
        console.log({arr});
        //Turn off audio and remove visual effects from all four colors to clear previous
        
        return new Promise((res, rej) => {
            let i = 0;
            const interv = setInterval(() => {
                //Cheating with state on the on/off button so I can break
                 //off the sequence rendering if the off button is hit
                  //in the middle of a sequence   
                //   console.log('on off value', this.onOff.checked);
                //still have the problem of interrupting it if the start
                //button is clicked in the middle of a sequence                 
                 if(!this.onOff.checked) {
                    clearInterval(interv);
                    res();
                }
                else if(i >= arr.length) {
                    clearInterval(interv);
                    // console.log(this.prevColor);
                    res();
                } else {
                    this.animate(arr[i]);
                    i++;
                }
        }, 1000);

        });
    }
    animate(color) {
        this[color].style.opacity = '1';
        let sound = this.audio[color];
        sound.pause();
        sound.currentTime = 0;
        sound.play();
        this[color].style.opacity = '.5';
        setTimeout(() => {
            this[color].style.opacity = '1';
        }, 500);
    }
}

class Simon {
    constructor() 
    {
        this.model = new Model();
        this.view = new View();
        this.controller = new Controller(this.view, this.model);
    }
}

const simon = new Simon();
