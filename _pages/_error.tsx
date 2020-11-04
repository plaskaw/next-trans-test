import { NextPageContext } from 'next';

function Error({ statusCode }: any) {
  return (
    <h1>{statusCode}</h1>
  );
}

//@ts-ignore
Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode }
}

export default Error;
