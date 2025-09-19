/**
 * Logs or sends performance metrics from your React app.
 * @param {Function} onPerfEntry - Callback to handle each metric.
 */
const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry === "function") {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch((error) => {
      console.error("Failed to load web-vitals:", error);
    });
  }
};

// Optional default usage: log metrics to console
// reportWebVitals(console.log);

export default reportWebVitals;
