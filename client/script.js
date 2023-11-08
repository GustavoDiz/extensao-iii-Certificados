import {db} from './supabase.js';

async function showAllUsers() {
  let { data: users, error } = await db.from("users").select("*");
  if(!error){
    console.log(users);
  }
}

showAllUsers();
