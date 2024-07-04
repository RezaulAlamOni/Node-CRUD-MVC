const User = require("../Model/User.model");
const bcrypt = require("bcrypt");


const registrations = async (req, res) => {
    try {
        let data = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: await bcrypt.hash(req.body.password,10),
        }
        const user = await User.create(data); // create User
        return res.status(200).send(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const  login = async (req, res) => {
    try {
        const users = await User.findOne({ email: req.body.email });
        if (!users) {
            return res.status(404).json({ error: 'User not found' });
        }
        const validPassword = await bcrypt.compare(req.body.password, users.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    registrations,
    login
}