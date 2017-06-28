class Model {
    constructor()
    {
        this.sequence = [];
        this.count = 0;
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
        this.count++;
        this.sequence.push(this.randomColor);
    }
    emptySequence()
    {
        this.count = 0;
        this.sequence = 0;
    }
    getCountString()
    {
        return this.count.toString();
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
            console.log(e.target.classList);
            //create array from DOMtokenlist
            const classListing = Array.from(e.target.classList);
            // console.log(classListing);
            if(classListing.includes('on-off')) this.onOffButton(e);            
            if(classListing.includes('start-button')) this.startButton(e);
            if(classListing.includes('strict-button')) this.strictButton(e);
        });
    }
    onOffButton()
    {
        console.log('fn: controller.onOffButton()')
        this.model.appState.on = !this.model.appState.on;
        // console.log(this.model.appState.on);
    }
    startButton() 
    {
        if(this.model.appState.on === false) return;
        console.log('fn: controller.startButton()');

        this.view.renderCountDisplay('--', true);
        // this.view.renderCountDisplay(this.model.getCountString());
        // this.model.incrementSequence();
        // this.model.getSequence();
    }
    strictButton()
    {
        if(this.model.appState.on === false) return;
        console.log('fn: controller.strictButton()');
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
    }
    renderCountDisplay(string, flash=false) {
        console.log('fn view.renderCountDisplay()');
        console.log(this.countDisplay.textContent === '');
        if(flash) {
            let i = 0;
            this.countDisplay.innerText = string;
            
            const interv = setInterval(() => {
                i++;
                this.countDisplay.textContent = this.countDisplay.textContent === string ? 
                    "" :
                    string;
                if(i >= 4) clearInterval(interv);
            }, 500);
        } else {
            this.countDisplay.textContent = string;
        }
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
