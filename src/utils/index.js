module.exports = {

    keyGenerator() {
        const key = Date.now().toString();
        return key
    },

    mountTask(key, item){
        const task = {
            key: key,
            text: item
        }
        return task
    }
   
}