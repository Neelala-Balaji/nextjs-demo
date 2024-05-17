import React from 'react';
import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations();
  return  <div>
    <h1>
      {t('Welcome_beta')}
    </h1>
</div>
};

export default AboutUs;


