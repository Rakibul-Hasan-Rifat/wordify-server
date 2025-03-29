import jwt from 'jsonwebtoken';

const jwtController = (req, res) => {
    const token = jwt.sign({name: 'Rakib'}, process.env.JWT_ACCESS_TOKEN, {expiresIn: '2d'})
    console.log({token});
    res.cookie('token', token).send({success: true})
}

export default jwtController;