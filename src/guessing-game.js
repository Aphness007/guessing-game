class GuessingGame {
    constructor() {
        this.lowerNum;
        this.greaterNum;
        this.half_way;
    }

    setRange(min, max) {
        this.lowerNum= min;
        this.greaterNum = max;
       
    }

    guess() {
        return this.half_way = Math.round((this.greaterNum + this.lowerNum) / 2);
        // return Math.ceil(this.half_way );
    }
    

    lower() {
    this.greaterNum = this.half_way;
    }

    greater() {
    this.lowerNum = this.half_way;
    }
}

module.exports = GuessingGame;
