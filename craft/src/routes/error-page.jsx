import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Advance Backwards!</h1>
      <p>Return to whence you came from. </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}