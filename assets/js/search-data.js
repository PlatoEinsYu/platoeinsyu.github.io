// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-主页",
    title: "主页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-博客",
          title: "博客",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "本页收录我的已凝练收录或较耗精力的内容.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-个人简介",
          title: "个人简介",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-tate-39-s-thesis",
      
        title: "Tate&#39;s Thesis",
      
      description: "Adelic method of getting functional equations of L-functions.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/tates/";
        
      },
    },{id: "news-因网站域名问题-此网站已改为日记本-学术内容请见-田泽禹的学术主页",
          title: '因网站域名问题，此网站已改为日记本，学术内容请见 田泽禹的学术主页.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%61%6E%7A%65%79%75@%7A%6A%75.%65%64%75.%63%6E", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Light Mode',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Dark Mode',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'System Default',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
