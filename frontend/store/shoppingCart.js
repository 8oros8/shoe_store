export const state = () => ({
    list: []
})

export const mutations = {
    add(state, item) {
        state.list.push(item)
    },
    remove(state, item) {
        state.list.splice(state.list.indexOf(item), 1)
    },
}
export const getters = {
    subtotal (state) {
        let subtotal = 0
        for (let item of state.list) {
            subtotal += item.price
        }
        return subtotal
    },
    itemCount (state) {
        return state.list.length
    }
}