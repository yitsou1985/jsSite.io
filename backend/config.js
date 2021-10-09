import dotenv from 'dotenv';
//don't forget to install npm i dotenv
dotenv.config();

export default {
    MONGODB_URL:process.env.MONGODB_URL,
    JWT_SECRET:process.env.JWT_SECRET,
}