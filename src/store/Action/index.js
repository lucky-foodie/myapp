const action = {
    tab(tree, num) {
        tree.commit('tab', num)
    },
    tille(tree, num) {
        tree.commit('tille', num)
    }
}
export default action