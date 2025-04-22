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
  },{id: "nav-文章",
          title: "文章",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-发表论文",
          title: "发表论文",
          description: "论文按时间最新排列.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "本页收录我的讲义、笔记、作业以及杂项等内容.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-个人简历",
          title: "个人简历",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-this-is-a-test-post",
      
        title: "This is a test post",
      
      description: "Actually a template.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Template/";
        
      },
    },{id: "post-rankin-selberg-method",
      
        title: "Rankin-Selberg Method",
      
      description: "Modular forms and L-functions.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/rankin/";
        
      },
    },{id: "post-tate-39-s-thesis",
      
        title: "Tate&#39;s Thesis",
      
      description: "Adelic method of getting functional equations of L-functions.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/tates/";
        
      },
    },{id: "news-nothing-here",
          title: 'Nothing here.',
          description: "",
          section: "News",},{id: "projects-吉林大学文件杂项",
          title: '吉林大学文件杂项',
          description: "课程作业、展示文档与毕业论文",
          section: "Projects",handler: () => {
              window.location.href = "/projects/JLU_works/";
            },},{id: "projects-浙大讨论班记录",
          title: '浙大讨论班记录',
          description: "参加的讨论班所使用的教材与讲义",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ZJU_seminars/";
            },},{id: "projects-吉大高代小导师",
          title: '吉大高代小导师',
          description: "唐班拓展内容讲义",
          section: "Projects",handler: () => {
              window.location.href = "/projects/linear_algebra/";
            },},{
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
