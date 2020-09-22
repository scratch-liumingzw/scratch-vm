const Cast = require('../util/cast');

class Blocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getPrimitives() {
        return {
            RS_MODULE_AIR_PICKER: this.RS_MODULE_AIR_PICKER,
            RS_MODULE_SOFT_GRIPPER: this.RS_MODULE_SOFT_GRIPPER,
            RS_MODULE_WRIST_ROTATE: this.RS_MODULE_WRIST_ROTATE,
        };
    }

    RS_MODULE_AIR_PICKER(args) {
        const blockName = "RS_MODULE_AIR_PICKER";
        const VALUE1 = args.VALUE1;
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
    }

    RS_MODULE_SOFT_GRIPPER(args) {
        const blockName = "RS_MODULE_SOFT_GRIPPER";
        const VALUE1 = args.VALUE1;
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
    }

    RS_MODULE_WRIST_ROTATE(args) {
        const blockName = "RS_MODULE_WRIST_ROTATE";
        const VALUE1 = Cast.toNumber(args.VALUE1);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
    }
}

module.exports = Blocks;
