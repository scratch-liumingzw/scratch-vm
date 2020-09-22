const Cast = require('../util/cast');

class Blocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getPrimitives() {
        return {
            RS_SETTINGS_SET_MODULE: this.RS_SETTINGS_SET_MODULE,
            RS_SETTINGS_SET_SPEED: this.RS_SETTINGS_SET_SPEED,
            RS_SETTINGS_SET_ACCELERATION: this.RS_SETTINGS_SET_ACCELERATION,
            RS_SETTINGS_SET_MOTION_MODE: this.RS_SETTINGS_SET_MOTION_MODE,
            RS_SETTINGS_SET_WORK_ORIGIN: this.RS_SETTINGS_SET_WORK_ORIGIN,
        };
    }

    RS_SETTINGS_SET_MODULE(args) {
        const blockName = "RS_SETTINGS_SET_MODULE";
        const VALUE1 = args.VALUE1;
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
    }

    RS_SETTINGS_SET_SPEED(args) {
        const blockName = "RS_SETTINGS_SET_SPEED";
        const VALUE1 = Cast.toNumber(args.VALUE1);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
    }

    RS_SETTINGS_SET_ACCELERATION(args) {
        const blockName = "RS_SETTINGS_SET_ACCELERATION";
        const VALUE1 = Cast.toNumber(args.VALUE1);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
    }

    RS_SETTINGS_SET_MOTION_MODE(args) {
        const blockName = "RS_SETTINGS_SET_MOTION_MODE";
        const VALUE1 = args.VALUE1;
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1}})
        });
    }

    RS_SETTINGS_SET_WORK_ORIGIN() {
        const blockName = "RS_SETTINGS_SET_WORK_ORIGIN";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve})
        });
    }
}

module.exports = Blocks;
