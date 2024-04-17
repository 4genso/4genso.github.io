import { Helmet } from "react-helmet";

function NoMatch() {
  return (
    <>
      <Helmet>
        <title>Error | Justin's Portfolio</title>
      </Helmet>
      <main className="flex flex-col flex-1 text-center items-center justify-center">
        <h1 className="text-2xl">Sorry, this page does not exist</h1>
      </main>
    </>
  );
}

export default NoMatch;
