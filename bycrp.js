const bcrypt = require('bcrypt');
const saltRounds = 10;

async function Hash(password){
    try{
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash
    } catch(err){
        throw err;
    }
}

async function unHash(password, hash){
    try{
        const result = await bcrypt.compare(password, hash)
        return result;
    } catch(err){
        throw err;
    }
}

module.exports = {Hash,unHash}