declare global {
  interface Window {
    Intercom: any;
    intercomSettings: {
      api_base: string;
      app_id: string;
    };
  }
}

export {};
