import {
  Dashboard,
  PeopleAlt,
  ImportContacts,
  Email
} from "@mui/icons-material";
import ImageIcon from '@mui/icons-material/Image';

export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/home`,
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
    name: "User Manage",
    icon: PeopleAlt,
    url: `/usermanage`,
  },
  {
    name: "Email Account",
    icon: Email,
    url: `/email`,
  },
  {
    name: "Gallery",
    icon: ImageIcon,
    url: `/gallery`,
  },
];