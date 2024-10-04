import { Passage, PassageApp } from '@passageidentity/passage-js';
 
const passage = new Passage('RqVDnxkssH8vwNCSKmmCIl1b');
const passageApp = new PassageApp('RqVDnxkssH8vwNCSKmmCIl1b');

await passage.app.info().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

export function getToken(){
    const token = localStorage.getItem('psg_auth_token')
    return token
} 

