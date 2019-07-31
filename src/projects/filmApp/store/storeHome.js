import { createStore } from 'redux';

/**
 * 封装目的：
 * 1、生成独立存储空间，使相关联的模块共用又不被其它平行模块污染；
 * 2、可以临时生成存储单元，不必在redux里面提前定义；
 * 3、方便及时清理指定存储单元或空间；
 * 
*/

/**
 * 1、initialState：初始存储空间，也是多个存储单元的集合;
 * 2、homeStore、readStore：各个存储单元的名
 */
let initialState = {
    homeStore: {

    },
    readStore: {

    }
};

if (sessionStorage.getItem("state")) {
    Object.assign(initialState, JSON.parse(sessionStorage.getItem("state")))
}
if (sessionStorage.getItem("homeStore")) {
    Object.assign(initialState.homeStore, JSON.parse(sessionStorage.getItem("homeStore")))
}
if (sessionStorage.getItem("readStore")) {
    Object.assign(initialState.readStore, JSON.parse(sessionStorage.getItem("readStore")))
}

const reducer = (state = initialState, data) => {

    switch (data.type) {
        case "homeStore":
            Object.assign(state.homeStore, data.action)
            sessionStorage.setItem("homeStore", JSON.stringify(state.homeStore))
            return { ...(JSON.parse(JSON.stringify(state))) }
        case "readStore":
            Object.assign(state.readStore, data.action)
            sessionStorage.setItem("readStore", JSON.stringify(state.readStore))
            return { ...(JSON.parse(JSON.stringify(state))) }
        default:
            Object.assign(state, data.action)
            sessionStorage.setItem("state", JSON.stringify(state))
            return { ...(JSON.parse(JSON.stringify(state))) }
    }

};
const reduxStore = createStore(reducer)

export {
    reduxStore,
};