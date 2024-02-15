/* eslint-disable @next/next/no-page-custom-font */
import { FC } from "react";
import Head from "next/head";

import FavIcon from "../../assets/image/logoheader.png";

interface IProps {
  title: string;
  description?: string;
}

const Seo: FC<IProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="icon" type="image/png" sizes="32x18" href="/logoheader.ico" />
    </Head>
  );
};
export default Seo;
