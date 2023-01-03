class Counter{
    constructor({selector,initValue = 0, step = 1} = {}){
        this.selector = selector;
        this._value = initValue;
        this._step = step;
        this.refs = this.getRefs(selector);
        this.updateContextValue();
        this.bindEvents();
        this.updateBtnIteratorContext();
    }

    get step(){
        return this._step;
    }

    set step(newValue){
        this._step = newValue;
    }

    get value(){
        return this._value;
    }
    set value(newValue){
        this._value = newValue;
    }

    getRefs(rootSelector){
        let refs = {};

        refs.container = document.querySelector(rootSelector);
        refs.buttons = refs.container.querySelectorAll("button");
        refs.contextValue = refs.container.querySelector("#value");
        return refs;
    }

    increment(){
        this._value += this._step; 
        this.updateContextValue(this._value)
    }

    decrement(){
        this.value -= this._step;
        this.updateContextValue(this._value)
    }

    updateContextValue(){
        this.refs.contextValue.textContent = this._value;
    }

    updateBtnIteratorContext(){
        this.refs.buttons.forEach( btn => btn.dataset.action === "increment" ? btn.textContent = `+${this._step}`: btn.textContent = `-${this._step}`)
    }

    bindEvents(){
        this.refs.buttons.forEach( btn => btn.addEventListener("click",() => {
            console.log(this)
            btn.dataset.action === "increment" ? this.increment() : this.decrement();

        }))
    }
}

const counter = new Counter({selector:"#counter"})

const counter1 = new Counter({selector:"#counter1",initValue:100,step:500});
