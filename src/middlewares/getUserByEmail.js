import obtainUsers from './obtainUsers.js';
const users = await obtainUsers();


const getUserByEmail = async (email) => {
    return users.rows.find(user => user.email === email)
}

export default getUserByEmail;