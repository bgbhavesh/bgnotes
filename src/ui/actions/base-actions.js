import axios from 'axios';
import config from '../../../src/config';
import _ from 'underscore';
const apiUrl = config.serverUrl + "";
const PAGE_LIMIT = 10;

var apiCall = function (requestedModel) {
  var PAGE_LIMIT = PAGE_LIMIT;
  var SKIP_START = 0;
  var data = {};
  var otherOptions = {};
  var model = requestedModel || "widget";
  var redux = "WIDGET";
  var company = "";
  var apiCallClass = function (options) {
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
    console.log("getItems")
    // return async function (dispatch) {
    //   axios({
    //     method: "post",
    //     url: apiUrl,
    //     data: {
    //       model: this.model//widgets
    //     }
    //   })
    //     .then(function (response) {
    //       // console.log(response.data)
    //       return dispatch({
    //         type: 'GET_' + this.redux,
    //         payload: response.data
    //       });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
  };
  apiCallClass.prototype.updateItems = function () {
    console.log('data=', this.data)
    if (this.data && this.data.uid) {
      return async function (dispatch) {
        axios({
          method: 'post',
          url: apiUrl + "/update",
          data: {
            item: this.data,
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
    console.log(this.data._id, apiUrl + "/delete")
    return async function (dispatch) {
      axios({
        method: 'post',
        url: apiUrl + "/delete",
        data: {
          uid: this.data._id,
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
    if (this.data.searchText) {
      return async function (dispatch) {
        axios({
          method: 'post',
          url: apiUrl + '/search',
          data: {
            searchText: this.data.searchText,
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