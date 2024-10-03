import { Passage } from '@passageidentity/passage-elements';

export function useAuthStatus() {
    const passage = new Passage(process.env.VUE_APP_PASSAGE_APP_ID);
    passage.currentUser.info().then((userInfo) => {});
};