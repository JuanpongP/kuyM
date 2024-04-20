import PSPDFKit from "pspdfkit";
import { useEffect, useRef } from "react";

export default function ViewerComponent(props) {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;
    (async function () {
      PSPDFKit = await import("pspdfkit");
      // PSPDFKit.I18n.locales.push("em");
      // // Optional: Only for browsers that don't support the Intl API.
      // if (Intl.PluralRules.polyfilled) {
      //   // Include the plural rules locale data polyfill.
      //   await import("@formatjs/intl-pluralrules/polyfill");
      //   await import("@formatjs/intl-pluralrules/locale-data/en");
      // }
      // PSPDFKit.I18n.messages.em = {
      //   pen: "🖊"
      // };
      PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.
      await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        locale:"th",

        container,
        // The document to open.
        document: props.document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,

      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}