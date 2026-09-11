import { createStore, action, thunk, computed } from "easy-peasy";
import api from ".././api/products";

export default createStore({
  // get all the data from the api
  data: [],
  setData: action((state, payload) => {
    state.data = payload;
  }),

  // the toast
  toast: null,
  setToast: action((state, payload) => {
    state.toast = payload;
  }),
  decrementToast: action((state) => {
    if (state.toast) {
      state.toast.countDown -= 1;
    }
  }),

  // sign in and create account
  showPassword: false,
  toggleShowPassword: action((state) => {
    state.showPassword = !state.showPassword;
  }),

  createAccount: [],
  setCreateAccount: action((state, payload) => {
    state.createAccount = payload;
  }),
  getUserAfterSignIN: null,
  setGetUserAfterSignIN: action((state, payload) => {
    state.getUserAfterSignIN = payload;
  }),

  isSignedIn: true,
  setIsSignedIn: action((state, payload) => {
    state.isSignedIn = payload;
  }),
  isCompleteLogin: {},
  setIsCompleteLogin: action((state, payload) => {
    state.isCompleteLogin = payload;
  }),

  saved: [],
  setSaved: action((state, payload) => {
    state.saved = payload;
  }),

  // carlist
  cartList: [],
  setCartList: action((state, payload) => {
    state.cartList = payload;
  }),
  addToCart: 0,
  setAddToCart: action((state, payload) => {
    state.addToCart = payload;
  }),
  addCartSuccessfully: false,
  setAddCartSuccessfully: action((state, payload) => {
    state.addCartSuccessfully = payload;
  }),
  addCartExist: false,
  setAddCartExist: action((state, payload) => {
    state.addCartExist = payload;
  }),

  // search bar
  searchResult: "",
  setSearchResult: action((state, payload) => {
    state.searchResult = payload;
  }),

  isSearch: false,
  setIsSearch: action((state, payload) => {
    state.isSearch = payload;
  }),

  collectSearchResult: "",
  setCollectSearchResult: action((state, payload) => {
    state.collectSearchResult = payload;
  }),

  filteredResult: [],
  setFilteredResult: action((state, payload) => {
    state.filteredResult = payload;
  }),

  // side bar
  sideMenubar: false,
  setSideMenubar: action((state, payload) => {
    state.sideMenubar = payload;
  }),
});
