import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('playgrounddb', 'root', 'Dlwlsxkr9!', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;