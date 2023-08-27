import useTranslation  from 'next-translate/useTranslation';

export const useTranslate = text => {
    const {t} = useTranslation("common")
    return t(text)
}