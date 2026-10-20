import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Site } from "./App";
import { getSeo, allRoutes, canonical, OG_IMAGE } from "./seo";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <Site />
    </StaticRouter>,
  );
}

export { getSeo, allRoutes, canonical, OG_IMAGE };
