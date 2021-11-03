import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Heading = styled.h1`
  margin-bottom: 3rem;
  font-size: var(--fz-heading);
  font-weight: bold;
`;

const Paraghraph = styled.p`
  margin-bottom: 2rem;
  font-size: var(--fz-xl);
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Footer = styled.footer`
  display: flex;
  padding: 2rem 0;
  border-top: 1px solid var(--light-gray);
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My home page</title>
        <meta name="description" content="my home page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Heading>My home page heading</Heading>
      </header>

      <main>
        <Paraghraph>my home page body</Paraghraph>
      </main>

      <Footer>
        <Link
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </Footer>
    </>
  );
};

export default Home;
