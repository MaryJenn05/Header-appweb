import { createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: "es",
    messages: {
        es: {
            greet: "Hola mundo",

        },
        en:{
            greet: "Hello world",
        },
        pt:{
            greet: "Olá mundo",
        },
    },
});

export default i18n;