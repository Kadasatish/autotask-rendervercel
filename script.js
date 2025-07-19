async function fetchSMSLogs() {
  try {
    const response = await fetch("https://automate-render.onrender.com/logs");
    const data = await response.text();
    document.getElementById("smsBox").value = data;
  } catch (err) {
    document.getElementById("smsBox").value = "⚠️ Unable to fetch logs: " + err;
  }
}

// Initial fetch
fetchSMSLogs();

// Refresh every 5 seconds
setInterval(fetchSMSLogs, 5000);
