import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { RegisterTypes } from '../Redux/RegisterRedux'
import { PasswordTypes } from '../Redux/PasswordRedux'
import { AccountTypes } from '../Redux/AccountRedux'
import { FeedTypes } from '../Redux/FeedRedux'
import { HomeFeedTypes } from '../Redux/HomeFeedRedux'
import { CategoryCountryTypes } from '../Redux/CategoryCountryRedux'
import { FeedCategoryTypes } from '../Redux/FeedCategoryRedux'
import { EntityChannelTypes } from '../Redux/EntityChannelRedux'
import { ChannelTypes } from '../Redux/ChannelRedux'
import { FeedChannelTypes } from '../Redux/FeedChannelRedux'


/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login, logout, socialLogin, loginLoad } from './LoginSagas'
import { register } from './RegisterSagas'
import { forgotPassword, changePassword } from './PasswordSagas'
import { getAccount, updateAccount } from './AccountSagas'
import { getFeed, getFeeds, updateFeed, deleteFeed, searchFeeds } from './FeedSagas'
import { getHomeFeed, getHomeFeeds, updateHomeFeed, deleteHomeFeed, searchHomeFeeds } from './HomeFeedSagas'
import { getCategoryCountry, getCategoryCountries, updateCategoryCountry, deleteCategoryCountry, searchCategoryCountries } from './CategoryCountrySagas'
import { getFeedCategory, getFeedCategories, updateFeedCategory, deleteFeedCategory, searchFeedCategories } from './FeedCategorySagas'
import { getEntityChannel, getEntityChannels, updateEntityChannel, deleteEntityChannel, searchEntityChannels } from './EntityChannelSagas'
import { getChannel, getChannels, updateChannel, deleteChannel, searchChannels } from './ChannelSagas'
import { getFeedChannel, getFeedChannels, updateFeedChannel, deleteFeedChannel, searchFeedChannels } from './FeedChannelSagas'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

 
    takeLatest(LoginTypes.LOGIN_LOAD, loginLoad, api),
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    takeLatest(LoginTypes.SOCIAL_LOGIN_REQUEST, socialLogin, api),
    takeLatest(LoginTypes.LOGOUT_REQUEST, logout, api),
    takeLatest(RegisterTypes.REGISTER_REQUEST, register, api),
    takeLatest(PasswordTypes.FORGOT_PASSWORD_REQUEST, forgotPassword, api),
    takeLatest(PasswordTypes.CHANGE_PASSWORD_REQUEST, changePassword, api),

    takeLatest(FeedTypes.FEED_REQUEST, getFeed, api),
    takeLatest(FeedTypes.FEED_ALL_REQUEST, getFeeds, api),
    takeLatest(FeedTypes.FEED_UPDATE_REQUEST, updateFeed, api),
    takeLatest(FeedTypes.FEED_DELETE_REQUEST, deleteFeed, api),
    takeLatest(FeedTypes.FEED_SEARCH_REQUEST, searchFeeds, api),

    takeLatest(HomeFeedTypes.HOME_FEED_REQUEST, getHomeFeed, api),
    takeLatest(HomeFeedTypes.HOME_FEED_ALL_REQUEST, getHomeFeeds, api),
    takeLatest(HomeFeedTypes.HOME_FEED_UPDATE_REQUEST, updateHomeFeed, api),
    takeLatest(HomeFeedTypes.HOME_FEED_DELETE_REQUEST, deleteHomeFeed, api),
    takeLatest(HomeFeedTypes.HOME_FEED_SEARCH_REQUEST, searchHomeFeeds, api),

    takeLatest(CategoryCountryTypes.CATEGORY_COUNTRY_REQUEST, getCategoryCountry, api),
    takeLatest(CategoryCountryTypes.CATEGORY_COUNTRY_ALL_REQUEST, getCategoryCountries, api),
    takeLatest(CategoryCountryTypes.CATEGORY_COUNTRY_UPDATE_REQUEST, updateCategoryCountry, api),
    takeLatest(CategoryCountryTypes.CATEGORY_COUNTRY_DELETE_REQUEST, deleteCategoryCountry, api),
    takeLatest(CategoryCountryTypes.CATEGORY_COUNTRY_SEARCH_REQUEST, searchCategoryCountries, api),

    takeLatest(FeedCategoryTypes.FEED_CATEGORY_REQUEST, getFeedCategory, api),
    takeLatest(FeedCategoryTypes.FEED_CATEGORY_ALL_REQUEST, getFeedCategories, api),
    takeLatest(FeedCategoryTypes.FEED_CATEGORY_UPDATE_REQUEST, updateFeedCategory, api),
    takeLatest(FeedCategoryTypes.FEED_CATEGORY_DELETE_REQUEST, deleteFeedCategory, api),
    takeLatest(FeedCategoryTypes.FEED_CATEGORY_SEARCH_REQUEST, searchFeedCategories, api),

    takeLatest(EntityChannelTypes.ENTITY_CHANNEL_REQUEST, getEntityChannel, api),
    takeLatest(EntityChannelTypes.ENTITY_CHANNEL_ALL_REQUEST, getEntityChannels, api),
    takeLatest(EntityChannelTypes.ENTITY_CHANNEL_UPDATE_REQUEST, updateEntityChannel, api),
    takeLatest(EntityChannelTypes.ENTITY_CHANNEL_DELETE_REQUEST, deleteEntityChannel, api),
    takeLatest(EntityChannelTypes.ENTITY_CHANNEL_SEARCH_REQUEST, searchEntityChannels, api),

    takeLatest(ChannelTypes.CHANNEL_REQUEST, getChannel, api),
    takeLatest(ChannelTypes.CHANNEL_ALL_REQUEST, getChannels, api),
    takeLatest(ChannelTypes.CHANNEL_UPDATE_REQUEST, updateChannel, api),
    takeLatest(ChannelTypes.CHANNEL_DELETE_REQUEST, deleteChannel, api),
    takeLatest(ChannelTypes.CHANNEL_SEARCH_REQUEST, searchChannels, api),

    takeLatest(FeedChannelTypes.FEED_CHANNEL_REQUEST, getFeedChannel, api),
    takeLatest(FeedChannelTypes.FEED_CHANNEL_ALL_REQUEST, getFeedChannels, api),
    takeLatest(FeedChannelTypes.FEED_CHANNEL_UPDATE_REQUEST, updateFeedChannel, api),
    takeLatest(FeedChannelTypes.FEED_CHANNEL_DELETE_REQUEST, deleteFeedChannel, api),
    takeLatest(FeedChannelTypes.FEED_CHANNEL_SEARCH_REQUEST, searchFeedChannels, api),
    // ignite-jhipster-saga-redux-connect-needle

    takeLatest(AccountTypes.ACCOUNT_REQUEST, getAccount, api),
    takeLatest(AccountTypes.ACCOUNT_UPDATE_REQUEST, updateAccount, api)
  ])
}
