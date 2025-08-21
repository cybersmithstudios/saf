import { MessageCircle } from "lucide-react";
import { useEffect } from "react";

const FloatingIntercom = () => {
  useEffect(() => {
    // Initialize Intercom
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/YOUR_APP_ID';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
  }, []);

  const openIntercom = () => {
    if (window.Intercom) {
      window.Intercom('show');
    }
  };

  return (
    <button
      onClick={openIntercom}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
      aria-label="Open Intercom chat"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingIntercom;