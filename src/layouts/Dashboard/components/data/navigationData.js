import {
  Dashboard,
  PeopleAlt,
  ImportContacts,
} from "@mui/icons-material";

export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Posts",
    icon: ImportContacts,
    url: `/posts`,
    navigationData: [
      {
        name: "All Posts",
        icon: false,
        url: `/posts/all`,
      },
      {
        name: "Editor",
        icon: false,
        url: `/posts/editor`,
      },
    ],
  },
  {
    name: "Usermanage",
    icon: PeopleAlt,
    url: `/usermanage`,
  },
];