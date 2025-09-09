import { useEffect } from "react";

const loadIntercomScript = (appId: string) => {
  const w = window as any;
  const d = document;
  if (typeof w.Intercom === "function") {
    w.Intercom("reattach_activator");
    w.Intercom("update", w.intercomSettings || {});
    return;
  }

  const i: any = function () {
    i.c(arguments);
  } as any;
  i.q = [];
  i.c = function (args: unknown) {
    i.q.push(args);
  };
  w.Intercom = i;

  const s = d.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = `https://widget.intercom.io/widget/${appId}`;
  const x = d.getElementsByTagName("script")[0];
  x.parentNode?.insertBefore(s, x);
};

const IntercomWidget = () => {
  useEffect(() => {
    const appId = import.meta.env.VITE_INTERCOM_APP_ID as string | undefined;
    if (!appId) return;

    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: appId,
    } as any;

    loadIntercomScript(appId);
  }, []);

  return null;
};

export default IntercomWidget;


