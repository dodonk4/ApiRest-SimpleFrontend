import obtainUsers from './obtainUsers.js';
const users = await obtainUsers();


const getUserById = (id) => {
    return users.rows.find(user => user.id === id)
}

export default getUserById;