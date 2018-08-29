export default store => next => async action => {
    //code goes here
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    const resp = await action.payload;
    const newAction = {
        ...action,
        payload: resp
    };

    store.dispatch(newAction);
}


// function (store) {
//     return function (next) {
//         return function (action) {
//             //code goes here
//         }
//     }
// }

// export default store => next => action => {
//     //code goes here
//     if (!action.payload || !action.payload.then) {
//         return next(action);
//     }

//     action.payload.then(resp => {
//         const newAction = {
//             ...action,
//             payload: resp
//         };
//         store.dispatch(newAction);
//     });

//     return action.payload;
// }