import childModule from './child-module.js'
export default {
    namespaced: false,
    state: () => ({
        moduleName: 'parentModule'
    }),
    modules: {
        childModule
    }
}