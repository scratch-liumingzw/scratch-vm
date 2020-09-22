const Cast = require('../util/cast');

class Blocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getPrimitives() {
        return {
            RS_SLIDING_RAIL_SET_ACCELERATION: this.RS_SLIDING_RAIL_SET_ACCELERATION,
            RS_SLIDING_RAIL_MOVE: this.RS_SLIDING_RAIL_MOVE,
            RS_SLIDING_RAIL_STOP: this.RS_SLIDING_RAIL_STOP,
        };
    }

    RS_SLIDING_RAIL_SET_ACCELERATION(args) {
        const blockName = "RS_SLIDING_RAIL_SET_ACCELERATION";
        const VALUE1 = Cast.toNumber(args.VALUE1);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
    }

    RS_SLIDING_RAIL_MOVE(args) {
        const blockName = "RS_SLIDING_RAIL_MOVE";
        let {VALUE1, VALUE2, VALUE3} = args;
        VALUE2 = Cast.toNumber(VALUE2);
        VALUE3 = Cast.toNumber(VALUE3);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1, VALUE2, VALUE3}})
        });
    }

    RS_SLIDING_RAIL_STOP() {
        const blockName = "RS_SLIDING_RAIL_STOP";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve})
        });
    }
}

module.exports = Blocks;
