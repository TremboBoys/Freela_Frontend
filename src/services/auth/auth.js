import { api } from "@/plugins/axios";
import { Passage } from "@passageidentity/passage-js";

const passage = new Passage(import.meta.env.VITE_VUE_APP_PASSAGE_APP_ID);