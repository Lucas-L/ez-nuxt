
export const state = () => ({
    test: 0,
    
})

export const getters = {
    testGetter: state => state.test
}

export const mutations = {
    setTest(state){
        state.test=1
    }
}
