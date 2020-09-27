const mutations = {
    show(state) {
        state.showFooter = true
    },
    hide(state, tree) {
        state.views = tree
    },
    newNum(state, tree) {
        state.changableNum += tree
    },
    tab(state, tree) {
        state.tab = tree
    },
    tille(state, tree) {
        state.tille = tree
    },
    data_josn(state, tree) {
        state.data_josn = tree
    },
    tab_er(state, tree) {
        state.tab_er = tree
    },
    data_pf(state, tree) {
        state.data_pf = tree
    },
    data_pf2(state, tree) {
        state.data_pf2 = tree
    },
    d_m(state, tree) {
        state.d_m = tree
    },
    qx_data(state, tree) {
        state.qx_data = tree
    },
    user_data(state, tree) {
        state.user_data = tree
    },
}
export default mutations