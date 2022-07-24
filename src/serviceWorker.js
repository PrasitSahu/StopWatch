const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js");
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
      } else if (registration.active) {
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

export default registerServiceWorker;
