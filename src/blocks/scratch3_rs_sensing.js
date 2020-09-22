const Cast = require('../util/cast');

class Blocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getPrimitives() {
        return {
            RS_SENSING_CURRENT_POSITION: this.RS_SENSING_CURRENT_POSITION,
            RS_SENSING_CURRENT_ACCELERATION: this.RS_SENSING_CURRENT_ACCELERATION,
            RS_SENSING_CURRENT_SPEED: this.RS_SENSING_CURRENT_SPEED,
        };
    }

    RS_SENSING_CURRENT_POSITION(args) {
        const blockName = "RS_SENSING_CURRENT_POSITION";
        const VALUE1 = args.VALUE1;
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
        // return 0;
    }

    RS_SENSING_CURRENT_ACCELERATION() {
        const blockName = "RS_SENSING_CURRENT_ACCELERATION";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve})
        });
        // return 0;
    }

    RS_SENSING_CURRENT_SPEED() {
        const blockName = "RS_SENSING_CURRENT_SPEED";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve})
        });
    }
}

module.exports = Blocks;
