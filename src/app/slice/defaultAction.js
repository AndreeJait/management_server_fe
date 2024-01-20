const reducers = {
    set: (state, action) => {
        const {key, value} = action.payload;
        state[key] = value;
    },
    append: (state, action) => {
        const {key, value} = action.payload;
        console.log(typeof value);
        switch (typeof value) {
            case "string":
                state[key] = `${state[key]} ${value}`
                break
            default:
                if(Array.isArray(state[key])){
                    state[key] = [
                        ...state[key],
                        ...value
                    ]
                }else{
                    state[key] = {
                        ...state[key],
                        ...value,
                    }
                }
        }
    },
    deleteByIndex: (state, action) => {
        const {key, index} = action.payload;
        if(Array.isArray(state[key])) {
            state[key].splice(index, 1)
        }
    },
    deleteByValue: (state, action) => {
        const {key, value} = action.payload;
        let isArray = Array.isArray(state[key]);
        state[key].forEach((item, key)=> {
            if(item === value) {
                if(isArray){
                    state[key].splice(key, 1);
                }else {
                    delete state[key];
                }
            }
        })

    },
    emptyValue: (state, action)=>{
        const {key} = action.payload;
        let isArray = Array.isArray(state[key]);
        if(isArray){
            state[key] = [];
        }else {
            state[key] = {};
        }
    }

}
export default reducers;