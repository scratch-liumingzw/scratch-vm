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
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args})
        });
    }

    RS_MODULE_SOFT_GRIPPER(args) {
        const blockName = "RS_MODULE_SOFT_GRIPPER";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args})
        });
    }

    RS_MODULE_WRIST_ROTATE(args) {
        const blockName = "RS_MODULE_WRIST_ROTATE";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args})
        });
    }
}

module.exports = Blocks;
