export const HUBS = [
  {id: "h1", name: "Freetown Tech Hub", city: "Freetown", lat: 8.465667, lon: -13.231722, laptops: 20, champion: true, needs: ["5 laptops", "Router"], contact: "frt-hub@educube.sl"},
  {id: "h2", name: "Bo Maker Space", city: "Bo", lat: 7.9649, lon: -11.7380, laptops: 8, champion: true, needs: ["Projector"], contact: "bo@educube.sl"},
  {id: "h3", name: "Makeni Community Hub", city: "Makeni", lat: 8.9427, lon: -11.1880, laptops: 12, champion: false, needs: ["Volunteers", "Laptops"], contact: "makeni@educube.sl"},
  {id: "h4", name: "Kenema Learning Lab", city: "Kenema", lat: 7.8754, lon: -11.1810, laptops: 6, champion: true, needs: ["Clothes", "Food"], contact: "kenema@educube.sl"},
  {id: "h5", name: "Koidu Tech Hub", city: "Koidu", lat: 8.5716, lon: -10.8071, laptops: 5, champion: false, needs: ["Power Bank"], contact: "koidu@educube.sl"}
];

export const ROLES = [
  {id: "donor", label: "Donor", capabilities: ["viewActivities", "donateCash", "donateItem", "monitorImpact", "subscribeAlerts"]},
  {id: "volunteer", label: "Volunteer", capabilities: ["browseOutreach", "applyToVolunteer", "receiveAlerts", "joinEvents"]},
  {id: "champion", label: "Digital Champion / Hub Admin", capabilities: ["selectHub","manageInventory","postEvent","uploadPhotos","updatePlans","completeTasks","earnBadges"]},
  {id: "admin", label: "System Admin (EDU Cube / UNICEF)", capabilities: ["approveReports","manageHubs","viewAnalytics","sendAnnouncements"]}
];

export const MOCK_OUTREACH = [
  {id: 1, title: "Beach Clean", date: "2025-12-20", hub: "Freetown Tech Hub", type: "upcoming", summary: "Community cleaning event"},
  {id: 2, title: "Cut One Plant Two", summary: "Climate resilience workshop and planting", photos: ["placeholder"], type: "previous", hub: "Bo Maker Space"},
  {id: 3, title: "GBV Outreach Walk", summary: "Awareness & support walk", photos: ["placeholder"], type: "previous", hub: "Makeni Community Hub"}
];

export const MOCK_COURSES = [
  {id: "c1", title: "First Aid", icon: "medical-kit"},
  {id: "c2", title: "Financial Literacy", icon: "coin"},
  {id: "c3", title: "Digital Literacy", icon: "computer"},
  {id: "c4", title: "Learning Passport", icon: "link", url: "https://learningpassport.unhcr.org"}
];
