// import Widgets from '../../api/widgets';
import axios from 'axios';
import config from '../../../src/config';
const apiUrl = config.serverUrl + "/api/common";
// var baseObj = {
//   model:'wigets',
//   redux:'GET_WIDGETS',
//   item:{
//     uid:""
//   },
//   uid:"",
//   searchText:""
//   caseSensitive:false
// }
function getItems(baseObj) {
    console.log(baseObj)
    return async function(dispatch) {
        axios({
            method: "post",
            url: apiUrl,
            data: {
                type: baseObj.redux || 'GET_WIDGETS',
                options: baseObj
            }
        })
            .then(function(response) {
                // console.log(response.data)
                if (response.success === false) {
                    return response;
                }
                return dispatch({
                    type: baseObj.redux || 'GET_WIDGETS',
                    payload: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}
function updateitem(baseObj) {
    console.log('baseObj=', baseObj)
    if (baseObj && baseObj.uid) {
        return async function(dispatch) {
            axios({
                method: 'post',
                url: apiUrl + "/update",
                data: {
                    model: baseObj.model, //||'widgets',
                    options: baseObj
                }
            })
                .then(function(response) {
                    console.log(response.data)
                    return dispatch({
                        type: baseObj.redux || 'UPDATE_WIDGETS',
                        payload: response.data,
                        options: baseObj
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }

}

function createItem(baseObj) {
    console.log('data=', baseObj)
    if (baseObj) {
        return async function(dispatch) {
            axios({
                method: 'post',
                url: apiUrl + "/add",
                data: {
                    model: baseObj.model, //|| 'widgets'
                    options: baseObj
                }
            })
                .then(function(response) {
                    console.log(response.data)
                    return dispatch({
                        type: baseObj.redux || 'UPDATE_WIDGETS',
                        payload: response.data
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
}

function deleteItem(baseObj) {
    return async function(dispatch) {
        axios({
            method: 'post',
            url: apiUrl + "/delete",
            data: {
                uid: baseObj.uid,
                model: baseObj.model, //|| 'widgets'
                options: baseObj
            }
        })
            .then(function(response) {
                console.log(response.data)
                return dispatch({
                    type: baseObj.redux || 'REMOVE_WIDGETS',
                    payload: response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}
// function searchWidgets(baseObj) {
//   if (searchText) {
//     return async function (dispatch) {
//       axios({
//         method: 'post',
//         url: apiUrl + '/search',
//         data: {       
//           model: baseObj.model, //||'widgets'
//           type: baseObj.redux || 'GET_WIDGETS'
//         }
//       })
//         .then(function (response) {
//           // console.log(response.data)
//           return dispatch({
//             type: 'GET_WIDGETS',
//             payload: response.data
//           });
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     }
//   }

// }
export default {
    createItem,
    getItems,
    deleteItem,
    updateitem
    // searchWidgets
}
