import { call, put } from 'redux-saga/effects'
import ChannelActions from '../Redux/ChannelRedux'
import { callApi } from './CallApiSaga'

export function * getChannel (api, action) {
  const { channelId } = action
  // make the call to the api
  const apiCall = call(api.getChannel, channelId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(ChannelActions.channelSuccess(response.data))
  } else {
    yield put(ChannelActions.channelFailure(response.data))
  }
}

export function * getChannels (api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getChannels, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(ChannelActions.channelAllSuccess(response.data))
  } else {
    yield put(ChannelActions.channelAllFailure(response.data))
  }
}

export function * updateChannel (api, action) {
  const { channel } = action
  // make the call to the api
  const apiCall = call(api.updateChannel, channel)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(ChannelActions.channelUpdateSuccess(response.data))
  } else {
    yield put(ChannelActions.channelUpdateFailure(response.data))
  }
}

export function * searchChannels (api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchChannels, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(ChannelActions.channelSearchSuccess(response.data))
  } else {
    yield put(ChannelActions.channelSearchFailure(response.data))
  }
}
export function * deleteChannel (api, action) {
  const { channelId } = action
  // make the call to the api
  const apiCall = call(api.deleteChannel, channelId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(ChannelActions.channelDeleteSuccess())
  } else {
    yield put(ChannelActions.channelDeleteFailure(response.data))
  }
}
