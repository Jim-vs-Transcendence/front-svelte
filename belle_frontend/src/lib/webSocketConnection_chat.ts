const backUrl : string = import.meta.env.BACK_URL;

import ioClient from 'socket.io-client';
const ENDPOINT = backUrl + '/chat';

//const ENDPOINT = 'http://43.202.12.31:3000/chat';

const socket = ioClient(ENDPOINT);

export const io_chat = socket;
