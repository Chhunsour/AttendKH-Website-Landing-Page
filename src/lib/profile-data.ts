/**
 * Public Profile Data & Editorial Copy for Chhunsour Seng
 * Bridges software engineering, product building, and content craftsmanship.
 */

export interface ProfileTimelineItem {
  period: {
    en: string;
    km: string;
    zh: string;
  };
  role: {
    en: string;
    km: string;
    zh: string;
  };
  context: {
    en: string;
    km: string;
    zh: string;
  };
  description: {
    en: string;
    km: string;
    zh: string;
  };
  highlights: {
    en: string[];
    km: string[];
    zh: string[];
  };
  isCurrent?: boolean;
}

export interface ProfileSkillCategory {
  title: {
    en: string;
    km: string;
    zh: string;
  };
  description: {
    en: string;
    km: string;
    zh: string;
  };
  skills: string[];
}

export interface ProfileData {
  slug: string;
  name: string;
  nativeName?: string;
  role: {
    en: string;
    km: string;
    zh: string;
  };
  supportingRole: {
    en: string;
    km: string;
    zh: string;
  };
  location: {
    en: string;
    km: string;
    zh: string;
  };
  avatar: string;
  telegramHandle: string;
  telegramUrl: string;
  tags: {
    en: string[];
    km: string[];
    zh: string[];
  };
  heroBio: {
    en: string;
    km: string;
    zh: string;
  };
  aboutStory: {
    en: string[];
    km: string[];
    zh: string[];
  };
  dualSuperpower: {
    buildingTitle: {
      en: string;
      km: string;
      zh: string;
    };
    buildingDesc: {
      en: string;
      km: string;
      zh: string;
    };
    explainingTitle: {
      en: string;
      km: string;
      zh: string;
    };
    explainingDesc: {
      en: string;
      km: string;
      zh: string;
    };
  };
  contentBackground: {
    intro: {
      en: string;
      km: string;
      zh: string;
    };
    pillars: {
      icon: string;
      title: {
        en: string;
        km: string;
        zh: string;
      };
      desc: {
        en: string;
        km: string;
        zh: string;
      };
    }[];
  };
  timeline: ProfileTimelineItem[];
  skillCategories: ProfileSkillCategory[];
  stillWriting: {
    headline: {
      en: string;
      km: string;
      zh: string;
    };
    paragraphs: {
      en: string[];
      km: string[];
      zh: string[];
    };
  };
}

export const chhunsourProfile: ProfileData = {
  slug: "chhunsour-seng",
  name: "Chhunsour Seng",
  nativeName: "សេង ឈុនសួរ",
  role: {
    en: "Product Builder",
    km: "អ្នកបង្កើតផលិតផល",
    zh: "产品架构师",
  },
  supportingRole: {
    en: "Product Builder with 1 year of blog writing experience, web development, and SEO strategy.",
    km: "អ្នកបង្កើតផលិតផល ដែលមានបទពិសោធន៍ ១ ឆ្នាំក្នុងការសរសេរប្លុក ការអភិវឌ្ឍគេហទំព័រ និងយុទ្ធសាស្ត្រ SEO។",
    zh: "具备 1 年专业博客写作经验、Web 前端开发与 SEO 实战背景的产品构建者。",
  },
  location: {
    en: "Phnom Penh, Cambodia",
    km: "រាជធានីភ្នំពេញ កម្ពុជា",
    zh: "柬埔寨 金边",
  },
  avatar: "/avatars/chhunsour.png",
  telegramHandle: "@ChhunsourSENG",
  telegramUrl: "https://t.me/ChhunsourSENG",
  tags: {
    en: [
      "Product Development",
      "1 Year Blog Writing",
      "Web Development",
      "SEO Strategy",
      "Article Architecture",
      "Technical Docs",
    ],
    km: [
      "ការអភិវឌ្ឍផលិតផល",
      "បទពិសោធន៍សរសេរប្លុក ១ ឆ្នាំ",
      "ការអភិវឌ្ឍគេហទំព័រ",
      "យុទ្ធសាស្ត្រ SEO",
      "រចនាសម្ព័ន្ធអត្ថបទ",
      "ឯកសារបច្ចេកទេស",
    ],
    zh: [
      "产品研发",
      "1年博客写作实战",
      "前端开发",
      "SEO 优化策略",
      "文章架构编排",
      "技术指南编写",
    ],
  },
  heroBio: {
    en: "I'm Chhunsour Seng (Chhunsour), a product builder and web developer at AttendKH with 1 year of dedicated experience in blog and web content writing, alongside hands-on software development, modern web architecture, and SEO strategy. Before focusing primarily on engineering digital products, I, Chhunsour, spent a full year creating high-impact blog and web content. Today, I continue bringing that editorial foundation to my work at AttendKH, turning complex software mechanics into clear, educational guides.",
    km: "ខ្ញុំបាទ Chhunsour Seng (សេង ឈុនសួរ) ជាអ្នកបង្កើតផលិតផល (Product Builder) និងជាអ្នកអភិវឌ្ឍគេហទំព័រនៅ AttendKH ដែលមានបទពិសោធន៍ ១ ឆ្នាំពេញក្នុងការសរសេរប្លុក និងមាតិកាគេហទំព័រ រួមជាមួយការអភិវឌ្ឍកម្មវិធី គេហទំព័រទំនើប និងយុទ្ធសាស្ត្រ SEO។ មុនពេលផ្តោតលើការកសាងផលិតផលឌីជីថល ខ្ញុំបានចំណាយពេល ១ ឆ្នាំពេញលើការសរសេរអត្ថបទប្លុកយ៉ាងសកម្ម។ បច្ចុប្បន្ន ខ្ញុំបន្តប្រើប្រាស់បទពិសោធន៍នេះនៅកន្លែងការងារ ដើម្បីបំប្លែងប្រព័ន្ធបច្ចេកវិទ្យាស្មុគស្មាញ ឱ្យទៅជាការណែនាំដែលងាយយល់ និងមានតម្លៃពិតប្រាកដ។",
    zh: "我是 Chhunsour Seng (Chhunsour)，AttendKH 的全栈产品构建者与 Web 开发者，兼备 1 年专注的博客与网络内容写作实战经验，以及软件工程、现代前端架构与 SEO 战略能力。在全身心投入数字化产品研发之前，Chhunsour 曾用整整 1 年时间专注于撰写高质量行业博客与实务文章。如今，我在日常产品开发之余依然保持着高标准的写作习惯，将复杂的系统逻辑转化为清晰、实用的专业指南。",
  },
  aboutStory: {
    en: [
      "Software products don't exist in a vacuum. The most thoughtfully engineered features fall flat if the people who need them can't find them, understand them, or trust how they work.",
      "That reality has shaped my entire career. I operate at the intersection of technical execution and communication: knowing how to design, build, and deploy production web software, while possessing the editorial discipline to research user questions, structure arguments, and explain intricate business logic with clarity.",
      "Over the course of 1 year of dedicated blog and content writing, I honed the discipline of researching topics from the ground up, identifying search intent, crafting readable explanations, and optimizing content for both search engines and human readers. When my day-to-day focus shifted into engineering scalable web systems, that 1 year of content experience didn't disappear — it became one of my strongest competitive advantages.",
    ],
    km: [
      "ផលិតផលបច្ចេកវិទ្យាមិនអាចឈរតែឯងបានឡើយ។ មុខងារដែលត្រូវបានសរសេរកូដយ៉ាងល្អឥតខ្ចោះ នឹងបាត់បង់តម្លៃ ប្រសិនបើអ្នកប្រើប្រាស់មិនអាចស្វែងរក មិនអាចយល់ ឬមិនដឹងពីរបៀបដែលវាជួយសម្រួលការងាររបស់ពួកគេ។",
      "ការយល់ដឹងនេះបានកំណត់ទិសដៅការងាររបស់ខ្ញុំ។ ខ្ញុំធ្វើការនៅចំណុចប្រសព្វរវាងការសរសេរកូដបច្ចេកទេស និងការប្រាស្រ័យទាក់ទង៖ ខ្ញុំដឹងពីរបៀបកសាងគេហទំព័រ និងកម្មវិធីជាក់ស្តែង ព្រមទាំងមានជំនាញក្នុងការស្រាវជ្រាវសំណួររបស់អ្នកប្រើប្រាស់ រៀបចំរចនាសម្ព័ន្ធអត្ថបទ និងពន្យល់ពីតក្កវិជ្ជាស្មុគស្មាញឱ្យងាយយល់បំផុត។",
      "ក្នុងកំឡុងពេល ១ ឆ្នាំពេញនៃការសរសេរប្លុក និងមាតិកាយ៉ាងសកម្ម ខ្ញុំបានពង្រឹងវិន័យក្នុងការស្រាវជ្រាវប្រធានបទ ស្វែងយល់ពីតម្រូវការស្វែងរក (Search Intent) ការសរសេរឱ្យស្រួលអាន និងការកែច្នៃមាតិកាសម្រាប់ទាំង Search Engine និងមនុស្សពិតប្រាកដ។ នៅពេលដែលការងាររបស់ខ្ញុំបានវិវត្តទៅជាការកសាងប្រព័ន្ធបច្ចេកវិទ្យា បទពិសោធន៍សរសេរ ១ ឆ្នាំនេះមិនបានបាត់បង់ទេ — ប៉ុន្តែវាបានក្លាយជាប្រៀបឈ្នះដ៏រឹងមាំក្នុងការអភិវឌ្ឍផលិតផល។",
    ],
    zh: [
      "优秀的软件不仅取决于代码质量，更取决于用户能否快速发现、理解并信任它的价值。如果复杂的功能无法被清晰阐述，工程成果就会大打折扣。",
      "这种认知深深影响了我的工作方式。我始终站在技术落地与精准传达的交汇点：既掌握现代 Web 开发与系统架构技能，又具备严谨的选题调研、文章结构编排与逻辑拆解能力。",
      "在专注于博客与内容撰写的 1 年时间里，我沉淀下了系统性的选题调研、搜索意图拆解、通俗化表达及兼顾搜索引擎与人类阅读的写作硬功。当我的核心精力转向构建可扩展的 Web 系统时，这 1 年积累的内容底蕴未曾褪色，反而化作了我最独特的复合竞争优势。",
    ],
  },
  dualSuperpower: {
    buildingTitle: {
      en: "Building the Product",
      km: "ការកសាងផលិតផល",
      zh: "构建产品逻辑",
    },
    buildingDesc: {
      en: "Architecting clean UI components, managing responsive frontends, configuring geofence coordinates, wiring API endpoints, and implementing reliable dual-currency payroll formulas with TypeScript and Next.js.",
      km: "រៀបចំ UI ឱ្យស្អាត និងលឿន គ្រប់គ្រង Frontend តាមទូរស័ព្ទ កំណត់កូអរដោនេ GPS Geofence ការតភ្ជាប់ API និងការគណនាប្រាក់ខែទ្វេរបិយប័ណ្ណ (ដុល្លារ/រៀល) ដោយប្រើ TypeScript និង Next.js។",
      zh: "运用 Next.js 与 TypeScript 构建高性能响应式界面，精准标定 GPS 电子围栏坐标，打通业务 API 并实现合规的双币种算薪运算引擎。",
    },
    explainingTitle: {
      en: "Explaining the Product",
      km: "ការពន្យល់ផលិតផលតាមមាតិកា",
      zh: "以文字诠释价值",
    },
    explainingDesc: {
      en: "Deconstructing labor laws, explaining why paper punch cards leak revenue, teaching multi-branch managers how to schedule shifts, and authoring clear answers that rank on search engines and educate real operators.",
      km: "ពន្យល់ពីច្បាប់ការងារកម្ពុជា បង្ហាញពីមូលហេតុដែលការចុះវត្តមានលើក្រដាសធ្វើឱ្យខាតបង់ថវិកា ការបង្រៀនអ្នកគ្រប់គ្រងពហុសាខាពីការរៀបចំវេន និងការឆ្លើយសំណួរជាក់ស្តែងដែលជាប់ចំណាត់ថ្នាក់ល្អលើ Google។",
      zh: "深度剖析柬埔寨劳工法与加班合规要求，阐述纸质考勤的隐形成本，为多门店店长提供排班攻略，打造既符合搜索意图又极具实操价值的高质量内容。",
    },
  },
  contentBackground: {
    intro: {
      en: "Content creation is not just stringing sentences together. It is an engineering discipline in itself — involving topic discovery, information architecture, audience empathy, and technical optimization.",
      km: "ការតែងនិពន្ធមាតិកា មិនមែនគ្រាន់តែជាការផ្គុំពាក្យនោះទេ។ វាប្រៀបដូចជាវិស្វកម្មមួយយ៉ាងដូច្នេះដែរ — ទាមទារការស្រាវជ្រាវប្រធានបទ រៀបចំរចនាសម្ព័ន្ធព័ត៌មាន ស្វែងយល់ពីចិត្តអ្នកអាន និងការកែច្នៃបច្ចេកទេស SEO។",
      zh: "高水准的内容创作从来不是简单的辞藻堆砌，而是一门严谨的信息架构工程 — 涵盖需求洞察、逻辑框架搭建、同理心传达与底层 SEO 技术配置。",
    },
    pillars: [
      {
        icon: "FileText",
        title: {
          en: "Search-Intent & Keyword Research",
          km: "ការស្រាវជ្រាវតម្រូវការស្វែងរក & Keywords",
          zh: "精准搜索意图与关键词挖掘",
        },
        desc: {
          en: "Identifying what business owners and operators actually search for when facing attendance leakage, overtime disputes, or multi-branch management challenges.",
          km: "ស្វែងយល់ពីអ្វីដែលម្ចាស់អាជីវកម្ម និងអ្នកគ្រប់គ្រងស្វែងរក នៅពេលជួបបញ្ហាការចុះវត្តមានជំនួស ការគណនាថែមម៉ោង ឬការគ្រប់គ្រងច្រើនសាខា។",
          zh: "深入洞察企业主在遭遇代打卡作弊、加班费纠纷或连锁店管理困境时，真正在搜索引擎中寻找的答案。",
        },
      },
      {
        icon: "ListTree",
        title: {
          en: "Content Hierarchy & Scannability",
          km: "រចនាសម្ព័ន្ធមាតិកា & ភាពងាយអាន",
          zh: "清晰层级编排与结构化呈现",
        },
        desc: {
          en: "Designing clear heading structures (H1, H2, H3), bite-sized takeaways, and direct answer blocks that respect the reader's time.",
          km: "រៀបចំកម្រិតចំណងជើង (H1, H2, H3) ចំណុចសង្ខេបសំខាន់ៗ និងប្រអប់ចម្លើយរហ័ស ដែលជួយឱ្យអ្នកអានទទួលបានព័ត៌មានលឿនបំផុត។",
          zh: "运用合理的标题层级、要点提炼及直接答疑模块，让忙碌的管理者在数十秒内快速捕捉关键决策依据。",
        },
      },
      {
        icon: "ShieldCheck",
        title: {
          en: "Technical & Regulatory Accuracy",
          km: "ភាពត្រឹមត្រូវផ្នែកបច្ចេកទេស & បទប្បញ្ញត្តិ",
          zh: "技术原理与法规政策双重严谨",
        },
        desc: {
          en: "Verifying Cambodian labor law guidelines, NSSF calculation tiers, and technical geofencing specs rather than relying on generic AI filler.",
          km: "ផ្ទៀងផ្ទាត់ច្បាប់ការងារកម្ពុជា កម្រិតវិភាគទាន ប.ស.ស. និងលក្ខណៈបច្ចេកទេស GPS ដោយមិនប្រើអត្ថបទបន្លំ ឬទូទៅគ្មានប្រយោជន៍។",
          zh: "严格校验柬埔寨劳工法细则、国家社会保障基金 (NSSF) 阶梯算法及 GPS 围栏技术规格，坚决杜绝空洞模板。",
        },
      },
      {
        icon: "Code2",
        title: {
          en: "Developer-Led CMS & Publishing",
          km: "ការបោះពុម្ពតាមប្រព័ន្ធ CMS បច្ចេកវិទ្យាខ្ពស់",
          zh: "开发者视角的 CMS 编排与发布",
        },
        desc: {
          en: "Working seamlessly with Markdown pipelines, Schema.org structured data, metadata tags, image optimization, and semantic HTML.",
          km: "ធ្វើការយ៉ាងរលូនជាមួយ Markdown, ប្រព័ន្ធ Schema.org Structured Data, ការកំណត់ Meta Tags, ការបង្ហាប់រូបភាព និង Semantic HTML។",
          zh: "熟练驾驭 Markdown 流水线、Schema.org 结构化富文本、元数据标签管理、图片加载优化及语义化 HTML。",
        },
      },
    ],
  },
  timeline: [
    {
      period: {
        en: "Present",
        km: "បច្ចុប្បន្ន",
        zh: "至今",
      },
      role: {
        en: "Product Builder / Web Developer",
        km: "អ្នកបង្កើតផលិតផល / អ្នកអភិវឌ្ឍគេហទំព័រ",
        zh: "产品构建者 / 前端开发工程师",
      },
      context: {
        en: "AttendKH (Current Workplace)",
        km: "AttendKH (កន្លែងការងារបច្ចុប្បន្ន)",
        zh: "AttendKH（现就职平台）",
      },
      description: {
        en: "Leading the web experience and product implementation for Cambodia's premier workforce attendance platform, while authoring comprehensive operational guides and technical documentation.",
        km: "ទទួលបន្ទុកលើការកសាងគេហទំព័រ និងមុខងារផលិតផលសម្រាប់ប្រព័ន្ធវត្តមានការងារឈានមុខនៅកម្ពុជា ព្រមទាំងបន្តតែងនិពន្ធអត្ថបទណែនាំប្រតិបត្តិការ និងឯកសារបច្ចេកទេស។",
        zh: "主导柬埔寨智能考勤平台的 Web 产品研发与用户体验交付，同时持续撰写深度行业实操指南与技术文档。",
      },
      highlights: {
        en: [
          "Developed core landing pages, interactive calculators, and multi-branch showcase modules",
          "Penned 12 comprehensive operational guides covering labor law, GPS geofencing, and shift scheduling",
          "Optimized site architecture for top search visibility across Khmer and English business queries",
        ],
        km: [
          "កសាងទំព័រដើម កម្មវិធីគណនាប្រាក់ខែអន្តរកម្ម និងទំព័រដំណោះស្រាយពហុសាខា",
          "តែងនិពន្ធអត្ថបទមគ្គុទ្ទេសក៍ប្រតិបត្តិការចំនួន ១២ ប្រធានបទ គ្របដណ្តប់ច្បាប់ការងារ GPS និងវេនការងារ",
          "បង្កើនប្រសិទ្ធភាពស្វែងរក (SEO) ឱ្យជាប់ចំណាត់ថ្នាក់ខ្ពស់សម្រាប់ពាក្យគន្លឹះភាសាខ្មែរ និងអង់គ្លេស",
        ],
        zh: [
          "独立负责官网核心产品页面、多分支架构演示与实时薪资测算交互系统开发",
          "深度编撰并发布涵盖劳工法合规、GPS 活体打卡与排班管理的 12 篇标杆性实务指南",
          "全站推行语义化 SEO 架构，显著提升高价值商业关键词在搜索引擎中的自然收录表现",
        ],
      },
      isCurrent: true,
    },
    {
      period: {
        en: "1 Year Experience",
        km: "បទពិសោធន៍ ១ ឆ្នាំពេញ",
        zh: "1 年实战经验",
      },
      role: {
        en: "Blog & Web Content Specialist",
        km: "អ្នកឯកទេសមាតិកាប្លុក & គេហទំព័រ",
        zh: "博客与网络深度内容专家",
      },
      context: {
        en: "1 Year Dedicated Blog Writing",
        km: "បទពិសោធន៍ផ្តោតលើការសរសេរប្លុក ១ ឆ្នាំ",
        zh: "深耕博客与网络深度内容撰写（1 年）",
      },
      description: {
        en: "Spent 1 full year immersed in end-to-end blog content production: researching user search intent, structuring authoritative long-form guides, crafting readable explanations, and executing keyword-aware SEO copywriting.",
        km: "បានចំណាយពេល ១ ឆ្នាំពេញលើដំណើរការផលិតមាតិកាប្លុក៖ ស្រាវជ្រាវតម្រូវការស្វែងរករបស់អ្នកអាន រៀបចំរចនាសម្ព័ន្ធអត្ថបទស៊ីជម្រៅ សរសេរពន្យល់ឱ្យងាយយល់ និងអនុវត្តការសរសេរ SEO ដែលឆ្លើយតបនឹងការស្វែងរក។",
        zh: "用整整 1 年时间全身心沉浸在端到端博客内容生产体系中：深度调研用户搜索意图、构建严密的长文指南、磨练深入浅出的文字表达，并落地精准的 SEO 关键词撰写规范。",
      },
      highlights: {
        en: [
          "Dedicated 1 year to researching, outlining, and publishing long-form blog articles",
          "Mastered keyword research and content hierarchy (H1–H3) for organic search discoverability",
          "Managed publishing pipelines across CMS systems with strict attention to typography and heading hierarchy",
          "Refined readability scores and optimized metadata for organic discoverability",
        ],
        km: [
          "ចំណាយពេល ១ ឆ្នាំលើការស្រាវជ្រាវ រៀបចំគ្រោង និងបោះពុម្ពផ្សាយអត្ថបទប្លុកស៊ីជម្រៅ",
          "ស្ទាត់ជំនាញលើការស្រាវជ្រាវ Keyword និងរចនាសម្ព័ន្ធអត្ថបទ (H1–H3) សម្រាប់ការស្វែងរកតាម Google",
          "គ្រប់គ្រងការបោះពុម្ពលើប្រព័ន្ធ CMS ដោយយកចិត្តទុកដាក់ខ្ពស់លើទម្រង់អក្សរ និងចំណងជើង",
          "កែសម្រួលភាពងាយអាន និងបង្កើនប្រសិទ្ធភាព Meta Tags សម្រាប់ការស្វែងរកបែបធម្មជាតិ",
        ],
        zh: [
          "专注 1 年深度调研、大纲编排并稳定输出高质量长篇行业博客",
          "系统精通关键词搜索意图挖掘与严密的标题层级架构（H1–H3），提升自然收录表现",
          "严格把控 CMS 系统的图文排版、字体节奏与层级编排规范",
          "持续优化文章阅读流畅度，深度精细化配置页面元数据",
        ],
      },
      isCurrent: false,
    },
  ],
  skillCategories: [
    {
      title: {
        en: "Editorial & Content Craft",
        km: "សិល្បៈនៃការតែងនិពន្ធ & មាតិកា",
        zh: "专业写作与内容把控",
      },
      description: {
        en: "Transforming intricate operational and software subjects into clear, scannable, and authoritative reading experiences.",
        km: "បំប្លែងប្រធានបទបច្ចេកវិទ្យា និងប្រតិបត្តិការស្មុគស្មាញ ឱ្យក្លាយជាអត្ថបទច្បាស់លាស់ ងាយអាន និងគួរឱ្យទុកចិត្ត។",
        zh: "将复杂的企业管理逻辑与技术实现转化为通俗易懂、层次严谨的高质量读物。",
      },
      skills: [
        "Blog Writing",
        "Technical Content",
        "Website Copy",
        "Article Structure",
        "Heading Hierarchy",
        "Readability Optimization",
        "Editorial Proofreading",
      ],
    },
    {
      title: {
        en: "SEO & Content Strategy",
        km: "យុទ្ធសាស្ត្រ SEO & ភាពងាយរកឃើញ",
        zh: "SEO 战略与搜索意图",
      },
      description: {
        en: "Ensuring every piece of written content is discoverable, answers specific user questions, and ranks organically.",
        km: "ធានាថាគ្រប់អត្ថបទដែលបានសរសេរ ងាយស្រួលស្វែងរក ឆ្លើយតបសំណួរជាក់លាក់ និងជាប់ចំណាត់ថ្នាក់ល្អ។",
        zh: "确保产出的每一篇内容都能被目标用户精准检索，提供高匹配度的权威答复。",
      },
      skills: [
        "Search Intent Analysis",
        "Keyword Research",
        "On-Page SEO",
        "Internal Linking Architecture",
        "Direct Answer Formulation (AEO)",
        "Schema.org Structured Data",
      ],
    },
    {
      title: {
        en: "Web Development & Product Engineering",
        km: "ការអភិវឌ្ឍគេហទំព័រ & វិស្វកម្មផលិតផល",
        zh: "前端开发与系统工程",
      },
      description: {
        en: "The technical foundation that enables building the actual software systems and modern web interfaces.",
        km: "មូលដ្ឋានគ្រឹះបច្ចេកទេស ដែលអនុញ្ញាតឱ្យកសាងប្រព័ន្ធកម្មវិធីពិតប្រាកដ និងគេហទំព័រទំនើប។",
        zh: "扎实的现代工程底座，使内容理念能够直接落地为流畅高效的数字化产品。",
      },
      skills: [
        "Next.js & React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Responsive UI/UX",
        "Headless CMS Integration",
        "API Integration",
        "Performance Optimization",
      ],
    },
  ],
  stillWriting: {
    headline: {
      en: "Why Chhunsour Still Writes.",
      km: "ហេតុអ្វីបានជា Chhunsour នៅតែបន្តសរសេរ?",
      zh: "为什么 Chhunsour 始终坚持写作？",
    },
    paragraphs: {
      en: [
        "While my day-to-day focus today centers on building software, designing user flows, and shipping features for AttendKH, writing is not a chapter I closed. It is an active discipline I practice continuously.",
        "Writing makes me a better product builder. When you force yourself to explain a feature in plain, unambiguous words, you immediately uncover design flaws, confusing workflows, and unhandled edge cases.",
        "That is why I continue authoring operational guides for AttendKH. Writing keeps me connected to the real people who depend on our software every single morning.",
      ],
      km: [
        "ទោះបីជាការងារប្រចាំថ្ងៃបច្ចុប្បន្នរបស់ខ្ញុំ ផ្តោតលើការកសាងកម្មវិធី ការរចនាបទពិសោធន៍អ្នកប្រើប្រាស់ និងការបញ្ចេញមុខងារថ្មីៗសម្រាប់ AttendKH ក៏ដោយ ការសរសេរមិនមែនជាទំព័រដែលខ្ញុំបិទបញ្ចប់នោះឡើយ។ វាគឺជាជំនាញដែលខ្ញុំបន្តអនុវត្តជាប្រចាំ។",
        "ការសរសេរជួយឱ្យខ្ញុំក្លាយជាអ្នកបង្កើតផលិតផលកាន់តែពូកែ។ នៅពេលដែលអ្នកព្យាយាមពន្យល់ពីមុខងារណាមួយដោយប្រើពាក្យសាមញ្ញ និងច្បាស់លាស់ អ្នកនឹងមើលឃើញភ្លាមនូវចំណុចខ្វះខាតក្នុងការរចនា និងភាពស្មុគស្មាញដែលត្រូវកែសម្រួល។",
        "នេះជាមូលហេតុដែលខ្ញុំនៅតែបន្តសរសេរអត្ថបទមគ្គុទ្ទេសក៍ប្រតិបត្តិការសម្រាប់ AttendKH។ ការសរសេរជួយឱ្យខ្ញុំនៅជាប់ជានិច្ចជាមួយមនុស្សពិតប្រាកដ ដែលពឹងផ្អែកលើកម្មវិធីរបស់យើងជារៀងរាល់ព្រឹក។",
      ],
      zh: [
        "尽管我当下的核心精力专注于为 AttendKH 研发系统架构、优化用户交互并交付产品功能，但写作绝非一段被封存的过去，而是我始终坚持的核心习惯。",
        "写作让我成为一个更深刻的产品构建者。当你试图用平实、严密的文字向用户解释一项功能时，任何设计上的漏洞、晦涩的业务流或未考虑周全的边界情况都会无所遁形。",
        "这就是为什么我依然在 AttendKH 持续撰写深度指南。文字让我始终与每一个每天清晨打开我们考勤系统的真实从业者保持同频。",
      ],
    },
  },
};
