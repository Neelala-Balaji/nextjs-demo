'use client';
 
import {useTranslations} from 'next-intl';
 
export default function Error({error, reset}) {
  const t = useTranslations();
 
  return (
    <div>
      <h1>{t('title')}</h1>
      <button onClick={reset}>{t('DataError')}</button>
    </div>
  );
}