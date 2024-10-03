import { Passage, PassageApp } from '@passageidentity/passage-js';
 
const passage = new Passage('RqVDnxkssH8vwNCSKmmCIl1b');
const passageApp = new PassageApp('RqVDnxkssH8vwNCSKmmCIl1b');

await passage.app.info().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

async function createUser() {
    try {
        // const newUser = await passage.createUser({
        //     email: 'test@example.com',
        //     password: 'your_password'
        // });
        const newUser = await passageApp.createUser({
            email: 'test@example.com',
            password: 'your_password'
        });
        console.log('Usuário criado com sucesso', newUser);
    } catch(error) {
        console.error('Erro ao criar o usuário:', error);
    };
};

createUser();