import axios from 'axios'
import { useContext } from 'react';
import { Context } from '../context/StateContext';
import { instance } from './api/api';

export const loginAPI = () => {

   return axios.create({
      baseURL: import.meta.env.VITE_APP_MAIN_URL
   })
   // return axios.post("login", {
   //    email: email,
   //    password: password
   // }, {
   //    maxBodyLength: Infinity,
   //    baseURL: ,
   // })
}

export const registerAPI = () => {

   return axios.create({
      baseURL: import.meta.env.VITE_APP_MAIN_URL
   })

}
