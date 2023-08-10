import axios from 'axios'
import { useContext } from 'react';
import { Context } from '../context/StateContext';
import { instance } from './api/api';

export const loginAPI = ({email:email, password: password}) => {

   return axios.post("login", {
      email: email,
      password: password
   }, {
      maxBodyLength: Infinity,
      baseURL: import.meta.env.VITE_APP_MAIN_URL,
   })
}

export const registerAPI = ({name, email, password, passwordConfirm, nomor}) => {

   return axios.post("login", {
      email: email,
      name: name,
      password: password,   
      passwordConfirm: passwordConfirm,   
      nomor: nomor   
   }, {
      maxBodyLength: Infinity,
      baseURL: import.meta.env.VITE_APP_MAIN_URL,
   })

}
