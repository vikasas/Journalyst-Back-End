const crypto = require("crypto");
const tokens = new Map();

function genrateToken(userId){
    const token = tokens.get(userId);
    if(!token || Date.now > token.expiry){
        const newToken = `token-${crypto.randomBytes(16).toString('hex')}`;
        tokens.set(userId , {token : newToken , expiry : Date.now + 60 * 60 * 1000});
        return newToken;
    }

    return tokens.token;
}

function refreshToken(userId){
    const newToken = `token-${crypto.randomBytes(16).toString('hex')}`;
    tokens.set(userId , {token : newToken , expiry : Date.now() + 60 * 60 *1000});
    return newToken;
}

module.exports = {
    genrateToken,
    refreshToken
}
