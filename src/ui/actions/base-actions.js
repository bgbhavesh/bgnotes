import axios from 'axios';
import config from '../../../src/config';
const apiUrl = serverUrl + "/api/common";
const PAGE_LIMIT = 10;

apiCall = function () {
  apiCallClass = function (options) {
    this.options = _.extend({}, options);
    this.data = this.options.data || {};
    this.redux = this.model.toUpperCase();
  };

  apiCallClass.prototype.createItems = function () {
    console.log('data=', this.data)
    if (this.data) {
      return async function (dispatch) {
        axios({
          method: 'post',
          url: apiUrl + "/add",
          data: {
            item: this.data,
            model: this.model//widgets
          }
        })
          .then(function (response) {
            console.log(response.data)
            return dispatch({
              type: 'CREATE_' + this.redux,
              payload: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };
  apiCallClass.prototype.getItems = function () {
    return async function (dispatch) {
      axios({
        method: "post",
        url: apiUrl,
        data: {
          model: this.model//widgets
        }
      })
        .then(function (response) {
          // console.log(response.data)
          return dispatch({
            type: 'GET_' + this.redux,
            payload: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  apiCallClass.prototype.updateItems = function () {
    console.log('data=', data)
    if (data && data.uid) {
      return async function (dispatch) {
        axios({
          method: 'post',
          url: apiUrl + "/update",
          data: {
            item: data,
            model: this.model//widgets
          }
        })
          .then(function (response) {
            console.log(response.data)
            return dispatch({
              type: 'UPDATE_' + this.redux,
              payload: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };
  apiCallClass.prototype.removeItems = function () {
    console.log(_id, apiUrl + "/delete")
    return async function (dispatch) {
      axios({
        method: 'post',
        url: apiUrl + "/delete",
        data: {
          uid: _id,
          model: this.model//widgets
        }
      })
        .then(function (response) {
          console.log(response.data)
          return dispatch({
            type: 'REMOVE_' + this.redux,
            payload: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  apiCallClass.prototype.searchItems = function () {
    if (searchText) {
      return async function (dispatch) {
        axios({
          method: 'post',
          url: apiUrl + '/search',
          data: {
            searchText: searchText,
            model: this.model//widgets
          }
        })
          .then(function (response) {
            // console.log(response.data)
            return dispatch({
              type: 'GET_' + this.redux,
              payload: response.data
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };
  apiCallClass.prototype.getLimitItems = function () {
    return async function (dispatch) {
      axios({
        method: "post",
        url: apiUrl,
        data: {
          model: this.model//widgets
        }
      })
        .then(function (response) {
          // console.log(response.data)
          return dispatch({
            type: 'GET_' + this.redux,
            payload: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  apiCallClass.prototype.getMoreItems = function () {
    return async function (dispatch) {
      axios({
        method: "post",
        url: apiUrl,
        data: {
          model: this.model//widgets
        }
      })
        .then(function (response) {
          // console.log(response.data)
          return dispatch({
            type: 'GET_' + this.redux,
            payload: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return apiCallClass;
}();



export default {
  apiCall
}