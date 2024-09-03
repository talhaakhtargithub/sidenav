export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
      "routeLink": "products",
      "icon": "fal fa-box-open",
      "label": "Profile",
      "children": [
          {
              "routeLink": "products/student",
              "icon": "fal fa-eye",
              "label": "Overview"
          },
          {
              "routeLink": "products/teacher",
              "icon": "fal fa-info-circle",
              "label": "Details"
          }
      ]
  }
,
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Report'
    },
    {
        routeLink: 'favorite',
        icon: 'fal fa-tags',
        label: 'Favorite'
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-bell',
        label: 'Notifications'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-book',
        label: 'History'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    },
];
