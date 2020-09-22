const Cast = require('../util/cast');

class Blocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getPrimitives() {
        return {
            RS_MOTION_SAY_HELLO: this.RS_MOTION_SAY_HELLO,
            RS_MOTION_MOVE_HOME: this.RS_MOTION_MOVE_HOME,
            RS_MOTION_MOVE_ORIGIN: this.RS_MOTION_MOVE_ORIGIN,
            RS_MOTION_MOVE_POSITION: this.RS_MOTION_MOVE_POSITION,
            RS_MOTION_MOVE_RELATIVE: this.RS_MOTION_MOVE_RELATIVE,
            RS_MOTION_MOVE_RECTANGLE: this.RS_MOTION_MOVE_RECTANGLE,
            RS_MOTION_MOVE_CIRCLE: this.RS_MOTION_MOVE_CIRCLE,
        };
    }

    RS_MOTION_SAY_HELLO() {
        const blockName = "RS_MOTION_SAY_HELLO";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve})
        });
    }

    RS_MOTION_MOVE_HOME() {
        const blockName = "RS_MOTION_MOVE_HOME";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve})
        });
    }

    RS_MOTION_MOVE_ORIGIN() {
        const blockName = "RS_MOTION_MOVE_ORIGIN";
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve})
        });
    }

    RS_MOTION_MOVE_POSITION(args) {
        const blockName = "RS_MOTION_MOVE_POSITION";
        let {VALUE1, VALUE2, VALUE3} = args;
        VALUE1 = Cast.toNumber(VALUE1);
        VALUE2 = Cast.toNumber(VALUE2);
        VALUE3 = Cast.toNumber(VALUE3);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1, VALUE2, VALUE3}})
        });
    }

    RS_MOTION_MOVE_RELATIVE(args) {
        const blockName = "RS_MOTION_MOVE_RELATIVE";
        let {VALUE1, VALUE2, VALUE3} = args;
        VALUE1 = Cast.toNumber(VALUE1);
        VALUE2 = Cast.toNumber(VALUE2);
        VALUE3 = Cast.toNumber(VALUE3);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1, VALUE2, VALUE3}})
        });
    }

    RS_MOTION_MOVE_RECTANGLE(args) {
        const blockName = "RS_MOTION_MOVE_RECTANGLE";
        let {VALUE1, VALUE2, VALUE3, VALUE4} = args;
        VALUE1 = Cast.toNumber(VALUE1);
        VALUE2 = Cast.toNumber(VALUE2);
        VALUE3 = Cast.toNumber(VALUE3);
        VALUE4 = Cast.toNumber(VALUE4);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1, VALUE2, VALUE3, VALUE4}})
        });
    }

    RS_MOTION_MOVE_CIRCLE(args) {
        const blockName = "RS_MOTION_MOVE_CIRCLE";
        let {VALUE1, VALUE2, VALUE3} = args;
        VALUE1 = Cast.toNumber(VALUE1);
        VALUE2 = Cast.toNumber(VALUE2);
        VALUE3 = Cast.toNumber(VALUE3);
        return new Promise((resolve) => {
            this.runtime.emit("rotrics-async", {blockName, resolve, args: {VALUE1, VALUE2, VALUE3}})
        });
    }
}

module.exports = Blocks;
