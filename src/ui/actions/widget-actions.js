// import Widgets from '../../api/widgets';
import axios from 'axios';
const apiUrl = "http://localhost:3001/api/widgets";

function getWidgets() {

  return async function(dispatch) {
    axios.get(apiUrl)
    .then(function (response) {
      console.log(response.data)
      return dispatch({
        type: 'GET_WIDGETS',
        payload: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

    // const widgets = await fetch(apiUrl);
    // console.log(widgets)
    // return dispatch({
    //   type: 'GET_WIDGETS',
    //   payload: widgets
    // });
  }
}
function updateWidget(data) {
  console.log('data=',data)
  if(data && data._id){
    return async function(dispatch) {
    axios({
      method:'post',
      url:apiUrl+"/updateWidget",
      data:data
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
  // console.log('data=',data)
  if(data ){
  return async function(dispatch) {
    axios({
      method:'post',
      url:apiUrl,
      data:data
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
  console.log(_id,apiUrl+"/deleteWidget")
  return async function(dispatch) {    
    axios({
      method:'post',
      url:apiUrl+"/deleteWidget",
      data:{id:_id}
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

export default {
  createWidget,
  getWidgets,
  deleteWidget,
  updateWidget
}
