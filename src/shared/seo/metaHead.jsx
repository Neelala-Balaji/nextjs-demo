import Head from 'next/head';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';

const MetaHead = ({ titleKey, descriptionKey, customMeta = {} }) => {
  const t = useTranslations();

  const title = titleKey ? t(titleKey) : '';
  const description = descriptionKey ? t(descriptionKey) : '';

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {Object.keys(customMeta).map((key) => (
        <meta key={key} name={key} content={customMeta[key]} />
      ))}
    </Head>
  );
};

MetaHead.propTypes = {
  titleKey: PropTypes.string,
  descriptionKey: PropTypes.string,
  customMeta: PropTypes.object,
};

export default MetaHead;
