class Blocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getPrimitives () {
        return {
            RS_MOTION_SAY_HELLO: this.RS_MOTION_SAY_HELLO,
            RS_MOTION_MOVE_HOME: this.RS_MOTION_MOVE_HOME,
            RS_MOTION_MOVE_ORIGIN: this.RS_MOTION_MOVE_ORIGIN,
            RS_MOTION_MOVE_POSITION: this.RS_MOTION_MOVE_POSITION,
            RS_MOTION_MOVE_RELATIVE: this.RS_MOTION_MOVE_RELATIVE,
            RS_MOTION_MOVE_RECTANGLE: this.RS_MOTION_MOVE_RECTANGLE,
            RS_MOTION_MOVE_CIRCLE: this.RS_MOTION_MOVE_CIRCLE,
            RS_MOTION_ROTATE_WRIST: this.RS_MOTION_ROTATE_WRIST,
            RS_MOTION_ROTATE_WRIST_TO: this.RS_MOTION_ROTATE_WRIST_TO,
            RS_MOTION_KEEP_ROTATE: this.RS_MOTION_KEEP_ROTATE
        };
    }

    RS_MOTION_SAY_HELLO (args) {
        const blockName = 'RS_MOTION_SAY_HELLO';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_MOTION_MOVE_HOME (args) {
        const blockName = 'RS_MOTION_MOVE_HOME';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_MOTION_MOVE_ORIGIN (args) {
        const blockName = 'RS_MOTION_MOVE_ORIGIN';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_MOTION_MOVE_POSITION (args) {
        const blockName = 'RS_MOTION_MOVE_POSITION';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_MOTION_MOVE_RELATIVE (args) {
        const blockName = 'RS_MOTION_MOVE_RELATIVE';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_MOTION_MOVE_RECTANGLE (args) {
        const blockName = 'RS_MOTION_MOVE_RECTANGLE';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_MOTION_MOVE_CIRCLE (args) {
        const blockName = 'RS_MOTION_MOVE_CIRCLE';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_MOTION_ROTATE_WRIST (args) {
        const blockName = 'RS_MOTION_ROTATE_WRIST';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_MOTION_ROTATE_WRIST_TO (args) {
        const blockName = 'RS_MOTION_ROTATE_WRIST_TO';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_MOTION_KEEP_ROTATE (args) {
        const blockName = 'RS_MOTION_KEEP_ROTATE';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }
}

module.exports = Blocks;
