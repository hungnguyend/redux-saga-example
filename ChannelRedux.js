import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  channelRequest: ['channelId'],
  channelAllRequest: ['options'],
  channelUpdateRequest: ['channel'],
  channelSearchRequest: ['query'],
  channelDeleteRequest: ['channelId'],

  channelSuccess: ['channel'],
  channelAllSuccess: ['channels'],
  channelUpdateSuccess: ['channel'],
  channelSearchSuccess: ['channels'],
  channelDeleteSuccess: [],

  channelFailure: ['error'],
  channelAllFailure: ['error'],
  channelUpdateFailure: ['error'],
  channelSearchFailure: ['error'],
  channelDeleteFailure: ['error']
})

export const ChannelTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  channel: null,
  channels: null,
  errorOne: null,
  errorAll: null,
  errorUpdating: null,
  errorSearching: null,
  errorDeleting: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
  state.merge({
    fetchingOne: true,
    channel: null
  })

// request the data from an api
export const allRequest = (state) =>
  state.merge({
    fetchingAll: true,
    channels: null
  })

// request to update from an api
export const updateRequest = (state) =>
  state.merge({
    updating: true
  })
// request to search from an api
export const searchRequest = (state) =>
  state.merge({
    searching: true
  })
// request to delete from an api
export const deleteRequest = (state) =>
  state.merge({
    deleting: true
  })

// successful api lookup for single entity
export const success = (state, action) => {
  const { channel } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    channel
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { channels } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    channels
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { channel } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    channel
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { channels } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    channels
  })
}
// successful api delete
export const deleteSuccess = (state) => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    channel: null
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    channel: null
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    channels: null
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    channel: state.channel
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    channel: state.channel
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    channels: null
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANNEL_REQUEST]: request,
  [Types.CHANNEL_ALL_REQUEST]: allRequest,
  [Types.CHANNEL_UPDATE_REQUEST]: updateRequest,
  [Types.CHANNEL_SEARCH_REQUEST]: searchRequest,
  [Types.CHANNEL_DELETE_REQUEST]: deleteRequest,

  [Types.CHANNEL_SUCCESS]: success,
  [Types.CHANNEL_ALL_SUCCESS]: allSuccess,
  [Types.CHANNEL_UPDATE_SUCCESS]: updateSuccess,
  [Types.CHANNEL_SEARCH_SUCCESS]: searchSuccess,
  [Types.CHANNEL_DELETE_SUCCESS]: deleteSuccess,

  [Types.CHANNEL_FAILURE]: failure,
  [Types.CHANNEL_ALL_FAILURE]: allFailure,
  [Types.CHANNEL_UPDATE_FAILURE]: updateFailure,
  [Types.CHANNEL_SEARCH_FAILURE]: searchFailure,
  [Types.CHANNEL_DELETE_FAILURE]: deleteFailure
})
