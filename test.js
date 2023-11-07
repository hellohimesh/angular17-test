function sumIdleAndUsage(data) {
  let totalIdle = 0;
  let totalUsage = 0;

  for (let entry of data) {
    const idleParts = entry.idle.split(":");
    const usageParts = entry.usage.split(":");
    
    const idleSeconds = parseInt(idleParts[0]) * 3600 + parseInt(idleParts[1]) * 60 + parseInt(idleParts[2]);
    const usageSeconds = parseInt(usageParts[0]) * 3600 + parseInt(usageParts[1]) * 60 + parseInt(usageParts[2]);

    totalIdle += idleSeconds;
    totalUsage += usageSeconds;
  }

  // Convert the total seconds to hours, minutes, and seconds
  const totalIdleHours = Math.floor(totalIdle / 3600);
  const totalIdleMinutes = Math.floor((totalIdle % 3600) / 60);
  const totalIdleSeconds = totalIdle % 60;

  const totalUsageHours = Math.floor(totalUsage / 3600);
  const totalUsageMinutes = Math.floor((totalUsage % 3600) / 60);
  const totalUsageSeconds = totalUsage % 60;

  return {
    totalIdle: {
      hours: totalIdleHours,
      minutes: totalIdleMinutes,
      seconds: totalIdleSeconds
    },
    totalUsage: {
      hours: totalUsageHours,
      minutes: totalUsageMinutes,
      seconds: totalUsageSeconds
    }
  };
}

// Sample data
const data = [
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 10:18:41",
        "out": "2023-11-06 10:18:51",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "discord",
        "windowName": "@Vivek Malvi",
        "in": "2023-11-06 10:18:51",
        "out": "2023-11-06 10:19:01",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 10:19:01",
        "out": "2023-11-06 10:19:11",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "goral.html",
        "in": "2023-11-06 10:19:11",
        "out": "2023-11-06 10:20:21",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 10:20:21",
        "out": "2023-11-06 10:22:31",
        "idle": "00:00:00",
        "usage": "00:02:10"
    },
    {
        "appName": "xdg-desktop-portal-gnome",
        "windowName": "All Files",
        "in": "2023-11-06 10:22:31",
        "out": "2023-11-06 10:22:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "doctor logo plus sign in blue colour",
        "in": "2023-11-06 10:22:41",
        "out": "2023-11-06 10:24:11",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "xdg-desktop-portal-gnome",
        "windowName": "All Files",
        "in": "2023-11-06 10:24:11",
        "out": "2023-11-06 10:24:21",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "doctor photo",
        "in": "2023-11-06 10:24:21",
        "out": "2023-11-06 10:25:31",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "xdg-desktop-portal-gnome",
        "windowName": "All Files",
        "in": "2023-11-06 10:25:31",
        "out": "2023-11-06 10:25:51",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 10:25:51",
        "out": "2023-11-06 10:26:01",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:26:01",
        "out": "2023-11-06 10:26:31",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 10:26:31",
        "out": "2023-11-06 10:27:01",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:27:01",
        "out": "2023-11-06 10:27:21",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:27:21",
        "out": "2023-11-06 10:27:41",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:27:41",
        "out": "2023-11-06 10:28:31",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:28:31",
        "out": "2023-11-06 10:28:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:28:41",
        "out": "2023-11-06 10:29:11",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 10:29:11",
        "out": "2023-11-06 10:29:51",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:29:51",
        "out": "2023-11-06 10:30:21",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:30:21",
        "out": "2023-11-06 10:30:31",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:30:31",
        "out": "2023-11-06 10:31:01",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:31:01",
        "out": "2023-11-06 10:31:11",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:31:11",
        "out": "2023-11-06 10:31:31",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:31:31",
        "out": "2023-11-06 10:32:51",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:32:51",
        "out": "2023-11-06 10:33:31",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:33:31",
        "out": "2023-11-06 10:33:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:33:41",
        "out": "2023-11-06 10:33:51",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:33:51",
        "out": "2023-11-06 10:34:01",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:34:01",
        "out": "2023-11-06 10:34:31",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:34:31",
        "out": "2023-11-06 10:36:12",
        "idle": "00:00:00",
        "usage": "00:01:41"
    },
    {
        "appName": "Gnome-system-monitor",
        "windowName": "System Monitor",
        "in": "2023-11-06 10:36:12",
        "out": "2023-11-06 10:36:22",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:36:22",
        "out": "2023-11-06 10:37:02",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 10:37:02",
        "out": "2023-11-06 10:37:52",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 10:37:52",
        "out": "2023-11-06 10:38:02",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Gmail",
        "in": "2023-11-06 10:38:02",
        "out": "2023-11-06 10:38:22",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:38:22",
        "out": "2023-11-06 10:38:34",
        "idle": "00:00:00",
        "usage": "00:00:12"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:38:34",
        "out": "2023-11-06 10:38:52",
        "idle": "00:00:00",
        "usage": "00:00:18"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:38:52",
        "out": "2023-11-06 10:39:02",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 10:39:02",
        "out": "2023-11-06 10:39:22",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 10:39:22",
        "out": "2023-11-06 10:39:32",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:39:32",
        "out": "2023-11-06 10:40:12",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:40:12",
        "out": "2023-11-06 10:40:22",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:40:22",
        "out": "2023-11-06 10:41:12",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 10:41:12",
        "out": "2023-11-06 10:41:22",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:41:22",
        "out": "2023-11-06 10:41:42",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 10:41:42",
        "out": "2023-11-06 10:43:22",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:43:22",
        "out": "2023-11-06 10:43:32",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 10:43:32",
        "out": "2023-11-06 10:44:32",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 10:44:32",
        "out": "2023-11-06 10:44:42",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 10:44:42",
        "out": "2023-11-06 10:45:22",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "discord",
        "windowName": "@Vivek Malvi",
        "in": "2023-11-06 10:45:22",
        "out": "2023-11-06 10:45:42",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 10:45:42",
        "out": "2023-11-06 10:45:52",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 10:45:52",
        "out": "2023-11-06 10:46:12",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:46:12",
        "out": "2023-11-06 10:46:22",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 10:46:22",
        "out": "2023-11-06 10:46:32",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:46:32",
        "out": "2023-11-06 10:46:42",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 10:46:42",
        "out": "2023-11-06 10:47:12",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:47:12",
        "out": "2023-11-06 10:47:32",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 10:47:32",
        "out": "2023-11-06 10:47:42",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:47:42",
        "out": "2023-11-06 10:48:42",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 10:48:42",
        "out": "2023-11-06 10:51:02",
        "idle": "00:00:00",
        "usage": "00:02:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:51:02",
        "out": "2023-11-06 10:51:42",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 10:51:42",
        "out": "2023-11-06 10:51:52",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:51:52",
        "out": "2023-11-06 10:52:02",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 10:52:02",
        "out": "2023-11-06 10:52:22",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:52:22",
        "out": "2023-11-06 10:54:12",
        "idle": "00:00:00",
        "usage": "00:01:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "docter images",
        "in": "2023-11-06 10:54:12",
        "out": "2023-11-06 10:54:42",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:54:42",
        "out": "2023-11-06 10:54:52",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 10:54:52",
        "out": "2023-11-06 10:55:02",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:55:02",
        "out": "2023-11-06 10:55:12",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 10:55:12",
        "out": "2023-11-06 10:55:22",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:55:22",
        "out": "2023-11-06 10:55:52",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "doctor images",
        "in": "2023-11-06 10:55:52",
        "out": "2023-11-06 10:56:02",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:56:02",
        "out": "2023-11-06 10:56:12",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "doctor images",
        "in": "2023-11-06 10:56:12",
        "out": "2023-11-06 10:56:24",
        "idle": "00:00:00",
        "usage": "00:00:12"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:56:24",
        "out": "2023-11-06 10:56:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 10:56:34",
        "out": "2023-11-06 10:56:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:56:44",
        "out": "2023-11-06 10:56:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 10:56:54",
        "out": "2023-11-06 10:57:44",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:57:44",
        "out": "2023-11-06 10:57:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HTML Background Images",
        "in": "2023-11-06 10:57:54",
        "out": "2023-11-06 10:58:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:58:04",
        "out": "2023-11-06 10:58:34",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Org.gnome.Nautilus",
        "windowName": "var",
        "in": "2023-11-06 10:58:34",
        "out": "2023-11-06 10:58:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:58:44",
        "out": "2023-11-06 10:58:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 10:58:54",
        "out": "2023-11-06 10:59:34",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 10:59:34",
        "out": "2023-11-06 10:59:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "doctor jpg image",
        "in": "2023-11-06 10:59:44",
        "out": "2023-11-06 11:00:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:00:04",
        "out": "2023-11-06 11:00:24",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "set background image in html",
        "in": "2023-11-06 11:00:24",
        "out": "2023-11-06 11:01:34",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:01:34",
        "out": "2023-11-06 11:01:54",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "how to insert a background image in HTML?",
        "in": "2023-11-06 11:01:54",
        "out": "2023-11-06 11:02:44",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:02:44",
        "out": "2023-11-06 11:03:24",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 11:03:24",
        "out": "2023-11-06 11:05:14",
        "idle": "00:00:00",
        "usage": "00:01:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:05:14",
        "out": "2023-11-06 11:05:44",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 11:05:44",
        "out": "2023-11-06 11:06:34",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:06:34",
        "out": "2023-11-06 11:07:34",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "set variable in html",
        "in": "2023-11-06 11:07:34",
        "out": "2023-11-06 11:07:54",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:07:54",
        "out": "2023-11-06 11:08:34",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:08:34",
        "out": "2023-11-06 11:09:24",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:09:24",
        "out": "2023-11-06 11:09:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Doctor Images",
        "in": "2023-11-06 11:09:34",
        "out": "2023-11-06 11:14:34",
        "idle": "00:00:00",
        "usage": "00:05:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:14:34",
        "out": "2023-11-06 11:14:54",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "How to Add an Image & Background Image in HTML",
        "in": "2023-11-06 11:14:54",
        "out": "2023-11-06 11:15:14",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:15:14",
        "out": "2023-11-06 11:15:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "How to Add an Image & Background Image in HTML",
        "in": "2023-11-06 11:15:24",
        "out": "2023-11-06 11:15:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:15:34",
        "out": "2023-11-06 11:16:04",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "How to Add Background Image in HTML [Step-by-Step]",
        "in": "2023-11-06 11:16:04",
        "out": "2023-11-06 11:17:14",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:17:14",
        "out": "2023-11-06 11:18:04",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3Schools Tryit Editor",
        "in": "2023-11-06 11:18:04",
        "out": "2023-11-06 11:18:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:18:14",
        "out": "2023-11-06 11:18:44",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:18:44",
        "out": "2023-11-06 11:19:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:19:04",
        "out": "2023-11-06 11:19:24",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:19:24",
        "out": "2023-11-06 11:19:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:19:34",
        "out": "2023-11-06 11:20:04",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:20:04",
        "out": "2023-11-06 11:21:04",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:21:04",
        "out": "2023-11-06 11:21:34",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:21:34",
        "out": "2023-11-06 11:21:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:21:44",
        "out": "2023-11-06 11:22:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:22:04",
        "out": "2023-11-06 11:22:24",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:22:24",
        "out": "2023-11-06 11:22:44",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:22:44",
        "out": "2023-11-06 11:23:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:23:04",
        "out": "2023-11-06 11:23:24",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:23:24",
        "out": "2023-11-06 11:23:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:23:34",
        "out": "2023-11-06 11:23:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:23:44",
        "out": "2023-11-06 11:24:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:24:04",
        "out": "2023-11-06 11:24:24",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:24:24",
        "out": "2023-11-06 11:24:54",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:24:54",
        "out": "2023-11-06 11:25:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 11:25:04",
        "out": "2023-11-06 11:25:34",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:25:34",
        "out": "2023-11-06 11:25:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:25:44",
        "out": "2023-11-06 11:26:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:26:04",
        "out": "2023-11-06 11:26:44",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:26:44",
        "out": "2023-11-06 11:26:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:26:54",
        "out": "2023-11-06 11:28:14",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:28:14",
        "out": "2023-11-06 11:28:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:28:24",
        "out": "2023-11-06 11:28:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:28:34",
        "out": "2023-11-06 11:28:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:28:44",
        "out": "2023-11-06 11:28:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:28:54",
        "out": "2023-11-06 11:29:24",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:29:24",
        "out": "2023-11-06 11:30:14",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 11:30:14",
        "out": "2023-11-06 11:30:44",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:30:44",
        "out": "2023-11-06 11:30:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:30:54",
        "out": "2023-11-06 11:31:14",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:31:14",
        "out": "2023-11-06 11:31:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:31:24",
        "out": "2023-11-06 11:31:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:31:34",
        "out": "2023-11-06 11:31:54",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:31:54",
        "out": "2023-11-06 11:32:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:32:04",
        "out": "2023-11-06 11:33:04",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:33:04",
        "out": "2023-11-06 11:33:54",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:33:54",
        "out": "2023-11-06 11:34:24",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 11:34:24",
        "out": "2023-11-06 11:34:44",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:34:44",
        "out": "2023-11-06 11:35:44",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 11:35:44",
        "out": "2023-11-06 11:36:54",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:36:54",
        "out": "2023-11-06 11:38:04",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:38:04",
        "out": "2023-11-06 11:39:04",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:39:04",
        "out": "2023-11-06 11:40:04",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:40:04",
        "out": "2023-11-06 11:40:24",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:40:24",
        "out": "2023-11-06 11:40:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:40:34",
        "out": "2023-11-06 11:41:14",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:41:14",
        "out": "2023-11-06 11:42:04",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:42:04",
        "out": "2023-11-06 11:42:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:42:14",
        "out": "2023-11-06 11:42:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:42:24",
        "out": "2023-11-06 11:43:04",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:43:04",
        "out": "2023-11-06 11:43:54",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:43:54",
        "out": "2023-11-06 11:44:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:44:04",
        "out": "2023-11-06 11:44:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:44:14",
        "out": "2023-11-06 11:44:54",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:44:54",
        "out": "2023-11-06 11:45:44",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:45:44",
        "out": "2023-11-06 11:45:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:45:54",
        "out": "2023-11-06 11:46:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 11:46:04",
        "out": "2023-11-06 11:47:44",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 11:47:44",
        "out": "2023-11-06 11:48:24",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 11:48:24",
        "out": "2023-11-06 11:48:44",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:48:44",
        "out": "2023-11-06 11:49:14",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:49:14",
        "out": "2023-11-06 11:49:34",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:49:34",
        "out": "2023-11-06 11:49:54",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3Schools Tryit Editor",
        "in": "2023-11-06 11:49:54",
        "out": "2023-11-06 11:51:14",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:51:14",
        "out": "2023-11-06 11:51:44",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:51:44",
        "out": "2023-11-06 11:52:14",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:52:14",
        "out": "2023-11-06 11:52:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 11:52:24",
        "out": "2023-11-06 11:52:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:52:34",
        "out": "2023-11-06 11:53:24",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 11:53:24",
        "out": "2023-11-06 11:53:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:53:34",
        "out": "2023-11-06 11:53:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 11:53:44",
        "out": "2023-11-06 11:54:34",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "xdg-desktop-portal-gnome",
        "windowName": "All Files",
        "in": "2023-11-06 11:54:34",
        "out": "2023-11-06 11:54:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "background image for doctor website",
        "in": "2023-11-06 11:54:44",
        "out": "2023-11-06 11:54:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "xdg-desktop-portal-gnome",
        "windowName": "All Files",
        "in": "2023-11-06 11:54:54",
        "out": "2023-11-06 11:55:14",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:55:14",
        "out": "2023-11-06 11:55:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Org.gnome.Nautilus",
        "windowName": "html",
        "in": "2023-11-06 11:55:24",
        "out": "2023-11-06 11:55:54",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 11:55:54",
        "out": "2023-11-06 11:57:15",
        "idle": "00:00:00",
        "usage": "00:01:21"
    },
    {
        "appName": "Google-chrome",
        "windowName": "localhost",
        "in": "2023-11-06 11:57:15",
        "out": "2023-11-06 11:59:34",
        "idle": "00:01:00",
        "usage": "00:01:19"
    },
    {
        "appName": "Google-chrome",
        "windowName": "wisdom-cico-admin/.github/workflows/wisdom-cico-admin.yml at dev/ralph-cico · RaoInfotech/wisdom-cico-admin",
        "in": "2023-11-06 11:59:34",
        "out": "2023-11-06 12:00:54",
        "idle": "00:01:10",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "wisdom-cico-admin/.github/workflows/wisdom-cico-admin.yml at dev/ralph-cico · RaoInfotech/wisdom-cico-admin",
        "in": "2023-11-06 12:00:54",
        "out": "2023-11-06 12:01:54",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "wisdom-cico-admin/.github/workflows/wisdom-cico-admin.yml at dev/ralph-cico · RaoInfotech/wisdom-cico-admin",
        "in": "2023-11-06 12:01:54",
        "out": "2023-11-06 12:03:04",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "discord",
        "windowName": "@vivekbharda",
        "in": "2023-11-06 12:03:04",
        "out": "2023-11-06 12:03:24",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 12:03:24",
        "out": "2023-11-06 12:04:14",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "wisdom-cico-admin/.github/workflows/wisdom-cico-admin.yml at dev/ralph-cico · RaoInfotech/wisdom-cico-admin",
        "in": "2023-11-06 12:04:14",
        "out": "2023-11-06 12:04:54",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 12:04:54",
        "out": "2023-11-06 12:05:14",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:05:14",
        "out": "2023-11-06 12:06:54",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:06:54",
        "out": "2023-11-06 12:07:14",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:07:14",
        "out": "2023-11-06 12:07:34",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "background image for doctor website",
        "in": "2023-11-06 12:07:34",
        "out": "2023-11-06 12:09:04",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:09:04",
        "out": "2023-11-06 12:09:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:09:14",
        "out": "2023-11-06 12:09:44",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:09:44",
        "out": "2023-11-06 12:10:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:10:04",
        "out": "2023-11-06 12:10:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:10:14",
        "out": "2023-11-06 12:10:54",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:10:54",
        "out": "2023-11-06 12:11:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:11:04",
        "out": "2023-11-06 12:11:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:11:14",
        "out": "2023-11-06 12:11:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:11:24",
        "out": "2023-11-06 12:11:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:11:34",
        "out": "2023-11-06 12:11:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:11:44",
        "out": "2023-11-06 12:13:04",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:13:04",
        "out": "2023-11-06 12:13:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:13:14",
        "out": "2023-11-06 12:13:34",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:13:34",
        "out": "2023-11-06 12:13:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:13:44",
        "out": "2023-11-06 12:14:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:14:04",
        "out": "2023-11-06 12:14:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:14:14",
        "out": "2023-11-06 12:17:34",
        "idle": "00:01:10",
        "usage": "00:03:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 12:17:34",
        "out": "2023-11-06 12:17:54",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:17:54",
        "out": "2023-11-06 12:18:44",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:18:44",
        "out": "2023-11-06 12:18:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:18:54",
        "out": "2023-11-06 12:19:14",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:19:14",
        "out": "2023-11-06 12:19:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:19:24",
        "out": "2023-11-06 12:19:44",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:19:44",
        "out": "2023-11-06 12:20:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:20:04",
        "out": "2023-11-06 12:21:34",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 12:21:34",
        "out": "2023-11-06 12:21:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:21:44",
        "out": "2023-11-06 12:22:54",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:22:54",
        "out": "2023-11-06 12:24:44",
        "idle": "00:00:00",
        "usage": "00:01:50"
    },
    {
        "appName": "Gnome-terminal",
        "windowName": "goral@goral: ~/Rao",
        "in": "2023-11-06 12:24:44",
        "out": "2023-11-06 12:25:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:25:04",
        "out": "2023-11-06 12:25:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Org.gnome.Nautilus",
        "windowName": "html",
        "in": "2023-11-06 12:25:14",
        "out": "2023-11-06 12:25:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:25:24",
        "out": "2023-11-06 12:25:44",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Gnome-terminal",
        "windowName": "goral@goral: ~/Rao/Practice/coding",
        "in": "2023-11-06 12:25:44",
        "out": "2023-11-06 12:26:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 12:26:04",
        "out": "2023-11-06 12:26:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:26:14",
        "out": "2023-11-06 12:26:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "logo examples",
        "in": "2023-11-06 12:26:24",
        "out": "2023-11-06 12:29:04",
        "idle": "00:00:00",
        "usage": "00:02:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:29:04",
        "out": "2023-11-06 12:29:24",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "discord",
        "windowName": "@Rinku Khambhayata",
        "in": "2023-11-06 12:29:24",
        "out": "2023-11-06 12:29:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Gnome-terminal",
        "windowName": "goral@goral: ~",
        "in": "2023-11-06 12:29:34",
        "out": "2023-11-06 12:29:54",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "discord",
        "windowName": "@Vivek Malvi",
        "in": "2023-11-06 12:29:54",
        "out": "2023-11-06 12:30:44",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:30:44",
        "out": "2023-11-06 12:30:54",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:30:54",
        "out": "2023-11-06 12:31:54",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "(3) This Mantra Helped Me Remove All Obstacles Ganesha Maha Mantra (Vakratunda Mahakaya) (3hours)",
        "in": "2023-11-06 12:31:54",
        "out": "2023-11-06 12:32:34",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "xdg-desktop-portal-gnome",
        "windowName": "All Files",
        "in": "2023-11-06 12:32:34",
        "out": "2023-11-06 12:32:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "logo.png for doctor",
        "in": "2023-11-06 12:32:44",
        "out": "2023-11-06 12:34:14",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "xdg-desktop-portal-gnome",
        "windowName": "All Files",
        "in": "2023-11-06 12:34:14",
        "out": "2023-11-06 12:34:34",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:34:34",
        "out": "2023-11-06 12:34:54",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:34:54",
        "out": "2023-11-06 12:35:54",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 12:35:54",
        "out": "2023-11-06 12:36:35",
        "idle": "00:00:00",
        "usage": "00:00:41"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:36:35",
        "out": "2023-11-06 12:36:54",
        "idle": "00:00:00",
        "usage": "00:00:19"
    },
    {
        "appName": "Google-chrome",
        "windowName": "How To Position Text Over an Image",
        "in": "2023-11-06 12:36:54",
        "out": "2023-11-06 12:37:24",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:37:24",
        "out": "2023-11-06 12:37:54",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:37:54",
        "out": "2023-11-06 12:38:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:38:04",
        "out": "2023-11-06 12:38:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "How To Position Text Over an Image",
        "in": "2023-11-06 12:38:14",
        "out": "2023-11-06 12:38:34",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:38:34",
        "out": "2023-11-06 12:41:34",
        "idle": "00:00:00",
        "usage": "00:03:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 12:41:34",
        "out": "2023-11-06 12:43:04",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:43:04",
        "out": "2023-11-06 12:44:34",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "CSS Rounded Corners",
        "in": "2023-11-06 12:44:34",
        "out": "2023-11-06 12:45:34",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:45:34",
        "out": "2023-11-06 12:45:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 12:45:44",
        "out": "2023-11-06 12:46:04",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:46:04",
        "out": "2023-11-06 12:46:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 12:46:14",
        "out": "2023-11-06 12:46:34",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:46:34",
        "out": "2023-11-06 12:47:04",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:47:04",
        "out": "2023-11-06 12:47:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:47:14",
        "out": "2023-11-06 12:47:54",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:47:54",
        "out": "2023-11-06 12:48:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:48:04",
        "out": "2023-11-06 12:49:24",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:49:24",
        "out": "2023-11-06 12:50:24",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:50:24",
        "out": "2023-11-06 12:50:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 12:50:34",
        "out": "2023-11-06 12:50:54",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:50:54",
        "out": "2023-11-06 12:51:24",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:51:24",
        "out": "2023-11-06 12:51:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:51:34",
        "out": "2023-11-06 12:52:14",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:52:14",
        "out": "2023-11-06 12:52:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:52:24",
        "out": "2023-11-06 12:53:24",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:53:24",
        "out": "2023-11-06 12:53:44",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:53:44",
        "out": "2023-11-06 12:55:34",
        "idle": "00:00:00",
        "usage": "00:01:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 12:55:34",
        "out": "2023-11-06 12:55:44",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:55:44",
        "out": "2023-11-06 12:57:14",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:57:14",
        "out": "2023-11-06 12:57:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:57:24",
        "out": "2023-11-06 12:57:54",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:57:54",
        "out": "2023-11-06 12:58:14",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 12:58:14",
        "out": "2023-11-06 12:59:44",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 12:59:44",
        "out": "2023-11-06 13:00:14",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:00:14",
        "out": "2023-11-06 13:01:54",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:01:54",
        "out": "2023-11-06 13:02:14",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:02:14",
        "out": "2023-11-06 13:02:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:02:24",
        "out": "2023-11-06 13:02:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:02:34",
        "out": "2023-11-06 13:04:04",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:04:04",
        "out": "2023-11-06 13:04:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:04:14",
        "out": "2023-11-06 13:06:24",
        "idle": "00:00:00",
        "usage": "00:02:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 13:06:24",
        "out": "2023-11-06 13:07:04",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:07:04",
        "out": "2023-11-06 13:07:54",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 13:07:54",
        "out": "2023-11-06 13:08:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:08:04",
        "out": "2023-11-06 13:08:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:08:14",
        "out": "2023-11-06 13:08:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:08:24",
        "out": "2023-11-06 13:08:54",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:08:54",
        "out": "2023-11-06 13:09:05",
        "idle": "00:00:00",
        "usage": "00:00:11"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:09:05",
        "out": "2023-11-06 13:09:24",
        "idle": "00:00:00",
        "usage": "00:00:19"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:09:24",
        "out": "2023-11-06 13:09:54",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:09:54",
        "out": "2023-11-06 13:10:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:10:04",
        "out": "2023-11-06 13:10:14",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:10:14",
        "out": "2023-11-06 13:10:54",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 13:10:54",
        "out": "2023-11-06 13:11:04",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:11:04",
        "out": "2023-11-06 13:11:54",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3.CSS Containers",
        "in": "2023-11-06 13:11:54",
        "out": "2023-11-06 13:12:14",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:12:14",
        "out": "2023-11-06 13:12:24",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:12:24",
        "out": "2023-11-06 13:12:34",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:12:34",
        "out": "2023-11-06 13:13:57",
        "idle": "00:00:00",
        "usage": "00:01:23"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Learn Basic CSS by Building a Cafe Menu: Step 91 | freeCodeCamp.org",
        "in": "2023-11-06 13:13:57",
        "out": "2023-11-06 13:14:17",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:14:17",
        "out": "2023-11-06 13:14:47",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:14:47",
        "out": "2023-11-06 13:14:57",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:14:57",
        "out": "2023-11-06 13:15:57",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:15:57",
        "out": "2023-11-06 13:16:17",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:16:17",
        "out": "2023-11-06 13:16:47",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:16:47",
        "out": "2023-11-06 13:16:57",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:16:57",
        "out": "2023-11-06 13:17:17",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:17:17",
        "out": "2023-11-06 13:17:27",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:17:27",
        "out": "2023-11-06 13:17:57",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:17:57",
        "out": "2023-11-06 13:18:27",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 13:18:27",
        "out": "2023-11-06 13:18:37",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:18:37",
        "out": "2023-11-06 13:19:07",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:19:07",
        "out": "2023-11-06 13:19:17",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:19:17",
        "out": "2023-11-06 13:20:47",
        "idle": "00:01:10",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:20:47",
        "out": "2023-11-06 13:21:37",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:21:37",
        "out": "2023-11-06 13:22:17",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:22:17",
        "out": "2023-11-06 13:23:17",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:23:17",
        "out": "2023-11-06 13:23:27",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:23:27",
        "out": "2023-11-06 13:23:47",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:23:47",
        "out": "2023-11-06 13:23:57",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:23:57",
        "out": "2023-11-06 13:24:27",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 13:24:27",
        "out": "2023-11-06 13:24:57",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:24:57",
        "out": "2023-11-06 13:27:37",
        "idle": "00:00:00",
        "usage": "00:02:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:27:37",
        "out": "2023-11-06 13:27:47",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:27:47",
        "out": "2023-11-06 13:28:27",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:28:27",
        "out": "2023-11-06 13:28:37",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:28:37",
        "out": "2023-11-06 13:29:17",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:29:17",
        "out": "2023-11-06 13:29:27",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:29:27",
        "out": "2023-11-06 13:29:37",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:29:37",
        "out": "2023-11-06 13:29:57",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:29:57",
        "out": "2023-11-06 13:31:17",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "CSS border-radius property",
        "in": "2023-11-06 13:31:17",
        "out": "2023-11-06 13:32:07",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:32:07",
        "out": "2023-11-06 13:32:37",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:32:37",
        "out": "2023-11-06 13:32:47",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:32:47",
        "out": "2023-11-06 13:33:17",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:33:17",
        "out": "2023-11-06 13:33:27",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:33:27",
        "out": "2023-11-06 13:33:37",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:33:37",
        "out": "2023-11-06 13:33:47",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:33:47",
        "out": "2023-11-06 13:34:07",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 13:34:07",
        "out": "2023-11-06 13:34:27",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:34:27",
        "out": "2023-11-06 13:34:47",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:34:47",
        "out": "2023-11-06 13:35:07",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:35:07",
        "out": "2023-11-06 13:39:09",
        "idle": "00:01:10",
        "usage": "00:04:02"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:39:09",
        "out": "2023-11-06 13:39:19",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:39:19",
        "out": "2023-11-06 13:40:29",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3Schools Tryit Editor",
        "in": "2023-11-06 13:40:29",
        "out": "2023-11-06 13:41:59",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:41:59",
        "out": "2023-11-06 13:42:09",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:42:09",
        "out": "2023-11-06 13:42:49",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:42:49",
        "out": "2023-11-06 13:42:59",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:42:59",
        "out": "2023-11-06 13:43:09",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:43:09",
        "out": "2023-11-06 13:43:29",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:43:29",
        "out": "2023-11-06 13:43:39",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:43:39",
        "out": "2023-11-06 13:44:09",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:44:09",
        "out": "2023-11-06 13:44:19",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:44:19",
        "out": "2023-11-06 13:45:09",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "html",
        "in": "2023-11-06 13:45:09",
        "out": "2023-11-06 13:45:19",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:45:19",
        "out": "2023-11-06 13:45:49",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:45:49",
        "out": "2023-11-06 13:45:59",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:45:59",
        "out": "2023-11-06 13:46:29",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:46:29",
        "out": "2023-11-06 13:46:39",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:46:39",
        "out": "2023-11-06 13:47:09",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:47:09",
        "out": "2023-11-06 13:47:59",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:47:59",
        "out": "2023-11-06 13:48:19",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:48:19",
        "out": "2023-11-06 13:48:39",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "discord",
        "windowName": "@Vivek Malvi",
        "in": "2023-11-06 13:48:39",
        "out": "2023-11-06 13:48:44",
        "idle": "00:00:00",
        "usage": "00:00:05"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:49:19",
        "out": "2023-11-06 13:49:39",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 13:49:39",
        "out": "2023-11-06 13:49:59",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 13:49:59",
        "out": "2023-11-06 13:51:03",
        "idle": "00:00:00",
        "usage": "00:01:04"
    },
    {
        "appName": "discord",
        "windowName": "@dhaval_dashadia",
        "in": "2023-11-06 14:27:00",
        "out": "2023-11-06 14:27:20",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:27:20",
        "out": "2023-11-06 14:27:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:27:30",
        "out": "2023-11-06 14:27:50",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:27:50",
        "out": "2023-11-06 14:29:00",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "discord",
        "windowName": "@dhaval_dashadia",
        "in": "2023-11-06 14:29:00",
        "out": "2023-11-06 14:29:40",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:29:40",
        "out": "2023-11-06 14:30:00",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "discord",
        "windowName": "@dhaval_dashadia",
        "in": "2023-11-06 14:30:00",
        "out": "2023-11-06 14:30:30",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:30:30",
        "out": "2023-11-06 14:32:50",
        "idle": "00:00:00",
        "usage": "00:02:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:32:50",
        "out": "2023-11-06 14:33:10",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Gnome-terminal",
        "windowName": "goral@goral: ~",
        "in": "2023-11-06 14:33:10",
        "out": "2023-11-06 14:33:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 14:33:20",
        "out": "2023-11-06 14:33:50",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:33:50",
        "out": "2023-11-06 14:37:10",
        "idle": "00:01:10",
        "usage": "00:03:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:37:10",
        "out": "2023-11-06 14:37:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:37:20",
        "out": "2023-11-06 14:37:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:37:30",
        "out": "2023-11-06 14:37:50",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:37:50",
        "out": "2023-11-06 14:39:00",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:39:00",
        "out": "2023-11-06 14:39:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:39:10",
        "out": "2023-11-06 14:39:30",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:39:30",
        "out": "2023-11-06 14:40:00",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:40:00",
        "out": "2023-11-06 14:40:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:40:10",
        "out": "2023-11-06 14:40:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:40:20",
        "out": "2023-11-06 14:41:20",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:41:20",
        "out": "2023-11-06 14:41:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:41:30",
        "out": "2023-11-06 14:41:50",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:41:50",
        "out": "2023-11-06 14:42:10",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:42:10",
        "out": "2023-11-06 14:42:50",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:42:50",
        "out": "2023-11-06 14:43:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:43:00",
        "out": "2023-11-06 14:44:00",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:44:00",
        "out": "2023-11-06 14:44:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:44:10",
        "out": "2023-11-06 14:45:50",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:45:50",
        "out": "2023-11-06 14:46:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:46:00",
        "out": "2023-11-06 14:47:30",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:47:30",
        "out": "2023-11-06 14:48:10",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:48:10",
        "out": "2023-11-06 14:48:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3Schools Tryit Editor",
        "in": "2023-11-06 14:48:20",
        "out": "2023-11-06 14:49:30",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:49:30",
        "out": "2023-11-06 14:49:50",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:50:00",
        "out": "2023-11-06 14:50:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Gnome-terminal",
        "windowName": "Terminal",
        "in": "2023-11-06 14:50:10",
        "out": "2023-11-06 14:50:40",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 14:50:40",
        "out": "2023-11-06 14:50:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:50:50",
        "out": "2023-11-06 14:52:00",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:52:00",
        "out": "2023-11-06 14:52:20",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:52:20",
        "out": "2023-11-06 14:53:00",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:53:00",
        "out": "2023-11-06 14:55:40",
        "idle": "00:00:00",
        "usage": "00:02:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:55:40",
        "out": "2023-11-06 14:55:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:55:50",
        "out": "2023-11-06 14:56:20",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:56:20",
        "out": "2023-11-06 14:56:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:56:30",
        "out": "2023-11-06 14:57:10",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:57:10",
        "out": "2023-11-06 14:57:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:57:20",
        "out": "2023-11-06 14:58:40",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 14:58:40",
        "out": "2023-11-06 14:58:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 14:58:50",
        "out": "2023-11-06 14:59:30",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 14:59:30",
        "out": "2023-11-06 15:00:30",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:00:30",
        "out": "2023-11-06 15:00:50",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:00:50",
        "out": "2023-11-06 15:01:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:01:00",
        "out": "2023-11-06 15:01:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "(3) CHOR BAZARI",
        "in": "2023-11-06 15:01:10",
        "out": "2023-11-06 15:01:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 15:01:20",
        "out": "2023-11-06 15:01:50",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 15:01:50",
        "out": "2023-11-06 15:02:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:02:00",
        "out": "2023-11-06 15:02:40",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:02:40",
        "out": "2023-11-06 15:02:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:02:50",
        "out": "2023-11-06 15:03:10",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:03:10",
        "out": "2023-11-06 15:03:40",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:03:40",
        "out": "2023-11-06 15:03:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:03:50",
        "out": "2023-11-06 15:04:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:04:00",
        "out": "2023-11-06 15:04:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:04:10",
        "out": "2023-11-06 15:04:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:04:20",
        "out": "2023-11-06 15:04:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:04:30",
        "out": "2023-11-06 15:04:40",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:04:40",
        "out": "2023-11-06 15:05:00",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:05:00",
        "out": "2023-11-06 15:05:20",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:05:20",
        "out": "2023-11-06 15:06:20",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:06:20",
        "out": "2023-11-06 15:06:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:06:30",
        "out": "2023-11-06 15:09:30",
        "idle": "00:00:00",
        "usage": "00:03:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:09:30",
        "out": "2023-11-06 15:09:40",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:09:40",
        "out": "2023-11-06 15:11:00",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:11:00",
        "out": "2023-11-06 15:11:20",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:11:20",
        "out": "2023-11-06 15:13:30",
        "idle": "00:00:00",
        "usage": "00:02:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:13:30",
        "out": "2023-11-06 15:13:40",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:13:40",
        "out": "2023-11-06 15:13:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:13:50",
        "out": "2023-11-06 15:14:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:14:00",
        "out": "2023-11-06 15:14:20",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:14:20",
        "out": "2023-11-06 15:14:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:14:30",
        "out": "2023-11-06 15:14:50",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:14:50",
        "out": "2023-11-06 15:15:11",
        "idle": "00:00:00",
        "usage": "00:00:21"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:15:11",
        "out": "2023-11-06 15:15:20",
        "idle": "00:00:00",
        "usage": "00:00:09"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:15:20",
        "out": "2023-11-06 15:15:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:15:30",
        "out": "2023-11-06 15:15:40",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:15:40",
        "out": "2023-11-06 15:15:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:15:50",
        "out": "2023-11-06 15:16:10",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:16:10",
        "out": "2023-11-06 15:16:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:16:20",
        "out": "2023-11-06 15:17:00",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 15:17:00",
        "out": "2023-11-06 15:17:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:17:10",
        "out": "2023-11-06 15:17:50",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:17:50",
        "out": "2023-11-06 15:18:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:18:00",
        "out": "2023-11-06 15:18:40",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:18:40",
        "out": "2023-11-06 15:18:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:18:50",
        "out": "2023-11-06 15:19:30",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:19:30",
        "out": "2023-11-06 15:19:40",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:20:00",
        "out": "2023-11-06 15:21:10",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:21:10",
        "out": "2023-11-06 15:21:50",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 15:21:50",
        "out": "2023-11-06 15:22:10",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:22:10",
        "out": "2023-11-06 15:23:50",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 15:23:50",
        "out": "2023-11-06 15:24:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:25:00",
        "out": "2023-11-06 15:25:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:25:10",
        "out": "2023-11-06 15:27:50",
        "idle": "00:00:00",
        "usage": "00:02:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:27:50",
        "out": "2023-11-06 15:28:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:28:00",
        "out": "2023-11-06 15:28:40",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 15:28:40",
        "out": "2023-11-06 15:29:00",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:29:00",
        "out": "2023-11-06 15:29:30",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "CSS Rounded Corners",
        "in": "2023-11-06 15:29:30",
        "out": "2023-11-06 15:29:40",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:29:40",
        "out": "2023-11-06 15:29:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:30:00",
        "out": "2023-11-06 15:30:40",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "CSS Rounded Corners",
        "in": "2023-11-06 15:30:40",
        "out": "2023-11-06 15:31:20",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:31:20",
        "out": "2023-11-06 15:33:20",
        "idle": "00:00:00",
        "usage": "00:02:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3Schools Tryit Editor",
        "in": "2023-11-06 15:33:20",
        "out": "2023-11-06 15:35:00",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "xdg-desktop-portal-gnome",
        "windowName": "All Files",
        "in": "2023-11-06 15:35:00",
        "out": "2023-11-06 15:35:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "double quotes",
        "in": "2023-11-06 15:35:10",
        "out": "2023-11-06 15:36:50",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:36:50",
        "out": "2023-11-06 15:37:40",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:37:40",
        "out": "2023-11-06 15:37:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:37:50",
        "out": "2023-11-06 15:40:20",
        "idle": "00:00:00",
        "usage": "00:02:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:40:20",
        "out": "2023-11-06 15:40:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:40:30",
        "out": "2023-11-06 15:41:00",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:41:00",
        "out": "2023-11-06 15:41:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:41:10",
        "out": "2023-11-06 15:41:30",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:41:30",
        "out": "2023-11-06 15:41:40",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:41:40",
        "out": "2023-11-06 15:41:50",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:41:50",
        "out": "2023-11-06 15:42:20",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:42:20",
        "out": "2023-11-06 15:43:10",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:43:10",
        "out": "2023-11-06 15:43:30",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:43:30",
        "out": "2023-11-06 15:44:20",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:44:20",
        "out": "2023-11-06 15:44:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:44:30",
        "out": "2023-11-06 15:46:40",
        "idle": "00:00:00",
        "usage": "00:02:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:46:40",
        "out": "2023-11-06 15:47:00",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:47:00",
        "out": "2023-11-06 15:48:40",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:48:40",
        "out": "2023-11-06 15:50:20",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:50:20",
        "out": "2023-11-06 15:50:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 15:50:30",
        "out": "2023-11-06 15:50:50",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:50:50",
        "out": "2023-11-06 15:51:50",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:51:50",
        "out": "2023-11-06 15:52:01",
        "idle": "00:00:00",
        "usage": "00:00:11"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:52:01",
        "out": "2023-11-06 15:52:10",
        "idle": "00:00:00",
        "usage": "00:00:09"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 15:52:10",
        "out": "2023-11-06 15:52:50",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:52:50",
        "out": "2023-11-06 15:53:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:53:00",
        "out": "2023-11-06 15:53:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:53:10",
        "out": "2023-11-06 15:54:10",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:54:10",
        "out": "2023-11-06 15:54:30",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:54:30",
        "out": "2023-11-06 15:55:10",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:55:10",
        "out": "2023-11-06 15:55:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:55:20",
        "out": "2023-11-06 15:55:30",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:55:30",
        "out": "2023-11-06 15:56:30",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 15:56:30",
        "out": "2023-11-06 15:59:50",
        "idle": "00:00:00",
        "usage": "00:03:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 15:59:50",
        "out": "2023-11-06 16:00:10",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:00:10",
        "out": "2023-11-06 16:00:20",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:00:20",
        "out": "2023-11-06 16:00:31",
        "idle": "00:00:00",
        "usage": "00:00:11"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:00:31",
        "out": "2023-11-06 16:02:00",
        "idle": "00:00:00",
        "usage": "00:01:29"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:02:00",
        "out": "2023-11-06 16:02:10",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:02:10",
        "out": "2023-11-06 16:03:20",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:03:20",
        "out": "2023-11-06 16:03:31",
        "idle": "00:00:00",
        "usage": "00:00:11"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:03:31",
        "out": "2023-11-06 16:04:20",
        "idle": "00:00:00",
        "usage": "00:00:49"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:04:20",
        "out": "2023-11-06 16:04:31",
        "idle": "00:00:00",
        "usage": "00:00:11"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:04:31",
        "out": "2023-11-06 16:08:20",
        "idle": "00:00:00",
        "usage": "00:03:49"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:08:20",
        "out": "2023-11-06 16:08:51",
        "idle": "00:00:00",
        "usage": "00:00:31"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:08:51",
        "out": "2023-11-06 16:09:31",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 16:09:31",
        "out": "2023-11-06 16:10:11",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:10:11",
        "out": "2023-11-06 16:10:20",
        "idle": "00:00:00",
        "usage": "00:00:09"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:10:20",
        "out": "2023-11-06 16:10:41",
        "idle": "00:00:00",
        "usage": "00:00:21"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:10:41",
        "out": "2023-11-06 16:11:10",
        "idle": "00:00:00",
        "usage": "00:00:29"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:11:10",
        "out": "2023-11-06 16:11:31",
        "idle": "00:00:00",
        "usage": "00:00:21"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:11:31",
        "out": "2023-11-06 16:11:50",
        "idle": "00:00:00",
        "usage": "00:00:19"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 16:11:50",
        "out": "2023-11-06 16:12:50",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 16:12:50",
        "out": "2023-11-06 16:13:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:13:00",
        "out": "2023-11-06 16:13:50",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:13:50",
        "out": "2023-11-06 16:14:00",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:14:00",
        "out": "2023-11-06 16:14:31",
        "idle": "00:00:00",
        "usage": "00:00:31"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:14:31",
        "out": "2023-11-06 16:14:40",
        "idle": "00:00:00",
        "usage": "00:00:09"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:14:40",
        "out": "2023-11-06 16:16:20",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:16:20",
        "out": "2023-11-06 16:16:41",
        "idle": "00:00:00",
        "usage": "00:00:21"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:16:41",
        "out": "2023-11-06 16:18:31",
        "idle": "00:00:00",
        "usage": "00:01:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:18:31",
        "out": "2023-11-06 16:18:51",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:18:51",
        "out": "2023-11-06 16:19:21",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:19:21",
        "out": "2023-11-06 16:19:31",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:19:31",
        "out": "2023-11-06 16:22:11",
        "idle": "00:01:20",
        "usage": "00:01:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:22:11",
        "out": "2023-11-06 16:23:01",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:23:01",
        "out": "2023-11-06 16:23:11",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:23:11",
        "out": "2023-11-06 16:23:21",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:23:21",
        "out": "2023-11-06 16:23:31",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:23:31",
        "out": "2023-11-06 16:23:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:23:41",
        "out": "2023-11-06 16:24:01",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:24:01",
        "out": "2023-11-06 16:24:21",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:24:21",
        "out": "2023-11-06 16:24:31",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:24:31",
        "out": "2023-11-06 16:24:51",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:24:51",
        "out": "2023-11-06 16:25:11",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:25:11",
        "out": "2023-11-06 16:25:31",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:25:31",
        "out": "2023-11-06 16:25:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:25:41",
        "out": "2023-11-06 16:26:11",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:26:11",
        "out": "2023-11-06 16:26:21",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:26:21",
        "out": "2023-11-06 16:26:51",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:26:51",
        "out": "2023-11-06 16:27:01",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:27:01",
        "out": "2023-11-06 16:27:11",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:27:11",
        "out": "2023-11-06 16:27:21",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:27:21",
        "out": "2023-11-06 16:28:21",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:28:21",
        "out": "2023-11-06 16:28:31",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:28:31",
        "out": "2023-11-06 16:31:41",
        "idle": "00:00:00",
        "usage": "00:03:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:31:41",
        "out": "2023-11-06 16:31:51",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:31:51",
        "out": "2023-11-06 16:33:31",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:33:31",
        "out": "2023-11-06 16:33:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:33:41",
        "out": "2023-11-06 16:35:41",
        "idle": "00:00:00",
        "usage": "00:02:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:35:41",
        "out": "2023-11-06 16:35:51",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:35:51",
        "out": "2023-11-06 16:36:11",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:36:11",
        "out": "2023-11-06 16:36:31",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:36:31",
        "out": "2023-11-06 16:38:11",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:38:11",
        "out": "2023-11-06 16:38:41",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:38:41",
        "out": "2023-11-06 16:39:21",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:39:21",
        "out": "2023-11-06 16:43:41",
        "idle": "00:00:00",
        "usage": "00:04:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:43:41",
        "out": "2023-11-06 16:44:21",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:44:21",
        "out": "2023-11-06 16:44:41",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:44:41",
        "out": "2023-11-06 16:45:01",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:45:01",
        "out": "2023-11-06 16:45:11",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:45:11",
        "out": "2023-11-06 16:46:41",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 16:46:41",
        "out": "2023-11-06 16:46:51",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:46:51",
        "out": "2023-11-06 16:47:51",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:47:51",
        "out": "2023-11-06 16:48:01",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:48:01",
        "out": "2023-11-06 16:51:01",
        "idle": "00:00:00",
        "usage": "00:03:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:51:01",
        "out": "2023-11-06 16:53:11",
        "idle": "00:00:00",
        "usage": "00:02:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:53:11",
        "out": "2023-11-06 16:54:51",
        "idle": "00:01:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:54:51",
        "out": "2023-11-06 16:56:21",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:56:21",
        "out": "2023-11-06 16:56:31",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:56:31",
        "out": "2023-11-06 16:58:31",
        "idle": "00:00:00",
        "usage": "00:02:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 16:58:31",
        "out": "2023-11-06 16:58:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 16:58:41",
        "out": "2023-11-06 17:00:12",
        "idle": "00:00:00",
        "usage": "00:01:31"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:00:12",
        "out": "2023-11-06 17:00:31",
        "idle": "00:00:00",
        "usage": "00:00:19"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:00:31",
        "out": "2023-11-06 17:01:01",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:01:01",
        "out": "2023-11-06 17:01:11",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:01:11",
        "out": "2023-11-06 17:01:21",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:01:21",
        "out": "2023-11-06 17:01:31",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:01:31",
        "out": "2023-11-06 17:01:51",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:01:51",
        "out": "2023-11-06 17:04:01",
        "idle": "00:00:00",
        "usage": "00:02:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:04:01",
        "out": "2023-11-06 17:05:11",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 17:05:11",
        "out": "2023-11-06 17:06:11",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:06:11",
        "out": "2023-11-06 17:06:31",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:06:31",
        "out": "2023-11-06 17:06:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:06:41",
        "out": "2023-11-06 17:09:51",
        "idle": "00:00:00",
        "usage": "00:03:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "align options in html",
        "in": "2023-11-06 17:09:51",
        "out": "2023-11-06 17:10:22",
        "idle": "00:00:00",
        "usage": "00:00:31"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:10:22",
        "out": "2023-11-06 17:10:31",
        "idle": "00:00:00",
        "usage": "00:00:09"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:10:31",
        "out": "2023-11-06 17:10:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:10:41",
        "out": "2023-11-06 17:10:52",
        "idle": "00:00:00",
        "usage": "00:00:11"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3Schools Tryit Editor",
        "in": "2023-11-06 17:10:52",
        "out": "2023-11-06 17:11:01",
        "idle": "00:00:00",
        "usage": "00:00:09"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:11:01",
        "out": "2023-11-06 17:11:11",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "CSS text-align property",
        "in": "2023-11-06 17:11:11",
        "out": "2023-11-06 17:11:31",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:11:31",
        "out": "2023-11-06 17:12:52",
        "idle": "00:00:00",
        "usage": "00:01:21"
    },
    {
        "appName": "Google-chrome",
        "windowName": "how to add two p in single line in html",
        "in": "2023-11-06 17:12:52",
        "out": "2023-11-06 17:13:21",
        "idle": "00:00:00",
        "usage": "00:00:29"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:13:21",
        "out": "2023-11-06 17:15:22",
        "idle": "00:00:00",
        "usage": "00:02:01"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:15:22",
        "out": "2023-11-06 17:15:31",
        "idle": "00:00:00",
        "usage": "00:00:09"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:15:31",
        "out": "2023-11-06 17:16:01",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:16:01",
        "out": "2023-11-06 17:16:11",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:16:11",
        "out": "2023-11-06 17:16:21",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:16:21",
        "out": "2023-11-06 17:16:31",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:16:31",
        "out": "2023-11-06 17:17:31",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:17:31",
        "out": "2023-11-06 17:17:41",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:17:41",
        "out": "2023-11-06 17:18:41",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:18:41",
        "out": "2023-11-06 17:18:51",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:18:51",
        "out": "2023-11-06 17:19:11",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:19:11",
        "out": "2023-11-06 17:21:31",
        "idle": "00:00:00",
        "usage": "00:02:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:21:31",
        "out": "2023-11-06 17:21:51",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "CSS text-align property",
        "in": "2023-11-06 17:21:51",
        "out": "2023-11-06 17:22:01",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:22:01",
        "out": "2023-11-06 17:24:01",
        "idle": "00:00:00",
        "usage": "00:02:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HTML align Attribute",
        "in": "2023-11-06 17:24:01",
        "out": "2023-11-06 17:24:12",
        "idle": "00:00:00",
        "usage": "00:00:11"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:24:12",
        "out": "2023-11-06 17:25:15",
        "idle": "00:00:00",
        "usage": "00:01:03"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:25:15",
        "out": "2023-11-06 17:25:25",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:25:25",
        "out": "2023-11-06 17:25:35",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 17:25:35",
        "out": "2023-11-06 17:26:05",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:26:05",
        "out": "2023-11-06 17:29:05",
        "idle": "00:00:00",
        "usage": "00:03:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:29:05",
        "out": "2023-11-06 17:29:15",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:29:15",
        "out": "2023-11-06 17:29:25",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:29:25",
        "out": "2023-11-06 17:29:35",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:29:35",
        "out": "2023-11-06 17:30:35",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:30:35",
        "out": "2023-11-06 17:30:45",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:30:45",
        "out": "2023-11-06 17:30:55",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:30:55",
        "out": "2023-11-06 17:31:05",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:31:05",
        "out": "2023-11-06 17:31:15",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:31:15",
        "out": "2023-11-06 17:31:25",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:31:25",
        "out": "2023-11-06 17:32:15",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:32:15",
        "out": "2023-11-06 17:32:25",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:32:25",
        "out": "2023-11-06 17:32:35",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:32:35",
        "out": "2023-11-06 17:35:35",
        "idle": "00:00:00",
        "usage": "00:03:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:35:35",
        "out": "2023-11-06 17:36:35",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 17:36:35",
        "out": "2023-11-06 17:36:55",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:36:55",
        "out": "2023-11-06 17:37:05",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 17:37:05",
        "out": "2023-11-06 17:38:05",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:38:05",
        "out": "2023-11-06 17:38:15",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "How To Create a Two Column Layout",
        "in": "2023-11-06 17:38:15",
        "out": "2023-11-06 17:38:45",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:38:45",
        "out": "2023-11-06 17:38:55",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3Schools Tryit Editor",
        "in": "2023-11-06 17:38:55",
        "out": "2023-11-06 17:39:05",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:39:05",
        "out": "2023-11-06 17:39:25",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3Schools Tryit Editor",
        "in": "2023-11-06 17:39:25",
        "out": "2023-11-06 17:39:35",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:39:35",
        "out": "2023-11-06 17:40:05",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:40:05",
        "out": "2023-11-06 17:40:15",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:40:15",
        "out": "2023-11-06 17:40:35",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:40:35",
        "out": "2023-11-06 17:41:15",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:41:15",
        "out": "2023-11-06 17:41:25",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "W3Schools Tryit Editor",
        "in": "2023-11-06 17:41:25",
        "out": "2023-11-06 17:41:35",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:41:35",
        "out": "2023-11-06 17:43:05",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 17:43:05",
        "out": "2023-11-06 17:43:15",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:43:15",
        "out": "2023-11-06 17:43:55",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:43:55",
        "out": "2023-11-06 17:44:15",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:44:15",
        "out": "2023-11-06 17:45:55",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:45:55",
        "out": "2023-11-06 17:46:05",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:46:05",
        "out": "2023-11-06 17:46:45",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:46:45",
        "out": "2023-11-06 17:46:55",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:46:55",
        "out": "2023-11-06 17:48:05",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 17:48:05",
        "out": "2023-11-06 17:49:55",
        "idle": "00:01:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "image after text in html",
        "in": "2023-11-06 17:49:55",
        "out": "2023-11-06 17:50:55",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "image after text in html",
        "in": "2023-11-06 17:50:55",
        "out": "2023-11-06 17:52:55",
        "idle": "00:00:00",
        "usage": "00:02:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:52:55",
        "out": "2023-11-06 17:53:35",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:53:35",
        "out": "2023-11-06 17:53:45",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:53:45",
        "out": "2023-11-06 17:55:45",
        "idle": "00:00:00",
        "usage": "00:02:00"
    },
    {
        "appName": "Gnome-terminal",
        "windowName": "Terminal",
        "in": "2023-11-06 17:55:45",
        "out": "2023-11-06 17:56:55",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Org.gnome.Nautilus",
        "windowName": "Rao",
        "in": "2023-11-06 17:56:55",
        "out": "2023-11-06 17:57:15",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "layout.html",
        "in": "2023-11-06 17:57:15",
        "out": "2023-11-06 17:58:35",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:58:35",
        "out": "2023-11-06 17:59:15",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 17:59:15",
        "out": "2023-11-06 17:59:25",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 17:59:25",
        "out": "2023-11-06 18:00:15",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:00:15",
        "out": "2023-11-06 18:00:25",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:00:25",
        "out": "2023-11-06 18:02:05",
        "idle": "00:00:00",
        "usage": "00:01:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:02:05",
        "out": "2023-11-06 18:02:35",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 18:02:35",
        "out": "2023-11-06 18:02:55",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:02:55",
        "out": "2023-11-06 18:03:35",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:03:35",
        "out": "2023-11-06 18:03:45",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:03:45",
        "out": "2023-11-06 18:04:55",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "layout.html",
        "in": "2023-11-06 18:04:55",
        "out": "2023-11-06 18:05:45",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:05:45",
        "out": "2023-11-06 18:06:45",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "discord",
        "windowName": "@Ashish Parmar",
        "in": "2023-11-06 18:06:45",
        "out": "2023-11-06 18:07:14",
        "idle": "00:00:00",
        "usage": "00:00:29"
    },
    {
        "appName": "Code",
        "windowName": "Open File",
        "in": "2023-11-06 18:07:14",
        "out": "2023-11-06 18:08:06",
        "idle": "00:00:00",
        "usage": "00:00:52"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 18:08:06",
        "out": "2023-11-06 18:08:16",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "layout.html",
        "in": "2023-11-06 18:08:16",
        "out": "2023-11-06 18:11:06",
        "idle": "00:00:00",
        "usage": "00:02:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 18:11:06",
        "out": "2023-11-06 18:13:16",
        "idle": "00:00:00",
        "usage": "00:02:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:13:16",
        "out": "2023-11-06 18:21:56",
        "idle": "00:00:00",
        "usage": "00:08:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "html",
        "in": "2023-11-06 18:21:56",
        "out": "2023-11-06 18:22:56",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:22:56",
        "out": "2023-11-06 18:24:06",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:24:06",
        "out": "2023-11-06 18:24:16",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "discord",
        "windowName": "@Riddhi Gohel",
        "in": "2023-11-06 18:24:16",
        "out": "2023-11-06 18:24:26",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Release v2.4.5 · RaoInfotech/supersee-release-linux · GitHub",
        "in": "2023-11-06 18:24:26",
        "out": "2023-11-06 18:24:56",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 18:24:56",
        "out": "2023-11-06 18:25:06",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Release v2.4.5 · RaoInfotech/supersee-release-linux · GitHub",
        "in": "2023-11-06 18:25:06",
        "out": "2023-11-06 18:25:36",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Thunar",
        "windowName": "Open With",
        "in": "2023-11-06 18:25:36",
        "out": "2023-11-06 18:26:16",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 18:26:16",
        "out": "2023-11-06 18:26:26",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Org.gnome.Nautilus",
        "windowName": "Downloads",
        "in": "2023-11-06 18:26:26",
        "out": "2023-11-06 18:27:46",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Gedit",
        "windowName": "README.md (~/Downloads/supersee-release-linux-2.4.5)",
        "in": "2023-11-06 18:27:46",
        "out": "2023-11-06 18:27:56",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Release v2.4.5 · RaoInfotech/supersee-release-linux · GitHub",
        "in": "2023-11-06 18:27:56",
        "out": "2023-11-06 18:28:06",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Org.gnome.Nautilus",
        "windowName": "Downloads",
        "in": "2023-11-06 18:28:06",
        "out": "2023-11-06 18:28:36",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Gnome-terminal",
        "windowName": "goral@goral: ~",
        "in": "2023-11-06 18:28:36",
        "out": "2023-11-06 18:29:16",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Org.gnome.Nautilus",
        "windowName": "Downloads",
        "in": "2023-11-06 18:29:16",
        "out": "2023-11-06 18:29:26",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Org.gnome.Nautilus",
        "windowName": "Downloads",
        "in": "2023-11-06 18:29:57",
        "out": "2023-11-06 18:30:07",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "html",
        "in": "2023-11-06 18:30:07",
        "out": "2023-11-06 18:30:37",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:30:37",
        "out": "2023-11-06 18:31:07",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:31:07",
        "out": "2023-11-06 18:31:17",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:31:17",
        "out": "2023-11-06 18:32:17",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:32:17",
        "out": "2023-11-06 18:32:27",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:32:27",
        "out": "2023-11-06 18:32:57",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 18:32:57",
        "out": "2023-11-06 18:33:27",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:33:27",
        "out": "2023-11-06 18:33:57",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:33:57",
        "out": "2023-11-06 18:34:07",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 18:34:07",
        "out": "2023-11-06 18:34:17",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:34:17",
        "out": "2023-11-06 18:37:57",
        "idle": "00:00:00",
        "usage": "00:03:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 18:37:57",
        "out": "2023-11-06 18:38:07",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:38:07",
        "out": "2023-11-06 18:38:47",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:38:47",
        "out": "2023-11-06 18:38:57",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:38:57",
        "out": "2023-11-06 18:40:57",
        "idle": "00:00:00",
        "usage": "00:02:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:40:57",
        "out": "2023-11-06 18:42:17",
        "idle": "00:01:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:42:17",
        "out": "2023-11-06 18:43:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:43:17",
        "out": "2023-11-06 18:44:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:44:17",
        "out": "2023-11-06 18:45:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:45:17",
        "out": "2023-11-06 18:46:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:46:17",
        "out": "2023-11-06 18:47:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:47:17",
        "out": "2023-11-06 18:48:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:48:17",
        "out": "2023-11-06 18:49:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:49:17",
        "out": "2023-11-06 18:50:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:50:17",
        "out": "2023-11-06 18:51:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:51:17",
        "out": "2023-11-06 18:52:17",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:52:17",
        "out": "2023-11-06 18:52:27",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "discord",
        "windowName": "#general | Rao Information Technology",
        "in": "2023-11-06 18:52:27",
        "out": "2023-11-06 18:53:47",
        "idle": "00:00:00",
        "usage": "00:01:20"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 18:53:47",
        "out": "2023-11-06 18:53:57",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:53:57",
        "out": "2023-11-06 18:54:57",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "container example in html",
        "in": "2023-11-06 18:54:57",
        "out": "2023-11-06 18:55:27",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:55:27",
        "out": "2023-11-06 18:58:27",
        "idle": "00:00:00",
        "usage": "00:03:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 18:58:27",
        "out": "2023-11-06 18:58:37",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 18:58:37",
        "out": "2023-11-06 19:00:37",
        "idle": "00:00:00",
        "usage": "00:02:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:00:37",
        "out": "2023-11-06 19:01:07",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:01:07",
        "out": "2023-11-06 19:02:17",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:02:17",
        "out": "2023-11-06 19:02:27",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:02:27",
        "out": "2023-11-06 19:02:57",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "layout.html",
        "in": "2023-11-06 19:02:57",
        "out": "2023-11-06 19:03:07",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:03:07",
        "out": "2023-11-06 19:04:07",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "layout.html",
        "in": "2023-11-06 19:04:07",
        "out": "2023-11-06 19:04:17",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:04:17",
        "out": "2023-11-06 19:05:07",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:05:07",
        "out": "2023-11-06 19:05:17",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:05:17",
        "out": "2023-11-06 19:05:37",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:05:37",
        "out": "2023-11-06 19:05:47",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:05:47",
        "out": "2023-11-06 19:08:07",
        "idle": "00:00:00",
        "usage": "00:02:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:08:07",
        "out": "2023-11-06 19:08:17",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:08:17",
        "out": "2023-11-06 19:09:17",
        "idle": "00:00:00",
        "usage": "00:01:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:09:17",
        "out": "2023-11-06 19:09:27",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:09:27",
        "out": "2023-11-06 19:10:37",
        "idle": "00:00:00",
        "usage": "00:01:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:10:37",
        "out": "2023-11-06 19:10:47",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:10:47",
        "out": "2023-11-06 19:12:47",
        "idle": "00:00:00",
        "usage": "00:02:00"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:12:47",
        "out": "2023-11-06 19:12:57",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:12:57",
        "out": "2023-11-06 19:13:37",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:13:37",
        "out": "2023-11-06 19:13:47",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:13:47",
        "out": "2023-11-06 19:15:37",
        "idle": "00:00:00",
        "usage": "00:01:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "layout.html",
        "in": "2023-11-06 19:15:37",
        "out": "2023-11-06 19:15:47",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "layout.html",
        "in": "2023-11-06 19:15:47",
        "out": "2023-11-06 19:19:37",
        "idle": "00:00:00",
        "usage": "00:03:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:19:37",
        "out": "2023-11-06 19:23:47",
        "idle": "00:00:00",
        "usage": "00:04:10"
    },
    {
        "appName": "discord",
        "windowName": "\"Daily-Update\" | Rao Information Technology",
        "in": "2023-11-06 19:23:47",
        "out": "2023-11-06 19:24:17",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "How To Create a Tab Image Gallery",
        "in": "2023-11-06 19:24:17",
        "out": "2023-11-06 19:28:08",
        "idle": "00:00:00",
        "usage": "00:03:51"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:28:08",
        "out": "2023-11-06 19:29:22",
        "idle": "00:00:00",
        "usage": "00:01:14"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Pretty Paris",
        "in": "2023-11-06 19:29:22",
        "out": "2023-11-06 19:29:33",
        "idle": "00:00:00",
        "usage": "00:00:11"
    },
    {
        "appName": "Code",
        "windowName": "test.html",
        "in": "2023-11-06 19:29:33",
        "out": "2023-11-06 19:30:57",
        "idle": "00:00:00",
        "usage": "00:01:24"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 19:30:57",
        "out": "2023-11-06 19:31:17",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:31:17",
        "out": "2023-11-06 19:32:47",
        "idle": "00:00:00",
        "usage": "00:01:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 19:32:47",
        "out": "2023-11-06 19:33:27",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:33:27",
        "out": "2023-11-06 19:34:28",
        "idle": "00:00:00",
        "usage": "00:01:01"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Pretty Paris",
        "in": "2023-11-06 19:34:28",
        "out": "2023-11-06 19:34:48",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:34:48",
        "out": "2023-11-06 19:34:58",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Pretty Paris",
        "in": "2023-11-06 19:34:58",
        "out": "2023-11-06 19:35:08",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:35:08",
        "out": "2023-11-06 19:37:38",
        "idle": "00:00:00",
        "usage": "00:02:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:37:38",
        "out": "2023-11-06 19:37:58",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:37:58",
        "out": "2023-11-06 19:38:48",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:38:48",
        "out": "2023-11-06 19:39:08",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:39:08",
        "out": "2023-11-06 19:39:38",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:39:38",
        "out": "2023-11-06 19:39:48",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:39:48",
        "out": "2023-11-06 19:40:48",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:40:48",
        "out": "2023-11-06 19:41:08",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "New Tab",
        "in": "2023-11-06 19:41:08",
        "out": "2023-11-06 19:41:58",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:41:58",
        "out": "2023-11-06 19:42:18",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HTML Input Types",
        "in": "2023-11-06 19:42:18",
        "out": "2023-11-06 19:42:48",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:42:48",
        "out": "2023-11-06 19:43:58",
        "idle": "00:01:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:43:58",
        "out": "2023-11-06 19:44:18",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HTML Input Types",
        "in": "2023-11-06 19:44:18",
        "out": "2023-11-06 19:46:08",
        "idle": "00:00:00",
        "usage": "00:01:50"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:46:08",
        "out": "2023-11-06 19:46:18",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "How to put image and text side-by-side in HTML?",
        "in": "2023-11-06 19:46:18",
        "out": "2023-11-06 19:46:28",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "discord",
        "windowName": "#general | Rao Information Technology",
        "in": "2023-11-06 19:46:28",
        "out": "2023-11-06 19:46:48",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Coding workshops for women | SheCodes",
        "in": "2023-11-06 19:46:48",
        "out": "2023-11-06 19:46:59",
        "idle": "00:00:00",
        "usage": "00:00:11"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 19:46:59",
        "out": "2023-11-06 19:47:18",
        "idle": "00:00:00",
        "usage": "00:00:19"
    },
    {
        "appName": "discord",
        "windowName": "@Vivek Malvi",
        "in": "2023-11-06 19:47:18",
        "out": "2023-11-06 19:47:28",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Eog",
        "windowName": "Image Viewer",
        "in": "2023-11-06 19:47:28",
        "out": "2023-11-06 19:47:38",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Coding workshops for women | SheCodes",
        "in": "2023-11-06 19:47:38",
        "out": "2023-11-06 19:47:48",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Thunar",
        "windowName": "Downloads",
        "in": "2023-11-06 19:47:48",
        "out": "2023-11-06 19:48:18",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "discord",
        "windowName": "@dhaval_dashadia",
        "in": "2023-11-06 19:48:18",
        "out": "2023-11-06 19:48:48",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Xfce4-taskmanager",
        "windowName": "Task Manager",
        "in": "2023-11-06 19:48:48",
        "out": "2023-11-06 19:48:58",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Supersee",
        "windowName": "SuperSee Widget",
        "in": "2023-11-06 19:48:58",
        "out": "2023-11-06 19:49:08",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Gnome-system-monitor",
        "windowName": "System Monitor",
        "in": "2023-11-06 19:49:08",
        "out": "2023-11-06 19:49:28",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:49:28",
        "out": "2023-11-06 19:49:48",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:49:48",
        "out": "2023-11-06 19:51:38",
        "idle": "00:01:10",
        "usage": "00:00:40"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:51:38",
        "out": "2023-11-06 19:52:38",
        "idle": "00:01:00",
        "usage": "00:00:00"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:52:38",
        "out": "2023-11-06 19:53:08",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:53:08",
        "out": "2023-11-06 19:53:28",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "discord",
        "windowName": "@Vivek Malvi",
        "in": "2023-11-06 19:53:28",
        "out": "2023-11-06 19:53:38",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 19:53:38",
        "out": "2023-11-06 19:53:58",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:53:58",
        "out": "2023-11-06 19:54:38",
        "idle": "00:00:00",
        "usage": "00:00:40"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:54:38",
        "out": "2023-11-06 19:54:48",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:54:48",
        "out": "2023-11-06 19:55:18",
        "idle": "00:00:00",
        "usage": "00:00:30"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:55:18",
        "out": "2023-11-06 19:55:28",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:55:28",
        "out": "2023-11-06 19:56:18",
        "idle": "00:00:00",
        "usage": "00:00:50"
    },
    {
        "appName": "Google-chrome",
        "windowName": "HEALTH CARE",
        "in": "2023-11-06 19:56:18",
        "out": "2023-11-06 19:56:28",
        "idle": "00:00:00",
        "usage": "00:00:10"
    },
    {
        "appName": "Code",
        "windowName": "index.html",
        "in": "2023-11-06 19:56:28",
        "out": "2023-11-06 19:56:48",
        "idle": "00:00:00",
        "usage": "00:00:20"
    },
    {
        "appName": "Google-chrome",
        "windowName": "Layout_-_1.png (452×641)",
        "in": "2023-11-06 19:56:48",
        "out": "2023-11-06 19:57:05",
        "idle": "00:00:00",
        "usage": "00:00:17"
    }
];
// const data = [
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-06 12:22:40",
//         "out": "2023-11-06 12:22:48",
//         "idle": "00:00:00",
//         "usage": "00:00:08"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 12:22:48",
//         "out": "2023-11-06 12:23:08",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 12:22:58",
//         "out": "2023-11-06 12:23:28",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-06 12:23:08",
//         "out": "2023-11-06 12:23:58",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | \"Daily-Update\" | Rao Information Technology",
//         "in": "2023-11-06 12:23:28",
//         "out": "2023-11-06 12:24:18",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #server-management | Rao Information Technology",
//         "in": "2023-11-06 12:23:58",
//         "out": "2023-11-06 12:24:28",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #interview-lineup | Rao Information Technology",
//         "in": "2023-11-06 12:24:18",
//         "out": "2023-11-06 12:24:48",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #tapo-cico | Rao Information Technology",
//         "in": "2023-11-06 12:24:28",
//         "out": "2023-11-06 12:25:38",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | \"Daily-Update\" | Rao Information Technology",
//         "in": "2023-11-06 12:24:48",
//         "out": "2023-11-06 12:26:09",
//         "idle": "00:00:00",
//         "usage": "00:01:21"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 12:25:38",
//         "out": "2023-11-06 12:26:19",
//         "idle": "00:00:00",
//         "usage": "00:00:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 12:26:09",
//         "out": "2023-11-06 12:26:29",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(3) Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 12:26:19",
//         "out": "2023-11-06 12:27:19",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:26:29",
//         "out": "2023-11-06 12:27:29",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 12:27:19",
//         "out": "2023-11-06 12:27:59",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:27:29",
//         "out": "2023-11-06 12:28:19",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Jayesh_Yadav",
//         "in": "2023-11-06 12:27:59",
//         "out": "2023-11-06 12:28:29",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Figma",
//         "in": "2023-11-06 12:28:19",
//         "out": "2023-11-06 12:28:39",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Recents and Sharing – Figma",
//         "in": "2023-11-06 12:28:29",
//         "out": "2023-11-06 12:28:59",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:28:39",
//         "out": "2023-11-06 12:30:29",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Jayesh_Yadav",
//         "in": "2023-11-06 12:28:59",
//         "out": "2023-11-06 12:30:39",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Recents and Sharing – Figma",
//         "in": "2023-11-06 12:30:29",
//         "out": "2023-11-06 12:30:49",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO-RALPH – Figma",
//         "in": "2023-11-06 12:30:39",
//         "out": "2023-11-06 12:31:09",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Jayesh_Yadav",
//         "in": "2023-11-06 12:30:49",
//         "out": "2023-11-06 12:31:19",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Jayesh_Yadav",
//         "in": "2023-11-06 12:31:09",
//         "out": "2023-11-06 12:31:29",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:31:19",
//         "out": "2023-11-06 12:32:29",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 12:31:29",
//         "out": "2023-11-06 12:32:39",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 12:32:29",
//         "out": "2023-11-06 12:33:39",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:32:39",
//         "out": "2023-11-06 12:33:49",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 12:33:39",
//         "out": "2023-11-06 12:33:59",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 12:33:49",
//         "out": "2023-11-06 12:34:09",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 12:33:59",
//         "out": "2023-11-06 12:34:19",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Jayesh_Yadav",
//         "in": "2023-11-06 12:34:09",
//         "out": "2023-11-06 12:35:29",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:34:19",
//         "out": "2023-11-06 12:35:33",
//         "idle": "00:00:00",
//         "usage": "00:01:14"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 12:35:39",
//         "out": "2023-11-06 12:36:19",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO-RALPH – Figma",
//         "in": "2023-11-06 12:36:19",
//         "out": "2023-11-06 12:36:39",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 12:36:29",
//         "out": "2023-11-06 12:36:49",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 12:36:39",
//         "out": "2023-11-06 12:38:29",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO-RALPH – Figma",
//         "in": "2023-11-06 12:36:49",
//         "out": "2023-11-06 12:38:39",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Request for Marriage Leave",
//         "in": "2023-11-06 12:38:29",
//         "out": "2023-11-06 12:38:49",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 12:38:39",
//         "out": "2023-11-06 12:38:59",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO-RALPH – Figma",
//         "in": "2023-11-06 12:38:49",
//         "out": "2023-11-06 12:39:19",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 12:38:59",
//         "out": "2023-11-06 12:40:09",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Jayesh_Yadav",
//         "in": "2023-11-06 12:39:19",
//         "out": "2023-11-06 12:40:19",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 12:40:09",
//         "out": "2023-11-06 12:40:29",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:40:19",
//         "out": "2023-11-06 12:40:39",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 12:40:29",
//         "out": "2023-11-06 12:40:59",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:40:39",
//         "out": "2023-11-06 12:42:09",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 12:40:59",
//         "out": "2023-11-06 12:43:09",
//         "idle": "00:01:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 12:43:09",
//         "out": "2023-11-06 12:44:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 12:44:09",
//         "out": "2023-11-06 12:45:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 12:45:09",
//         "out": "2023-11-06 12:45:29",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:45:19",
//         "out": "2023-11-06 12:45:49",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 12:45:29",
//         "out": "2023-11-06 12:47:39",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 12:45:49",
//         "out": "2023-11-06 12:48:39",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 12:47:39",
//         "out": "2023-11-06 12:48:49",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:48:39",
//         "out": "2023-11-06 12:49:19",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Muskan Shah",
//         "in": "2023-11-06 12:48:49",
//         "out": "2023-11-06 12:49:29",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Muskan Shah",
//         "in": "2023-11-06 12:49:19",
//         "out": "2023-11-06 12:49:49",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 12:49:29",
//         "out": "2023-11-06 12:49:59",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Muskan Shah",
//         "in": "2023-11-06 12:49:49",
//         "out": "2023-11-06 12:50:19",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 12:49:59",
//         "out": "2023-11-06 12:51:09",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "conduct updates",
//         "in": "2023-11-06 12:50:19",
//         "out": "2023-11-06 12:51:19",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Conduct Dashboard › Copy of Logs Overview",
//         "in": "2023-11-06 12:51:09",
//         "out": "2023-11-06 12:51:49",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Muskan Shah",
//         "in": "2023-11-06 12:51:19",
//         "out": "2023-11-06 12:51:59",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Conduct Dashboard › Copy of Logs Overview",
//         "in": "2023-11-06 12:51:49",
//         "out": "2023-11-06 12:53:19",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "conduct updates",
//         "in": "2023-11-06 12:51:59",
//         "out": "2023-11-06 12:53:49",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Conduct Dashboard › Copy of Logs Overview",
//         "in": "2023-11-06 12:53:19",
//         "out": "2023-11-06 12:53:59",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 12:53:49",
//         "out": "2023-11-06 12:55:30",
//         "idle": "00:00:00",
//         "usage": "00:01:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Muskan Shah",
//         "in": "2023-11-06 12:53:59",
//         "out": "2023-11-06 12:55:40",
//         "idle": "00:00:00",
//         "usage": "00:01:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rinku Khambhayata",
//         "in": "2023-11-06 12:55:30",
//         "out": "2023-11-06 12:56:00",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 12:55:40",
//         "out": "2023-11-06 12:57:20",
//         "idle": "00:01:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 12:57:20",
//         "out": "2023-11-06 13:00:10",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 12:58:10",
//         "out": "2023-11-06 13:00:20",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 13:00:10",
//         "out": "2023-11-06 13:02:00",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Muskan Shah",
//         "in": "2023-11-06 13:00:20",
//         "out": "2023-11-06 13:02:20",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rinku Khambhayata",
//         "in": "2023-11-06 13:02:00",
//         "out": "2023-11-06 13:02:30",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 13:02:20",
//         "out": "2023-11-06 13:02:40",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Muskan Shah",
//         "in": "2023-11-06 13:02:30",
//         "out": "2023-11-06 13:02:50",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 13:02:40",
//         "out": "2023-11-06 13:04:00",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Muskan Shah",
//         "in": "2023-11-06 13:02:50",
//         "out": "2023-11-06 13:04:10",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Google Drive",
//         "in": "2023-11-06 13:04:00",
//         "out": "2023-11-06 13:05:20",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Google Drive",
//         "in": "2023-11-06 13:05:20",
//         "out": "2023-11-06 13:06:10",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "SuperSee",
//         "in": "2023-11-06 13:06:00",
//         "out": "2023-11-06 13:11:10",
//         "idle": "00:00:00",
//         "usage": "00:05:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 13:06:10",
//         "out": "2023-11-06 13:11:30",
//         "idle": "00:00:00",
//         "usage": "00:05:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Recent download history",
//         "in": "2023-11-06 13:11:10",
//         "out": "2023-11-06 13:11:40",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 13:11:30",
//         "out": "2023-11-06 13:15:30",
//         "idle": "00:01:30",
//         "usage": "00:02:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 13:15:30",
//         "out": "2023-11-06 13:17:00",
//         "idle": "00:01:10",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 13:17:00",
//         "out": "2023-11-06 13:18:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 13:18:01",
//         "out": "2023-11-06 13:20:21",
//         "idle": "00:01:20",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Muskan Shah",
//         "in": "2023-11-06 13:18:11",
//         "out": "2023-11-06 13:20:31",
//         "idle": "00:00:00",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO-RALPH – Figma",
//         "in": "2023-11-06 13:20:21",
//         "out": "2023-11-06 13:21:01",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 13:20:31",
//         "out": "2023-11-06 13:21:11",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rinku Khambhayata",
//         "in": "2023-11-06 13:21:01",
//         "out": "2023-11-06 13:21:31",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 13:21:11",
//         "out": "2023-11-06 13:22:31",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 13:22:31",
//         "out": "2023-11-06 13:23:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 13:23:31",
//         "out": "2023-11-06 13:24:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 13:24:31",
//         "out": "2023-11-06 13:25:31",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rinku Khambhayata",
//         "in": "2023-11-06 13:25:11",
//         "out": "2023-11-06 13:25:51",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 13:25:31",
//         "out": "2023-11-06 13:26:11",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO-RALPH – Figma",
//         "in": "2023-11-06 13:25:51",
//         "out": "2023-11-06 13:26:21",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Google Docs",
//         "in": "2023-11-06 13:26:11",
//         "out": "2023-11-06 13:26:31",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @AKSHAY ZALA",
//         "in": "2023-11-06 13:26:21",
//         "out": "2023-11-06 13:27:01",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Screenshot_2023-11-01-18-21-27-009_com.google.android.permissioncontroller.jpg (1080×2400)",
//         "in": "2023-11-06 13:26:31",
//         "out": "2023-11-06 13:27:21",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @AKSHAY ZALA",
//         "in": "2023-11-06 13:27:01",
//         "out": "2023-11-06 13:27:31",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @keval_vala",
//         "in": "2023-11-06 13:27:21",
//         "out": "2023-11-06 13:27:51",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Ashish Parmar",
//         "in": "2023-11-06 13:27:31",
//         "out": "2023-11-06 13:28:11",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 13:27:51",
//         "out": "2023-11-06 13:30:31",
//         "idle": "00:00:00",
//         "usage": "00:02:40"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Date and Time Information",
//         "in": "2023-11-06 13:28:11",
//         "out": "2023-11-06 13:31:51",
//         "idle": "00:01:00",
//         "usage": "00:02:40"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Date and Time Information",
//         "in": "2023-11-06 13:31:51",
//         "out": "2023-11-06 13:32:11",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Save As",
//         "in": "2023-11-06 13:32:11",
//         "out": "2023-11-06 13:34:11",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "localhost_8100_Samsung_Galaxy_S20_Ultra_19.png (1442×3202)",
//         "in": "2023-11-06 13:34:01",
//         "out": "2023-11-06 13:34:21",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 13:34:11",
//         "out": "2023-11-06 13:34:51",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Rinku Khambhayata",
//         "in": "2023-11-06 13:34:21",
//         "out": "2023-11-06 13:35:01",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rao Helper Bot",
//         "in": "2023-11-06 13:34:51",
//         "out": "2023-11-06 13:35:51",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-06 13:35:01",
//         "out": "2023-11-06 13:37:01",
//         "idle": "00:01:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-06 13:37:01",
//         "out": "2023-11-06 13:38:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-06 13:38:01",
//         "out": "2023-11-06 13:39:51",
//         "idle": "00:01:30",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 13:38:51",
//         "out": "2023-11-06 13:40:12",
//         "idle": "00:00:00",
//         "usage": "00:01:21"
//     },
//     {
//         "appName": "Application Frame Host",
//         "windowName": "Photos",
//         "in": "2023-11-06 13:39:51",
//         "out": "2023-11-06 13:40:22",
//         "idle": "00:00:00",
//         "usage": "00:00:31"
//     },
//     {
//         "appName": "PhotosApp.exe",
//         "windowName": "localhost_8100_Samsung_Galaxy_S20_Ultra_19.png ‎- Photos",
//         "in": "2023-11-06 13:40:12",
//         "out": "2023-11-06 13:40:32",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "Downloads",
//         "in": "2023-11-06 13:40:22",
//         "out": "2023-11-06 13:41:12",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 13:40:32",
//         "out": "2023-11-06 13:42:02",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 13:41:12",
//         "out": "2023-11-06 13:43:12",
//         "idle": "00:01:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 13:43:12",
//         "out": "2023-11-06 13:44:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 13:44:12",
//         "out": "2023-11-06 13:45:22",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 13:45:02",
//         "out": "2023-11-06 13:45:42",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:45:22",
//         "out": "2023-11-06 13:46:42",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:46:42",
//         "out": "2023-11-06 13:47:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:47:42",
//         "out": "2023-11-06 13:48:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:48:42",
//         "out": "2023-11-06 13:49:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:49:42",
//         "out": "2023-11-06 13:50:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:50:42",
//         "out": "2023-11-06 13:51:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:51:42",
//         "out": "2023-11-06 13:52:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:52:42",
//         "out": "2023-11-06 13:53:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:53:42",
//         "out": "2023-11-06 13:54:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:54:42",
//         "out": "2023-11-06 13:55:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:55:42",
//         "out": "2023-11-06 13:56:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:56:42",
//         "out": "2023-11-06 13:57:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:57:42",
//         "out": "2023-11-06 13:58:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:58:42",
//         "out": "2023-11-06 13:59:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 13:59:42",
//         "out": "2023-11-06 14:00:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:00:43",
//         "out": "2023-11-06 14:01:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:01:43",
//         "out": "2023-11-06 14:02:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:02:43",
//         "out": "2023-11-06 14:03:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:03:43",
//         "out": "2023-11-06 14:04:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:04:43",
//         "out": "2023-11-06 14:05:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:05:43",
//         "out": "2023-11-06 14:06:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:06:43",
//         "out": "2023-11-06 14:07:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:07:43",
//         "out": "2023-11-06 14:08:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:08:43",
//         "out": "2023-11-06 14:09:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:09:43",
//         "out": "2023-11-06 14:10:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:10:43",
//         "out": "2023-11-06 14:11:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:11:43",
//         "out": "2023-11-06 14:12:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:12:43",
//         "out": "2023-11-06 14:13:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:13:43",
//         "out": "2023-11-06 14:14:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:14:43",
//         "out": "2023-11-06 14:15:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:25:57",
//         "out": "2023-11-06 14:26:07",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 14:26:07",
//         "out": "2023-11-06 14:26:27",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 14:26:17",
//         "out": "2023-11-06 14:27:27",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 14:27:27",
//         "out": "2023-11-06 14:28:27",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 14:28:27",
//         "out": "2023-11-06 14:29:27",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 14:29:27",
//         "out": "2023-11-06 14:30:17",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-06 14:30:07",
//         "out": "2023-11-06 14:30:27",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rao Helper Bot",
//         "in": "2023-11-06 14:30:17",
//         "out": "2023-11-06 14:31:27",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rao Helper Bot",
//         "in": "2023-11-06 14:31:27",
//         "out": "2023-11-06 14:32:27",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rao Helper Bot",
//         "in": "2023-11-06 14:32:27",
//         "out": "2023-11-06 14:33:17",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 14:33:07",
//         "out": "2023-11-06 14:36:17",
//         "idle": "00:01:40",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 14:36:17",
//         "out": "2023-11-06 14:36:57",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-06 14:36:57",
//         "out": "2023-11-06 14:37:57",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rao Helper Bot",
//         "in": "2023-11-06 14:37:07",
//         "out": "2023-11-06 14:38:07",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-06 14:37:57",
//         "out": "2023-11-06 14:38:17",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-06 14:38:07",
//         "out": "2023-11-06 14:38:27",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Search application",
//         "windowName": "Search",
//         "in": "2023-11-06 14:38:17",
//         "out": "2023-11-06 14:38:37",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-06 14:38:27",
//         "out": "2023-11-06 14:40:17",
//         "idle": "00:01:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-06 14:40:17",
//         "out": "2023-11-06 14:41:07",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Date and Time Information",
//         "in": "2023-11-06 14:40:57",
//         "out": "2023-11-06 14:42:17",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-06 14:41:07",
//         "out": "2023-11-06 14:42:57",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rao Helper Bot",
//         "in": "2023-11-06 14:42:17",
//         "out": "2023-11-06 14:43:57",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Date and Time Information",
//         "in": "2023-11-06 14:42:57",
//         "out": "2023-11-06 14:45:17",
//         "idle": "00:01:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Date and Time Information",
//         "in": "2023-11-06 14:45:17",
//         "out": "2023-11-06 14:46:07",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 14:45:57",
//         "out": "2023-11-06 14:46:17",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO-RALPH – Figma",
//         "in": "2023-11-06 14:46:07",
//         "out": "2023-11-06 14:47:37",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Rao Helper Bot",
//         "in": "2023-11-06 14:46:17",
//         "out": "2023-11-06 14:48:37",
//         "idle": "00:00:00",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:47:37",
//         "out": "2023-11-06 14:49:37",
//         "idle": "00:01:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:49:37",
//         "out": "2023-11-06 14:50:37",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:50:37",
//         "out": "2023-11-06 14:51:37",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:51:37",
//         "out": "2023-11-06 14:52:37",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:52:37",
//         "out": "2023-11-06 14:53:37",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:53:37",
//         "out": "2023-11-06 14:54:37",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:54:37",
//         "out": "2023-11-06 14:55:37",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:55:37",
//         "out": "2023-11-06 14:56:37",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:56:37",
//         "out": "2023-11-06 14:57:37",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 14:57:37",
//         "out": "2023-11-06 14:57:57",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @AKSHAY ZALA",
//         "in": "2023-11-06 14:57:57",
//         "out": "2023-11-06 14:58:27",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Untitled document",
//         "in": "2023-11-06 14:58:07",
//         "out": "2023-11-06 14:58:59",
//         "idle": "00:00:00",
//         "usage": "00:00:52"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 14:59:07",
//         "out": "2023-11-06 15:00:07",
//         "idle": "00:01:20",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:00:07",
//         "out": "2023-11-06 15:01:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:01:08",
//         "out": "2023-11-06 15:02:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:02:08",
//         "out": "2023-11-06 15:03:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:03:08",
//         "out": "2023-11-06 15:04:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:04:08",
//         "out": "2023-11-06 15:05:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:05:08",
//         "out": "2023-11-06 15:06:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:06:08",
//         "out": "2023-11-06 15:07:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:07:08",
//         "out": "2023-11-06 15:08:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:08:08",
//         "out": "2023-11-06 15:09:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:09:08",
//         "out": "2023-11-06 15:10:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:10:08",
//         "out": "2023-11-06 15:11:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:11:08",
//         "out": "2023-11-06 15:12:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:12:08",
//         "out": "2023-11-06 15:13:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:13:08",
//         "out": "2023-11-06 15:14:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:14:08",
//         "out": "2023-11-06 15:15:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:15:08",
//         "out": "2023-11-06 15:16:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:16:08",
//         "out": "2023-11-06 15:17:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:17:08",
//         "out": "2023-11-06 15:18:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:18:08",
//         "out": "2023-11-06 15:19:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:19:08",
//         "out": "2023-11-06 15:20:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:20:08",
//         "out": "2023-11-06 15:21:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:21:08",
//         "out": "2023-11-06 15:22:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:22:09",
//         "out": "2023-11-06 15:23:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:23:09",
//         "out": "2023-11-06 15:24:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:24:09",
//         "out": "2023-11-06 15:25:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:25:09",
//         "out": "2023-11-06 15:26:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:26:09",
//         "out": "2023-11-06 15:27:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:27:09",
//         "out": "2023-11-06 15:28:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:28:09",
//         "out": "2023-11-06 15:29:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-06 15:29:09",
//         "out": "2023-11-06 15:51:48",
//         "idle": "00:00:00",
//         "usage": "00:22:39"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | @AKSHAY ZALA",
//         "in": "2023-11-06 15:51:48",
//         "out": "2023-11-06 15:52:18",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Heer Soni",
//         "in": "2023-11-06 15:52:08",
//         "out": "2023-11-06 15:54:58",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 15:52:18",
//         "out": "2023-11-06 15:56:08",
//         "idle": "00:00:00",
//         "usage": "00:03:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 15:54:58",
//         "out": "2023-11-06 15:56:28",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 15:56:08",
//         "out": "2023-11-06 15:57:58",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-06 15:56:28",
//         "out": "2023-11-06 15:58:08",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Volume Control",
//         "in": "2023-11-06 15:57:58",
//         "out": "2023-11-06 15:58:18",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Heer Soni",
//         "in": "2023-11-06 15:58:08",
//         "out": "2023-11-06 15:58:28",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ai-general | Rao Information Technology",
//         "in": "2023-11-06 15:58:18",
//         "out": "2023-11-06 15:58:38",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Heer Soni",
//         "in": "2023-11-06 15:58:28",
//         "out": "2023-11-06 15:58:48",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #eckerds-pharmacy-production | Rao Information Technology",
//         "in": "2023-11-06 15:58:38",
//         "out": "2023-11-06 15:58:58",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 15:58:48",
//         "out": "2023-11-06 15:59:28",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #eckerds-pharmacy-production | Rao Information Technology",
//         "in": "2023-11-06 15:58:58",
//         "out": "2023-11-06 15:59:58",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 15:59:28",
//         "out": "2023-11-06 16:00:08",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 15:59:58",
//         "out": "2023-11-06 16:00:48",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-06 16:00:08",
//         "out": "2023-11-06 16:00:58",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 16:00:48",
//         "out": "2023-11-06 16:03:08",
//         "idle": "00:01:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 16:03:08",
//         "out": "2023-11-06 16:04:08",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 16:04:08",
//         "out": "2023-11-06 16:05:28",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-06 16:04:48",
//         "out": "2023-11-06 16:05:48",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Google Meet",
//         "in": "2023-11-06 16:05:28",
//         "out": "2023-11-06 16:06:08",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 16:05:48",
//         "out": "2023-11-06 16:06:28",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Nidhi_patel",
//         "in": "2023-11-06 16:06:08",
//         "out": "2023-11-06 16:06:58",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:06:28",
//         "out": "2023-11-06 16:07:38",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-06 16:06:58",
//         "out": "2023-11-06 16:07:58",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Home",
//         "in": "2023-11-06 16:07:38",
//         "out": "2023-11-06 16:11:28",
//         "idle": "00:00:00",
//         "usage": "00:03:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-06 16:07:58",
//         "out": "2023-11-06 16:11:48",
//         "idle": "00:00:00",
//         "usage": "00:03:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Home",
//         "in": "2023-11-06 16:11:28",
//         "out": "2023-11-06 16:12:08",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Locations",
//         "in": "2023-11-06 16:11:48",
//         "out": "2023-11-06 16:12:18",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Pharmacy in Arcadia",
//         "in": "2023-11-06 16:12:08",
//         "out": "2023-11-06 16:12:38",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Contact",
//         "in": "2023-11-06 16:12:18",
//         "out": "2023-11-06 16:13:08",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:12:38",
//         "out": "2023-11-06 16:13:38",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Institute of Language Teaching",
//         "in": "2023-11-06 16:13:08",
//         "out": "2023-11-06 16:13:48",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Heer Soni",
//         "in": "2023-11-06 16:13:38",
//         "out": "2023-11-06 16:14:19",
//         "idle": "00:00:00",
//         "usage": "00:00:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:13:48",
//         "out": "2023-11-06 16:14:29",
//         "idle": "00:00:00",
//         "usage": "00:00:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Institute of Language Teaching",
//         "in": "2023-11-06 16:14:19",
//         "out": "2023-11-06 16:15:09",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Google Docs",
//         "in": "2023-11-06 16:14:29",
//         "out": "2023-11-06 16:15:19",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Maintenance month",
//         "in": "2023-11-06 16:15:09",
//         "out": "2023-11-06 16:15:59",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Institute of Language Teaching",
//         "in": "2023-11-06 16:15:19",
//         "out": "2023-11-06 16:16:39",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 16:15:59",
//         "out": "2023-11-06 16:16:59",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:16:39",
//         "out": "2023-11-06 16:17:09",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Stuti Institute of Performing Arts",
//         "in": "2023-11-06 16:16:59",
//         "out": "2023-11-06 16:18:39",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-06 16:17:09",
//         "out": "2023-11-06 16:18:59",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Dadaji Pandurang Shastri Athawaleji: Bhartiya Sanskruti Chair",
//         "in": "2023-11-06 16:18:39",
//         "out": "2023-11-06 16:19:29",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Nidhi_patel",
//         "in": "2023-11-06 16:18:59",
//         "out": "2023-11-06 16:19:49",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #server-management | Rao Information Technology",
//         "in": "2023-11-06 16:19:29",
//         "out": "2023-11-06 16:19:59",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Contact",
//         "in": "2023-11-06 16:19:49",
//         "out": "2023-11-06 16:20:39",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-06 16:19:59",
//         "out": "2023-11-06 16:20:49",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 16:20:39",
//         "out": "2023-11-06 16:21:19",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #server-management | Rao Information Technology",
//         "in": "2023-11-06 16:20:49",
//         "out": "2023-11-06 16:21:29",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #eckerds-pharmacy-production | Rao Information Technology",
//         "in": "2023-11-06 16:21:19",
//         "out": "2023-11-06 16:21:39",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Recent download history",
//         "in": "2023-11-06 16:21:29",
//         "out": "2023-11-06 16:21:49",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 16:21:39",
//         "out": "2023-11-06 16:23:09",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Contact",
//         "in": "2023-11-06 16:21:49",
//         "out": "2023-11-06 16:23:19",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Annotate Image",
//         "in": "2023-11-06 16:23:09",
//         "out": "2023-11-06 16:23:29",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 16:23:19",
//         "out": "2023-11-06 16:23:49",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Nidhi_patel",
//         "in": "2023-11-06 16:23:29",
//         "out": "2023-11-06 16:23:59",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 16:23:49",
//         "out": "2023-11-06 16:25:39",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Nidhi_patel",
//         "in": "2023-11-06 16:23:59",
//         "out": "2023-11-06 16:26:09",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-06 16:25:39",
//         "out": "2023-11-06 16:27:29",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Nidhi_patel",
//         "in": "2023-11-06 16:26:09",
//         "out": "2023-11-06 16:27:49",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Heer Soni",
//         "in": "2023-11-06 16:27:29",
//         "out": "2023-11-06 16:28:09",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-06 16:27:49",
//         "out": "2023-11-06 16:28:19",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Heer Soni",
//         "in": "2023-11-06 16:28:09",
//         "out": "2023-11-06 16:29:29",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-06 16:28:19",
//         "out": "2023-11-06 16:32:09",
//         "idle": "00:00:00",
//         "usage": "00:03:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Heer Soni",
//         "in": "2023-11-06 16:29:29",
//         "out": "2023-11-06 16:32:29",
//         "idle": "00:00:00",
//         "usage": "00:03:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:32:09",
//         "out": "2023-11-06 16:32:39",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Heer Soni",
//         "in": "2023-11-06 16:32:29",
//         "out": "2023-11-06 16:32:49",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #programming-help | Rao Information Technology",
//         "in": "2023-11-06 16:32:39",
//         "out": "2023-11-06 16:32:59",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #general | Rao Information Technology",
//         "in": "2023-11-06 16:32:49",
//         "out": "2023-11-06 16:33:09",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "supersee windows update",
//         "in": "2023-11-06 16:32:59",
//         "out": "2023-11-06 16:33:19",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:33:09",
//         "out": "2023-11-06 16:33:23",
//         "idle": "00:00:00",
//         "usage": "00:00:14"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-06 16:38:10",
//         "out": "2023-11-06 16:39:10",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-06 16:39:10",
//         "out": "2023-11-06 16:39:40",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @Himesh Suthar",
//         "in": "2023-11-06 16:39:40",
//         "out": "2023-11-06 16:41:20",
//         "idle": "00:01:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:41:20",
//         "out": "2023-11-06 16:42:20",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:42:20",
//         "out": "2023-11-06 16:43:20",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:43:20",
//         "out": "2023-11-06 16:44:20",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:44:20",
//         "out": "2023-11-06 16:45:20",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:45:20",
//         "out": "2023-11-06 16:46:20",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:46:20",
//         "out": "2023-11-06 16:47:20",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 16:47:20",
//         "out": "2023-11-06 16:48:20",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:50:00",
//         "out": "2023-11-06 16:51:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:51:00",
//         "out": "2023-11-06 16:52:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:52:00",
//         "out": "2023-11-06 16:53:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:53:00",
//         "out": "2023-11-06 16:54:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:54:00",
//         "out": "2023-11-06 16:55:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:55:00",
//         "out": "2023-11-06 16:56:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:56:00",
//         "out": "2023-11-06 16:57:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:57:00",
//         "out": "2023-11-06 16:58:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:58:00",
//         "out": "2023-11-06 16:59:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 16:59:00",
//         "out": "2023-11-06 17:00:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:00:00",
//         "out": "2023-11-06 17:01:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:01:00",
//         "out": "2023-11-06 17:02:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:02:00",
//         "out": "2023-11-06 17:03:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:03:00",
//         "out": "2023-11-06 17:04:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:05:00",
//         "out": "2023-11-06 17:05:20",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Muskan Shah",
//         "in": "2023-11-06 17:05:20",
//         "out": "2023-11-06 17:20:10",
//         "idle": "00:03:20",
//         "usage": "00:11:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Site is not secure",
//         "in": "2023-11-06 17:20:10",
//         "out": "2023-11-06 17:21:30",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:21:30",
//         "out": "2023-11-06 17:22:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:22:30",
//         "out": "2023-11-06 17:23:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:23:30",
//         "out": "2023-11-06 17:24:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:24:30",
//         "out": "2023-11-06 17:25:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:25:30",
//         "out": "2023-11-06 17:26:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:26:30",
//         "out": "2023-11-06 17:27:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:27:30",
//         "out": "2023-11-06 17:28:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:28:30",
//         "out": "2023-11-06 17:29:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:29:30",
//         "out": "2023-11-06 17:30:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:30:30",
//         "out": "2023-11-06 17:31:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:31:30",
//         "out": "2023-11-06 17:32:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:32:30",
//         "out": "2023-11-06 17:33:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:33:30",
//         "out": "2023-11-06 17:34:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:34:30",
//         "out": "2023-11-06 17:35:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:35:30",
//         "out": "2023-11-06 17:36:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:36:30",
//         "out": "2023-11-06 17:37:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:37:30",
//         "out": "2023-11-06 17:38:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:38:30",
//         "out": "2023-11-06 17:39:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 17:39:31",
//         "out": "2023-11-06 17:40:21",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-06 17:40:21",
//         "out": "2023-11-06 17:40:31",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-06 17:40:31",
//         "out": "2023-11-06 17:44:21",
//         "idle": "00:01:30",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-06 17:44:21",
//         "out": "2023-11-06 17:45:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-06 17:45:21",
//         "out": "2023-11-06 17:46:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-06 17:46:21",
//         "out": "2023-11-06 17:47:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-06 17:47:21",
//         "out": "2023-11-06 18:04:21",
//         "idle": "00:02:00",
//         "usage": "00:15:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #general | Rao Information Technology",
//         "in": "2023-11-06 18:04:21",
//         "out": "2023-11-06 18:05:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #general | Rao Information Technology",
//         "in": "2023-11-06 18:05:21",
//         "out": "2023-11-06 18:06:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(2) Discord | #general | Rao Information Technology",
//         "in": "2023-11-06 18:06:21",
//         "out": "2023-11-06 18:07:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(4) Discord | #general | Rao Information Technology",
//         "in": "2023-11-06 18:07:21",
//         "out": "2023-11-06 18:31:21",
//         "idle": "00:02:10",
//         "usage": "00:21:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Keyur Chanchad",
//         "in": "2023-11-06 18:31:21",
//         "out": "2023-11-06 18:41:51",
//         "idle": "00:00:00",
//         "usage": "00:10:30"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-06 18:41:51",
//         "out": "2023-11-06 18:43:01",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-06 18:43:01",
//         "out": "2023-11-06 18:43:34",
//         "idle": "00:00:00",
//         "usage": "00:00:33"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Himanshu_chauhan",
//         "in": "2023-11-06 18:53:02",
//         "out": "2023-11-06 19:00:12",
//         "idle": "00:01:50",
//         "usage": "00:05:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Ralph CICO",
//         "in": "2023-11-06 19:00:12",
//         "out": "2023-11-06 19:01:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Ralph CICO",
//         "in": "2023-11-06 19:01:12",
//         "out": "2023-11-06 19:09:52",
//         "idle": "00:01:30",
//         "usage": "00:07:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 19:09:52",
//         "out": "2023-11-06 19:10:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 19:10:52",
//         "out": "2023-11-06 19:11:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 19:11:52",
//         "out": "2023-11-06 19:12:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 19:12:52",
//         "out": "2023-11-06 19:19:52",
//         "idle": "00:00:00",
//         "usage": "00:07:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-06 19:19:52",
//         "out": "2023-11-06 19:20:12",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Muskan Shah",
//         "in": "2023-11-06 19:20:12",
//         "out": "2023-11-06 19:28:32",
//         "idle": "00:02:30",
//         "usage": "00:05:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 19:28:32",
//         "out": "2023-11-06 19:30:22",
//         "idle": "00:01:30",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 19:30:22",
//         "out": "2023-11-06 19:31:22",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-06 19:31:22",
//         "out": "2023-11-06 19:33:52",
//         "idle": "00:01:20",
//         "usage": "00:01:10"
//     }
// ];
// const data =[
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 09:43:16",
//         "out": "2023-11-07 09:43:42",
//         "idle": "00:00:00",
//         "usage": "00:00:26"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 09:43:42",
//         "out": "2023-11-07 09:48:12",
//         "idle": "00:00:00",
//         "usage": "00:04:30"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:48:12",
//         "out": "2023-11-07 09:49:12",
//         "idle": "00:01:50",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:49:12",
//         "out": "2023-11-07 09:49:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:49:42",
//         "out": "2023-11-07 09:50:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:50:12",
//         "out": "2023-11-07 09:50:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:50:42",
//         "out": "2023-11-07 09:51:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:51:12",
//         "out": "2023-11-07 09:51:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:51:42",
//         "out": "2023-11-07 09:52:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:52:12",
//         "out": "2023-11-07 09:52:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:52:42",
//         "out": "2023-11-07 09:53:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:53:12",
//         "out": "2023-11-07 09:53:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:53:42",
//         "out": "2023-11-07 09:54:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:54:12",
//         "out": "2023-11-07 09:54:42",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:54:42",
//         "out": "2023-11-07 09:55:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 09:55:12",
//         "out": "2023-11-07 09:55:46",
//         "idle": "00:00:00",
//         "usage": "00:00:34"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 09:55:46",
//         "out": "2023-11-07 09:57:52",
//         "idle": "00:00:00",
//         "usage": "00:02:06"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 09:57:52",
//         "out": "2023-11-07 09:57:56",
//         "idle": "00:00:00",
//         "usage": "00:00:04"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Muskan Shah",
//         "in": "2023-11-07 09:57:56",
//         "out": "2023-11-07 10:00:02",
//         "idle": "00:00:00",
//         "usage": "00:02:06"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Volume Control",
//         "in": "2023-11-07 10:00:02",
//         "out": "2023-11-07 10:00:06",
//         "idle": "00:00:00",
//         "usage": "00:00:04"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 10:00:06",
//         "out": "2023-11-07 10:01:26",
//         "idle": "00:01:40",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 10:01:26",
//         "out": "2023-11-07 10:03:42",
//         "idle": "00:00:00",
//         "usage": "00:02:16"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "New notification",
//         "in": "2023-11-07 10:03:42",
//         "out": "2023-11-07 10:03:52",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "પરમ પૂજ્ય પાંડુરંગ શાસ્ત્રી આઠવલેજી ભારતીય સંસ્કૃતિ ચેર અને શિક્ષણ વિદ્યાશાખાના સંયુક્ત ઉપક્રમે – Saurashtra University",
//         "in": "2023-11-07 10:03:52",
//         "out": "2023-11-07 10:05:36",
//         "idle": "00:00:00",
//         "usage": "00:01:44"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "New notification",
//         "in": "2023-11-07 10:05:36",
//         "out": "2023-11-07 10:05:42",
//         "idle": "00:00:00",
//         "usage": "00:00:06"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 10:05:42",
//         "out": "2023-11-07 10:06:46",
//         "idle": "00:00:00",
//         "usage": "00:01:04"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "New notification",
//         "in": "2023-11-07 10:06:46",
//         "out": "2023-11-07 10:06:56",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Home",
//         "in": "2023-11-07 10:06:56",
//         "out": "2023-11-07 10:15:33",
//         "idle": "00:01:10",
//         "usage": "00:08:37"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "AIBI : Performance Review : 2023",
//         "in": "2023-11-07 10:18:03",
//         "out": "2023-11-07 10:21:13",
//         "idle": "00:04:20",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | @himani",
//         "in": "2023-11-07 10:21:13",
//         "out": "2023-11-07 10:34:13",
//         "idle": "00:03:30",
//         "usage": "00:13:00"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Volume Control",
//         "in": "2023-11-07 10:34:13",
//         "out": "2023-11-07 10:34:23",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 10:34:23",
//         "out": "2023-11-07 10:50:19",
//         "idle": "00:07:30",
//         "usage": "00:08:26"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:50:19",
//         "out": "2023-11-07 10:52:29",
//         "idle": "00:03:20",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:52:29",
//         "out": "2023-11-07 10:52:59",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:52:59",
//         "out": "2023-11-07 10:53:29",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:53:29",
//         "out": "2023-11-07 10:53:59",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:53:59",
//         "out": "2023-11-07 10:54:29",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:54:29",
//         "out": "2023-11-07 10:54:59",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:54:59",
//         "out": "2023-11-07 10:55:29",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:55:29",
//         "out": "2023-11-07 10:55:59",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:55:59",
//         "out": "2023-11-07 10:56:29",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:56:29",
//         "out": "2023-11-07 10:56:59",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:56:59",
//         "out": "2023-11-07 10:57:29",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:57:29",
//         "out": "2023-11-07 10:57:59",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:57:59",
//         "out": "2023-11-07 10:58:29",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:58:29",
//         "out": "2023-11-07 10:58:59",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:58:59",
//         "out": "2023-11-07 10:59:29",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:59:29",
//         "out": "2023-11-07 10:59:59",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Rao Information Technology",
//         "in": "2023-11-07 10:59:59",
//         "out": "2023-11-07 11:00:19",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 11:00:19",
//         "out": "2023-11-07 11:00:39",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 11:00:39",
//         "out": "2023-11-07 11:01:49",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Pranav Sachaniya",
//         "in": "2023-11-07 11:01:49",
//         "out": "2023-11-07 11:06:49",
//         "idle": "00:03:10",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 11:06:49",
//         "out": "2023-11-07 11:12:19",
//         "idle": "00:01:10",
//         "usage": "00:05:30"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 11:12:19",
//         "out": "2023-11-07 11:12:59",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 11:13:09",
//         "out": "2023-11-07 11:13:14",
//         "idle": "00:00:00",
//         "usage": "00:00:05"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 11:13:29",
//         "out": "2023-11-07 11:13:39",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 11:13:39",
//         "out": "2023-11-07 11:24:10",
//         "idle": "00:06:50",
//         "usage": "00:03:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 11:24:10",
//         "out": "2023-11-07 11:24:40",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 11:24:40",
//         "out": "2023-11-07 11:25:10",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 11:25:10",
//         "out": "2023-11-07 11:36:58",
//         "idle": "00:03:10",
//         "usage": "00:11:48"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 11:46:51",
//         "out": "2023-11-07 11:47:11",
//         "idle": "00:03:10",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Ralph cico .apk v1.0.4",
//         "in": "2023-11-07 11:47:11",
//         "out": "2023-11-07 12:29:22",
//         "idle": "00:06:00",
//         "usage": "00:36:11"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(1) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 12:29:22",
//         "out": "2023-11-07 12:46:24",
//         "idle": "00:03:10",
//         "usage": "00:17:02"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(4) Discord | #trafie-sales | Rao Information Technology",
//         "in": "2023-11-07 13:48:05",
//         "out": "2023-11-07 13:49:15",
//         "idle": "00:05:00",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "(4) Discord | #trafie-sales | Rao Information Technology",
//         "in": "2023-11-07 13:49:15",
//         "out": "2023-11-07 14:06:56",
//         "idle": "00:01:50",
//         "usage": "00:17:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-07 14:17:06",
//         "out": "2023-11-07 14:43:07",
//         "idle": "00:09:20",
//         "usage": "00:16:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "fullPage",
//         "in": "2023-11-07 14:43:07",
//         "out": "2023-11-07 14:58:34",
//         "idle": "00:02:00",
//         "usage": "00:15:27"
//     },
//     {
//         "appName": "LockApp.exe",
//         "windowName": "Windows Default Lock Screen",
//         "in": "2023-11-07 14:58:41",
//         "out": "2023-11-07 15:46:58",
//         "idle": "00:02:00",
//         "usage": "00:48:17"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "UnlockingWindow",
//         "in": "2023-11-07 15:46:58",
//         "out": "2023-11-07 15:47:08",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Stuti Institute of Performing Arts",
//         "in": "2023-11-07 15:47:08",
//         "out": "2023-11-07 15:53:19",
//         "idle": "00:02:10",
//         "usage": "00:04:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Stuti Institute of Performing Arts",
//         "in": "2023-11-07 15:53:19",
//         "out": "2023-11-07 16:05:09",
//         "idle": "00:04:20",
//         "usage": "00:07:30"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:05:09",
//         "out": "2023-11-07 16:05:39",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:05:39",
//         "out": "2023-11-07 16:06:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:06:09",
//         "out": "2023-11-07 16:06:39",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:06:39",
//         "out": "2023-11-07 16:07:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:07:09",
//         "out": "2023-11-07 16:07:39",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:07:39",
//         "out": "2023-11-07 16:08:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:08:09",
//         "out": "2023-11-07 16:08:39",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:08:39",
//         "out": "2023-11-07 16:09:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:09:09",
//         "out": "2023-11-07 16:09:39",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:09:39",
//         "out": "2023-11-07 16:10:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Bhavbhumi Party Plot",
//         "in": "2023-11-07 16:10:09",
//         "out": "2023-11-07 16:19:01",
//         "idle": "00:00:00",
//         "usage": "00:08:52"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 16:28:30",
//         "out": "2023-11-07 16:34:20",
//         "idle": "00:05:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:34:20",
//         "out": "2023-11-07 16:34:50",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:34:50",
//         "out": "2023-11-07 16:35:20",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:35:20",
//         "out": "2023-11-07 16:37:00",
//         "idle": "00:02:00",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:37:00",
//         "out": "2023-11-07 16:39:30",
//         "idle": "00:01:10",
//         "usage": "00:02:30"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "New notification",
//         "in": "2023-11-07 16:39:30",
//         "out": "2023-11-07 16:39:41",
//         "idle": "00:00:00",
//         "usage": "00:00:11"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Saurashtra High School",
//         "in": "2023-11-07 16:39:41",
//         "out": "2023-11-07 16:41:41",
//         "idle": "00:02:10",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:41:41",
//         "out": "2023-11-07 16:50:51",
//         "idle": "00:04:20",
//         "usage": "00:04:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:50:51",
//         "out": "2023-11-07 16:51:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:51:21",
//         "out": "2023-11-07 16:51:51",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:51:51",
//         "out": "2023-11-07 16:52:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:52:21",
//         "out": "2023-11-07 16:52:51",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:52:51",
//         "out": "2023-11-07 16:53:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:53:21",
//         "out": "2023-11-07 16:53:51",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 16:53:51",
//         "out": "2023-11-07 16:56:11",
//         "idle": "00:03:00",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Ralph cico .apk v1.0.4",
//         "in": "2023-11-07 16:56:11",
//         "out": "2023-11-07 16:56:41",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Ralph cico .apk v1.0.4",
//         "in": "2023-11-07 16:56:41",
//         "out": "2023-11-07 17:05:42",
//         "idle": "00:05:20",
//         "usage": "00:03:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 17:05:42",
//         "out": "2023-11-07 17:06:23",
//         "idle": "00:00:00",
//         "usage": "00:00:41"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 17:17:33",
//         "out": "2023-11-07 17:19:23",
//         "idle": "00:02:40",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:19:23",
//         "out": "2023-11-07 17:19:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:19:53",
//         "out": "2023-11-07 17:20:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:20:23",
//         "out": "2023-11-07 17:20:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:20:53",
//         "out": "2023-11-07 17:21:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:21:23",
//         "out": "2023-11-07 17:21:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:21:53",
//         "out": "2023-11-07 17:22:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:22:23",
//         "out": "2023-11-07 17:22:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:22:53",
//         "out": "2023-11-07 17:23:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:23:23",
//         "out": "2023-11-07 17:23:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:23:53",
//         "out": "2023-11-07 17:24:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:24:23",
//         "out": "2023-11-07 17:24:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:24:53",
//         "out": "2023-11-07 17:25:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:25:23",
//         "out": "2023-11-07 17:25:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:25:53",
//         "out": "2023-11-07 17:26:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:26:23",
//         "out": "2023-11-07 17:26:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:26:53",
//         "out": "2023-11-07 17:27:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:27:23",
//         "out": "2023-11-07 17:27:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:27:53",
//         "out": "2023-11-07 17:28:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "lookerstudio.google.com/reporting/b9b661e3-b485-4b3d-a4f1-ce0f73c50439/page/Opbi/edit",
//         "in": "2023-11-07 17:28:23",
//         "out": "2023-11-07 17:38:34",
//         "idle": "00:04:00",
//         "usage": "00:06:11"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Nidhi_patel",
//         "in": "2023-11-07 17:38:34",
//         "out": "2023-11-07 17:39:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Nidhi_patel",
//         "in": "2023-11-07 17:39:04",
//         "out": "2023-11-07 17:46:14",
//         "idle": "00:01:30",
//         "usage": "00:07:10"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "New notification",
//         "in": "2023-11-07 17:46:14",
//         "out": "2023-11-07 17:46:24",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Conduct Dashboard › Copy of Logs Overview",
//         "in": "2023-11-07 17:46:24",
//         "out": "2023-11-07 17:49:09",
//         "idle": "00:00:00",
//         "usage": "00:02:45"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Volume Control",
//         "in": "2023-11-07 17:49:09",
//         "out": "2023-11-07 17:49:19",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 17:49:19",
//         "out": "2023-11-07 17:50:39",
//         "idle": "00:01:50",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 17:50:39",
//         "out": "2023-11-07 17:51:09",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 17:51:09",
//         "out": "2023-11-07 17:51:39",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 18:03:59",
//         "out": "2023-11-07 18:03:59",
//         "idle": "00:00:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "conduct updates",
//         "in": "2023-11-07 18:16:20",
//         "out": "2023-11-07 18:25:40",
//         "idle": "00:05:20",
//         "usage": "00:04:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 18:25:40",
//         "out": "2023-11-07 18:28:00",
//         "idle": "00:02:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Conduct Dashboard › Copy of Logs Overview",
//         "in": "2023-11-07 18:28:00",
//         "out": "2023-11-07 18:28:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Conduct Dashboard › Copy of Logs Overview",
//         "in": "2023-11-07 18:28:30",
//         "out": "2023-11-07 18:33:00",
//         "idle": "00:02:40",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "conduct updates",
//         "in": "2023-11-07 18:33:00",
//         "out": "2023-11-07 18:34:10",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "",
//         "in": "2023-11-07 18:34:10",
//         "out": "2023-11-07 18:34:10",
//         "idle": "00:00:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #general | Rao Information Technology",
//         "in": "2023-11-07 18:34:20",
//         "out": "2023-11-07 18:46:20",
//         "idle": "00:02:00",
//         "usage": "00:12:00"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Volume Control",
//         "in": "2023-11-07 18:46:20",
//         "out": "2023-11-07 18:47:30",
//         "idle": "00:01:50",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Volume Control",
//         "in": "2023-11-07 18:47:30",
//         "out": "2023-11-07 18:48:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Windows Shell Experience Host",
//         "windowName": "Volume Control",
//         "in": "2023-11-07 18:48:00",
//         "out": "2023-11-07 18:48:40",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 18:48:40",
//         "out": "2023-11-07 18:48:50",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Windows Explorer",
//         "windowName": "Task Switching",
//         "in": "2023-11-07 18:48:50",
//         "out": "2023-11-07 18:49:00",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Conduct Dashboard › Copy of Logs Overview",
//         "in": "2023-11-07 18:49:00",
//         "out": "2023-11-07 18:58:41",
//         "idle": "00:01:50",
//         "usage": "00:07:51"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 18:58:41",
//         "out": "2023-11-07 18:59:11",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 18:59:11",
//         "out": "2023-11-07 19:04:11",
//         "idle": "00:03:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 19:04:11",
//         "out": "2023-11-07 19:04:41",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 19:04:41",
//         "out": "2023-11-07 19:05:11",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Meet",
//         "in": "2023-11-07 19:05:11",
//         "out": "2023-11-07 19:06:51",
//         "idle": "00:02:40",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Copy of SuperSee Dashboard › Copy of User Id",
//         "in": "2023-11-07 19:06:51",
//         "out": "2023-11-07 19:07:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Copy of SuperSee Dashboard › Copy of User Id",
//         "in": "2023-11-07 19:07:21",
//         "out": "2023-11-07 19:07:51",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Copy of SuperSee Dashboard › Copy of User Id",
//         "in": "2023-11-07 19:07:51",
//         "out": "2023-11-07 19:08:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Copy of SuperSee Dashboard › Copy of User Id",
//         "in": "2023-11-07 19:08:21",
//         "out": "2023-11-07 19:08:51",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Copy of SuperSee Dashboard › Copy of User Id",
//         "in": "2023-11-07 19:08:51",
//         "out": "2023-11-07 19:09:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Copy of SuperSee Dashboard › Copy of User Id",
//         "in": "2023-11-07 19:09:21",
//         "out": "2023-11-07 19:09:51",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "Copy of SuperSee Dashboard › Copy of User Id",
//         "in": "2023-11-07 19:09:51",
//         "out": "2023-11-07 19:13:11",
//         "idle": "00:03:20",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-07 19:13:11",
//         "out": "2023-11-07 19:13:41",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-07 19:13:41",
//         "out": "2023-11-07 19:15:21",
//         "idle": "00:02:20",
//         "usage": "-00:00:01"
//     },
//     {
//         "appName": "Google Chrome",
//         "windowName": "• Discord | #wp-general | Rao Information Technology",
//         "in": "2023-11-07 19:15:21",
//         "out": "2023-11-07 19:15:51",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     }
// ];
//ronak 
//  const data =[
//     {
//         "appName": "Chromium",
//         "windowName": "New Tab",
//         "in": "2023-11-07 11:02:31",
//         "out": "2023-11-07 11:02:51",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 11:02:51",
//         "out": "2023-11-07 11:03:41",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "New Tab",
//         "in": "2023-11-07 11:03:41",
//         "out": "2023-11-07 11:04:21",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 11:04:21",
//         "out": "2023-11-07 11:06:31",
//         "idle": "00:01:30",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Downloading Update",
//         "in": "2023-11-07 11:06:31",
//         "out": "2023-11-07 11:06:59",
//         "idle": "00:00:00",
//         "usage": "00:00:28"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 11:14:31",
//         "out": "2023-11-07 11:15:31",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 11:15:31",
//         "out": "2023-11-07 11:19:01",
//         "idle": "00:01:10",
//         "usage": "00:03:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 11:19:01",
//         "out": "2023-11-07 11:19:11",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 11:19:11",
//         "out": "2023-11-07 11:19:21",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 11:19:21",
//         "out": "2023-11-07 11:20:31",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/supersee-admin-newUI",
//         "in": "2023-11-07 11:20:31",
//         "out": "2023-11-07 11:22:41",
//         "idle": "00:01:10",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 11:22:41",
//         "out": "2023-11-07 11:23:01",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 11:23:01",
//         "out": "2023-11-07 11:23:11",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 11:23:11",
//         "out": "2023-11-07 11:24:31",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 11:24:31",
//         "out": "2023-11-07 11:25:11",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 11:25:11",
//         "out": "2023-11-07 11:25:21",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 11:25:21",
//         "out": "2023-11-07 11:25:41",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 11:25:41",
//         "out": "2023-11-07 11:26:01",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● visit.component.html",
//         "in": "2023-11-07 11:26:01",
//         "out": "2023-11-07 11:26:41",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 11:26:41",
//         "out": "2023-11-07 11:27:11",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● visit.component.html",
//         "in": "2023-11-07 11:27:11",
//         "out": "2023-11-07 11:27:21",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 11:27:21",
//         "out": "2023-11-07 11:27:41",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:27:41",
//         "out": "2023-11-07 11:27:51",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 11:27:51",
//         "out": "2023-11-07 11:28:11",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 11:28:11",
//         "out": "2023-11-07 11:28:21",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:28:21",
//         "out": "2023-11-07 11:28:31",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 11:28:31",
//         "out": "2023-11-07 11:29:11",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:29:11",
//         "out": "2023-11-07 11:31:01",
//         "idle": "00:01:20",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:31:01",
//         "out": "2023-11-07 11:32:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:32:01",
//         "out": "2023-11-07 11:33:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:33:01",
//         "out": "2023-11-07 11:34:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:35:01",
//         "out": "2023-11-07 11:36:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:36:01",
//         "out": "2023-11-07 11:37:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:37:01",
//         "out": "2023-11-07 11:38:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:38:01",
//         "out": "2023-11-07 11:39:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:39:01",
//         "out": "2023-11-07 11:40:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:40:01",
//         "out": "2023-11-07 11:41:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:41:01",
//         "out": "2023-11-07 11:42:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:42:01",
//         "out": "2023-11-07 11:43:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:43:01",
//         "out": "2023-11-07 11:44:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:44:01",
//         "out": "2023-11-07 11:45:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:45:01",
//         "out": "2023-11-07 11:46:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:46:01",
//         "out": "2023-11-07 11:47:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:47:01",
//         "out": "2023-11-07 11:48:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:48:01",
//         "out": "2023-11-07 11:49:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:49:01",
//         "out": "2023-11-07 11:50:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:50:01",
//         "out": "2023-11-07 11:51:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:51:01",
//         "out": "2023-11-07 11:52:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:52:01",
//         "out": "2023-11-07 11:53:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:53:01",
//         "out": "2023-11-07 11:54:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:54:01",
//         "out": "2023-11-07 11:55:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:55:01",
//         "out": "2023-11-07 11:56:31",
//         "idle": "00:01:10",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:56:31",
//         "out": "2023-11-07 11:57:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:57:31",
//         "out": "2023-11-07 11:58:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:58:31",
//         "out": "2023-11-07 11:59:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 11:59:31",
//         "out": "2023-11-07 12:00:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:00:31",
//         "out": "2023-11-07 12:01:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:01:31",
//         "out": "2023-11-07 12:02:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:02:31",
//         "out": "2023-11-07 12:03:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:03:31",
//         "out": "2023-11-07 12:04:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:04:31",
//         "out": "2023-11-07 12:05:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:05:31",
//         "out": "2023-11-07 12:06:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:06:31",
//         "out": "2023-11-07 12:07:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:07:31",
//         "out": "2023-11-07 12:08:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:08:31",
//         "out": "2023-11-07 12:09:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:09:31",
//         "out": "2023-11-07 12:10:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:10:31",
//         "out": "2023-11-07 12:11:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:11:31",
//         "out": "2023-11-07 12:12:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:12:31",
//         "out": "2023-11-07 12:13:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:13:31",
//         "out": "2023-11-07 12:14:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:14:31",
//         "out": "2023-11-07 12:15:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:15:31",
//         "out": "2023-11-07 12:16:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:16:31",
//         "out": "2023-11-07 12:17:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:17:31",
//         "out": "2023-11-07 12:18:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:18:31",
//         "out": "2023-11-07 12:19:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:19:31",
//         "out": "2023-11-07 12:20:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:20:31",
//         "out": "2023-11-07 12:21:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:21:31",
//         "out": "2023-11-07 12:22:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:22:31",
//         "out": "2023-11-07 12:23:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:23:31",
//         "out": "2023-11-07 12:24:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:24:31",
//         "out": "2023-11-07 12:25:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:25:31",
//         "out": "2023-11-07 12:26:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:26:31",
//         "out": "2023-11-07 12:27:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:27:31",
//         "out": "2023-11-07 12:28:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:28:31",
//         "out": "2023-11-07 12:29:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:29:31",
//         "out": "2023-11-07 12:30:21",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:30:21",
//         "out": "2023-11-07 12:32:41",
//         "idle": "00:00:00",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:32:41",
//         "out": "2023-11-07 12:33:51",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:33:51",
//         "out": "2023-11-07 12:34:01",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 12:34:01",
//         "out": "2023-11-07 12:34:21",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:34:21",
//         "out": "2023-11-07 12:34:31",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:34:31",
//         "out": "2023-11-07 12:34:51",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:34:51",
//         "out": "2023-11-07 12:35:21",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:35:21",
//         "out": "2023-11-07 12:35:31",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:35:31",
//         "out": "2023-11-07 12:36:01",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:36:01",
//         "out": "2023-11-07 12:37:01",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:37:01",
//         "out": "2023-11-07 12:37:21",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:37:21",
//         "out": "2023-11-07 12:37:51",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:37:51",
//         "out": "2023-11-07 12:38:31",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:38:31",
//         "out": "2023-11-07 12:38:51",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:38:51",
//         "out": "2023-11-07 12:39:11",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:39:11",
//         "out": "2023-11-07 12:39:41",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:39:41",
//         "out": "2023-11-07 12:40:21",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 12:40:21",
//         "out": "2023-11-07 12:40:51",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 12:40:51",
//         "out": "2023-11-07 12:45:01",
//         "idle": "00:00:00",
//         "usage": "00:04:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "Welcome",
//         "in": "2023-11-07 12:45:01",
//         "out": "2023-11-07 12:45:31",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop",
//         "in": "2023-11-07 12:45:31",
//         "out": "2023-11-07 12:47:41",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Home",
//         "in": "2023-11-07 12:47:41",
//         "out": "2023-11-07 12:47:51",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 12:47:51",
//         "out": "2023-11-07 12:48:51",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "timeline-map.page.html",
//         "in": "2023-11-07 12:48:51",
//         "out": "2023-11-07 12:49:11",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 12:49:11",
//         "out": "2023-11-07 12:50:11",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "New Tab",
//         "in": "2023-11-07 12:50:11",
//         "out": "2023-11-07 12:50:51",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 12:50:51",
//         "out": "2023-11-07 12:51:44",
//         "idle": "00:00:00",
//         "usage": "00:00:53"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 12:51:44",
//         "out": "2023-11-07 12:52:13",
//         "idle": "00:00:00",
//         "usage": "00:00:29"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-07 12:52:13",
//         "out": "2023-11-07 12:53:54",
//         "idle": "00:00:00",
//         "usage": "00:01:41"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 12:53:54",
//         "out": "2023-11-07 12:55:34",
//         "idle": "00:01:20",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 12:55:34",
//         "out": "2023-11-07 12:56:34",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 12:56:34",
//         "out": "2023-11-07 12:57:34",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 12:57:34",
//         "out": "2023-11-07 12:58:34",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 12:58:34",
//         "out": "2023-11-07 13:00:14",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 13:00:14",
//         "out": "2023-11-07 13:00:24",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "timeline-map.page.html",
//         "in": "2023-11-07 13:00:24",
//         "out": "2023-11-07 13:02:04",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 13:02:04",
//         "out": "2023-11-07 13:02:44",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "timeline-map.page.html",
//         "in": "2023-11-07 13:02:44",
//         "out": "2023-11-07 13:06:54",
//         "idle": "00:01:50",
//         "usage": "00:04:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 13:06:54",
//         "out": "2023-11-07 13:07:44",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "package.json",
//         "in": "2023-11-07 13:07:44",
//         "out": "2023-11-07 13:07:54",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 13:07:54",
//         "out": "2023-11-07 13:09:14",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 13:09:14",
//         "out": "2023-11-07 13:10:14",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 13:10:14",
//         "out": "2023-11-07 13:14:44",
//         "idle": "00:03:20",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "New Tab",
//         "in": "2023-11-07 13:51:44",
//         "out": "2023-11-07 13:53:04",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 13:53:04",
//         "out": "2023-11-07 13:53:24",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Downloads",
//         "in": "2023-11-07 13:53:24",
//         "out": "2023-11-07 13:54:14",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "localhost",
//         "in": "2023-11-07 13:54:14",
//         "out": "2023-11-07 13:55:34",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 13:55:34",
//         "out": "2023-11-07 13:56:34",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 13:56:34",
//         "out": "2023-11-07 13:57:44",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 13:57:44",
//         "out": "2023-11-07 14:00:44",
//         "idle": "00:00:00",
//         "usage": "00:03:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 14:00:44",
//         "out": "2023-11-07 14:02:54",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:02:54",
//         "out": "2023-11-07 14:03:34",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:03:34",
//         "out": "2023-11-07 14:04:34",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:04:34",
//         "out": "2023-11-07 14:05:34",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:05:34",
//         "out": "2023-11-07 14:06:34",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:06:34",
//         "out": "2023-11-07 14:06:44",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 14:06:44",
//         "out": "2023-11-07 14:08:34",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:08:34",
//         "out": "2023-11-07 14:09:04",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 14:09:04",
//         "out": "2023-11-07 14:09:34",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:09:34",
//         "out": "2023-11-07 14:10:34",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:10:34",
//         "out": "2023-11-07 14:12:04",
//         "idle": "00:01:10",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:12:04",
//         "out": "2023-11-07 14:13:24",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● dashboard.component.ts",
//         "in": "2023-11-07 14:13:24",
//         "out": "2023-11-07 14:13:34",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:13:34",
//         "out": "2023-11-07 14:13:54",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:13:54",
//         "out": "2023-11-07 14:15:54",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:15:54",
//         "out": "2023-11-07 14:16:44",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:16:44",
//         "out": "2023-11-07 14:22:04",
//         "idle": "00:00:00",
//         "usage": "00:05:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:22:04",
//         "out": "2023-11-07 14:23:54",
//         "idle": "00:01:10",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:23:54",
//         "out": "2023-11-07 14:24:54",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:24:54",
//         "out": "2023-11-07 14:26:34",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:26:34",
//         "out": "2023-11-07 14:27:34",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:27:34",
//         "out": "2023-11-07 14:28:34",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 14:28:34",
//         "out": "2023-11-07 14:29:14",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:29:14",
//         "out": "2023-11-07 14:29:24",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/supersee-admin-newUI",
//         "in": "2023-11-07 14:29:24",
//         "out": "2023-11-07 14:30:14",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "(1) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 14:30:14",
//         "out": "2023-11-07 14:31:14",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 14:31:14",
//         "out": "2023-11-07 14:32:14",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 14:32:14",
//         "out": "2023-11-07 14:33:14",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 14:33:14",
//         "out": "2023-11-07 14:34:14",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 14:34:14",
//         "out": "2023-11-07 14:34:34",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Desktop",
//         "in": "2023-11-07 14:34:34",
//         "out": "2023-11-07 14:35:24",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 14:35:24",
//         "out": "2023-11-07 14:37:14",
//         "idle": "00:01:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 14:37:14",
//         "out": "2023-11-07 14:38:14",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 14:38:14",
//         "out": "2023-11-07 14:38:24",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Home",
//         "in": "2023-11-07 14:38:24",
//         "out": "2023-11-07 14:39:04",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 14:39:04",
//         "out": "2023-11-07 14:39:54",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Import Android Studio Settings",
//         "in": "2023-11-07 14:39:54",
//         "out": "2023-11-07 14:40:14",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 14:40:14",
//         "out": "2023-11-07 14:40:24",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Welcome to Android Studio",
//         "in": "2023-11-07 14:40:24",
//         "out": "2023-11-07 14:41:04",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 14:41:04",
//         "out": "2023-11-07 14:41:24",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Open File or Project",
//         "in": "2023-11-07 14:41:24",
//         "out": "2023-11-07 14:42:24",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 14:42:24",
//         "out": "2023-11-07 14:42:34",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Select SDKs",
//         "in": "2023-11-07 14:42:34",
//         "out": "2023-11-07 14:42:54",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 14:42:54",
//         "out": "2023-11-07 14:43:44",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 14:43:44",
//         "out": "2023-11-07 14:45:54",
//         "idle": "00:01:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 14:45:54",
//         "out": "2023-11-07 14:46:54",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 14:46:54",
//         "out": "2023-11-07 14:48:54",
//         "idle": "00:01:50",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 14:48:54",
//         "out": "2023-11-07 14:50:54",
//         "idle": "00:01:50",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 14:50:54",
//         "out": "2023-11-07 14:52:04",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 14:52:04",
//         "out": "2023-11-07 14:52:54",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 14:52:54",
//         "out": "2023-11-07 14:53:54",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 14:53:54",
//         "out": "2023-11-07 14:54:14",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 14:54:14",
//         "out": "2023-11-07 14:55:14",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 14:55:14",
//         "out": "2023-11-07 14:55:54",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Welcome to Android Studio",
//         "in": "2023-11-07 14:55:54",
//         "out": "2023-11-07 14:56:44",
//         "idle": "00:00:50",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Welcome to Android Studio",
//         "in": "2023-11-07 14:56:44",
//         "out": "2023-11-07 14:57:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Welcome to Android Studio",
//         "in": "2023-11-07 14:57:44",
//         "out": "2023-11-07 14:58:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Welcome to Android Studio",
//         "in": "2023-11-07 14:58:44",
//         "out": "2023-11-07 14:59:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Welcome to Android Studio",
//         "in": "2023-11-07 14:59:44",
//         "out": "2023-11-07 15:00:44",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 15:00:44",
//         "out": "2023-11-07 15:01:04",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:01:04",
//         "out": "2023-11-07 15:02:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:02:04",
//         "out": "2023-11-07 15:03:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:03:04",
//         "out": "2023-11-07 15:04:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:04:04",
//         "out": "2023-11-07 15:05:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:05:04",
//         "out": "2023-11-07 15:06:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:06:04",
//         "out": "2023-11-07 15:07:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:07:04",
//         "out": "2023-11-07 15:08:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:08:04",
//         "out": "2023-11-07 15:09:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:10:04",
//         "out": "2023-11-07 15:11:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:11:04",
//         "out": "2023-11-07 15:12:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:12:04",
//         "out": "2023-11-07 15:13:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:13:04",
//         "out": "2023-11-07 15:14:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:14:04",
//         "out": "2023-11-07 15:15:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:15:04",
//         "out": "2023-11-07 15:16:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:16:04",
//         "out": "2023-11-07 15:17:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:17:04",
//         "out": "2023-11-07 15:18:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:18:04",
//         "out": "2023-11-07 15:19:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:19:04",
//         "out": "2023-11-07 15:20:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:20:04",
//         "out": "2023-11-07 15:21:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:21:04",
//         "out": "2023-11-07 15:22:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:22:04",
//         "out": "2023-11-07 15:23:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:23:04",
//         "out": "2023-11-07 15:24:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:24:04",
//         "out": "2023-11-07 15:25:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:25:04",
//         "out": "2023-11-07 15:26:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:26:04",
//         "out": "2023-11-07 15:27:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:27:04",
//         "out": "2023-11-07 15:28:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:28:04",
//         "out": "2023-11-07 15:29:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:29:04",
//         "out": "2023-11-07 15:30:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:30:04",
//         "out": "2023-11-07 15:31:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:31:04",
//         "out": "2023-11-07 15:32:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:32:04",
//         "out": "2023-11-07 15:33:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:33:04",
//         "out": "2023-11-07 15:34:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:34:04",
//         "out": "2023-11-07 15:35:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:35:04",
//         "out": "2023-11-07 15:36:04",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:36:04",
//         "out": "2023-11-07 15:38:04",
//         "idle": "00:01:10",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Welcome to Android Studio",
//         "in": "2023-11-07 15:38:04",
//         "out": "2023-11-07 15:39:34",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 15:39:34",
//         "out": "2023-11-07 15:39:54",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | #supersee | Rao Information Technology",
//         "in": "2023-11-07 15:39:54",
//         "out": "2023-11-07 15:40:14",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 15:40:14",
//         "out": "2023-11-07 15:40:24",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app/android",
//         "in": "2023-11-07 15:40:24",
//         "out": "2023-11-07 15:41:44",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "localhost",
//         "in": "2023-11-07 15:41:44",
//         "out": "2023-11-07 15:43:04",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:43:04",
//         "out": "2023-11-07 15:43:44",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Building And Releasing Your Capacitor Android App",
//         "in": "2023-11-07 15:43:44",
//         "out": "2023-11-07 15:43:54",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:43:54",
//         "out": "2023-11-07 15:45:24",
//         "idle": "00:01:20",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 15:45:24",
//         "out": "2023-11-07 15:46:04",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "[error] Unable to launch Android Studio. Is it installed? [capacitor] Attempted to open Android Studio at: path of android-studio/bin/studio.sh",
//         "in": "2023-11-07 15:46:04",
//         "out": "2023-11-07 15:46:34",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Welcome to Android Studio",
//         "in": "2023-11-07 15:46:34",
//         "out": "2023-11-07 15:46:44",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 15:46:44",
//         "out": "2023-11-07 15:47:04",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "How to run Ionic app on android-studio with capacitor on Ubuntu?",
//         "in": "2023-11-07 15:47:04",
//         "out": "2023-11-07 15:50:44",
//         "idle": "00:01:00",
//         "usage": "00:02:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Download Android Studio & App Tools",
//         "in": "2023-11-07 15:50:44",
//         "out": "2023-11-07 15:51:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Download Android Studio & App Tools",
//         "in": "2023-11-07 15:51:44",
//         "out": "2023-11-07 15:53:44",
//         "idle": "00:01:20",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Install Android Studio  |  Android Developers",
//         "in": "2023-11-07 15:53:44",
//         "out": "2023-11-07 15:54:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Install Android Studio  |  Android Developers",
//         "in": "2023-11-07 15:54:44",
//         "out": "2023-11-07 15:55:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Install Android Studio  |  Android Developers",
//         "in": "2023-11-07 15:55:44",
//         "out": "2023-11-07 15:56:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Install Android Studio  |  Android Developers",
//         "in": "2023-11-07 15:56:44",
//         "out": "2023-11-07 15:58:54",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "File-roller",
//         "windowName": "android-studio-2022.3.1.20-linux.tar.gz ",
//         "in": "2023-11-07 15:58:54",
//         "out": "2023-11-07 16:01:24",
//         "idle": "00:00:00",
//         "usage": "00:02:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 16:01:24",
//         "out": "2023-11-07 16:01:45",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Install Android Studio  |  Android Developers",
//         "in": "2023-11-07 16:01:45",
//         "out": "2023-11-07 16:01:54",
//         "idle": "00:00:00",
//         "usage": "00:00:09"
//     },
//     {
//         "appName": "Code",
//         "windowName": "dashboard.component.ts",
//         "in": "2023-11-07 16:01:54",
//         "out": "2023-11-07 16:03:44",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Install Android Studio  |  Android Developers",
//         "in": "2023-11-07 16:03:44",
//         "out": "2023-11-07 16:04:35",
//         "idle": "00:00:00",
//         "usage": "00:00:51"
//     },
//     {
//         "appName": "File-roller",
//         "windowName": "android-studio-2022.3.1.20-linux.tar.gz ",
//         "in": "2023-11-07 16:04:35",
//         "out": "2023-11-07 16:06:05",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "usr",
//         "in": "2023-11-07 16:06:05",
//         "out": "2023-11-07 16:07:15",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Install Android Studio  |  Android Developers",
//         "in": "2023-11-07 16:07:15",
//         "out": "2023-11-07 16:07:25",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 16:07:25",
//         "out": "2023-11-07 16:07:45",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 16:07:45",
//         "out": "2023-11-07 16:08:25",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Downloads",
//         "in": "2023-11-07 16:08:25",
//         "out": "2023-11-07 16:09:45",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 16:09:45",
//         "out": "2023-11-07 16:10:25",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 16:10:25",
//         "out": "2023-11-07 16:11:05",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "android-studio",
//         "in": "2023-11-07 16:11:05",
//         "out": "2023-11-07 16:11:45",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 16:11:45",
//         "out": "2023-11-07 16:12:15",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Search for android-st",
//         "in": "2023-11-07 16:12:15",
//         "out": "2023-11-07 16:12:45",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 16:12:45",
//         "out": "2023-11-07 16:12:55",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 16:12:55",
//         "out": "2023-11-07 16:13:35",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 16:13:35",
//         "out": "2023-11-07 16:13:45",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "How to run Ionic app on android-studio with capacitor on Ubuntu?",
//         "in": "2023-11-07 16:13:45",
//         "out": "2023-11-07 16:14:15",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 16:14:15",
//         "out": "2023-11-07 16:14:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "How to run Ionic app on android-studio with capacitor on Ubuntu?",
//         "in": "2023-11-07 16:14:35",
//         "out": "2023-11-07 16:14:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "capacitor.config.json",
//         "in": "2023-11-07 16:14:55",
//         "out": "2023-11-07 16:15:45",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 16:15:45",
//         "out": "2023-11-07 16:15:48",
//         "idle": "00:00:00",
//         "usage": "00:00:03"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "trafi-cico-app",
//         "in": "2023-11-07 16:36:05",
//         "out": "2023-11-07 16:36:15",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/supersee-admin-newUI",
//         "in": "2023-11-07 16:36:15",
//         "out": "2023-11-07 16:36:25",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Mehul Bhatt",
//         "in": "2023-11-07 16:36:25",
//         "out": "2023-11-07 16:37:35",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 16:37:35",
//         "out": "2023-11-07 16:37:45",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 16:37:45",
//         "out": "2023-11-07 16:38:55",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 16:38:55",
//         "out": "2023-11-07 16:39:45",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/supersee-admin-newUI",
//         "in": "2023-11-07 16:39:45",
//         "out": "2023-11-07 16:39:55",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 16:39:55",
//         "out": "2023-11-07 16:40:35",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 16:40:35",
//         "out": "2023-11-07 16:40:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 16:40:55",
//         "out": "2023-11-07 16:43:35",
//         "idle": "00:00:00",
//         "usage": "00:02:40"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 16:43:35",
//         "out": "2023-11-07 16:43:45",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "capacitor.config.ts",
//         "in": "2023-11-07 16:43:45",
//         "out": "2023-11-07 16:44:05",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 16:44:05",
//         "out": "2023-11-07 16:44:15",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/supersee-admin-newUI",
//         "in": "2023-11-07 16:44:15",
//         "out": "2023-11-07 16:44:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Desktop",
//         "in": "2023-11-07 16:44:35",
//         "out": "2023-11-07 16:46:25",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 16:46:25",
//         "out": "2023-11-07 16:50:45",
//         "idle": "00:00:00",
//         "usage": "00:04:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "How to run Ionic app on android-studio with capacitor on Ubuntu?",
//         "in": "2023-11-07 16:50:45",
//         "out": "2023-11-07 16:52:05",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "capacitor.config.json",
//         "in": "2023-11-07 16:52:05",
//         "out": "2023-11-07 16:53:25",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "How to run Ionic app on android-studio with capacitor on Ubuntu?",
//         "in": "2023-11-07 16:53:25",
//         "out": "2023-11-07 16:53:35",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "package-lock.json",
//         "in": "2023-11-07 16:53:35",
//         "out": "2023-11-07 16:53:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "How to run Ionic app on android-studio with capacitor on Ubuntu?",
//         "in": "2023-11-07 16:53:55",
//         "out": "2023-11-07 16:54:05",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "capacitor.config.ts",
//         "in": "2023-11-07 16:54:05",
//         "out": "2023-11-07 16:54:55",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "How to run Ionic app on android-studio with capacitor on Ubuntu?",
//         "in": "2023-11-07 16:54:55",
//         "out": "2023-11-07 16:55:25",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gedit",
//         "windowName": ".bashrc (~/Desktop/trafi-cico-app)",
//         "in": "2023-11-07 16:55:25",
//         "out": "2023-11-07 16:55:45",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "How to run Ionic app on android-studio with capacitor on Ubuntu?",
//         "in": "2023-11-07 16:55:45",
//         "out": "2023-11-07 16:55:55",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gedit",
//         "windowName": "*.bashrc (~/Desktop/trafi-cico-app)",
//         "in": "2023-11-07 16:55:55",
//         "out": "2023-11-07 16:56:05",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "studio.sh Properties",
//         "in": "2023-11-07 16:56:05",
//         "out": "2023-11-07 16:56:15",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gedit",
//         "windowName": "*.bashrc (~/Desktop/trafi-cico-app)",
//         "in": "2023-11-07 16:56:15",
//         "out": "2023-11-07 16:56:25",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 16:56:25",
//         "out": "2023-11-07 16:56:35",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "(1) Discord | @Himesh Suthar",
//         "in": "2023-11-07 16:56:35",
//         "out": "2023-11-07 16:57:15",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Org.gnome.Software",
//         "windowName": "Software",
//         "in": "2023-11-07 16:57:15",
//         "out": "2023-11-07 16:57:25",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Setting up the development environment · React Native",
//         "in": "2023-11-07 16:57:25",
//         "out": "2023-11-07 16:59:15",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 16:59:15",
//         "out": "2023-11-07 17:01:55",
//         "idle": "00:01:10",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 17:01:55",
//         "out": "2023-11-07 17:02:45",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Mehul Bhatt",
//         "in": "2023-11-07 17:02:45",
//         "out": "2023-11-07 17:05:05",
//         "idle": "00:00:00",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 17:05:05",
//         "out": "2023-11-07 17:05:55",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "capacitor.config.json",
//         "in": "2023-11-07 17:05:55",
//         "out": "2023-11-07 17:06:46",
//         "idle": "00:00:00",
//         "usage": "00:00:51"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 17:06:46",
//         "out": "2023-11-07 17:09:36",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 17:09:36",
//         "out": "2023-11-07 17:10:35",
//         "idle": "00:00:00",
//         "usage": "00:00:59"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "trafi nov 7 2023",
//         "in": "2023-11-07 17:10:35",
//         "out": "2023-11-07 17:11:45",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 17:11:45",
//         "out": "2023-11-07 17:14:15",
//         "idle": "00:00:00",
//         "usage": "00:02:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:14:15",
//         "out": "2023-11-07 17:15:05",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "app.component.ts",
//         "in": "2023-11-07 17:15:05",
//         "out": "2023-11-07 17:16:45",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:16:45",
//         "out": "2023-11-07 17:18:25",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "logs.service.ts",
//         "in": "2023-11-07 17:18:25",
//         "out": "2023-11-07 17:20:35",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:20:35",
//         "out": "2023-11-07 17:21:15",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 17:21:15",
//         "out": "2023-11-07 17:21:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:21:35",
//         "out": "2023-11-07 17:22:56",
//         "idle": "00:00:00",
//         "usage": "00:01:21"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 17:22:56",
//         "out": "2023-11-07 17:23:15",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:23:15",
//         "out": "2023-11-07 17:23:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.html",
//         "in": "2023-11-07 17:23:35",
//         "out": "2023-11-07 17:23:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:23:55",
//         "out": "2023-11-07 17:26:45",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.html",
//         "in": "2023-11-07 17:26:45",
//         "out": "2023-11-07 17:32:25",
//         "idle": "00:00:00",
//         "usage": "00:05:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "(1) Discord | #trafie-sales | Rao Information Technology",
//         "in": "2023-11-07 17:32:25",
//         "out": "2023-11-07 17:33:36",
//         "idle": "00:00:00",
//         "usage": "00:01:11"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● visit.component.ts",
//         "in": "2023-11-07 17:33:36",
//         "out": "2023-11-07 17:33:56",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "trafi nov 7 2023",
//         "in": "2023-11-07 17:33:56",
//         "out": "2023-11-07 17:34:16",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 17:34:16",
//         "out": "2023-11-07 17:35:36",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "Welcome",
//         "in": "2023-11-07 17:35:36",
//         "out": "2023-11-07 17:37:16",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:37:16",
//         "out": "2023-11-07 17:37:26",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● visit.component.ts",
//         "in": "2023-11-07 17:37:26",
//         "out": "2023-11-07 17:44:19",
//         "idle": "00:01:30",
//         "usage": "00:06:53"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:44:19",
//         "out": "2023-11-07 17:44:29",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 17:44:29",
//         "out": "2023-11-07 17:44:39",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:44:39",
//         "out": "2023-11-07 17:44:49",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 17:44:49",
//         "out": "2023-11-07 17:45:09",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:45:09",
//         "out": "2023-11-07 17:45:29",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-user.component.ts",
//         "in": "2023-11-07 17:45:29",
//         "out": "2023-11-07 17:46:09",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:46:09",
//         "out": "2023-11-07 17:47:29",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "wp-service.service.ts",
//         "in": "2023-11-07 17:47:29",
//         "out": "2023-11-07 17:48:19",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:48:19",
//         "out": "2023-11-07 17:48:49",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 17:48:49",
//         "out": "2023-11-07 17:48:59",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:48:59",
//         "out": "2023-11-07 17:49:09",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 17:49:09",
//         "out": "2023-11-07 17:49:49",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:49:49",
//         "out": "2023-11-07 17:50:59",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "wp-service.service.ts",
//         "in": "2023-11-07 17:50:59",
//         "out": "2023-11-07 17:53:40",
//         "idle": "00:00:00",
//         "usage": "00:02:41"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:53:40",
//         "out": "2023-11-07 17:53:59",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 17:53:59",
//         "out": "2023-11-07 17:56:19",
//         "idle": "00:00:00",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:56:19",
//         "out": "2023-11-07 17:56:31",
//         "idle": "00:00:00",
//         "usage": "00:00:12"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-user.component.ts",
//         "in": "2023-11-07 17:56:31",
//         "out": "2023-11-07 17:57:40",
//         "idle": "00:00:00",
//         "usage": "00:01:09"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:57:40",
//         "out": "2023-11-07 17:58:10",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "wp-service.service.ts",
//         "in": "2023-11-07 17:58:10",
//         "out": "2023-11-07 17:58:50",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 17:58:50",
//         "out": "2023-11-07 18:01:40",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "wp-service.service.ts",
//         "in": "2023-11-07 18:01:40",
//         "out": "2023-11-07 18:02:00",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "Angular retrieve count of all posts from X-WP-Total response header while using a typed GET request to Wordpress REST API",
//         "in": "2023-11-07 18:02:00",
//         "out": "2023-11-07 18:02:20",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "wp-service.service.ts",
//         "in": "2023-11-07 18:02:20",
//         "out": "2023-11-07 18:03:10",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:03:10",
//         "out": "2023-11-07 18:03:50",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 18:03:50",
//         "out": "2023-11-07 18:07:10",
//         "idle": "00:00:00",
//         "usage": "00:03:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:07:10",
//         "out": "2023-11-07 18:08:20",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 18:08:20",
//         "out": "2023-11-07 18:09:10",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:09:10",
//         "out": "2023-11-07 18:09:50",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "wp-service.service.ts",
//         "in": "2023-11-07 18:09:50",
//         "out": "2023-11-07 18:10:51",
//         "idle": "00:00:00",
//         "usage": "00:01:01"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:10:51",
//         "out": "2023-11-07 18:11:20",
//         "idle": "00:00:00",
//         "usage": "00:00:29"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 18:11:20",
//         "out": "2023-11-07 18:12:10",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:12:10",
//         "out": "2023-11-07 18:12:30",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 18:12:30",
//         "out": "2023-11-07 18:13:00",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 18:13:00",
//         "out": "2023-11-07 18:13:10",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/supersee-admin-newUI",
//         "in": "2023-11-07 18:13:10",
//         "out": "2023-11-07 18:13:30",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 18:13:30",
//         "out": "2023-11-07 18:14:20",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 18:14:20",
//         "out": "2023-11-07 18:14:40",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:14:40",
//         "out": "2023-11-07 18:16:00",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 18:16:00",
//         "out": "2023-11-07 18:19:10",
//         "idle": "00:00:00",
//         "usage": "00:03:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 18:19:10",
//         "out": "2023-11-07 18:20:30",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/supersee-admin-newUI",
//         "in": "2023-11-07 18:20:30",
//         "out": "2023-11-07 18:20:50",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 18:20:50",
//         "out": "2023-11-07 18:22:00",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 18:22:00",
//         "out": "2023-11-07 18:24:30",
//         "idle": "00:01:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:24:30",
//         "out": "2023-11-07 18:25:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:25:30",
//         "out": "2023-11-07 18:26:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:26:30",
//         "out": "2023-11-07 18:27:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:27:30",
//         "out": "2023-11-07 18:28:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:28:30",
//         "out": "2023-11-07 18:29:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:29:30",
//         "out": "2023-11-07 18:30:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:30:30",
//         "out": "2023-11-07 18:31:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:31:30",
//         "out": "2023-11-07 18:32:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 18:32:30",
//         "out": "2023-11-07 18:33:00",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.ts",
//         "in": "2023-11-07 18:33:00",
//         "out": "2023-11-07 18:33:40",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "(1) Discord | @Himesh Suthar",
//         "in": "2023-11-07 18:33:40",
//         "out": "2023-11-07 18:35:30",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 18:35:30",
//         "out": "2023-11-07 18:36:30",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-admin",
//         "in": "2023-11-07 18:36:30",
//         "out": "2023-11-07 18:37:40",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:37:40",
//         "out": "2023-11-07 18:38:30",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 18:38:30",
//         "out": "2023-11-07 18:39:00",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:39:00",
//         "out": "2023-11-07 18:40:20",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:40:20",
//         "out": "2023-11-07 18:40:30",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "trafi nov 7 2023",
//         "in": "2023-11-07 18:40:30",
//         "out": "2023-11-07 18:41:20",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:41:20",
//         "out": "2023-11-07 18:42:30",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:42:30",
//         "out": "2023-11-07 18:44:30",
//         "idle": "00:01:30",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:44:30",
//         "out": "2023-11-07 18:45:30",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:45:30",
//         "out": "2023-11-07 18:46:20",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 18:46:20",
//         "out": "2023-11-07 18:48:20",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● capacitor.config.json",
//         "in": "2023-11-07 18:48:20",
//         "out": "2023-11-07 18:48:40",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:48:40",
//         "out": "2023-11-07 18:49:50",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:49:50",
//         "out": "2023-11-07 18:50:50",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:50:50",
//         "out": "2023-11-07 18:52:00",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:52:00",
//         "out": "2023-11-07 18:53:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:53:00",
//         "out": "2023-11-07 18:54:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:55:00",
//         "out": "2023-11-07 18:56:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:56:00",
//         "out": "2023-11-07 18:57:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:57:00",
//         "out": "2023-11-07 18:58:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:58:00",
//         "out": "2023-11-07 18:59:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 18:59:00",
//         "out": "2023-11-07 19:00:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:00:00",
//         "out": "2023-11-07 19:01:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:01:00",
//         "out": "2023-11-07 19:02:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:02:00",
//         "out": "2023-11-07 19:03:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:03:00",
//         "out": "2023-11-07 19:04:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:04:00",
//         "out": "2023-11-07 19:05:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:05:00",
//         "out": "2023-11-07 19:06:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:06:00",
//         "out": "2023-11-07 19:07:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:07:00",
//         "out": "2023-11-07 19:08:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:08:00",
//         "out": "2023-11-07 19:09:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:09:00",
//         "out": "2023-11-07 19:10:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:10:00",
//         "out": "2023-11-07 19:11:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:11:00",
//         "out": "2023-11-07 19:12:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:12:00",
//         "out": "2023-11-07 19:13:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:13:00",
//         "out": "2023-11-07 19:14:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:14:00",
//         "out": "2023-11-07 19:15:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:15:00",
//         "out": "2023-11-07 19:16:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:16:00",
//         "out": "2023-11-07 19:17:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:17:00",
//         "out": "2023-11-07 19:18:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:18:00",
//         "out": "2023-11-07 19:19:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:19:00",
//         "out": "2023-11-07 19:20:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:20:00",
//         "out": "2023-11-07 19:21:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:21:00",
//         "out": "2023-11-07 19:22:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:22:00",
//         "out": "2023-11-07 19:23:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:23:00",
//         "out": "2023-11-07 19:24:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:24:00",
//         "out": "2023-11-07 19:25:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:25:00",
//         "out": "2023-11-07 19:26:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:26:00",
//         "out": "2023-11-07 19:27:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:27:00",
//         "out": "2023-11-07 19:28:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:28:00",
//         "out": "2023-11-07 19:29:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:29:00",
//         "out": "2023-11-07 19:30:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:30:00",
//         "out": "2023-11-07 19:31:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:31:00",
//         "out": "2023-11-07 19:32:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:32:00",
//         "out": "2023-11-07 19:33:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:33:00",
//         "out": "2023-11-07 19:34:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:34:00",
//         "out": "2023-11-07 19:35:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:35:00",
//         "out": "2023-11-07 19:36:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:36:00",
//         "out": "2023-11-07 19:37:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:37:00",
//         "out": "2023-11-07 19:38:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:38:00",
//         "out": "2023-11-07 19:39:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:39:00",
//         "out": "2023-11-07 19:40:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:40:00",
//         "out": "2023-11-07 19:41:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:41:00",
//         "out": "2023-11-07 19:42:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:42:00",
//         "out": "2023-11-07 19:43:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:43:00",
//         "out": "2023-11-07 19:44:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:44:00",
//         "out": "2023-11-07 19:45:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:45:00",
//         "out": "2023-11-07 19:46:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:46:00",
//         "out": "2023-11-07 19:47:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:47:00",
//         "out": "2023-11-07 19:48:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:48:00",
//         "out": "2023-11-07 19:49:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:49:00",
//         "out": "2023-11-07 19:50:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:50:00",
//         "out": "2023-11-07 19:51:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:51:00",
//         "out": "2023-11-07 19:52:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:52:00",
//         "out": "2023-11-07 19:53:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:53:00",
//         "out": "2023-11-07 19:54:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:54:00",
//         "out": "2023-11-07 19:55:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:55:00",
//         "out": "2023-11-07 19:56:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:56:00",
//         "out": "2023-11-07 19:57:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:57:00",
//         "out": "2023-11-07 19:58:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:58:00",
//         "out": "2023-11-07 19:59:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 19:59:00",
//         "out": "2023-11-07 20:00:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:00:00",
//         "out": "2023-11-07 20:01:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:01:00",
//         "out": "2023-11-07 20:02:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:02:00",
//         "out": "2023-11-07 20:03:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:03:00",
//         "out": "2023-11-07 20:04:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:04:00",
//         "out": "2023-11-07 20:05:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:05:00",
//         "out": "2023-11-07 20:06:00",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:06:00",
//         "out": "2023-11-07 20:07:40",
//         "idle": "00:01:30",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:07:40",
//         "out": "2023-11-07 20:08:40",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:08:40",
//         "out": "2023-11-07 20:09:40",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:09:40",
//         "out": "2023-11-07 20:10:40",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:10:40",
//         "out": "2023-11-07 20:11:40",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:11:40",
//         "out": "2023-11-07 20:12:40",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:12:40",
//         "out": "2023-11-07 20:13:40",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:13:40",
//         "out": "2023-11-07 20:14:40",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:14:40",
//         "out": "2023-11-07 20:15:40",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:15:40",
//         "out": "2023-11-07 20:17:00",
//         "idle": "00:01:10",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:17:00",
//         "out": "2023-11-07 20:18:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:18:01",
//         "out": "2023-11-07 20:19:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:19:01",
//         "out": "2023-11-07 20:20:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:20:01",
//         "out": "2023-11-07 20:21:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:21:01",
//         "out": "2023-11-07 20:22:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:22:01",
//         "out": "2023-11-07 20:23:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:23:01",
//         "out": "2023-11-07 20:24:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:24:01",
//         "out": "2023-11-07 20:25:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "rao@rao-Lenovo-IdeaPad-S145-15IWL: ~/Desktop/trafi-cico-app",
//         "in": "2023-11-07 20:25:01",
//         "out": "2023-11-07 20:26:01",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:26:01",
//         "out": "2023-11-07 20:27:21",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:27:21",
//         "out": "2023-11-07 20:28:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:28:21",
//         "out": "2023-11-07 20:29:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:29:21",
//         "out": "2023-11-07 20:30:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:30:21",
//         "out": "2023-11-07 20:31:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:31:21",
//         "out": "2023-11-07 20:32:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:32:21",
//         "out": "2023-11-07 20:33:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:33:21",
//         "out": "2023-11-07 20:34:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:34:21",
//         "out": "2023-11-07 20:35:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:35:21",
//         "out": "2023-11-07 20:36:21",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 20:36:21",
//         "out": "2023-11-07 20:37:41",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | #general | Rao Information Technology",
//         "in": "2023-11-07 20:37:41",
//         "out": "2023-11-07 20:39:11",
//         "idle": "00:01:10",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | #general | Rao Information Technology",
//         "in": "2023-11-07 20:39:11",
//         "out": "2023-11-07 20:40:11",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | #general | Rao Information Technology",
//         "in": "2023-11-07 20:40:11",
//         "out": "2023-11-07 20:42:11",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "capacitor.config.json",
//         "in": "2023-11-07 20:42:11",
//         "out": "2023-11-07 20:42:21",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "SuperSee",
//         "in": "2023-11-07 20:42:21",
//         "out": "2023-11-07 20:42:41",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "capacitor.config.json",
//         "in": "2023-11-07 20:42:41",
//         "out": "2023-11-07 20:43:11",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 20:43:11",
//         "out": "2023-11-07 20:46:01",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "visit.component.html",
//         "in": "2023-11-07 20:46:01",
//         "out": "2023-11-07 20:47:41",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "• Discord | @Himesh Suthar",
//         "in": "2023-11-07 20:47:41",
//         "out": "2023-11-07 20:48:51",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.html",
//         "in": "2023-11-07 20:48:51",
//         "out": "2023-11-07 20:49:01",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 20:49:01",
//         "out": "2023-11-07 20:49:31",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.ts",
//         "in": "2023-11-07 20:49:31",
//         "out": "2023-11-07 20:51:41",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 20:51:41",
//         "out": "2023-11-07 20:53:31",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.ts",
//         "in": "2023-11-07 20:53:31",
//         "out": "2023-11-07 20:54:31",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 20:54:31",
//         "out": "2023-11-07 20:55:31",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.ts",
//         "in": "2023-11-07 20:55:31",
//         "out": "2023-11-07 20:55:51",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 20:55:51",
//         "out": "2023-11-07 20:56:31",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.ts",
//         "in": "2023-11-07 20:56:31",
//         "out": "2023-11-07 20:57:31",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 20:57:31",
//         "out": "2023-11-07 20:58:31",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 20:58:31",
//         "out": "2023-11-07 20:58:51",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.ts",
//         "in": "2023-11-07 20:58:51",
//         "out": "2023-11-07 20:59:51",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 20:59:51",
//         "out": "2023-11-07 21:00:21",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.ts",
//         "in": "2023-11-07 21:00:21",
//         "out": "2023-11-07 21:02:21",
//         "idle": "00:01:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● single-visit.component.html",
//         "in": "2023-11-07 21:02:21",
//         "out": "2023-11-07 21:03:11",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:03:11",
//         "out": "2023-11-07 21:03:31",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.html",
//         "in": "2023-11-07 21:03:31",
//         "out": "2023-11-07 21:05:01",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:05:01",
//         "out": "2023-11-07 21:05:31",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.html",
//         "in": "2023-11-07 21:05:31",
//         "out": "2023-11-07 21:07:01",
//         "idle": "00:01:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● single-visit.component.html",
//         "in": "2023-11-07 21:07:01",
//         "out": "2023-11-07 21:08:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● single-visit.component.html",
//         "in": "2023-11-07 21:08:01",
//         "out": "2023-11-07 21:09:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● single-visit.component.html",
//         "in": "2023-11-07 21:10:01",
//         "out": "2023-11-07 21:11:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● single-visit.component.html",
//         "in": "2023-11-07 21:11:01",
//         "out": "2023-11-07 21:12:01",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● single-visit.component.html",
//         "in": "2023-11-07 21:12:01",
//         "out": "2023-11-07 21:14:01",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:14:01",
//         "out": "2023-11-07 21:15:51",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "xdg-desktop-portal-gnome",
//         "windowName": "All Files",
//         "in": "2023-11-07 21:15:51",
//         "out": "2023-11-07 21:16:01",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "trafi nov 7 2023",
//         "in": "2023-11-07 21:16:01",
//         "out": "2023-11-07 21:17:11",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "studio.sh Properties",
//         "in": "2023-11-07 21:17:11",
//         "out": "2023-11-07 21:17:51",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "trafi nov 7 2023",
//         "in": "2023-11-07 21:17:51",
//         "out": "2023-11-07 21:19:21",
//         "idle": "00:01:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "trafi nov 7 2023",
//         "in": "2023-11-07 21:19:21",
//         "out": "2023-11-07 21:22:41",
//         "idle": "00:00:00",
//         "usage": "00:03:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "single-visit.component.ts",
//         "in": "2023-11-07 21:22:41",
//         "out": "2023-11-07 21:25:21",
//         "idle": "00:00:00",
//         "usage": "00:02:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:25:21",
//         "out": "2023-11-07 21:25:52",
//         "idle": "00:00:00",
//         "usage": "00:00:31"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● customers.component.ts",
//         "in": "2023-11-07 21:25:52",
//         "out": "2023-11-07 21:26:12",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:26:12",
//         "out": "2023-11-07 21:26:32",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Code",
//         "windowName": "● customers.component.ts",
//         "in": "2023-11-07 21:26:32",
//         "out": "2023-11-07 21:27:42",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:27:42",
//         "out": "2023-11-07 21:31:32",
//         "idle": "00:00:00",
//         "usage": "00:03:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:31:32",
//         "out": "2023-11-07 21:32:32",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:32:32",
//         "out": "2023-11-07 21:34:32",
//         "idle": "00:01:50",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:34:32",
//         "out": "2023-11-07 21:36:12",
//         "idle": "00:01:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:36:12",
//         "out": "2023-11-07 21:37:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:37:12",
//         "out": "2023-11-07 21:38:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:38:12",
//         "out": "2023-11-07 21:39:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:39:12",
//         "out": "2023-11-07 21:40:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:40:12",
//         "out": "2023-11-07 21:41:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:41:12",
//         "out": "2023-11-07 21:42:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:42:12",
//         "out": "2023-11-07 21:43:12",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:43:12",
//         "out": "2023-11-07 21:43:32",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:43:32",
//         "out": "2023-11-07 21:46:22",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "customers.component.ts",
//         "in": "2023-11-07 21:46:22",
//         "out": "2023-11-07 21:48:32",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:48:32",
//         "out": "2023-11-07 21:49:12",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Code",
//         "windowName": "collection.component.html",
//         "in": "2023-11-07 21:49:12",
//         "out": "2023-11-07 21:49:22",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "trafi nov 7 2023",
//         "in": "2023-11-07 21:49:22",
//         "out": "2023-11-07 21:50:12",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Code",
//         "windowName": "collection.component.html",
//         "in": "2023-11-07 21:50:12",
//         "out": "2023-11-07 21:50:52",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:50:52",
//         "out": "2023-11-07 21:52:52",
//         "idle": "00:01:10",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:52:52",
//         "out": "2023-11-07 21:53:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:53:52",
//         "out": "2023-11-07 21:54:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:54:52",
//         "out": "2023-11-07 21:55:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:55:52",
//         "out": "2023-11-07 21:56:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:56:52",
//         "out": "2023-11-07 21:57:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:57:52",
//         "out": "2023-11-07 21:58:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:58:52",
//         "out": "2023-11-07 21:59:52",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 21:59:52",
//         "out": "2023-11-07 22:00:22",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Code",
//         "windowName": "collection.component.html",
//         "in": "2023-11-07 22:00:22",
//         "out": "2023-11-07 22:01:42",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Chromium",
//         "windowName": "TRAFI Admin Panel",
//         "in": "2023-11-07 22:01:42",
//         "out": "2023-11-07 22:01:52",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Code",
//         "windowName": "status.component.ts",
//         "in": "2023-11-07 22:01:52",
//         "out": "2023-11-07 22:04:23",
//         "idle": "00:00:00",
//         "usage": "00:02:31"
//     }
// ]

// const data = [
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 12:06:43",
//         "out": "2023-11-07 12:06:53",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:06:53",
//         "out": "2023-11-07 12:08:03",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.html • (ralph-cico-mobile)",
//         "in": "2023-11-07 12:08:03",
//         "out": "2023-11-07 12:08:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 12:08:23",
//         "out": "2023-11-07 12:08:33",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/location.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:08:33",
//         "out": "2023-11-07 12:13:03",
//         "idle": "00:00:00",
//         "usage": "00:04:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:13:03",
//         "out": "2023-11-07 12:13:13",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 12:13:13",
//         "out": "2023-11-07 12:14:43",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:14:43",
//         "out": "2023-11-07 12:14:53",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 12:14:53",
//         "out": "2023-11-07 12:15:03",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:15:03",
//         "out": "2023-11-07 12:16:03",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/app.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:16:03",
//         "out": "2023-11-07 12:19:43",
//         "idle": "00:00:00",
//         "usage": "00:03:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:19:43",
//         "out": "2023-11-07 12:19:53",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 12:19:53",
//         "out": "2023-11-07 12:20:03",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/app.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:20:03",
//         "out": "2023-11-07 12:20:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:20:23",
//         "out": "2023-11-07 12:21:03",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 12:21:03",
//         "out": "2023-11-07 12:21:13",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:21:13",
//         "out": "2023-11-07 12:24:53",
//         "idle": "00:00:00",
//         "usage": "00:03:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:24:53",
//         "out": "2023-11-07 12:25:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:25:53",
//         "out": "2023-11-07 12:26:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:26:53",
//         "out": "2023-11-07 12:27:53",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:27:53",
//         "out": "2023-11-07 12:29:13",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/app.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:29:13",
//         "out": "2023-11-07 12:29:54",
//         "idle": "00:00:00",
//         "usage": "00:00:41"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 12:29:54",
//         "out": "2023-11-07 12:30:33",
//         "idle": "00:00:00",
//         "usage": "00:00:39"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:30:33",
//         "out": "2023-11-07 12:30:44",
//         "idle": "00:00:00",
//         "usage": "00:00:11"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:30:44",
//         "out": "2023-11-07 12:30:53",
//         "idle": "00:00:00",
//         "usage": "00:00:09"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:30:53",
//         "out": "2023-11-07 12:33:03",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:33:03",
//         "out": "2023-11-07 12:33:43",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:33:43",
//         "out": "2023-11-07 12:33:53",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:33:53",
//         "out": "2023-11-07 12:34:03",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:34:03",
//         "out": "2023-11-07 12:34:33",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:34:33",
//         "out": "2023-11-07 12:36:23",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:36:23",
//         "out": "2023-11-07 12:39:23",
//         "idle": "00:00:00",
//         "usage": "00:03:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 12:39:23",
//         "out": "2023-11-07 12:39:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 12:39:43",
//         "out": "2023-11-07 12:41:13",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 12:41:13",
//         "out": "2023-11-07 12:42:53",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": " ",
//         "in": "2023-11-07 12:42:53",
//         "out": "2023-11-07 12:43:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 12:43:13",
//         "out": "2023-11-07 12:45:23",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 12:45:23",
//         "out": "2023-11-07 12:45:54",
//         "idle": "00:00:00",
//         "usage": "00:00:31"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 12:45:54",
//         "out": "2023-11-07 12:46:23",
//         "idle": "00:00:00",
//         "usage": "00:00:29"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 12:46:23",
//         "out": "2023-11-07 12:46:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 12:46:43",
//         "out": "2023-11-07 12:49:43",
//         "idle": "00:02:10",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Ralph daily CICO",
//         "in": "2023-11-07 12:49:43",
//         "out": "2023-11-07 12:52:13",
//         "idle": "00:02:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 12:52:13",
//         "out": "2023-11-07 12:52:53",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 12:52:53",
//         "out": "2023-11-07 12:53:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Developer Tools",
//         "in": "2023-11-07 13:12:12",
//         "out": "2023-11-07 13:12:23",
//         "idle": "00:00:00",
//         "usage": "00:00:11"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Home",
//         "in": "2023-11-07 13:12:23",
//         "out": "2023-11-07 13:12:42",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "ralph-CICO",
//         "in": "2023-11-07 13:12:32",
//         "out": "2023-11-07 13:12:52",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:12:42",
//         "out": "2023-11-07 13:13:02",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:12:52",
//         "out": "2023-11-07 13:13:12",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:13:02",
//         "out": "2023-11-07 13:14:52",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:13:12",
//         "out": "2023-11-07 13:15:33",
//         "idle": "00:00:00",
//         "usage": "00:02:21"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 13:14:52",
//         "out": "2023-11-07 13:15:43",
//         "idle": "00:00:00",
//         "usage": "00:00:51"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Discord",
//         "in": "2023-11-07 13:15:33",
//         "out": "2023-11-07 13:16:12",
//         "idle": "00:00:00",
//         "usage": "00:00:39"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Himesh Suthar",
//         "in": "2023-11-07 13:15:43",
//         "out": "2023-11-07 13:16:22",
//         "idle": "00:00:00",
//         "usage": "00:00:39"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:16:12",
//         "out": "2023-11-07 13:16:33",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Himesh Suthar",
//         "in": "2023-11-07 13:16:22",
//         "out": "2023-11-07 13:16:43",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 13:16:33",
//         "out": "2023-11-07 13:16:52",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 13:16:43",
//         "out": "2023-11-07 13:18:12",
//         "idle": "00:00:00",
//         "usage": "00:01:29"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 13:16:52",
//         "out": "2023-11-07 13:18:33",
//         "idle": "00:00:00",
//         "usage": "00:01:41"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:18:12",
//         "out": "2023-11-07 13:18:42",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 13:18:33",
//         "out": "2023-11-07 13:19:12",
//         "idle": "00:00:00",
//         "usage": "00:00:39"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:18:42",
//         "out": "2023-11-07 13:19:22",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 13:19:12",
//         "out": "2023-11-07 13:19:33",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 13:19:22",
//         "out": "2023-11-07 13:19:42",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 13:19:33",
//         "out": "2023-11-07 13:19:52",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:19:42",
//         "out": "2023-11-07 13:20:03",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 13:19:52",
//         "out": "2023-11-07 13:20:12",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 13:20:03",
//         "out": "2023-11-07 13:20:22",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 13:20:12",
//         "out": "2023-11-07 13:20:42",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 13:20:22",
//         "out": "2023-11-07 13:21:52",
//         "idle": "00:01:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 13:21:52",
//         "out": "2023-11-07 13:23:02",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 13:22:02",
//         "out": "2023-11-07 13:23:12",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 13:23:02",
//         "out": "2023-11-07 13:23:22",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 13:23:12",
//         "out": "2023-11-07 13:23:52",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 13:23:22",
//         "out": "2023-11-07 13:25:42",
//         "idle": "00:00:00",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 13:23:52",
//         "out": "2023-11-07 13:26:02",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Ralph daily CICO",
//         "in": "2023-11-07 13:25:42",
//         "out": "2023-11-07 13:26:42",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 13:26:02",
//         "out": "2023-11-07 13:26:52",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:26:42",
//         "out": "2023-11-07 13:27:12",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 13:26:52",
//         "out": "2023-11-07 13:27:22",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 13:27:12",
//         "out": "2023-11-07 13:28:12",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:27:22",
//         "out": "2023-11-07 13:28:22",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:28:12",
//         "out": "2023-11-07 13:29:12",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:28:22",
//         "out": "2023-11-07 13:29:22",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:29:12",
//         "out": "2023-11-07 13:29:32",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 13:29:22",
//         "out": "2023-11-07 13:29:42",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:29:32",
//         "out": "2023-11-07 13:30:02",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 13:29:42",
//         "out": "2023-11-07 13:30:13",
//         "idle": "00:00:00",
//         "usage": "00:00:31"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:30:02",
//         "out": "2023-11-07 13:30:32",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 13:30:13",
//         "out": "2023-11-07 13:30:43",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 13:30:32",
//         "out": "2023-11-07 13:30:53",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:30:43",
//         "out": "2023-11-07 13:31:02",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 13:30:53",
//         "out": "2023-11-07 13:31:12",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 13:31:02",
//         "out": "2023-11-07 13:31:43",
//         "idle": "00:00:00",
//         "usage": "00:00:41"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Ralph daily CICO",
//         "in": "2023-11-07 13:31:12",
//         "out": "2023-11-07 13:31:52",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 13:31:43",
//         "out": "2023-11-07 13:32:32",
//         "idle": "00:00:00",
//         "usage": "00:00:49"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 13:31:52",
//         "out": "2023-11-07 13:32:42",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 13:32:32",
//         "out": "2023-11-07 13:32:52",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:32:42",
//         "out": "2023-11-07 13:33:12",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 13:32:52",
//         "out": "2023-11-07 13:33:22",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 13:33:12",
//         "out": "2023-11-07 13:33:32",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Ralph daily CICO",
//         "in": "2023-11-07 13:33:22",
//         "out": "2023-11-07 13:35:21",
//         "idle": "00:00:50",
//         "usage": "00:01:59"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 13:35:23",
//         "out": "2023-11-07 13:35:28",
//         "idle": "00:00:00",
//         "usage": "00:00:05"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 13:35:32",
//         "out": "2023-11-07 13:35:42",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 13:35:42",
//         "out": "2023-11-07 13:36:02",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Downloads",
//         "in": "2023-11-07 13:35:52",
//         "out": "2023-11-07 13:36:12",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 13:36:02",
//         "out": "2023-11-07 13:37:12",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 13:36:12",
//         "out": "2023-11-07 13:37:32",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 13:37:12",
//         "out": "2023-11-07 13:37:52",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:37:32",
//         "out": "2023-11-07 13:38:12",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 13:37:52",
//         "out": "2023-11-07 13:38:33",
//         "idle": "00:00:00",
//         "usage": "00:00:41"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:38:12",
//         "out": "2023-11-07 13:38:42",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 13:38:33",
//         "out": "2023-11-07 13:38:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 13:38:42",
//         "out": "2023-11-07 13:39:03",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Himesh Suthar",
//         "in": "2023-11-07 13:38:53",
//         "out": "2023-11-07 13:39:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:39:03",
//         "out": "2023-11-07 13:39:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Himesh Suthar",
//         "in": "2023-11-07 13:39:13",
//         "out": "2023-11-07 13:39:32",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Xdg-desktop-portal-gtk",
//         "windowName": "Open File",
//         "in": "2023-11-07 13:39:23",
//         "out": "2023-11-07 13:40:02",
//         "idle": "00:00:00",
//         "usage": "00:00:39"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Image Generator / PWABuilder",
//         "in": "2023-11-07 13:39:32",
//         "out": "2023-11-07 13:40:52",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Downloads",
//         "in": "2023-11-07 13:40:02",
//         "out": "2023-11-07 13:41:02",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "android",
//         "in": "2023-11-07 13:40:52",
//         "out": "2023-11-07 13:41:12",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "AppImages (1)",
//         "in": "2023-11-07 13:41:02",
//         "out": "2023-11-07 13:42:12",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "AppImages (1)",
//         "in": "2023-11-07 13:42:12",
//         "out": "2023-11-07 13:42:42",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 13:42:32",
//         "out": "2023-11-07 13:42:52",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Object.entries()",
//         "in": "2023-11-07 13:42:42",
//         "out": "2023-11-07 13:43:23",
//         "idle": "00:00:00",
//         "usage": "00:00:41"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 13:42:52",
//         "out": "2023-11-07 13:44:32",
//         "idle": "00:01:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 13:44:32",
//         "out": "2023-11-07 13:45:33",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 13:45:33",
//         "out": "2023-11-07 13:46:12",
//         "idle": "00:00:00",
//         "usage": "00:00:39"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:45:42",
//         "out": "2023-11-07 13:46:53",
//         "idle": "00:00:00",
//         "usage": "00:01:11"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:46:12",
//         "out": "2023-11-07 13:47:33",
//         "idle": "00:00:00",
//         "usage": "00:01:21"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 13:46:53",
//         "out": "2023-11-07 13:47:43",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 13:47:33",
//         "out": "2023-11-07 13:47:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 13:47:43",
//         "out": "2023-11-07 13:48:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:47:53",
//         "out": "2023-11-07 13:48:12",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "capacitor splash screen",
//         "in": "2023-11-07 13:48:03",
//         "out": "2023-11-07 13:48:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Splash Screen Capacitor Plugin API | Ionic Documentation",
//         "in": "2023-11-07 13:48:12",
//         "out": "2023-11-07 13:48:52",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "Find Results (ralph-cico-mobile)",
//         "in": "2023-11-07 13:48:23",
//         "out": "2023-11-07 13:49:13",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/app.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:48:52",
//         "out": "2023-11-07 13:49:23",
//         "idle": "00:00:00",
//         "usage": "00:00:31"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 13:49:13",
//         "out": "2023-11-07 13:49:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Ralph daily CICO",
//         "in": "2023-11-07 13:49:23",
//         "out": "2023-11-07 13:49:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 13:49:33",
//         "out": "2023-11-07 13:49:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 13:49:43",
//         "out": "2023-11-07 13:50:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 13:49:53",
//         "out": "2023-11-07 13:51:23",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "capacitor splash screen for ionic",
//         "in": "2023-11-07 13:50:03",
//         "out": "2023-11-07 13:51:33",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "capacitor assets for ionic",
//         "in": "2023-11-07 13:51:23",
//         "out": "2023-11-07 13:51:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Splash Screens and Icons | Capacitor Documentation",
//         "in": "2023-11-07 13:51:33",
//         "out": "2023-11-07 13:51:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 13:51:43",
//         "out": "2023-11-07 13:52:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Xdg-desktop-portal-gtk",
//         "windowName": "Open Files",
//         "in": "2023-11-07 13:51:53",
//         "out": "2023-11-07 13:52:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 13:52:03",
//         "out": "2023-11-07 13:52:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Xdg-desktop-portal-gtk",
//         "windowName": "Open Files",
//         "in": "2023-11-07 13:52:13",
//         "out": "2023-11-07 13:52:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:52:23",
//         "out": "2023-11-07 13:52:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 13:52:33",
//         "out": "2023-11-07 13:53:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 13:52:43",
//         "out": "2023-11-07 13:54:13",
//         "idle": "00:01:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 13:54:13",
//         "out": "2023-11-07 13:55:13",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 13:55:13",
//         "out": "2023-11-07 13:56:13",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 13:56:13",
//         "out": "2023-11-07 13:57:13",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 13:57:13",
//         "out": "2023-11-07 13:58:03",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO-SPLASH-2.png (2732×2732)",
//         "in": "2023-11-07 13:57:53",
//         "out": "2023-11-07 13:58:33",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "AppImages (1)",
//         "in": "2023-11-07 13:58:03",
//         "out": "2023-11-07 13:58:43",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Downloads",
//         "in": "2023-11-07 13:58:33",
//         "out": "2023-11-07 13:58:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "rit",
//         "in": "2023-11-07 13:58:43",
//         "out": "2023-11-07 13:59:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Splash Screens and Icons | Capacitor Documentation",
//         "in": "2023-11-07 13:58:53",
//         "out": "2023-11-07 13:59:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "resources",
//         "in": "2023-11-07 13:59:03",
//         "out": "2023-11-07 13:59:33",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Splash Screens and Icons | Capacitor Documentation",
//         "in": "2023-11-07 13:59:23",
//         "out": "2023-11-07 13:59:53",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "resources",
//         "in": "2023-11-07 13:59:33",
//         "out": "2023-11-07 14:00:13",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 13:59:53",
//         "out": "2023-11-07 14:00:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:00:13",
//         "out": "2023-11-07 14:00:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:00:23",
//         "out": "2023-11-07 14:00:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 14:00:33",
//         "out": "2023-11-07 14:00:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:00:43",
//         "out": "2023-11-07 14:02:33",
//         "idle": "00:01:10",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:00:53",
//         "out": "2023-11-07 14:02:43",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 14:02:33",
//         "out": "2023-11-07 14:02:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:02:43",
//         "out": "2023-11-07 14:03:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "resources",
//         "in": "2023-11-07 14:02:53",
//         "out": "2023-11-07 14:03:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Splash Screens and Icons | Capacitor Documentation",
//         "in": "2023-11-07 14:03:13",
//         "out": "2023-11-07 14:03:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:03:23",
//         "out": "2023-11-07 14:04:03",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 14:03:33",
//         "out": "2023-11-07 14:04:13",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:04:03",
//         "out": "2023-11-07 14:04:33",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": " ",
//         "in": "2023-11-07 14:04:13",
//         "out": "2023-11-07 14:04:43",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:04:33",
//         "out": "2023-11-07 14:05:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 14:04:43",
//         "out": "2023-11-07 14:05:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:05:03",
//         "out": "2023-11-07 14:05:33",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 14:05:23",
//         "out": "2023-11-07 14:05:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:05:33",
//         "out": "2023-11-07 14:06:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – ic_launcher.webp [android.app.main]",
//         "in": "2023-11-07 14:05:43",
//         "out": "2023-11-07 14:06:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:06:03",
//         "out": "2023-11-07 14:06:43",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – ic_launcher.webp [android.app.main]",
//         "in": "2023-11-07 14:06:13",
//         "out": "2023-11-07 14:06:53",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:06:43",
//         "out": "2023-11-07 14:07:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:06:53",
//         "out": "2023-11-07 14:07:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "duplicate resources in angualr",
//         "in": "2023-11-07 14:07:03",
//         "out": "2023-11-07 14:07:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "\"Duplicate Resources\" error when building Android app",
//         "in": "2023-11-07 14:07:13",
//         "out": "2023-11-07 14:07:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – ic_launcher.webp [android.app.main]",
//         "in": "2023-11-07 14:07:23",
//         "out": "2023-11-07 14:08:13",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "Usages Detected",
//         "in": "2023-11-07 14:07:33",
//         "out": "2023-11-07 14:08:33",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – drawable-land-ldpi/splash.png [android.app.main]",
//         "in": "2023-11-07 14:08:13",
//         "out": "2023-11-07 14:09:13",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:08:33",
//         "out": "2023-11-07 14:09:33",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – splash.png [android.app.main]",
//         "in": "2023-11-07 14:09:13",
//         "out": "2023-11-07 14:09:43",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – ic_launcher.webp [android.app.main]",
//         "in": "2023-11-07 14:09:33",
//         "out": "2023-11-07 14:09:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:09:43",
//         "out": "2023-11-07 14:10:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – ic_launcher.webp [android.app.main]",
//         "in": "2023-11-07 14:09:53",
//         "out": "2023-11-07 14:10:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – ic_launcher.png [android.app.main]",
//         "in": "2023-11-07 14:10:13",
//         "out": "2023-11-07 14:10:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:10:23",
//         "out": "2023-11-07 14:10:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:10:33",
//         "out": "2023-11-07 14:10:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Splash Screens and Icons | Capacitor Documentation",
//         "in": "2023-11-07 14:10:43",
//         "out": "2023-11-07 14:11:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:10:53",
//         "out": "2023-11-07 14:11:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – ic_launcher.png [android.app.main]",
//         "in": "2023-11-07 14:11:03",
//         "out": "2023-11-07 14:11:43",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:11:23",
//         "out": "2023-11-07 14:12:03",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – ic_launcher.png [android.app.main]",
//         "in": "2023-11-07 14:11:43",
//         "out": "2023-11-07 14:12:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android – ic_launcher.webp [android.app.main]",
//         "in": "2023-11-07 14:12:03",
//         "out": "2023-11-07 14:12:33",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:12:23",
//         "out": "2023-11-07 14:12:53",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/location.service.spec.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:12:33",
//         "out": "2023-11-07 14:13:13",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 14:12:53",
//         "out": "2023-11-07 14:13:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/location.service.spec.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:13:13",
//         "out": "2023-11-07 14:13:43",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:13:23",
//         "out": "2023-11-07 14:14:13",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "src",
//         "in": "2023-11-07 14:13:43",
//         "out": "2023-11-07 14:14:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "res",
//         "in": "2023-11-07 14:14:13",
//         "out": "2023-11-07 14:14:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "drawable-land-hdpi",
//         "in": "2023-11-07 14:14:23",
//         "out": "2023-11-07 14:14:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "res",
//         "in": "2023-11-07 14:14:33",
//         "out": "2023-11-07 14:14:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "rit",
//         "in": "2023-11-07 14:14:43",
//         "out": "2023-11-07 14:15:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Resource backup",
//         "in": "2023-11-07 14:14:53",
//         "out": "2023-11-07 14:15:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "app",
//         "in": "2023-11-07 14:15:03",
//         "out": "2023-11-07 14:15:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:15:13",
//         "out": "2023-11-07 14:16:13",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:15:23",
//         "out": "2023-11-07 14:16:43",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:16:13",
//         "out": "2023-11-07 14:16:53",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:16:43",
//         "out": "2023-11-07 14:17:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "CICO",
//         "in": "2023-11-07 14:16:53",
//         "out": "2023-11-07 14:17:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "xml",
//         "in": "2023-11-07 14:17:13",
//         "out": "2023-11-07 14:17:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:17:23",
//         "out": "2023-11-07 14:17:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Android resource linking failed",
//         "in": "2023-11-07 14:17:33",
//         "out": "2023-11-07 14:17:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:17:43",
//         "out": "2023-11-07 14:18:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "android",
//         "in": "2023-11-07 14:17:53",
//         "out": "2023-11-07 14:18:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "res",
//         "in": "2023-11-07 14:18:03",
//         "out": "2023-11-07 14:18:43",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:18:13",
//         "out": "2023-11-07 14:19:13",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Resource backup",
//         "in": "2023-11-07 14:18:43",
//         "out": "2023-11-07 14:19:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "xml",
//         "in": "2023-11-07 14:19:13",
//         "out": "2023-11-07 14:19:43",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:19:23",
//         "out": "2023-11-07 14:20:13",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "gradle",
//         "in": "2023-11-07 14:19:43",
//         "out": "2023-11-07 14:20:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:20:13",
//         "out": "2023-11-07 14:20:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "res",
//         "in": "2023-11-07 14:20:23",
//         "out": "2023-11-07 14:20:53",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "gradle",
//         "in": "2023-11-07 14:20:33",
//         "out": "2023-11-07 14:21:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:20:53",
//         "out": "2023-11-07 14:21:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Resource backup",
//         "in": "2023-11-07 14:21:03",
//         "out": "2023-11-07 14:21:33",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:21:23",
//         "out": "2023-11-07 14:21:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Splash Screens and Icons | Capacitor Documentation",
//         "in": "2023-11-07 14:21:33",
//         "out": "2023-11-07 14:21:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 14:21:43",
//         "out": "2023-11-07 14:22:33",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/manifest.webmanifest (ralph-cico-mobile)",
//         "in": "2023-11-07 14:21:53",
//         "out": "2023-11-07 14:23:03",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/manifest.webmanifest • (ralph-cico-mobile)",
//         "in": "2023-11-07 14:22:33",
//         "out": "2023-11-07 14:23:13",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/manifest.webmanifest (ralph-cico-mobile)",
//         "in": "2023-11-07 14:23:03",
//         "out": "2023-11-07 14:23:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/index.html (ralph-cico-mobile)",
//         "in": "2023-11-07 14:23:13",
//         "out": "2023-11-07 14:23:43",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/manifest.webmanifest (ralph-cico-mobile)",
//         "in": "2023-11-07 14:23:23",
//         "out": "2023-11-07 14:23:53",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "Find Results (ralph-cico-mobile)",
//         "in": "2023-11-07 14:23:43",
//         "out": "2023-11-07 14:24:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/index.html • (ralph-cico-mobile)",
//         "in": "2023-11-07 14:23:53",
//         "out": "2023-11-07 14:24:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:24:03",
//         "out": "2023-11-07 14:24:53",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:24:13",
//         "out": "2023-11-07 14:25:13",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "res",
//         "in": "2023-11-07 14:24:53",
//         "out": "2023-11-07 14:25:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/manifest.webmanifest (ralph-cico-mobile)",
//         "in": "2023-11-07 14:25:13",
//         "out": "2023-11-07 14:25:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/global.scss (ralph-cico-mobile)",
//         "in": "2023-11-07 14:25:23",
//         "out": "2023-11-07 14:25:53",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/angular.json (ralph-cico-mobile)",
//         "in": "2023-11-07 14:25:33",
//         "out": "2023-11-07 14:26:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/angular.json • (ralph-cico-mobile)",
//         "in": "2023-11-07 14:25:53",
//         "out": "2023-11-07 14:26:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/angular.json (ralph-cico-mobile)",
//         "in": "2023-11-07 14:26:03",
//         "out": "2023-11-07 14:26:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:26:13",
//         "out": "2023-11-07 14:26:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:26:23",
//         "out": "2023-11-07 14:26:53",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Splash Screens and Icons | Capacitor Documentation",
//         "in": "2023-11-07 14:26:33",
//         "out": "2023-11-07 14:27:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 14:26:53",
//         "out": "2023-11-07 14:27:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:27:03",
//         "out": "2023-11-07 14:28:23",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:28:23",
//         "out": "2023-11-07 14:29:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:29:23",
//         "out": "2023-11-07 14:30:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:30:23",
//         "out": "2023-11-07 14:31:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:31:23",
//         "out": "2023-11-07 14:32:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:32:23",
//         "out": "2023-11-07 14:33:03",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:32:53",
//         "out": "2023-11-07 14:33:13",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/angular.json (ralph-cico-mobile)",
//         "in": "2023-11-07 14:33:03",
//         "out": "2023-11-07 14:33:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:33:13",
//         "out": "2023-11-07 14:33:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/config.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:33:23",
//         "out": "2023-11-07 14:33:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/index.html (ralph-cico-mobile)",
//         "in": "2023-11-07 14:33:33",
//         "out": "2023-11-07 14:33:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 14:33:43",
//         "out": "2023-11-07 14:35:13",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(7) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 14:33:53",
//         "out": "2023-11-07 14:36:13",
//         "idle": "00:01:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(7) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 14:36:13",
//         "out": "2023-11-07 14:37:13",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(7) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 14:37:13",
//         "out": "2023-11-07 14:37:23",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Xdg-desktop-portal-gtk",
//         "windowName": "Open Files",
//         "in": "2023-11-07 14:37:23",
//         "out": "2023-11-07 14:39:23",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 14:39:13",
//         "out": "2023-11-07 14:41:03",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Ralph daily CICO",
//         "in": "2023-11-07 14:39:23",
//         "out": "2023-11-07 14:41:13",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/package.json (ralph-cico-mobile)",
//         "in": "2023-11-07 14:41:03",
//         "out": "2023-11-07 14:41:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/manifest.webmanifest (ralph-cico-mobile)",
//         "in": "2023-11-07 14:41:13",
//         "out": "2023-11-07 14:41:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "Find Results (ralph-cico-mobile)",
//         "in": "2023-11-07 14:41:23",
//         "out": "2023-11-07 14:41:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/ngsw-config.json (ralph-cico-mobile)",
//         "in": "2023-11-07 14:41:33",
//         "out": "2023-11-07 14:42:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/manifest.webmanifest (ralph-cico-mobile)",
//         "in": "2023-11-07 14:41:43",
//         "out": "2023-11-07 14:42:33",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "src",
//         "in": "2023-11-07 14:42:03",
//         "out": "2023-11-07 14:42:43",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "ralph-cico-mobile",
//         "in": "2023-11-07 14:42:33",
//         "out": "2023-11-07 14:42:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "src",
//         "in": "2023-11-07 14:42:43",
//         "out": "2023-11-07 14:43:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:42:53",
//         "out": "2023-11-07 14:43:33",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:43:03",
//         "out": "2023-11-07 14:44:43",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "Find Results (ralph-cico-mobile)",
//         "in": "2023-11-07 14:43:33",
//         "out": "2023-11-07 14:44:53",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "ralph-cico-mobile",
//         "in": "2023-11-07 14:44:43",
//         "out": "2023-11-07 14:45:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:44:53",
//         "out": "2023-11-07 14:45:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:45:13",
//         "out": "2023-11-07 14:45:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:45:23",
//         "out": "2023-11-07 14:45:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:45:33",
//         "out": "2023-11-07 14:46:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:45:43",
//         "out": "2023-11-07 14:46:33",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:46:03",
//         "out": "2023-11-07 14:46:43",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 14:46:33",
//         "out": "2023-11-07 14:46:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:46:43",
//         "out": "2023-11-07 14:47:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 14:46:53",
//         "out": "2023-11-07 14:48:03",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 14:48:03",
//         "out": "2023-11-07 14:48:53",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:48:33",
//         "out": "2023-11-07 14:49:43",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 14:48:53",
//         "out": "2023-11-07 14:49:53",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 14:49:43",
//         "out": "2023-11-07 14:50:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:49:53",
//         "out": "2023-11-07 14:50:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 14:50:13",
//         "out": "2023-11-07 14:50:43",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:50:23",
//         "out": "2023-11-07 14:51:23",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:50:43",
//         "out": "2023-11-07 14:51:43",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 14:51:23",
//         "out": "2023-11-07 14:51:53",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 14:51:43",
//         "out": "2023-11-07 14:52:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 14:51:53",
//         "out": "2023-11-07 14:52:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 14:52:13",
//         "out": "2023-11-07 14:53:33",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:52:23",
//         "out": "2023-11-07 14:54:23",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 14:53:33",
//         "out": "2023-11-07 14:56:43",
//         "idle": "00:00:00",
//         "usage": "00:03:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:54:23",
//         "out": "2023-11-07 14:57:03",
//         "idle": "00:00:00",
//         "usage": "00:02:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 14:56:43",
//         "out": "2023-11-07 14:57:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:57:03",
//         "out": "2023-11-07 14:57:43",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 14:57:23",
//         "out": "2023-11-07 14:58:13",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:57:43",
//         "out": "2023-11-07 14:58:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:58:13",
//         "out": "2023-11-07 14:58:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 14:58:23",
//         "out": "2023-11-07 14:58:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:58:33",
//         "out": "2023-11-07 14:59:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:58:43",
//         "out": "2023-11-07 14:59:43",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:59:03",
//         "out": "2023-11-07 14:59:53",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 14:59:43",
//         "out": "2023-11-07 15:00:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 14:59:53",
//         "out": "2023-11-07 15:00:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:00:13",
//         "out": "2023-11-07 15:00:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:00:23",
//         "out": "2023-11-07 15:00:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:00:33",
//         "out": "2023-11-07 15:01:43",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 15:00:43",
//         "out": "2023-11-07 15:01:53",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:01:43",
//         "out": "2023-11-07 15:02:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 15:01:53",
//         "out": "2023-11-07 15:02:43",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 15:02:03",
//         "out": "2023-11-07 15:02:53",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 15:02:43",
//         "out": "2023-11-07 15:03:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:02:53",
//         "out": "2023-11-07 15:05:23",
//         "idle": "00:01:50",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:05:23",
//         "out": "2023-11-07 15:06:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:06:23",
//         "out": "2023-11-07 15:07:23",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:07:23",
//         "out": "2023-11-07 15:07:53",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "ionic-team/capacitor-assets: Local Capacitor icon/splash screen resource generation tool",
//         "in": "2023-11-07 15:07:43",
//         "out": "2023-11-07 15:08:03",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 15:07:53",
//         "out": "2023-11-07 15:09:33",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Image Generator / PWABuilder",
//         "in": "2023-11-07 15:08:03",
//         "out": "2023-11-07 15:09:43",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Firebase console",
//         "in": "2023-11-07 15:09:33",
//         "out": "2023-11-07 15:10:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 15:09:43",
//         "out": "2023-11-07 15:10:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 15:10:03",
//         "out": "2023-11-07 15:10:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:10:13",
//         "out": "2023-11-07 15:10:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 15:10:23",
//         "out": "2023-11-07 15:10:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "ralph-cico",
//         "in": "2023-11-07 15:10:33",
//         "out": "2023-11-07 15:11:03",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:10:43",
//         "out": "2023-11-07 15:11:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:11:03",
//         "out": "2023-11-07 15:11:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:11:13",
//         "out": "2023-11-07 15:11:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 15:11:23",
//         "out": "2023-11-07 15:11:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:11:33",
//         "out": "2023-11-07 15:11:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 15:11:43",
//         "out": "2023-11-07 15:12:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "ralph-cico",
//         "in": "2023-11-07 15:11:53",
//         "out": "2023-11-07 15:12:33",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 15:12:23",
//         "out": "2023-11-07 15:12:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:12:33",
//         "out": "2023-11-07 15:13:13",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:12:43",
//         "out": "2023-11-07 15:13:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/app.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:13:13",
//         "out": "2023-11-07 15:13:43",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:13:23",
//         "out": "2023-11-07 15:14:13",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 15:13:43",
//         "out": "2023-11-07 15:14:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/logs.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:14:13",
//         "out": "2023-11-07 15:14:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/app.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:14:23",
//         "out": "2023-11-07 15:14:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 15:14:33",
//         "out": "2023-11-07 15:14:53",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:14:43",
//         "out": "2023-11-07 15:15:53",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 15:14:53",
//         "out": "2023-11-07 15:16:13",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 15:15:53",
//         "out": "2023-11-07 15:16:23",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:16:13",
//         "out": "2023-11-07 15:16:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/app.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:16:23",
//         "out": "2023-11-07 15:16:43",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 15:16:33",
//         "out": "2023-11-07 15:17:13",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 15:16:43",
//         "out": "2023-11-07 15:17:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 15:17:13",
//         "out": "2023-11-07 16:23:43",
//         "idle": "00:00:00",
//         "usage": "01:06:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 15:17:23",
//         "out": "2023-11-07 16:24:13",
//         "idle": "00:00:00",
//         "usage": "01:06:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:23:43",
//         "out": "2023-11-07 16:24:23",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 16:24:13",
//         "out": "2023-11-07 16:24:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 16:24:23",
//         "out": "2023-11-07 16:25:43",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 16:24:33",
//         "out": "2023-11-07 16:26:53",
//         "idle": "00:00:00",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:25:43",
//         "out": "2023-11-07 16:27:03",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 16:26:53",
//         "out": "2023-11-07 16:27:43",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:27:03",
//         "out": "2023-11-07 16:28:03",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 16:27:43",
//         "out": "2023-11-07 16:28:13",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 16:28:03",
//         "out": "2023-11-07 16:28:23",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/config.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:28:13",
//         "out": "2023-11-07 16:28:33",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/config.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 16:28:23",
//         "out": "2023-11-07 16:28:53",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 16:28:33",
//         "out": "2023-11-07 16:29:23",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:28:53",
//         "out": "2023-11-07 16:29:33",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 16:29:23",
//         "out": "2023-11-07 16:30:03",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 16:29:33",
//         "out": "2023-11-07 16:31:03",
//         "idle": "00:01:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 16:31:03",
//         "out": "2023-11-07 16:31:13",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:33:43",
//         "out": "2023-11-07 16:34:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:34:43",
//         "out": "2023-11-07 16:35:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:35:43",
//         "out": "2023-11-07 16:36:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:36:43",
//         "out": "2023-11-07 16:37:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:37:43",
//         "out": "2023-11-07 16:38:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:38:43",
//         "out": "2023-11-07 16:39:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:39:43",
//         "out": "2023-11-07 16:40:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:40:43",
//         "out": "2023-11-07 16:41:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:41:43",
//         "out": "2023-11-07 16:42:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:42:43",
//         "out": "2023-11-07 16:43:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:43:43",
//         "out": "2023-11-07 16:44:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:44:43",
//         "out": "2023-11-07 16:45:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:45:43",
//         "out": "2023-11-07 16:46:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:46:43",
//         "out": "2023-11-07 16:47:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:47:43",
//         "out": "2023-11-07 16:48:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:48:43",
//         "out": "2023-11-07 16:49:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:49:43",
//         "out": "2023-11-07 16:50:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:50:43",
//         "out": "2023-11-07 16:51:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:51:43",
//         "out": "2023-11-07 16:52:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:52:43",
//         "out": "2023-11-07 16:53:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:53:43",
//         "out": "2023-11-07 16:54:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:54:43",
//         "out": "2023-11-07 16:55:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:55:43",
//         "out": "2023-11-07 16:56:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:56:43",
//         "out": "2023-11-07 16:57:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:57:43",
//         "out": "2023-11-07 16:58:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:58:43",
//         "out": "2023-11-07 16:59:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 16:59:43",
//         "out": "2023-11-07 17:00:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:00:43",
//         "out": "2023-11-07 17:01:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:01:43",
//         "out": "2023-11-07 17:02:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:02:43",
//         "out": "2023-11-07 17:03:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:03:43",
//         "out": "2023-11-07 17:04:43",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:04:43",
//         "out": "2023-11-07 17:05:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:05:44",
//         "out": "2023-11-07 17:06:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:06:44",
//         "out": "2023-11-07 17:07:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:07:44",
//         "out": "2023-11-07 17:08:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:08:44",
//         "out": "2023-11-07 17:09:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:09:44",
//         "out": "2023-11-07 17:10:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:10:44",
//         "out": "2023-11-07 17:11:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:11:44",
//         "out": "2023-11-07 17:12:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:12:44",
//         "out": "2023-11-07 17:13:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:13:44",
//         "out": "2023-11-07 17:14:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:14:44",
//         "out": "2023-11-07 17:15:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:15:44",
//         "out": "2023-11-07 17:16:44",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:16:44",
//         "out": "2023-11-07 17:17:34",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 17:17:14",
//         "out": "2023-11-07 17:18:34",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "Find Results (ralph-cico-mobile)",
//         "in": "2023-11-07 17:17:34",
//         "out": "2023-11-07 17:18:44",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:18:34",
//         "out": "2023-11-07 17:18:54",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:18:44",
//         "out": "2023-11-07 17:19:34",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 17:18:54",
//         "out": "2023-11-07 17:19:44",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "authentication",
//         "in": "2023-11-07 17:19:34",
//         "out": "2023-11-07 17:20:04",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 17:19:44",
//         "out": "2023-11-07 17:20:14",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "CICO",
//         "in": "2023-11-07 17:20:04",
//         "out": "2023-11-07 17:20:24",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "rit",
//         "in": "2023-11-07 17:20:14",
//         "out": "2023-11-07 17:20:34",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "Find Results (Charted-v2)",
//         "in": "2023-11-07 17:20:24",
//         "out": "2023-11-07 17:20:54",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Garage-app",
//         "in": "2023-11-07 17:20:34",
//         "out": "2023-11-07 17:21:04",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 17:20:54",
//         "out": "2023-11-07 17:22:04",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 17:22:04",
//         "out": "2023-11-07 17:22:14",
//         "idle": "00:00:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:22:14",
//         "out": "2023-11-07 17:22:34",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:22:24",
//         "out": "2023-11-07 17:22:44",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/user-routing.module.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:22:34",
//         "out": "2023-11-07 17:23:44",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 17:22:44",
//         "out": "2023-11-07 17:24:54",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:23:44",
//         "out": "2023-11-07 17:25:04",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:24:54",
//         "out": "2023-11-07 17:25:54",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:25:04",
//         "out": "2023-11-07 17:26:14",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "authentication",
//         "in": "2023-11-07 17:25:54",
//         "out": "2023-11-07 17:26:24",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 17:26:14",
//         "out": "2023-11-07 17:26:34",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:26:24",
//         "out": "2023-11-07 17:26:44",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 17:26:34",
//         "out": "2023-11-07 17:27:14",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:26:44",
//         "out": "2023-11-07 17:27:34",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:27:14",
//         "out": "2023-11-07 17:27:54",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:27:34",
//         "out": "2023-11-07 17:28:04",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 17:27:54",
//         "out": "2023-11-07 17:28:14",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Untitled",
//         "in": "2023-11-07 17:28:04",
//         "out": "2023-11-07 17:28:24",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:28:14",
//         "out": "2023-11-07 17:29:14",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:28:24",
//         "out": "2023-11-07 17:29:34",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 17:29:14",
//         "out": "2023-11-07 17:30:24",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:29:34",
//         "out": "2023-11-07 17:30:34",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:30:24",
//         "out": "2023-11-07 17:30:44",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 17:30:34",
//         "out": "2023-11-07 17:31:04",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:30:44",
//         "out": "2023-11-07 17:31:14",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:31:04",
//         "out": "2023-11-07 17:31:24",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 17:31:14",
//         "out": "2023-11-07 17:31:44",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:31:24",
//         "out": "2023-11-07 17:32:34",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 17:31:44",
//         "out": "2023-11-07 17:32:44",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 17:32:34",
//         "out": "2023-11-07 17:33:04",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:32:44",
//         "out": "2023-11-07 17:33:54",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 17:33:04",
//         "out": "2023-11-07 17:34:04",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 17:33:54",
//         "out": "2023-11-07 17:34:24",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 17:34:04",
//         "out": "2023-11-07 17:35:34",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 17:34:24",
//         "out": "2023-11-07 17:35:44",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:35:34",
//         "out": "2023-11-07 17:36:04",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 17:35:44",
//         "out": "2023-11-07 17:36:14",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/config.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 17:36:04",
//         "out": "2023-11-07 17:36:24",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:36:14",
//         "out": "2023-11-07 17:36:44",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 17:36:24",
//         "out": "2023-11-07 17:37:01",
//         "idle": "00:00:00",
//         "usage": "00:00:37"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 17:36:44",
//         "out": "2023-11-07 17:39:11",
//         "idle": "00:00:00",
//         "usage": "00:02:27"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:37:01",
//         "out": "2023-11-07 17:39:25",
//         "idle": "00:00:00",
//         "usage": "00:02:24"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 17:39:11",
//         "out": "2023-11-07 17:39:35",
//         "idle": "00:00:00",
//         "usage": "00:00:24"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 17:39:25",
//         "out": "2023-11-07 17:39:45",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:39:35",
//         "out": "2023-11-07 17:40:55",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:40:55",
//         "out": "2023-11-07 17:41:55",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(7) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 17:41:45",
//         "out": "2023-11-07 17:42:05",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 17:41:55",
//         "out": "2023-11-07 17:42:15",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Prayansh Dubey",
//         "in": "2023-11-07 17:42:05",
//         "out": "2023-11-07 17:42:25",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Discord",
//         "in": "2023-11-07 17:42:15",
//         "out": "2023-11-07 17:43:55",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 17:42:25",
//         "out": "2023-11-07 17:44:05",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "YouTube",
//         "in": "2023-11-07 17:43:55",
//         "out": "2023-11-07 17:44:15",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Channel content",
//         "in": "2023-11-07 17:44:05",
//         "out": "2023-11-07 17:45:05",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:44:15",
//         "out": "2023-11-07 17:45:15",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 17:45:05",
//         "out": "2023-11-07 17:45:25",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Task sheet",
//         "in": "2023-11-07 17:45:15",
//         "out": "2023-11-07 17:45:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Channel content",
//         "in": "2023-11-07 17:45:25",
//         "out": "2023-11-07 17:45:45",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Ralph daily CICO",
//         "in": "2023-11-07 17:45:35",
//         "out": "2023-11-07 17:45:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Task sheet",
//         "in": "2023-11-07 17:45:45",
//         "out": "2023-11-07 17:46:05",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:45:55",
//         "out": "2023-11-07 17:51:25",
//         "idle": "00:01:00",
//         "usage": "00:04:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:51:25",
//         "out": "2023-11-07 17:52:25",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:52:25",
//         "out": "2023-11-07 17:53:25",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:53:25",
//         "out": "2023-11-07 17:54:25",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:54:25",
//         "out": "2023-11-07 17:55:25",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:55:25",
//         "out": "2023-11-07 17:56:25",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:56:25",
//         "out": "2023-11-07 17:57:25",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:57:25",
//         "out": "2023-11-07 17:58:25",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:58:25",
//         "out": "2023-11-07 17:59:25",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 17:59:25",
//         "out": "2023-11-07 18:00:25",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:00:25",
//         "out": "2023-11-07 18:01:55",
//         "idle": "00:01:20",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:01:55",
//         "out": "2023-11-07 18:02:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:02:55",
//         "out": "2023-11-07 18:03:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:03:55",
//         "out": "2023-11-07 18:04:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:04:55",
//         "out": "2023-11-07 18:05:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:05:55",
//         "out": "2023-11-07 18:06:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:06:55",
//         "out": "2023-11-07 18:07:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:07:55",
//         "out": "2023-11-07 18:08:45",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 18:08:35",
//         "out": "2023-11-07 18:09:45",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 18:09:45",
//         "out": "2023-11-07 18:10:05",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:10:05",
//         "out": "2023-11-07 18:11:55",
//         "idle": "00:01:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:11:55",
//         "out": "2023-11-07 18:12:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:12:55",
//         "out": "2023-11-07 18:13:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:13:55",
//         "out": "2023-11-07 18:14:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:14:55",
//         "out": "2023-11-07 18:15:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:15:55",
//         "out": "2023-11-07 18:16:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:16:55",
//         "out": "2023-11-07 18:17:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:17:55",
//         "out": "2023-11-07 18:18:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:18:55",
//         "out": "2023-11-07 18:19:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:19:55",
//         "out": "2023-11-07 18:20:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:20:55",
//         "out": "2023-11-07 18:21:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:21:55",
//         "out": "2023-11-07 18:22:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:22:55",
//         "out": "2023-11-07 18:23:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:23:55",
//         "out": "2023-11-07 18:24:55",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:24:55",
//         "out": "2023-11-07 18:26:05",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:25:35",
//         "out": "2023-11-07 18:26:15",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 18:26:05",
//         "out": "2023-11-07 18:26:25",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 18:26:15",
//         "out": "2023-11-07 18:26:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 18:26:25",
//         "out": "2023-11-07 18:26:55",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 18:26:35",
//         "out": "2023-11-07 18:27:06",
//         "idle": "00:00:00",
//         "usage": "00:00:31"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 18:26:55",
//         "out": "2023-11-07 18:27:15",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "My Projects",
//         "in": "2023-11-07 18:27:06",
//         "out": "2023-11-07 18:27:25",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:27:15",
//         "out": "2023-11-07 18:27:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 18:27:25",
//         "out": "2023-11-07 18:27:45",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:27:35",
//         "out": "2023-11-07 18:27:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 18:27:45",
//         "out": "2023-11-07 18:28:15",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:27:55",
//         "out": "2023-11-07 18:28:35",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:28:15",
//         "out": "2023-11-07 18:28:45",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:28:35",
//         "out": "2023-11-07 18:28:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:28:45",
//         "out": "2023-11-07 18:29:05",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:28:55",
//         "out": "2023-11-07 18:29:15",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:29:05",
//         "out": "2023-11-07 18:29:35",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:29:15",
//         "out": "2023-11-07 18:29:45",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:29:35",
//         "out": "2023-11-07 18:30:05",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:29:45",
//         "out": "2023-11-07 18:30:35",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:30:05",
//         "out": "2023-11-07 18:30:55",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:30:35",
//         "out": "2023-11-07 18:32:35",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 18:30:55",
//         "out": "2023-11-07 18:32:45",
//         "idle": "00:00:00",
//         "usage": "00:01:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:32:35",
//         "out": "2023-11-07 18:33:45",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | #general | Rao Information Technology",
//         "in": "2023-11-07 18:32:45",
//         "out": "2023-11-07 18:35:35",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 18:33:45",
//         "out": "2023-11-07 18:35:45",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:35:35",
//         "out": "2023-11-07 18:36:05",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Postman",
//         "windowName": "Postman",
//         "in": "2023-11-07 18:35:45",
//         "out": "2023-11-07 18:37:15",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inbox (4,070)",
//         "in": "2023-11-07 18:36:05",
//         "out": "2023-11-07 18:37:25",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:37:15",
//         "out": "2023-11-07 18:37:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:37:25",
//         "out": "2023-11-07 18:38:15",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:37:35",
//         "out": "2023-11-07 18:38:35",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | #general | Rao Information Technology",
//         "in": "2023-11-07 18:38:15",
//         "out": "2023-11-07 18:38:45",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:38:35",
//         "out": "2023-11-07 18:38:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:38:45",
//         "out": "2023-11-07 18:39:05",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:38:55",
//         "out": "2023-11-07 18:39:15",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:39:05",
//         "out": "2023-11-07 18:39:35",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Postman",
//         "windowName": "Postman",
//         "in": "2023-11-07 18:39:15",
//         "out": "2023-11-07 18:39:45",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:39:35",
//         "out": "2023-11-07 18:39:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:39:45",
//         "out": "2023-11-07 18:40:05",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:39:55",
//         "out": "2023-11-07 18:41:05",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:41:05",
//         "out": "2023-11-07 18:42:45",
//         "idle": "00:01:20",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:42:45",
//         "out": "2023-11-07 18:43:45",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:43:45",
//         "out": "2023-11-07 18:44:05",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:44:05",
//         "out": "2023-11-07 18:45:05",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:44:15",
//         "out": "2023-11-07 18:45:55",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Postman",
//         "windowName": "Postman",
//         "in": "2023-11-07 18:45:05",
//         "out": "2023-11-07 18:46:05",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inbox (4,070)",
//         "in": "2023-11-07 18:45:55",
//         "out": "2023-11-07 18:46:15",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:46:05",
//         "out": "2023-11-07 18:47:15",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:47:15",
//         "out": "2023-11-07 18:48:15",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:48:15",
//         "out": "2023-11-07 18:48:55",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:48:35",
//         "out": "2023-11-07 18:49:25",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inbox (4,069)",
//         "in": "2023-11-07 18:48:55",
//         "out": "2023-11-07 18:49:35",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:49:25",
//         "out": "2023-11-07 18:50:05",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:49:35",
//         "out": "2023-11-07 18:50:15",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:50:05",
//         "out": "2023-11-07 18:50:45",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:50:15",
//         "out": "2023-11-07 18:51:05",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Postman",
//         "windowName": "Postman",
//         "in": "2023-11-07 18:50:45",
//         "out": "2023-11-07 18:51:16",
//         "idle": "00:00:00",
//         "usage": "00:00:31"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:51:05",
//         "out": "2023-11-07 18:52:25",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:51:16",
//         "out": "2023-11-07 18:52:35",
//         "idle": "00:00:00",
//         "usage": "00:01:19"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:52:25",
//         "out": "2023-11-07 18:53:05",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:52:35",
//         "out": "2023-11-07 18:53:25",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:53:05",
//         "out": "2023-11-07 18:53:35",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:53:25",
//         "out": "2023-11-07 18:53:45",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 18:53:35",
//         "out": "2023-11-07 18:53:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:53:45",
//         "out": "2023-11-07 18:54:15",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Postman",
//         "windowName": "Postman",
//         "in": "2023-11-07 18:53:55",
//         "out": "2023-11-07 18:54:25",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:54:15",
//         "out": "2023-11-07 18:54:45",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:54:25",
//         "out": "2023-11-07 18:54:55",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:54:45",
//         "out": "2023-11-07 18:55:15",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:54:55",
//         "out": "2023-11-07 18:55:25",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:55:15",
//         "out": "2023-11-07 18:55:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:55:25",
//         "out": "2023-11-07 18:55:45",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:55:35",
//         "out": "2023-11-07 18:56:15",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inbox (4,069)",
//         "in": "2023-11-07 18:55:45",
//         "out": "2023-11-07 18:56:25",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:56:15",
//         "out": "2023-11-07 18:56:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:56:25",
//         "out": "2023-11-07 18:56:45",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:56:35",
//         "out": "2023-11-07 18:56:55",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:56:45",
//         "out": "2023-11-07 18:57:05",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:56:55",
//         "out": "2023-11-07 18:57:25",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 18:57:05",
//         "out": "2023-11-07 18:57:35",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:57:25",
//         "out": "2023-11-07 18:58:25",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Postman",
//         "windowName": "Postman",
//         "in": "2023-11-07 18:57:35",
//         "out": "2023-11-07 18:58:36",
//         "idle": "00:00:00",
//         "usage": "00:01:01"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:58:25",
//         "out": "2023-11-07 18:58:55",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 18:58:36",
//         "out": "2023-11-07 18:59:05",
//         "idle": "00:00:00",
//         "usage": "00:00:29"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Keval Vala forced clockout.",
//         "in": "2023-11-07 18:58:55",
//         "out": "2023-11-07 18:59:15",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "ralph-cico",
//         "in": "2023-11-07 18:59:05",
//         "out": "2023-11-07 18:59:25",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 18:59:15",
//         "out": "2023-11-07 18:59:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Postman",
//         "windowName": "Postman",
//         "in": "2023-11-07 18:59:25",
//         "out": "2023-11-07 18:59:45",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 18:59:35",
//         "out": "2023-11-07 19:00:46",
//         "idle": "00:00:00",
//         "usage": "00:01:11"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Himanshu_chauhan",
//         "in": "2023-11-07 18:59:45",
//         "out": "2023-11-07 19:00:56",
//         "idle": "00:00:00",
//         "usage": "00:01:11"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inbox (4,069)",
//         "in": "2023-11-07 19:00:46",
//         "out": "2023-11-07 19:01:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:00:56",
//         "out": "2023-11-07 19:01:16",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 19:01:06",
//         "out": "2023-11-07 19:01:26",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:01:16",
//         "out": "2023-11-07 19:01:36",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:01:26",
//         "out": "2023-11-07 19:01:56",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:01:36",
//         "out": "2023-11-07 19:02:06",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:01:56",
//         "out": "2023-11-07 19:03:05",
//         "idle": "00:00:00",
//         "usage": "00:01:09"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "debug",
//         "in": "2023-11-07 19:02:06",
//         "out": "2023-11-07 19:03:15",
//         "idle": "00:00:00",
//         "usage": "00:01:09"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 19:03:05",
//         "out": "2023-11-07 19:04:15",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 19:04:15",
//         "out": "2023-11-07 19:05:15",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 19:05:15",
//         "out": "2023-11-07 19:06:15",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 19:06:15",
//         "out": "2023-11-07 19:07:15",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 19:07:15",
//         "out": "2023-11-07 19:08:15",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 19:08:15",
//         "out": "2023-11-07 19:09:15",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 19:09:15",
//         "out": "2023-11-07 19:10:15",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 19:10:15",
//         "out": "2023-11-07 19:10:35",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:10:35",
//         "out": "2023-11-07 19:11:45",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:11:35",
//         "out": "2023-11-07 19:12:35",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Himesh Suthar",
//         "in": "2023-11-07 19:11:45",
//         "out": "2023-11-07 19:13:35",
//         "idle": "00:01:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Himesh Suthar",
//         "in": "2023-11-07 19:13:35",
//         "out": "2023-11-07 19:14:35",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Himesh Suthar",
//         "in": "2023-11-07 19:14:35",
//         "out": "2023-11-07 19:15:05",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:14:55",
//         "out": "2023-11-07 19:15:16",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inbox (4,069)",
//         "in": "2023-11-07 19:15:05",
//         "out": "2023-11-07 19:15:25",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:15:16",
//         "out": "2023-11-07 19:15:45",
//         "idle": "00:00:00",
//         "usage": "00:00:29"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 19:15:25",
//         "out": "2023-11-07 19:19:05",
//         "idle": "00:00:00",
//         "usage": "00:03:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Himesh Suthar",
//         "in": "2023-11-07 19:15:45",
//         "out": "2023-11-07 19:19:25",
//         "idle": "00:00:00",
//         "usage": "00:03:40"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Garage-app",
//         "in": "2023-11-07 19:19:05",
//         "out": "2023-11-07 19:19:36",
//         "idle": "00:00:00",
//         "usage": "00:00:31"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "build",
//         "in": "2023-11-07 19:19:25",
//         "out": "2023-11-07 19:19:46",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "debug",
//         "in": "2023-11-07 19:19:36",
//         "out": "2023-11-07 19:19:56",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Riddhi Gohel",
//         "in": "2023-11-07 19:19:46",
//         "out": "2023-11-07 19:20:05",
//         "idle": "00:00:00",
//         "usage": "00:00:19"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 19:19:56",
//         "out": "2023-11-07 19:20:26",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:20:05",
//         "out": "2023-11-07 19:20:35",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 19:20:26",
//         "out": "2023-11-07 19:20:46",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "My Projects",
//         "in": "2023-11-07 19:20:35",
//         "out": "2023-11-07 19:20:56",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 19:20:46",
//         "out": "2023-11-07 19:21:26",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 19:20:56",
//         "out": "2023-11-07 19:21:36",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:21:26",
//         "out": "2023-11-07 19:21:46",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "apk",
//         "in": "2023-11-07 19:21:36",
//         "out": "2023-11-07 19:21:56",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "main",
//         "in": "2023-11-07 19:21:46",
//         "out": "2023-11-07 19:22:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "Garage-app",
//         "in": "2023-11-07 19:21:56",
//         "out": "2023-11-07 19:22:16",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:22:06",
//         "out": "2023-11-07 19:22:55",
//         "idle": "00:00:00",
//         "usage": "00:00:49"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 19:22:16",
//         "out": "2023-11-07 19:23:06",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Email service",
//         "in": "2023-11-07 19:22:55",
//         "out": "2023-11-07 19:23:16",
//         "idle": "00:00:00",
//         "usage": "00:00:21"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "New Tab",
//         "in": "2023-11-07 19:23:06",
//         "out": "2023-11-07 19:23:26",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 19:23:16",
//         "out": "2023-11-07 19:23:36",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 19:23:26",
//         "out": "2023-11-07 19:23:46",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "DevTools",
//         "in": "2023-11-07 19:23:36",
//         "out": "2023-11-07 19:23:56",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:23:46",
//         "out": "2023-11-07 19:24:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:23:56",
//         "out": "2023-11-07 19:25:16",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:25:16",
//         "out": "2023-11-07 19:26:16",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 19:26:06",
//         "out": "2023-11-07 19:26:26",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:26:16",
//         "out": "2023-11-07 19:27:06",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 19:26:26",
//         "out": "2023-11-07 19:27:26",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:27:06",
//         "out": "2023-11-07 19:27:46",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 19:27:26",
//         "out": "2023-11-07 19:27:56",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @vivekbharda",
//         "in": "2023-11-07 19:27:46",
//         "out": "2023-11-07 19:28:26",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:27:56",
//         "out": "2023-11-07 19:28:36",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:28:26",
//         "out": "2023-11-07 19:28:56",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @vivekbharda",
//         "in": "2023-11-07 19:28:36",
//         "out": "2023-11-07 19:29:06",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:28:56",
//         "out": "2023-11-07 19:29:16",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:29:06",
//         "out": "2023-11-07 19:29:36",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:29:16",
//         "out": "2023-11-07 19:29:46",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:29:36",
//         "out": "2023-11-07 19:30:16",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 19:29:46",
//         "out": "2023-11-07 19:30:46",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @vivekbharda",
//         "in": "2023-11-07 19:30:16",
//         "out": "2023-11-07 19:30:56",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "https://2020companies.tfaforms.net/321222",
//         "in": "2023-11-07 19:30:46",
//         "out": "2023-11-07 19:31:16",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 19:30:56",
//         "out": "2023-11-07 19:31:46",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "ralph-cico",
//         "in": "2023-11-07 19:31:16",
//         "out": "2023-11-07 19:33:16",
//         "idle": "00:00:00",
//         "usage": "00:02:00"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts • (ralph-cico-mobile)",
//         "in": "2023-11-07 19:31:46",
//         "out": "2023-11-07 19:33:26",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:33:16",
//         "out": "2023-11-07 19:33:36",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:33:26",
//         "out": "2023-11-07 19:34:26",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:33:36",
//         "out": "2023-11-07 19:34:46",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 19:34:26",
//         "out": "2023-11-07 19:35:16",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "https://2020companies.tfaforms.net/321222",
//         "in": "2023-11-07 19:34:46",
//         "out": "2023-11-07 19:35:26",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 19:35:16",
//         "out": "2023-11-07 19:36:26",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 19:36:26",
//         "out": "2023-11-07 19:36:46",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Untitled",
//         "in": "2023-11-07 19:36:46",
//         "out": "2023-11-07 19:37:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 19:36:56",
//         "out": "2023-11-07 19:37:46",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:37:06",
//         "out": "2023-11-07 19:38:26",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Org.gnome.Nautilus",
//         "windowName": "debug",
//         "in": "2023-11-07 19:37:46",
//         "out": "2023-11-07 19:38:36",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @Himesh Suthar",
//         "in": "2023-11-07 19:38:26",
//         "out": "2023-11-07 19:38:46",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @keval_vala",
//         "in": "2023-11-07 19:38:36",
//         "out": "2023-11-07 19:40:16",
//         "idle": "00:01:10",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @keval_vala",
//         "in": "2023-11-07 19:40:16",
//         "out": "2023-11-07 19:41:16",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @keval_vala",
//         "in": "2023-11-07 19:41:16",
//         "out": "2023-11-07 19:42:36",
//         "idle": "00:01:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @keval_vala",
//         "in": "2023-11-07 19:42:36",
//         "out": "2023-11-07 19:43:16",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "SuperSee Widget",
//         "in": "2023-11-07 19:43:06",
//         "out": "2023-11-07 19:43:26",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Inspect with Chrome Developer Tools",
//         "in": "2023-11-07 19:43:16",
//         "out": "2023-11-07 19:43:36",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 19:43:26",
//         "out": "2023-11-07 19:44:16",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 19:43:36",
//         "out": "2023-11-07 19:44:56",
//         "idle": "00:00:00",
//         "usage": "00:01:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:44:16",
//         "out": "2023-11-07 19:45:06",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 19:44:56",
//         "out": "2023-11-07 19:45:16",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 19:45:06",
//         "out": "2023-11-07 19:48:36",
//         "idle": "00:00:00",
//         "usage": "00:03:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "ralph-cico",
//         "in": "2023-11-07 19:45:16",
//         "out": "2023-11-07 19:48:46",
//         "idle": "00:00:00",
//         "usage": "00:03:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:48:36",
//         "out": "2023-11-07 19:48:56",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/logs.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:48:46",
//         "out": "2023-11-07 19:49:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:48:56",
//         "out": "2023-11-07 19:49:26",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:49:06",
//         "out": "2023-11-07 19:49:36",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "jetbrains-studio",
//         "windowName": "android",
//         "in": "2023-11-07 19:49:26",
//         "out": "2023-11-07 19:50:16",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:49:36",
//         "out": "2023-11-07 19:50:46",
//         "idle": "00:00:00",
//         "usage": "00:01:10"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:50:16",
//         "out": "2023-11-07 19:50:56",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:50:46",
//         "out": "2023-11-07 19:51:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:50:56",
//         "out": "2023-11-07 19:51:16",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/logs.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:51:06",
//         "out": "2023-11-07 19:51:46",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 19:51:16",
//         "out": "2023-11-07 19:51:56",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Justin Bieber",
//         "in": "2023-11-07 19:51:46",
//         "out": "2023-11-07 19:52:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "bella cho song",
//         "in": "2023-11-07 19:51:56",
//         "out": "2023-11-07 19:52:16",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 19:52:06",
//         "out": "2023-11-07 19:52:46",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:52:16",
//         "out": "2023-11-07 19:52:56",
//         "idle": "00:00:00",
//         "usage": "00:00:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:52:46",
//         "out": "2023-11-07 19:53:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:52:56",
//         "out": "2023-11-07 19:53:16",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 19:53:06",
//         "out": "2023-11-07 19:53:26",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:53:16",
//         "out": "2023-11-07 19:53:36",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/user/login/login.component.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:53:26",
//         "out": "2023-11-07 19:53:46",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 19:53:36",
//         "out": "2023-11-07 19:53:56",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 19:53:46",
//         "out": "2023-11-07 19:54:16",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 19:53:56",
//         "out": "2023-11-07 19:54:26",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Screenshot_2023-11-07-19-42-08-470_com.android.chrome.jpg (1080×2280)",
//         "in": "2023-11-07 19:54:16",
//         "out": "2023-11-07 19:54:36",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 19:54:26",
//         "out": "2023-11-07 19:54:46",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @keval_vala",
//         "in": "2023-11-07 19:54:36",
//         "out": "2023-11-07 19:54:56",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO",
//         "in": "2023-11-07 19:54:46",
//         "out": "2023-11-07 19:55:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:54:56",
//         "out": "2023-11-07 19:56:36",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(6) Discord | @keval_vala",
//         "in": "2023-11-07 19:55:06",
//         "out": "2023-11-07 19:56:46",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @Rao Helper Bot",
//         "in": "2023-11-07 19:56:36",
//         "out": "2023-11-07 19:56:56",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:56:46",
//         "out": "2023-11-07 19:57:16",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Rao Conduct (Project Management Tool)",
//         "in": "2023-11-07 19:56:56",
//         "out": "2023-11-07 19:57:26",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:57:16",
//         "out": "2023-11-07 19:58:26",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:58:26",
//         "out": "2023-11-07 19:59:56",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 19:59:56",
//         "out": "2023-11-07 20:02:06",
//         "idle": "00:00:00",
//         "usage": "00:02:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:01:16",
//         "out": "2023-11-07 20:04:26",
//         "idle": "00:01:30",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:04:26",
//         "out": "2023-11-07 20:05:26",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:05:26",
//         "out": "2023-11-07 20:06:26",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:06:26",
//         "out": "2023-11-07 20:07:26",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:07:26",
//         "out": "2023-11-07 20:08:26",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:08:26",
//         "out": "2023-11-07 20:09:26",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:09:26",
//         "out": "2023-11-07 20:10:26",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:10:26",
//         "out": "2023-11-07 20:11:36",
//         "idle": "00:01:00",
//         "usage": "00:00:10"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:11:36",
//         "out": "2023-11-07 20:12:36",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:12:36",
//         "out": "2023-11-07 20:13:36",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:13:36",
//         "out": "2023-11-07 20:14:36",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:14:36",
//         "out": "2023-11-07 20:15:36",
//         "idle": "00:01:00",
//         "usage": "00:00:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "CICO Admin Panel",
//         "in": "2023-11-07 20:15:36",
//         "out": "2023-11-07 20:16:06",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/services/login.service.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 20:15:46",
//         "out": "2023-11-07 20:17:16",
//         "idle": "00:00:00",
//         "usage": "00:01:30"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 20:16:06",
//         "out": "2023-11-07 20:18:26",
//         "idle": "00:00:00",
//         "usage": "00:02:20"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 20:17:16",
//         "out": "2023-11-07 20:18:56",
//         "idle": "00:00:00",
//         "usage": "00:01:40"
//     },
//     {
//         "appName": "Sublime_text",
//         "windowName": "~/rit/CICO/ralph-CICO/ralph-cico-mobile/src/app/tab1/tab1.page.ts (ralph-cico-mobile)",
//         "in": "2023-11-07 20:18:26",
//         "out": "2023-11-07 20:19:16",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 20:18:56",
//         "out": "2023-11-07 20:19:26",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | #ralph-cico | Rao Information Technology",
//         "in": "2023-11-07 20:19:16",
//         "out": "2023-11-07 20:19:36",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Ralph CICO",
//         "in": "2023-11-07 20:19:26",
//         "out": "2023-11-07 20:19:46",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "Ralph cico .apk v1.0.4",
//         "in": "2023-11-07 20:19:36",
//         "out": "2023-11-07 20:20:06",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 20:19:46",
//         "out": "2023-11-07 20:20:16",
//         "idle": "00:00:00",
//         "usage": "00:00:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | \"Daily-Update\" | Rao Information Technology",
//         "in": "2023-11-07 20:20:06",
//         "out": "2023-11-07 20:22:56",
//         "idle": "00:00:00",
//         "usage": "00:02:50"
//     },
//     {
//         "appName": "Gnome-terminal",
//         "windowName": "himesh@hellohimesh-linux: ~/rit/CICO/ralph-CICO/ralph-cico-mobile",
//         "in": "2023-11-07 20:20:16",
//         "out": "2023-11-07 20:23:46",
//         "idle": "00:00:00",
//         "usage": "00:03:30"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | \"Daily-Update\" | Rao Information Technology",
//         "in": "2023-11-07 20:22:56",
//         "out": "2023-11-07 20:23:56",
//         "idle": "00:00:00",
//         "usage": "00:01:00"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @keval_vala",
//         "in": "2023-11-07 20:23:46",
//         "out": "2023-11-07 20:24:06",
//         "idle": "00:00:00",
//         "usage": "00:00:20"
//     },
//     {
//         "appName": "Google-chrome",
//         "windowName": "(5) Discord | @vivekbharda",
//         "in": "2023-11-07 20:23:56",
//         "out": "2023-11-07 20:24:46",
//         "idle": "00:00:00",
//         "usage": "00:00:50"
//     },
//     {
//         "appName": "Gjs",
//         "windowName": "@!1920,109;BDHF",
//         "in": "2023-11-07 20:24:06",
//         "out": "2023-11-07 21:44:06",
//         "idle": "00:00:00",
//         "usage": "01:20:00"
//     },
//     {
//         "appName": "Supersee",
//         "windowName": "Supersee",
//         "in": "2023-11-07 20:24:46",
//         "out": "2023-11-07 21:44:07",
//         "idle": "00:00:00",
//         "usage": "01:19:21"
//     }
// ]
const result = sumIdleAndUsage(data);
console.log("Total Idle Time:", result.totalIdle);
console.log("Total Usage Time:", result.totalUsage);
