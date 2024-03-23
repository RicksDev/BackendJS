const fs = require('fs');
const path = require('path');
const fileName = 'users.json';
const filePath = path.join(__dirname, "..","database",fileName);

class UsersController {
    static async getUsers() {
        return new Promise((resolve,reject) => {
            fs.readFile(filePath, 'utf-8', (err,data) => {
                if(err) {
                    if(err.code === "ENOENT"){
                        this.writeUsersToFile([]);
                        return [];
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });
    };


static async writeUsersToFile(users) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(users), (err) => {
            if(err) reject (err);
            console.log(`Data written to file: ${filePath}`);
             resolve(this.getAllUsers());
            })
        })
    }

    static async getAllUsers() {
        const users = await this.getUsers();
        return users;
    };

    static async createUser (user) {
        const users = await this.getUsers();
        user.id = users.length + 1;
        users.push(user);
        const insertDB = await this.writeUsersToFile(users);
        return insertDB;
    };

    static async getUserById(id) {
        const users = await this.getUsers();
        return users.find(user => user.id === parseInt(id));
    }

    static async UpdateUser (id,user) {
        const users = await this.getUsers();
        const index = users.findIndex(p => p.id === parseInt(id));
        if (index === -1) {
            return null;
        }
        users[index] = user;
        const updateDB = await this.writeUsersToFile(users);
        return updateDB;
    };

    static async deleteUser(id) {
        const users = await this.getUsers();
        const index = users.findIndex(p => p.id === parseInt(id));
        if (index === -1) {
            return null;
        } else {
            users.splice(index, 1);
        }
        await this.writeUsersToFile(users);
        return index;
    };
};

module.exports = UsersController;