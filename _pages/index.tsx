// @ts-ignore
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { I18n } from '../node_modules/next-translate';


const IndexPage = () => {
  const { t }:I18n = useTranslation();

  return (
    <>
      t('home:meta_title', {})
    </>
  )
};

export default IndexPage;
