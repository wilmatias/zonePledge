import i18n from '@/services/i18n';

const { t } = i18n.global;

export const getTranslatedData = (data: any) => {
    if(data === 'No longer rely on graphics cards for mining! Ethereum 2.0 mining is online! join in'){
        return t('PublicNotification');
    }
}