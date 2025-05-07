import axios from "axios";

const Base_url = "http://localhost:8080/"

export function getUserId(email){
    return axios.get(Base_url+"api/users/id/mail/"+email);
}

export function getUserData(id){
    return axios.get(Base_url+"api/users/"+id)
}
export function saveUser(data){
    return axios.post(Base_url+"api/users",data);
}
export function saveRecord(data){
    return axios.post(Base_url+"api/records",data)
}
export function getUserRecords(data){
    return axios.get(Base_url+"api/records/usr/"+data);
}