var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const users =[
    {
        name:"Bibiche",
        password:"1234"
    }
   
]
const privatekey =`-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCJjhc/2UgUobeSaSQs3DRhqXWZyySHzUfHzd1/5ygCNPaFoLL3
dkDrqDzZWFLl8zGdXO7Z738gIgup4eTPEMAfmpfjGn50zp/2wnndjRqKtQXX5P6o
F8d5sUecndA8OI4a4knwIDo4YCc9DiE4AJblKG2h3lkV/uxqDQ3uOL5a0wIDAQAB
AoGAUI4x92Zb3BlI1ClW0h6zXm5LPKHG5vDFFLHvAbRxrbkuldsic+GA64E/AVnE
Un41lB6UknS7UioeAoMT6F+64uckr/GgHwtn9DJNsUPIDv6wn8aD9Mdazq7oFlkD
2eL7/q9VQmHlpwD3NIn4xp2ZO3Xnxe1o5ThLR2GjS2A7e2ECQQDkk6ZRBL/hjbKV
NkcJ3JIexvHEQpa3XSKNKymn0EsXIG34b+MlS8XKuDBClwg//yOnYobscH/AF/gU
VryrWJyvAkEAmg7cxmFKIH3RfRs5HvDmKLKmQqW9ry3eX5ceMH7eYcT2jmr31AEX
X0HsUSW0IBw3whGrdzZlhM9FdlYmS9nVHQJBANXllW2blDPt9X/MGw4Pam2Cnhua
dI+CiCKykXiIYrxxjHc/vL/Z+G2Ljx3BV+cLSsIIYVpArEuGIpBl2og9k+ECQDbZ
79VaMnBbG8l1deMEVo5K/VNhe6XxqOlT/tW5dihNXpPalh6PvOiXqjJCQF3mbhvU
+r3ZSk/9FHhLuBrtlikCQQDhWBnfyRsKkVaaKcoiO2oJwrXaaxOTNZWhKtiJ8V+t
Ac0aYaQf6K+v0J5aaE1rpYFm9fca40EaatY0c81wOn/a
-----END RSA PRIVATE KEY-----`


const publickey =`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJjhc/2UgUobeSaSQs3DRhqXWZ
yySHzUfHzd1/5ygCNPaFoLL3dkDrqDzZWFLl8zGdXO7Z738gIgup4eTPEMAfmpfj
Gn50zp/2wnndjRqKtQXX5P6oF8d5sUecndA8OI4a4knwIDo4YCc9DiE4AJblKG2h
3lkV/uxqDQ3uOL5a0wIDAQAB
-----END PUBLIC KEY-----`


module.exports.verifyToken=(req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message:'token non fourni'});
    }
    jwt.verify(token,process.env.TOKEN_KEY,(err,decoded) =>{
       if(err) {
        return res.status(401).json({message:'Token invalide'});
       }
       req.user= decoded;
       next()
    })
}