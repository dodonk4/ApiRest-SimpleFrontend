class Vehicle{
    constructor(wheeler, type, brand, model){
        this._wheeler = wheeler;
        this._type = type;
        this._brand = brand;
        this._model = model;
    }

    get wheeler(){
        return this._wheeler;
    }

    get type(){
        return this._type;
    }

    get brand(){
        return this._type;
    }

    get model(){
        return this._type;
    }

    description(){
        return `I have ${this._wheeler} wheel and I am of the ${this._type} type. I am a Vehicle created by ${this._brand} and I am part of the model ${this._model}`;
    }

    returnInformationInJsonFormat(){
        const jsonWheeler = [this._wheeler, this._model, this._brand, this._type];
        return jsonWheeler
    }
};

export { Vehicle };