class Blocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getPrimitives() {
        return {
            RA_MOTION_SET_ANGLES: this.RA_MOTION_SET_ANGLES,
        };
    }

    RA_MOTION_SET_ANGLES(args) {
        const blockName = 'RA_MOTION_SET_ANGLES';
        return new Promise(resolve => {
            this.runtime.emit('robot-arm-async', { blockName, resolve, args });
        });
    }
}

module.exports = Blocks;
