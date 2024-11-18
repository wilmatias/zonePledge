import { createI18n } from 'vue-i18n';

import en from '@/locale/en';
import zhTW from '@/locale/zhTW';
import ja from '@/locale/ja';
import vi from '@/locale/vi';
import ko from '@/locale/ko';
import zhCN from '@/locale/zhCN';
import th from '@/locale/th';
import de from '@/locale/de';
import fr from '@/locale/fr';
import es from '@/locale/es';
import ru from '@/locale/ru';
import pt from '@/locale/pt';
import be from '@/locale/be';

const messages = {
    en,
    zhTW,
    ja,
    vi,
    ko,
    zhCN,
    th,
    de,
    fr,
    es,
    ru,
    pt,
    be,
};

let currentLocale = 'en';

const storedUser = localStorage.getItem('user');
if (storedUser) {
    try {
        const user = JSON.parse(storedUser);
        if (user && user.locale) {
            currentLocale = user.locale;
        }
    } catch (e) {
        console.error('Failed to parse user data from localStorage', e);
    }
}

const i18n = createI18n({
    locale: currentLocale,
    fallbackLocale: 'en',
    messages,
    legacy: false,
});

export default i18n;
