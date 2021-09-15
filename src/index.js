import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "src/App.vue";
import fr from "src/i18n/fr";
import en from "src/i18n/en";

const i18n = createI18n({
  globalInjection: true,
  locale: "fr",
  messages: {
    fr,
    en,
  },
});

createApp(App).use(i18n).mount("#root");
