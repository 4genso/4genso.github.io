import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <main className="flex flex-col flex-1 text-center items-center justify-center">
        <h1 className="text-2xl">Sorry, an Error has occurred</h1>
        <h2 className="text-xl">{error}</h2>
      </main>
    </>
  );
}
export default ErrorPage;
