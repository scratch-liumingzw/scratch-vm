const Cast = require('../util/cast');

class Blocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getPrimitives() {
        return {
            RS_CONVEYOR_BELT_SET_ACCELERATION: this.RS_CONVEYOR_BELT_SET_ACCELERATION,
            RS_CONVEYOR_BELT_MOVE: this.RS_CONVEYOR_BELT_MOVE,
            RS_CONVEYOR_BELT_STOP: this.RS_CONVEYOR_BELT_STOP,
        };
    }

    RS_CONVEYOR_BELT_SET_ACCELERATION(args) {
        const blockName = "RS_CONVEYOR_BELT_SET_ACCELERATION";
        const VALUE1 = Cast.toNumber(args.VALUE1);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
    }

    RS_CONVEYOR_BELT_MOVE(args) {
        const blockName = "RS_CONVEYOR_BELT_MOVE";
        let {VALUE1, VALUE2} = args;
        VALUE2 = Cast.toNumber(VALUE2);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1, VALUE2}})
        });
    }

    RS_CONVEYOR_BELT_STOP() {
        const blockName = "RS_CONVEYOR_BELT_STOP";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve})
        });
    }
}

module.exports = Blocks;
