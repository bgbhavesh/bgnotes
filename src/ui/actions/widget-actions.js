// import Widgets from '../../api/widgets';
import axios from 'axios';
const serverUrl = 'http://localhost:3001'//'https://widgetserver.herokuapp.com';//'https://widgetserver.herokuapp.com';
const apiUrl = serverUrl + "/api/common";

function getWidgets() {

  return async function (dispatch) {
    axios({
      method: "post",
      url: apiUrl,
      data: {
        model: 'widgets'
      }
    })
      .then(function (response) {
        // console.log(response.data)
        return dispatch({
          type: 'GET_WIDGETS',
          payload: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
function updateWidget(data) {
  console.log('data=', data)
  if (data && data.uid) {
    return async function (dispatch) {
      axios({
        method: 'post',
        url: apiUrl + "/update",
        data: {
          item: data,
          model: 'widgets'
        }
      })
        .then(function (response) {
          console.log(response.data)
          return dispatch({
            type: 'UPDATE_WIDGET',
            payload: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

}

function createWidget(data) {
  console.log('data=', data)
  if (data) {
    return async function (dispatch) {
      axios({
        method: 'post',
        url: apiUrl + "/add",
        data: {
          item: data,
          model: 'widgets'
        }
      })
        .then(function (response) {
          console.log(response.data)
          return dispatch({
            type: 'CREATE_WIDGET',
            payload: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}

function deleteWidget(_id) {
  console.log(_id, apiUrl + "/delete")
  return async function (dispatch) {
    axios({
      method: 'post',
      url: apiUrl + "/delete",
      data: {
        uid: _id,
        model: 'widgets'
      }
    })
      .then(function (response) {
        console.log(response.data)
        return dispatch({
          type: 'REMOVE_WIDGETS',
          payload: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
function searchWidgets(searchText) {
  if (searchText) {
    return async function (dispatch) {
      axios({
        method: 'post',
        url: apiUrl + '/search',
        data: {
          searchText: searchText,
          model: 'widgets'
        }
      })
        .then(function (response) {
          // console.log(response.data)
          return dispatch({
            type: 'GET_WIDGETS',
            payload: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

}
export default {
  createWidget,
  getWidgets,
  deleteWidget,
  updateWidget,
  searchWidgets
}
