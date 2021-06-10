class Blocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getPrimitives () {
        return {
            RS_SENSING_CURRENT_POSITION: this.RS_SENSING_CURRENT_POSITION,
            RS_SENSING_CURRENT_ACCELERATION: this.RS_SENSING_CURRENT_ACCELERATION,
            RS_SENSING_CURRENT_SPEED: this.RS_SENSING_CURRENT_SPEED
        };
    }

    async RS_SENSING_CURRENT_POSITION (args) {
        const blockName = 'RS_SENSING_CURRENT_POSITION';
        console.log('1.执行指令，等待返回结果');
        const result = await new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
        console.log(`2.返回结果为${result}`);
        return result;
    }

    async RS_SENSING_CURRENT_ACCELERATION (args) {
        const blockName = 'RS_SENSING_CURRENT_ACCELERATION';
        const result = await new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
        return result;
    }

    async RS_SENSING_CURRENT_SPEED (args) {
        const blockName = 'RS_SENSING_CURRENT_SPEED';
        const result = await new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
        return result;
    }
}

module.exports = Blocks;
