import Classroom from '../models/Classroom';
import Child from '../models/Child'

export const AVATARS = [
    require('../assets/images/avataaars0.png'),
    require('../assets/images/avataaars1.png'),
    require('../assets/images/avataaars2.png'),
    require('../assets/images/avataaars3.png'),
    require('../assets/images/avataaars4.png'),
    require('../assets/images/avataaars5.png'),
    require('../assets/images/avataaars6.png'),
    require('../assets/images/avataaars7.png'),
    require('../assets/images/avataaars8.png'),
    require('../assets/images/avataaars9.png'),
    require('../assets/images/avataaars10.png'),
];

const chidren = [
    new Child('0', 'Carlos Augusto', true, AVATARS[0]),
    new Child('1', 'Marcos Vinicius', false, AVATARS[1]),
    new Child('2', 'Carla Santos', false, AVATARS[2]),
    new Child('3', 'Camila Mendes', false, AVATARS[3]),
    new Child('4', 'Kleber Souza', false, AVATARS[4]),
    new Child('5', 'João Pedro', false, AVATARS[5]),
    new Child('6', 'Mano Menezes', false, AVATARS[6]),
    new Child('7', 'Carlinhos Menezes', false, AVATARS[7]),
    new Child('8', 'Jaqueline Rocha', false, AVATARS[8]),
    new Child('9', 'Rafael Marques', false, AVATARS[9]),
    new Child('10', 'Joana Mendes', false, AVATARS[10]),
];

export const ROOMS = [
    new Classroom('0', 'Room 1', chidren.slice(0,2)),
    new Classroom('1', 'Room 2', chidren.slice(2,4)),
    new Classroom('2', 'Room 3', chidren.slice(4,6)),
    new Classroom('3', 'Room 4', chidren.slice(6,8)),
    new Classroom('4', 'Room 5', chidren.slice(8,10)),
];
