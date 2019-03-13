const Sidebar = require("vue-sidebar-generator");

const init = () => {
  let sidebar = Sidebar.autoSidebar();
  return {
    title: "DAT156",
    base: "/DAT156/",
    description: "Praksis i arbeidslivet for data @ stacc",
    themeConfig: {
      nav: [
        { text: "Hjem", link: "/" },
        { text: "GitHub", link: "https://github.com/181192/DAT156" },
        { text: "Stacc", link: "https://stacc.com/" }
      ],
      sidebar: {
        "/": sidebar
      },
      lastUpdated: "Sist oppdatert",
      serviceWorker: {
        updatePopup: {
          message: "Nytt innhold tilgjengelig.",
          buttonText: "Oppdater"
        }
      }
    }
  };
};

module.exports = init();
