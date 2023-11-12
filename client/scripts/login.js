import {login} from '../db.js';

async function handleLogin(){
    await login();
}