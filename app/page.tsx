"use client";

import React from "react";

type Lang = "en" | "ja";
type SectionTab = "home" | "research" | "publications" | "experience" | "talks" | "media"　| "links";

type Publication = {
  title: string;
  peerReviewed: boolean;
  authors: string[];
  venue: string;
  links: { label: string; href: string }[];
};

export default function ResearcherHomepage() {
  const [lang, setLang] = React.useState<Lang>("en");
  const [activeSectionTab, setActiveSectionTab] = React.useState<SectionTab>("home");
  const [activePresentationTab, setActivePresentationTab] =
  React.useState<"oral" | "poster" | "seminar">("oral");
  const [activePublicationTab, setActivePublicationTab] =
  React.useState<"original" | "other">("original");
  const [activeMediaTab, setActiveMediaTab] =
  React.useState<"press" | "article" | "coverage">("press");

  const t = {
    en: {
      navHome: "Home",
      navResearch: "Research",
      navPublications: "Publications",
      navCv: "CV",
      navTalks: "Presentations",
      navMedia: "Media",
      navLinks: "Links",
      navContact: "Contact",
      homeLabel: "Home",
      profileLabel: "Profile",
      researchLabel: "Research",
      newsLabel: "News",
      highlightsLabel: "Highlights",
      publicationsLabel: "Publications",
      cvLabel: "CV",
      talksLabel: "Presentations",
      mediaLabel: "Media",
      pressReleases: "Press Releases",
      articles: "General-audience Articles",
      mediaCoverage: "Media Coverage",
      contactLabel: "Contact",
      heroTitle: "Research on scientifically meaningful quantum algorithms",
      currentTopics: "Current Topics",
      OriginalPapers: "Original Papers",
      OtherPublications: "Other Publications",
      experienceEducation: "Experience & Education",
      workExperience: "Work Experience",
      education: "Education",
      awards: "Awards and Honors",
      presentations: "Presentations",
      oralPresentations: "Oral Presentations",
      posterPresentations: "Poster Presentations",
      seminarPresentations: "Seminars",
      invitedBadge: "Invited",
      internationalBadge: "International",
      newsPublicationBadge: "Publication",
      newsTalkBadge: "Presentation",
      newsCVBadge: "CV",
      newsMediaBadge: "Media",
      newsOthersBadge: "Others",
      getInTouch: "Get in touch",
      contactText:
        "For research collaborations, invited talks, or related inquiries, please contact me by email.",
      disclaimer:
        "The views and opinions expressed on this website are my own and do not necessarily reflect those of my affiliated organization.",
      affiliation: "Affiliation",
      location: "Location",
      email: "Email",
      researchInterests: "Research Interests",
      highlightsText1:
        "Use this space for awards, funded projects, invited talks, media coverage, or selected achievements.",
      highlightsText2:
        "Examples: grant awards, conference presentations, industrial collaborations, software releases.",
      peerReviewedBadge: "Peer-reviewed",
      langJa: "日本語",
      langEn: "English",
    },
    ja: {
      navHome: "ホーム",
      navResearch: "研究",
      navPublications: "出版物",
      navCv: "略歴・受賞",
      navTalks: "発表・講演",
      navMedia: "メディア",
      navLinks: "関連リンク",
      navContact: "連絡先",
      homeLabel: "ホーム",
      profileLabel: "基本情報",
      researchLabel: "研究",
      newsLabel: "お知らせ",
      highlightsLabel: "ハイライト",
      publicationsLabel: "出版物",
      cvLabel: "略歴・受賞",
      talksLabel: "発表・講演",
      mediaLabel: "メディア",
      pressReleases: "プレスリリース",
      articles: "一般向け記事",
      mediaCoverage: "メディア掲載",
      contactLabel: "連絡先",
      heroTitle: "科学的に意義のある量子アルゴリズムの研究",
      currentTopics: "現在の研究テーマ",
      OriginalPapers: "原著論文",
      OtherPublications: "その他出版物",
      experienceEducation: "職歴・学歴",
      workExperience: "職歴",
      education: "学歴",
      awards: "受賞歴・表彰",
      presentations: "講演・発表",
      oralPresentations: "口頭発表",
      posterPresentations: "ポスター発表",
      seminarPresentations: "セミナー",
      invitedBadge: "招待講演",
      internationalBadge: "国際会議",
      newsPublicationBadge: "論文",
      newsTalkBadge: "発表・講演",
      newsCVBadge: "略歴・受賞",
      newsMediaBadge: "メディア",
      newsOthersBadge: "その他",
      getInTouch: "お問い合わせ",
      contactText:
        "共同研究、講演依頼、その他のお問い合わせはメールでご連絡ください。",
      disclaimer:
        "本ウェブサイトに掲載している内容は個人の見解であり、所属組織の公式見解を示すものではありません。",
      affiliation: "所属",
      location: "所在地",
      email: "メール",
      researchInterests: "研究分野",
      highlightsText1:
        "受賞歴、研究費、招待講演、メディア掲載、主な成果などをここに記載できます。",
      highlightsText2:
        "例：競争的研究費、国際会議発表、企業共同研究、ソフトウェア公開など。",
      peerReviewedBadge: "査読付き論文",
      langJa: "日本語",
      langEn: "English",
    },
  } as const;

  const tt = t[lang];

  const profile = {
    photo: "/profile.jpg",
    name: {
      en: "Shota Kanasugi",
      ja: "金杉 翔太 (Shota Kanasugi)",
    },
    title: {
      en: "Ph.D. Researcher",
      ja: "博士(理学)・研究員",
    },
    affiliation: {
      en: "Fujitsu Limited (Quantum Laboratory)",
      ja: "富士通株式会社 (量子研究所)",
    },
    affiliationUrl: {
      en: "https://global.fujitsu/en-global/technology/research/quantum",
      ja: "https://global.fujitsu/ja-jp/technology/research/quantum",
    },
    email: "kanasugi.shota@fujitsu.com",
    location: {
      en: "4-1-1 Kamikodanaka, Nakahara-ku, Kawasaki-shi, Kanagawa, Japan",
      ja: "〒211-8588 神奈川県川崎市中原区上小田中4-1-1",
    },
    intro: {
      en: "I am a researcher working on quantum algorithms for computational chemistry and materials physics. My research focuses on developing practical quantum computational methods for scientifically and industrially important problems.",
      ja: "計算化学および物質科学に向けた量子アルゴリズムの研究に取り組んでいます。科学的にも産業的にも重要な課題に対して、実用的な量子計算手法を開発することを研究の目標としています。",
    },
    interests: {
      en: [
        "Quantum algorithms",
        "Hybrid quantum-classical methods",
        "Fault-tolerant quantum computing",
        "Quantum Chemistry",
        "Condensed matter physics",
      ],
      ja: [
        "量子アルゴリズム",
        "量子-古典ハイブリッド手法",
        "誤り耐性量子計算",
        "量子化学計算",
        "物性理論",
      ],
    },
    links: [
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=htukDosAAAAJ&hl=en" },
      { label: "ORCID", href: "https://orcid.org/0000-0002-6617-6661" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shota-kanasugi-4201622a2/" },
      { label: "ResearchGate", href: "https://www.researchgate.net/profile/Shota-Kanasugi-2" },
      { label: "GitHub", href: "https://github.com/s-kanasugi" },
    ],
  };

  const news = [
    {
      date: "2026.04.21",
      type: "talk",
      text: {
        en: "Presented a poster at Fujitsu Quantum Day 2026, Fujitsu’s global quantum event.",
        ja: "富士通のグローバル量子イベント「Fujitsu Quantum Day 2026」でポスター発表を行いました。",
      },
      url: {
        en: "https://global.fujitsu/en-global/technology/research/quantum/event-202604",
        ja: "https://global.fujitsu/ja-jp/technology/research/quantum/event-202604",
      },
    },
    {
      date: "2026.04.09",
      type: "media",
      text: {
        en: "A technical blog article on the STAR architecture and molecular Hamiltonian optimization has been published on the Fujitsu Research technical blog.",
        ja: "STARアーキテクチャと分子ハミルトニアン最適化に関する記事が富士通研究所の技術ブログにて公開されました。",
      },
      url: {
        en: "https://blog-en.fltech.dev/entry/2026/04/09/quantum_computing-en",
        ja: "https://blog.fltech.dev/entry/2026/04/09/quantum_computing-ja",
      },
    },
    {
      date: "2026.04.07",
      type: "media",
      text: {
        en: "An interview article on the quantum chemistry application project for the STAR architecture has been published on Fujitsu’s public relations page.",
        ja: "STAR アーキテクチャの量子化学計算応用プロジェクトに関するインタビュー記事が富士通の広報ページで公開されました。",
      },
      url: {
        en: "https://note.com/fujitsu_pr/n/n28bae2747f84",
        ja: "https://note.com/fujitsu_pr/n/n28bae2747f84",
      },
    },
    {
      date: "2026.03.25",
      type: "media",
      text: {
        en: "A press release on the STAR architecture and molecular Hamiltonian optimization has been issued by Fujitsu.",
        ja: "STAR アーキテクチャと分子ハミルトニアン最適化に関するプレスリリースが富士通より公開されました。",
      },
      url: {
        en: "https://global.fujitsu/en-global/pr/news/2026/03/25-01",
        ja: "https://global.fujitsu/ja-jp/pr/news/2026/03/25-01",
      }
    },
    {
      date: "2026.03.25",
      type: "publication",
      text: {
        en: "A co-authored paper on the STAR architecture has been posted on arXiv.",
        ja: "STAR アーキテクチャに関する共著論文を arXiv に公開しました。",
      },
      url: {
        en: "https://arxiv.org/abs/2603.22891",
        ja: "https://arxiv.org/abs/2603.22891",
      }
    },
    {
      date: "2026.03.25",
      type: "publication",
      text: {
        en: "A paper on molecular Hamiltonian optimization and resource estimation for early fault-tolerant quantum chemistry has been posted on arXiv.",
        ja: "Early-FTQC 量子化学計算に向けた分子ハミルトニアン最適化とリソース推定に関する論文を arXiv に公開しました。",
      },
      url: {
        en: "https://arxiv.org/abs/2603.22778",
        ja: "https://arxiv.org/abs/2603.22778",
      }
    },
    {
      date: "2026.03.25",
      type: "talk",
      text: {
        en: "Gave an oral presentation at the APS Global Physics Summit 2026.",
        ja: "国際会議「APS Global Physics Summit 2026」にて口頭発表を行いました。",
      },
      url: {
        en: "https://summit.aps.org/",
        ja: "https://summit.aps.org/",
      }
    },
  ];

  const researchTopics = [
    {
      title: { en: "Quantum Algorithms", ja: "量子アルゴリズム" },
      body: {
        en: "I work on the design of algorithms for solving practical problems with quantum computers. In particular, I focus on developing techniques to reduce computational costs such as qubit counts and circuit depth, under realistic assumptions for near-future quantum computers without full fault tolerance.",
        ja: "量子コンピュータを用いて実用的な課題を解くためのアルゴリズム設計に取り組んでいます。特に、完全な誤り耐性を備えていない近未来の量子コンピュータを想定し、量子ビット数や量子回路深さなどの計算コストを削減する技術の開発に注力しています。",
      },
      keywords: {
        en: ["Hamiltonian simulation", "Quantum phase estimation", "Quantum Krylov subspace diagonalization", "Variational quantum compilation", "Quantum-classical hybrid methods"],
        ja: ["量子シミュレーション", "量子位相推定", "量子クリロフ部分空間対角化", "変分量子コンパイル", "量子-古典ハイブリッド手法"],
      },
    },
    {
      title: { en: "Quantum Chemistry and Condensed Matter Physics", ja: "量子化学・物性物理" },
      body: {
        en: "I focus in particular on problems in quantum chemistry and condensed matter physics as promising application areas for quantum computers, where practical quantum advantage may be achieved. Specifically, I work on molecular Hamiltonian optimization techniques for reducing the cost of quantum simulation, as well as algorithms for computing materials properties such as correlation functions.",
        ja: "実用的な量子優位性が期待される量子コンピュータの応用先として、量子化学および物性物理の問題に特に注目しています。具体的には、量子シミュレーションの計算コスト削減に向けた分子ハミルトニアンの最適化技術や、相関関数などの物性計算アルゴリズムの開発に取り組んでいます。",
      },
      keywords: {
        en: ["Strongly correlated electron systems", "Electronic structure calculation", "Molecular Hamiltonian optimization", "Hubbard model", "Green's function computation"],
        ja: ["強相関電子系", "電子状態計算", "分子ハミルトニアン最適化", "ハバード模型", "グリーン関数計算"],
      },
    },
    {
      title: { en: "Fault-Tolerant Quantum Computation", ja: "誤り耐性量子計算" },
      body: {
        en: "I focus on realistic fault-tolerant quantum computation under assumptions of early-stage quantum error correction. In particular, I work on resource estimation and the clarification of hardware requirements under incomplete fault tolerance, with the aim of identifying practical applications that may become feasible at an early stage.",
        ja: "初期段階の量子誤り訂正を前提とした、現実的な誤り耐性量子計算に注目しています。特に、不完全な誤り耐性のもとで必要となるリソース推定やハードウェア条件の明確化を通じて、早期の実現が期待される実用的なアプリケーションの見極めを目指しています。",
      },
      keywords: {
        en: ["Quantum Error Correction", "Early FTQC", "Resource Estimation", "Quantum Hardware"],
        ja: ["量子誤り訂正", "Early-FTQC", "リソース推定", "量子ハードウェア"],
      },
    },
  ];

  const myName = {
    en: "Shota Kanasugi",
    ja: "Shota Kanasugi",
  };

  const publications: Publication[] = [
    {
      title: "STAR-Magic Mutation: Even More Efficient Analog Rotation Gates for Early Fault-Tolerant Quantum Computer",
      peerReviewed: false,
      authors: ["Riki Toshio", "Shota Kanasugi", "Jun Fujisaki", "Hirotaka Oshima", "Shintaro Sato", "Keisuke Fujii"],
      venue: "arXiv:2603.22891, 2026",
      links: [
        { label: "arXiv", href: "https://arxiv.org/abs/2603.22891" },
      ],
    },
    {
      title: "Enabling Chemically Accurate Quantum Phase Estimation in the Early Fault-Tolerant Regime",
      peerReviewed: false,
      authors: ["Shota Kanasugi", "Riki Toshio", "Kazunori Maruyama", "Hirotaka Oshima"],
      venue: "arXiv:2603.22778, 2026",
      links: [
        { label: "arXiv", href: "https://arxiv.org/abs/2603.22778" },
        { label: "Code", href: "https://github.com/FujitsuResearch/early-ftqc-qpe-resource" },
      ],
    },
    {
      title: "Mirror subspace diagonalization: A quantum Krylov algorithm with near-optimal sampling cost",
      peerReviewed: false,
      authors: ["Shota Kanasugi", "Yuya O. Nakagawa", "Norifumi Matsumoto", "Yuichiro Hidaka", "Kazunori Maruyama", "Hirotaka Oshima"],
      venue: "arXiv:2511.20998, 2025",
      links: [
        { label: "arXiv", href: "https://arxiv.org/abs/2511.20998" },
      ],
    },
    {
      title: "Subspace-based local compilation of variational quantum circuits for large-scale quantum many-body simulation",
      peerReviewed: true,
      authors: ["Shota Kanasugi", "Yuichiro Hidaka", "Yuya O. Nakagawa", "Shoichiro Tsutsui", "Norifumi Matsumoto", "Kazunori Maruyama", "Hirotaka Oshima", "Shintaro Sato"],
      venue: "Physical Review Research 7, 023298, 2025",
      links: [
        { label: "Link", href: "https://journals.aps.org/prresearch/abstract/10.1103/kb94-tf7t" },
        { label: "arXiv", href: "https://arxiv.org/abs/2407.14163" }
      ],
    },
    {
      title: "Quantum many-body simulation of finite-temperature systems with sampling a series expansion of a quantum imaginary-time evolution",
      peerReviewed: true,
      authors: ["Norifumi Matsumoto", "Shoichiro Tsutsui", "Yuya O Nakagawa", "Yuichiro Hidaka", "Shota Kanasugi", "Kazunori Maruyama", "Hirotaka Oshima", "Shintaro Sato"],
      venue: "Physical Review Research 7, 013254, 2025",
      links: [
        { label: "Link", href: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.7.013254" },
        { label: "arXiv", href: "https://arxiv.org/abs/2409.07070" }
      ],
    },
    {
      title: "Fast-forwardability of Jordan-Wigner-transformed Fermion models based on Cartan decomposition",
      peerReviewed: false,
      authors: ["Yuichiro Hidaka", "Shoichiro Tsutsui", "Shota Kanasugi", "Norifumi Matsumoto", "Kazunori Maruyama", "Hirotaka Oshima"],
      venue: "arXiv:2502.04620, 2025",
      links: [
        { label: "arXiv", href: "https://arxiv.org/abs/2502.04620" }
      ],
    },
    {
      title: "Computation of Green's function by local variational quantum compilation",
      peerReviewed: true,
      authors: ["Shota Kanasugi", "Shoichiro Tsutsui", "Yuya O Nakagawa", "Kazunori Maruyama", "Hirotaka Oshima", "Shintaro Sato"],
      venue: "Physical Review Research 5, 033070, 2023",
      links: [
        { label: "Link", href: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.033070" },
        { label: "arXiv", href: "https://arxiv.org/abs/2303.15667" }
      ],
    },
    {
      title: "Piezoelectric effect and diode effect in anapole and monopole superconductors",
      peerReviewed: true,
      authors: ["Michiya Chazono", "Shota Kanasugi", "Taisei Kitamura", "Youichi Yanase"],
      venue: "Physical Review B 107, 214512, 2023",
      links: [
        { label: "Link", href: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.214512" },
        { label: "arXiv", href: "https://arxiv.org/abs/2212.13102" }
      ],
    },
    {
      title: "Quantum geometry induced anapole superconductivity",
      peerReviewed: true,
      authors: ["Taisei Kitamura", "Shota Kanasugi", "Michiya Chazono", "Youichi Yanase"],
      venue: "Physical Review B 107, 214513, 2023",
      links: [
        { label: "Link", href: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.214513" },
        { label: "arXiv", href: "https://arxiv.org/abs/2210.01399" }
      ],
    },
    {
      title: "Anapole superconductivity from PT-symmetric mixed-parity interband pairing",
      peerReviewed: true,
      authors: ["Shota Kanasugi", "Youichi Yanase"],
      venue: "Communications Physics 5, 39, 2022",
      links: [
        { label: "Link", href: "https://www.nature.com/articles/s42005-022-00804-7" },
        { label: "arXiv", href: "https://arxiv.org/abs/2107.07096" }
      ],
    },
    {
      title: "Ferroelectricity-induced multiorbital odd-frequency superconductivity in SrTiO3",
      peerReviewed: true,
      authors: ["Shota Kanasugi", "Dushko Kuzmanovski", "Alexander V Balatsky", "Youichi Yanase"],
      venue: "Physical Review B 102, 184506, 2020",
      links: [
        { label: "Link", href: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.184506" },
        { label: "arXiv", href: "https://arxiv.org/abs/2006.14181" }
      ],
    },
    {
      title: "Multiple odd-parity superconducting phases in bilayer transition metal dichalcogenides",
      peerReviewed: true,
      authors: ["Shota Kanasugi", "Youichi Yanase"],
      venue: "Physical Review B 102, 094507, 2020",
      links: [
        { label: "Link", href: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.094507" },
        { label: "arXiv", href: "https://arxiv.org/abs/2005.13963" }
      ],
    },
    {
      title: "Multiorbital ferroelectric superconductivity in doped SrTiO3",
      peerReviewed: true,
      authors: ["Shota Kanasugi", "Youichi Yanase"],
      venue: "Physical Review B 100, 094504, 2019",
      links: [
        { label: "Link", href: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.094504" },
        { label: "arXiv", href: "https://arxiv.org/abs/1904.11113" }
      ],
    },
    {
      title: "Spin-orbit-coupled ferroelectric superconductivity",
      peerReviewed: true,
      authors: ["Shota Kanasugi", "Youichi Yanase"],
      venue: "Physical Review B 98, 024521, 2018",
      links: [
        { label: "Link", href: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.98.024521" },
        { label: "arXiv", href: "https://arxiv.org/abs/1803.07279" }
      ],
    },
  ];

  const publicationsOthers = [
    {
      year: "2022",
      papers: [
        {
          title: {
            en: "Exotic superconductivity associated with parity symmetry breaking",
            ja: "Exotic superconductivity associated with parity symmetry breaking",
          },
          authors: ["Shota Kanasugi"],
          venue: {
            en: "Ph.D. Thesis, 2022",
            ja: "博士論文, 2022",
          },
          links: [
            { label: "Link", href: "https://repository.kulib.kyoto-u.ac.jp/server/api/core/bitstreams/bb651255-6c33-4f9e-944d-9460ca34064b/content" },
          ],
        },
      ],
    },
    {
      year: "2020",
      papers: [
        {
          title: {
            en: "Classification theory of odd-parity multipole phases: Application to electromagnetic responses and superconductivity",
            ja: "奇パリティ多極子相の分類学と電磁応答・超伝導",
          },
          authors: ["Hikaru Watanabe", "Yoichi Yanase", "Jun Ishizuka", "Shota Kanasugi", "Akito Daido", "Shuntaro Sumita", "Atsuo Shitade", "Yuki Shiomi"],
          venue: {
            en: "Review Article: Kotai Butsuri 55, 535-549, 2020 (in Japanese)",
            ja: "レビュー記事：固体物理 55, 535-549, 2020",
          },
          links: [
            { label: "Link", href: "https://inis.iaea.org/records/z82x6-hty41" },
          ],
        },
      ],
    },
  ];

  const totalOtherPublications = publicationsOthers.reduce(
    (sum, group) => sum + group.papers.length,
    0
  );

  const workExperience = [
    {
      period: "2022.04–Present",
      title: {
        en: "Research Scientist",
        ja: "研究員",
      },
      org: {
        en: "Quantum Laboratory, Fujitsu Limited",
        ja: "富士通株式会社 量子研究所",
      },
      description: {
        en: "Research on quantum algorithms and computational methods.",
        ja: "量子アルゴリズムおよび計算手法に関する研究に従事。",
      },
    },
    {
      period: "2019.04–2022.03",
      title: {
        en: "JSPS Research Fellowship for Young Scientists (DC1)",
        ja: "日本学術振興会 特別研究員 (DC1)",
      },
      titleUrl: "#",
      org: {
        en: "Department of Physics, Kyoto University",
        ja: "京都大学 大学院理学研究科 物理学・宇宙物理学専攻",
      },
      description: {
        en: "Research on condensed matter physics theory, especially in the area of unconventional superconductivity.",
        ja: "凝縮系物理学(特に非従来型超伝導)の理論に関する研究に従事。",
      },
      links: [
        {
          label: { en: "Research Project", ja: "研究課題" },
          href: "https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-19J22122/",
        },
      ],
    },
  ];

  const awards = [
    /*{
      year: "2026.04",
      title: {
        en: "Corporate Headquarters Award",
        ja: "本部表彰",
      },
      org: {
        en: "Fujitsu Limited",
        ja: "富士通株式会社",
      },
      description: {
        en: "Recognized for outstanding research contributions and successful press releases that facilitated market expansion. Managed the integration of technical R&D with strategic marketing initiatives.",
        ja: "研究成果の創出およびプレスリリースを通じた認知度向上、市場拡大への貢献が評価され受章。技術開発と市場戦略を連携させた取り組みを主導。",
      },
    },*/
    {
      year: "2019.09",
      title: {
        en: "Best Poster Award",
        ja: "優秀ポスター賞",
      },
      org: {
        en: "J-Physics 2019: International Conference on Multipole Physics and Related Phenomena",
        ja: "J-Physics 2019: International Conference on Multipole Physics and Related Phenomena",
      },
      description: {
        en: "",
        ja: "",
      },
    },
    {
      year: "2017.04-2019.03",
      title: {
        en: "JASSO Type 1 Scholarship (Interest-free Loan)",
        ja: "日本学生支援機構 第一種奨学金（無利子貸与）",
      },
      org: {
        en: "Japan Student Services Organization",
        ja: "日本学生支援機構",
      },
      description: {
        en: "Awarded for academic excellence by the Japan Student Services Organization. Received 50% exemption from repayment for outstanding academic achievement.",
        ja: "学業成績優秀につき、日本学生支援機構より選出・採用。在学中の特に優れた業績により、返還金の半額免除の認定を受ける。",
      },
    },
  ];

  const education = [
    {
      period: "2019.04–2022.03",
      title: {
        en: "Ph.D. in Physics",
        ja: "博士課程（物理学）",
      },
      org: {
        en: "Department of Physics, Kyoto University (Supervisor: Prof. Youichi Yanase)",
        ja: "京都大学 大学院理学研究科 物理学・宇宙物理学専攻（指導教員：栁瀬 陽一 教授）",
      },
      description: {
        en: "Worked on theoretical research for condensed matter physics, especially in the area of unconventional superconductivity.",
        ja: "凝縮系物理学(特に非従来型超伝導)に関する理論研究に取り組みました。",
      },
      links: [
        {
          label: { en: "Ph.D. Thesis", ja: "博士論文" },
          href: "https://repository.kulib.kyoto-u.ac.jp/server/api/core/bitstreams/bb651255-6c33-4f9e-944d-9460ca34064b/content",
        },
      ],
    },
    {
      period: "2017.04–2019.03",
      title: {
        en: "M.S. in Physics",
        ja: "修士課程（物理学）",
      },
      org: {
        en: "Department of Physics, Kyoto University (Supervisor: Prof. Youichi Yanase)",
        ja: "京都大学 大学院理学研究科 物理学・宇宙物理学専攻（指導教員：栁瀬 陽一 教授）",
      },
      description: {
        en: "Worked on theoretical research for condensed matter physics, especially in the area of unconventional superconductivity.",
        ja: "凝縮系物理学(特に非従来型超伝導)に関する理論研究に取り組みました。",
      },
      links: [
        {
          label: { en: "Master's Thesis", ja: "修士論文" },
          href: "/master_thesis.pdf",
        },
      ],
    },
    {
      period: "2013.04–2017.03",
      title: {
        en: "B.S. in Physics",
        ja: "学士課程（物理学）",
      },
      org: {
        en: "Department of Physics, Tsukuba University",
        ja: "筑波大学 物理学類",
      },
      description: {
        en: "Completed undergraduate studies in physics. Magna Cum Laude (Second in class)",
        ja: "物理学における学士課程を修了。次席卒業",
      },
    },
    {
      period: "2011.04–2013.03",
      title: {
        en: "High School",
        ja: "高等学校",
      },
      org: {
        en: "Tokyo Institute of Technology High School of Science and Technology",
        ja: "東京工業大学附属科学技術高等学校",
      },
      description: {
        en: "Completed secondary education.",
        ja: "高等学校課程を修了。",
      },
    },
  ];

  const oralTalks = [
    {
      invited: false,
      international: true,
      title: {
        en: "Mirror subspace diagonalization: A quantum Krylov algorithm with near-optimal sampling cost",
        ja: "Mirror subspace diagonalization: A quantum Krylov algorithm with near-optimal sampling cost",
      },
      event: {
        en: "APS Global Physics Summit 2026",
        ja: "APS Global Physics Summit 2026",
      },
      venue: {
        en: "Denver, Colorado, USA",
        ja: "アメリカ合衆国 コロラド州 デンバー",
      },
      eventUrl: "https://summit.aps.org/",
      date: {
        en: "March 15-20 2026",
        ja: "2026年3月15-20日",
      },
    },
    {
      invited: true,
      international: true,
      title: {
        en: "Local subspace variational quantum compilation for large-scale Hamiltonian simulation",
        ja: "Local subspace variational quantum compilation for large-scale Hamiltonian simulation",
      },
      event: {
        en: "ACS Fall 2025",
        ja: "ACS Fall 2025",
      },
      venue: {
        en: "Washington, D.C., USA",
        ja: "アメリカ合衆国 ワシントンD.C.",
      },
      eventUrl: "https://acs.digitellinc.com/live/35/page/1202",
      date: {
        en: "August 17-21 2025",
        ja: "2025年8月17-21日",
      },
    },
    {
      invited: false,
      international: true,
      title: {
        en: "Local subspace variational quantum compilation for quantum many-body simulations on near-term quantum computers",
        ja: "Local subspace variational quantum compilation for quantum many-body simulations on near-term quantum computers",
      },
      event: {
        en: "APS Global Physics Summit 2025",
        ja: "APS Global Physics Summit 2025",
      },
      venue: {
        en: "Anaheim, California, USA",
        ja: "アメリカ合衆国 カリフォルニア州 アナハイム",
      },
      eventUrl: "https://www.aps.org/events/2025/joint-meeting",
      date: {
        en: "March 16-21 2025",
        ja: "2025年3月16-21日",
      },
    },
    {
      invited: false,
      international: true,
      title: {
        en: "Quantum many-body simulation by extended local variational quantum compilation",
        ja: "拡張局所変分量子コンパイリングによる量子多体系シミュレーション",
      },
      event: {
        en: "JPS Spring Meeting 2024 (in Japanese)",
        ja: "日本物理学会 2024年春季大会",
      },
      venue: {
        en: "Online",
        ja: "オンライン開催",
      },
      eventUrl: "https://www.jps.or.jp/activities/docs/2024spring_hmae.pdf",
      date: {
        en: "March 18-21 2024",
        ja: "2024年3月18-21日",
      },
    },
    {
      invited: false,
      international: true,
      title: {
        en: "Calculation of Green's function by local variational quantum compilation",
        ja: "局所変分量子コンパイリングによるGreen関数の計算",
      },
      event: {
        en: "JPS Spring Meeting 2023 (in Japanese)",
        ja: "日本物理学会 2023年春季大会",
      },
      venue: {
        en: "Online",
        ja: "オンライン開催",
      },
      eventUrl: "https://www.jps.or.jp/activities/docs/2023spring_hmae.pdf",
      date: {
        en: "March 22-25 2023",
        ja: "2023年3月22-25日",
      },
    },
    {
      invited: false,
      international: false,
      title:{
        en: "Anapole superconductivity in multiband systems",
        ja: "多バンド系におけるアナポール超伝導"
      },
      event: {
        en: "JPS 76th Annual Meeting (in Japanese)",
        ja: "日本物理学会 第76回年次大会",
      },
      venue: {
        en: "Online",
        ja: "オンライン開催",
      },
      eventUrl: "https://w4.gakkai-web.net/jps_search/2021sp/index.html",
      date: {
        en: "March 12-15 2021",
        ja: "2021年3月12-15日",
      },
    },
    {
      invited: false,
      international: false,
      title:{
        en: "Superconductivity and ferromagnetic fluctuations in bilayer transition metal dichalcogenides",
        ja: "二層遷移金属ダイカルコゲナイドにおける超伝導と強磁性揺らぎ"
      },
      event: {
        en: "JPS Fall Meeting 2020 (in Japanese)",
        ja: "日本物理学会 2020年秋季大会",
      },
      venue: {
        en: "Online",
        ja: "オンライン開催",
      },
      eventUrl: "https://w4.gakkai-web.net/jps_search/2020au/index.html",
      date: {
        en: "September 8-11 2020",
        ja: "2020年9月8-11日",
      },
    },
    {
      invited: true,
      international: true,
      title: {
        en: "Ferroelectricity-induced Multiorbital Odd-frequency Superconductivity in SrTiO3",
        ja: "Ferroelectricity-induced Multiorbital Odd-frequency Superconductivity in SrTiO3",
      },
      event: {
        en: "Asia Pacific-Nordita Meeting on Quantum Matter",
        ja: "Asia Pacific-Nordita Meeting on Quantum Matter",
      },
      venue: {
        en: "Online",
        ja: "オンライン開催",
      },
      eventUrl: "https://tqmatter.org/asia-pacific-nordita-meeting-on-quantum-matter/",
      date: {
        en: "August 19 2020",
        ja: "2020年8月19日",
      },
    },
    {
      invited: false,
      international: false,
      title:{
        en: "Multiorbital ferroelectric superconductivity in SrTiO3",
        ja: "SrTiO3 における多軌道強誘電超伝導"
      },
      event: {
        en: "YITP workshop “Unresolved problems and new trends in superconducting phenomena generated by electron correlation” (in Japanese)",
        ja: "京都大学基礎物理学研究所研究会「電子相関が生み出す超伝導現象の未解決問題と新しい潮流」",
      },
      venue: {
        en: "Kyoto, Japan",
        ja: "日本 京都 (京都大学 基礎物理学研究所)",
      },
      eventUrl: "https://www.rs.tus.ac.jp/tohyama/rfsc2019/#:~:text=%E6%97%A5%E7%A8%8B%E3%83%BB%E9%96%8B%E5%82%AC%E5%A0%B4%E6%89%80%20%C2%B7%20%E9%96%8B%E5%A7%8B:%202019%E5%B9%B410%E6%9C%8828%E6%97%A5(%E6%9C%88)%E3%80%8110:00%2C%20%E7%B5%82%E4%BA%86:%202019%E5%B9%B410%E6%9C%8830%E6%97%A5(%E6%B0%B4)%E3%80%8115:00%20%C2%B7%20%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6%E5%9F%BA%E7%A4%8E%E7%89%A9%E7%90%86%E5%AD%A6%E7%A0%94%E7%A9%B6%E6%89%80%20%E6%B9%AF%E5%B7%9D%E8%A8%98%E5%BF%B5%E9%A4%A8%20%E3%83%91%E3%83%8A%E3%82%BD%E3%83%8B%E3%83%83%E3%82%AF%E3%83%9B%E3%83%BC%E3%83%AB",
      date: {
        en: "October 28-30 2019",
        ja: "2019年10月28-30日",
      },
    },
    {
      invited: false,
      international: false,
      title:{
        en: "Multiorbital effects and ferroelectric superconductivity in SrTiO3",
        ja: "SrTiO3 における多軌道効果と強誘電超伝導"
      },
      event: {
        en: "J-Physics Meeting - Osaka (in Japanese)",
        ja: "J-Physics 地域研究会 - 大阪",
      },
      venue: {
        en: "Osaka, Japan",
        ja: "日本 大阪 (大阪大学 豊中キャンパス)",
      },
      eventUrl: "https://jphysics.jp/",
      date: {
        en: "July 16-17 2019",
        ja: "2019年7月16-17日",
      },
    },
    {
      invited: false,
      international: false,
      title:{
        en: "Antisymmetric spin-orbit coupling and ferroelectric superconductivity in SrTiO3",
        ja: "SrTiO3 における反対称スピン軌道相互作用と強誘電超伝導"
      },
      event: {
        en: "JPS 74th Annual Meeting (in Japanese)",
        ja: "日本物理学会 第74回年次大会",
      },
      venue: {
        en: "Fukuoka, Japan",
        ja: "日本 福岡 (九州大学 伊都キャンパス)",
      },
      eventUrl: "https://w4.gakkai-web.net/jps_search/2019sp/index.html",
      date: {
        en: "March 14-17 2019",
        ja: "2019年3月14-17日",
      },
    },
    {
      invited: true,
      international: true,
      title: {
        en: "Magnetic-field-induced ferroelectric superconductivity in doped SrTiO3",
        ja: "Magnetic-field-induced ferroelectric superconductivity in doped SrTiO3",
      },
      event: {
        en: "International Workshop in AIST: Ferroelectric QCP, Superconductivity, and Mott Transition",
        ja: "International Workshop in AIST: Ferroelectric QCP, Superconductivity, and Mott Transition",
      },
      venue: {
        en: "Tsukuba, Japan",
        ja: "日本 筑波市 (産業技術総合研究所)",
      },
      eventUrl: "https://sites.google.com/view/isao/home/news/QCPWS",
      date: {
        en: "October 30 2018",
        ja: "2018年10月30日",
      },
    },
    {
      invited: false,
      international: false,
      title:{
        en: "Theoretical study on the coexistence of ferroelectricity and superconductivity",
        ja: "強誘電性と超伝導の共存に関する理論的研究"
      },
      event: {
        en: "JPS 73th Annual Meeting (in Japanese)",
        ja: "日本物理学会 第73回年次大会",
      },
      venue: {
        en: "Noda, Japan",
        ja: "日本 千葉県野田市 (東京理科大学 野田キャンパス)",
      },
      eventUrl: "https://w4.gakkai-web.net/jps_search/2018sp/index.html",
      date: {
        en: "March 22-25 2018",
        ja: "2018年3月22-25日",
      },
    },
  ];
  
  const posterTalks = [
    {
      international: true,
      title: {
        en: "Enabling Practical Quantum Chemistry Computation in the Early-FTQC era",
        ja: "Enabling Practical Quantum Chemistry Computation in the Early-FTQC era",
      },
      event: {
        en: "Fujitsu Quantum Day 2026",
        ja: "Fujitsu Quantum Day 2026",
      },
      venue: {
        en: "Kawasaki, Japan",
        ja: "日本 川崎 (Fujitsu Uvance Kawasaki Tower)",
      },
      eventUrl: "https://global.fujitsu/ja-jp/technology/research/quantum/event-202604",
      date: {
        en: "April 21, 2026",
        ja: "2026年4月21日",
      },
    },
    {
      international: true,
      title: {
        en: "Subspace-based local compilation of variational quantum circuits for large-scale quantum many-body simulation",
        ja: "Subspace-based local compilation of variational quantum circuits for large-scale quantum many-body simulation",
      },
      event: {
        en: "CompQMB 2024",
        ja: "CompQMB 2024",
      },
      venue: {
        en: "Kashiwa, Japan",
        ja: "日本 千葉県柏市（東京大学 物性研究所）",
      },
      eventUrl: "https://qc-hybrid.github.io/CompQMB2024/",
      date: {
        en: "September 24-27, 2024",
        ja: "2024年9月24-27日",
      },
    },
    {
      international: true,
      title: {
        en: "Computation of Green's function by local variational quantum compilation",
        ja: "Computation of Green's function by local variational quantum compilation",
      },
      event: {
        en: "Fujitsu Quantum Day 2024",
        ja: "Fujitsu Quantum Day 2024",
      },
      venue: {
        en: "Delft, Netherlands",
        ja: "オランダ デルフト",
      },
      eventUrl: "https://mkt-europe.global.fujitsu.com/fujitsu-quantum-symposium",
      date: {
        en: "January 25, 2024",
        ja: "2024年1月25日",
      },
    },
    {
      international: true,
      title: {
        en: "Computation of Green's function by local variational quantum compilation",
        ja: "Computation of Green's function by local variational quantum compilation",
      },
      event: {
        en: "NWO physics 2024",
        ja: "NWO physics 2024",
      },
      venue: {
        en: "Veldhoven, Netherlands",
        ja: "オランダ ヴェルドホーフェン",
      },
      eventUrl: "https://nwophysics.nl/flashback-nwo-physics-2024",
      date: {
        en: "January 23-24, 2024",
        ja: "2024年1月23-24日",
      },
    },
    {
      international: true,
      title: {
        en: "Computation of Green's function by local variational quantum compilation",
        ja: "Computation of Green's function by local variational quantum compilation",
      },
      event: {
        en: "AQIS 2023",
        ja: "AQIS 2023",
      },
      venue: {
        en: "Seoul, Korea",
        ja: "韓国 ソウル",
      },
      eventUrl: "https://aqis-conf.org/2023/",
      date: {
        en: "August 28 - September 1, 2023",
        ja: "2023年8月28日-9月1日",
      },
    },
    {
      international: true,
      title: {
        en: "Multiorbital odd-frequency pairing in a ferroelectric superconductor SrTiO3",
        ja: "Multiorbital odd-frequency pairing in a ferroelectric superconductor SrTiO3",
      },
      event: {
        en: "SPICE Online Workshop: Topological Superconductivity in Quantum Materials",
        ja: "SPICE Online Workshop: Topological Superconductivity in Quantum Materials",
      },
      venue: {
        en: "Online",
        ja: "オンライン開催",
      },
      eventUrl: "https://www.spice.uni-mainz.de/topological-superconductivity-2020-home/",
      date: {
        en: "October 19-22, 2020",
        ja: "2020年10月19-22日",
      },
    },
    {
      international: true,
      title: {
        en: "Multiorbital ferroelectric superconductivity in doped SrTiO3",
        ja: "Multiorbital ferroelectric superconductivity in doped SrTiO3",
      },
      event: {
        en: "Swiss-Japan bilateral workshop: Trends in Theory of Correlated Materials 2019",
        ja: "Swiss-Japan bilateral workshop: Trends in Theory of Correlated Materials 2019",
      },
      venue: {
        en: "Kyoto, Japan",
        ja: "日本 京都 (京都大学 吉田キャンパス)",
      },
      eventUrl: "http://condgw02.scphys.kyoto-u.ac.jp/~swiss-japan_2019/index.php",
      date: {
        en: "October 7-9, 2019",
        ja: "2019年10月7-9日",
      },
    },
    {
      international: true,
      title: {
        en: "Multiorbital ferroelectric superconductivity in doped SrTiO3",
        ja: "Multiorbital ferroelectric superconductivity in doped SrTiO3",
      },
      event: {
        en: "J-Physics 2019 International Conference",
        ja: "J-Physics 2019 International Conference",
      },
      venue: {
        en: "Kobe, Japan",
        ja: "日本 神戸 (神戸大学 六甲台キャンパス)",
      },
      eventUrl: "https://www.jphysics.jp/english/activity/20190422-1809/",
      date: {
        en: "September 17-21, 2019",
        ja: "2019年9月17-21日",
      },
    },
    {
      international: true,
      title: {
        en: "Multiorbital ferroelectric superconductivity in doped SrTiO3",
        ja: "Multiorbital ferroelectric superconductivity in doped SrTiO3",
      },
      event: {
        en: "Oxide Superspin Workshop 2019 and IBS-CCES Workshop on Strongly Correlated Systems 2019",
        ja: "Oxide Superspin Workshop 2019 and IBS-CCES Workshop on Strongly Correlated Systems 2019",
      },
      venue: {
        en: "Seoul, Korea",
        ja: "韓国 ソウル",
      },
      eventUrl: "https://www.oxidesuperspin.org/oss/events",
      date: {
        en: "June 24-28, 2019",
        ja: "2019年6月24-28日",
      },
    },
    {
      international: true,
      title: {
        en: "Multiorbital Ferroelectric Superconductivity in SrTiO3",
        ja: "Multiorbital Ferroelectric Superconductivity in SrTiO3",
      },
      event: {
        en: "Spectroscopies in Novel Superconductors 2019",
        ja: "Spectroscopies in Novel Superconductors 2019",
      },
      venue: {
        en: "Tokyo, Japan",
        ja: "日本 東京 (東京大学 本郷キャンパス)",
      },
      eventUrl: "https://ieeecsc.org/event/spectroscopies-novel-superconductors-2019",
      date: {
        en: "June 16-21, 2019",
        ja: "2019年6月16-21日",
      },
    },
    {
      international: true,
      title: {
        en: "Spin-orbit-coupled ferroelectric superconductivity and multiorbital effects in doped SrTiO3",
        ja: "Spin-orbit-coupled ferroelectric superconductivity and multiorbital effects in doped SrTiO3",
      },
      event: {
        en: "Topological Phases and Functionality of Correlated Electron Systems 2019",
        ja: "Topological Phases and Functionality of Correlated Electron Systems 2019",
      },
      venue: {
        en: "Kashiwa, Japan",
        ja: "日本 千葉県柏市 (東京大学 物性研究所)",
      },
      eventUrl: "http://tpfc.issp.u-tokyo.ac.jp/",
      date: {
        en: "February 18-20, 2019",
        ja: "2019年2月18-20日",
      },
    },
    {
      international: true,
      title: {
        en: "Ferroelectric-like Order in Spin-Orbit-Coupled Superconductors",
        ja: "Ferroelectric-like Order in Spin-Orbit-Coupled Superconductors",
      },
      event: {
        en: "12th International Conference on Materials and Mechanism of Superconductivity and High Temperature Superconductors",
        ja: "12th International Conference on Materials and Mechanism of Superconductivity and High Temperature Superconductors",
      },
      venue: {
        en: "Beijing, China",
        ja: "中国 北京",
      },
      eventUrl: "https://ieeecsc.org/event/12th-international-conference-materials-and-mechanisms-superconductivity-high-temperature",
      date: {
        en: "August 19-24, 2018",
        ja: "2018年8月19-24日",
      },
    },
    {
      international: true,
      title: {
        en: "Spin-Orbit-Coupled Ferroelectric Superconductivity",
        ja: "Spin-Orbit-Coupled Ferroelectric Superconductivity",
      },
      event: {
        en: "21st International Conference on Magnetism",
        ja: "21st International Conference on Magnetism",
      },
      venue: {
        en: "San Francisco, California, USA",
        ja: "アメリカ合衆国 カリフォルニア州 サンフランシスコ",
      },
      eventUrl: "https://pubs.aip.org/collection/919/21st-International-Conference-on-Magnetism",
      date: {
        en: "July 15-20, 2018",
        ja: "2018年7月15-20日",
      },
    },
    {
      international: true,
      title: {
        en: "Ferroelectric-like Order and Superconductivity in Strontium Titanate",
        ja: "Ferroelectric-like Order and Superconductivity in Strontium Titanate",
      },
      event: {
        en: "J-Physics 2018: Summer School & International Workshop on New Materials and Crystal Growth",
        ja: "J-Physics 2018: サマースクール & 新物質と結晶育成に関する国際ワークショップ",
      },
      venue: {
        en: "Awaji Island, Japan",
        ja: "日本 淡路島 (淡路夢舞台国際会議場)",
      },
      eventUrl: "https://www.jphysics.jp/english/activity/20180216-1600/",
      date: {
        en: "June 24-27, 2018",
        ja: "2018年6月24-27日",
      },
    },
    {
      international: false,
      title: {
        en: "Coexistence of electric dipole order and superconductivity in low-carrier superconductor SrTiO3",
        ja: "低キャリア超伝導体SrTiO3における電気双極子秩序と超伝導の共存"
      },
      event: {
        en: "JPS 2018 Fall Meeting (in Japanese)",
        ja: "日本物理学会 2018年秋季大会",
      },
      venue: {
        en: "Kyoto, Japan",
        ja: "日本 京都 (同志社大学 京田辺キャンパス)",
      },
      eventUrl: "https://www.jps.or.jp/activities/docs/0730mae_b.pdf",
      date: {
        en: "September 9-12, 2018",
        ja: "2018年9月9-12日",
      },
    },
    {
      international: false,
      title: {
        en: "Spin-Orbit-Coupled Ferroelectric Superconductivity",
        ja: "Spin-Orbit-Coupled Ferroelectric Superconductivity"
      },
      event: {
        en: "YITP workshop “Novel order phases and superconductivity driven by strongly correlation: topology, liquid crystal states, and dynamics” (in Japanese)",
        ja: "京都大学基礎物理学研究所研究会「電子相関が生みだす新奇な秩序と超伝導現象：：トポロジー、液晶状態、動的現象」",
      },
      venue: {
        en: "Kyoto, Japan",
        ja: "日本 京都 (京都大学 基礎物理学研究所)",
      },
      eventUrl: "https://www.yukawa.kyoto-u.ac.jp/seminar/s52392",
      date: {
        en: "May 7-9, 2018",
        ja: "2018年5月7-9日",
      },
    },
    {
      international: false,
      title: {
        en: "Spin-Orbit-Coupled Ferroelectric Superconductivity",
        ja: "Spin-Orbit-Coupled Ferroelectric Superconductivity"
      },
      event: {
        en: "J-Physics Annual Meeting 2018 (in Japanese)",
        ja: "「J-Physics 多極子伝導系の物理」平成29年度領域全体会議",
      },
      venue: {
        en: "Kashiwa, Japan",
        ja: "日本 千葉県柏市 (東京大学 物性研究所)",
      },
      eventUrl: "https://jphysics.jp/activity/",
      date: {
        en: "March 15-17, 2018",
        ja: "2018年3月15-17日",
      },
    },
    {
      international: false,
      title: {
        en: "Superconducting Multiferroics",
        ja: "超伝導マルチフェロイクス"
      },
      event: {
        en: "11th Joint Research Meeting of MEXT National Projects on Condensed-Matter Science (in Japanese)",
        ja: "第11回物性科学領域横断研究会",
      },
      venue: {
        en: "Kashiwa, Japan",
        ja: "日本 千葉県柏市 (東京大学 物性研究所)",
      },
      eventUrl: "https://ryoikioudan.issp.u-tokyo.ac.jp/link.html",
      date: {
        en: "November 17-18, 2017",
        ja: "2017年11月17-18日",
      },
    },
  ];

  const seminarTalks = [
    {
      international: false,
      title: {
        en: "Theory of anapole superconductivity in multi-band systems",
        ja: "多バンド系におけるアナポール超伝導の理論",
      },
      event: {
        en: "49th CMT Seminar",
        ja: "第49回 CMTセミナー",
      },
      venue: {
        en: "Onine",
        ja: "オンライン開催",
      },
      eventUrl: "https://shinaoka.github.io/online_CMT_seminars/#%E7%AC%AC49%E5%9B%9E",
      date: {
        en: "July 13, 2021",
        ja: "2021年7月13日",
      },
    },
    {
      international: false,
      title: {
        en: "Odd-parity and odd-frequency superconductivity in inversion broken spin-orbit-coupled systems: Application to bilayer transition metal dichalcogenides and SrTiO3",
        ja: "Odd-parity and odd-frequency superconductivity in inversion broken spin-orbit-coupled systems: Application to bilayer transition metal dichalcogenides and SrTiO3",
      },
      event: {
        en: "Seminar at the Tanaka–Kawaguchi Laboratory, Nagoya University",
        ja: "名古屋大学 田仲・川口研究室でのセミナー",
      },
      venue: {
        en: "Onine",
        ja: "オンライン開催",
      },
      eventUrl: "https://www.nagoya-u-onnes.jp/",
      date: {
        en: "July 14, 2020",
        ja: "2020年7月14日",
      },
    },
    {
      international: false,
      title: {
        en: "Spin-orbit-coupled ferroelectric superconductivity and multiorbital effects in SrTiO3",
        ja: "Spin-orbit-coupled ferroelectric superconductivity and multiorbital effects in SrTiO3",
      },
      event: {
        en: "Seminar at Prof. Annica Black-Schaffer’s group, Uppsala University",
        ja: "ウプサラ大学 Annica Black-Schaffer教授グループでのセミナー",
      },
      venue: {
        en: "Uppsala, Sweden",
        ja: "ウプサラ、スウェーデン",
      },
      eventUrl: "https://materials-theory.physics.uu.se/black-schaffer/",
      date: {
        en: "September 5, 2019",
        ja: "2019年9月5日",
      },
    },
    {
      international: false,
      title: {
        en: "Spin-orbit-coupled ferroelectric superconductivity and multiorbital effects in SrTiO3",
        ja: "Spin-orbit-coupled ferroelectric superconductivity and multiorbital effects in SrTiO3",
      },
      event: {
        en: "Seminar at Prof. Alexander V Balatsky’s group, Nordic Institute for Theoretical Physics",
        ja: "北欧理論物理学研究所 Alexander V Balatsky教授グループでのセミナー",
      },
      venue: {
        en: "Stockholm, Sweden",
        ja: "ストックホルム、スウェーデン",
      },
      eventUrl: "https://nordita.org/",
      date: {
        en: "September 3, 2019",
        ja: "2019年9月3日",
      },
    },
  ];
  
  const mediaItems = [
    {
      category: "article",
      title: {
        en: "Breakthrough quantum technology slashes computational requirements for molecular modelling",
        ja: "Early-FTQC時代を切り拓く！富士通と大阪大学が化学材料計算の新技術で量子コンピューティングを加速",
      },
      source: {
        en: "Fujitsu TECH BLOG",
        ja: "富士通 TECH BLOG",
      },
      date: "2026.04.09",
      url: {
        en: "https://blog-en.fltech.dev/entry/2026/04/09/quantum_computing-en",
        ja: "https://blog.fltech.dev/entry/2026/04/09/quantum_computing-ja",
      },
      description: {
        en: "A technical blog article published on the Fujitsu Research technical blog about the STAR architecture (Paper [14]) and molecular Hamiltonian optimization and resource estimation (Paper [13]).",
        ja: "富士通研究所の技術ブログに掲載された、STARアーキテクチャ（論文 [14]）および分子ハミルトニアン最適化・リソース推定（論文 [13]）に関する解説記事です。",
      },
    },
    {
      category: "article",
      title: {
        en: "How close are we to the practical application of quantum computers? What future does Fujitsu's latest 'STAR architecture' lead us to? (written in Japanese)",
        ja: "量子コンピュータの実用化はどこまで近づいた？富士通最新の「STARアーキテクチャ」が導く未来とは",
      },
      source: {
        en: "Fujitsu Public Relations Note",
        ja: "富士通 広報note",
      },
      date: "2026.04.07",
      url: {
        en: "https://note.com/fujitsu_pr/n/n28bae2747f84",
        ja: "https://note.com/fujitsu_pr/n/n28bae2747f84",
      },
      description: {
        en: "An interview article published on Fujitsu’s public relations page about the quantum chemistry application project for the STAR architecture.",
        ja: "富士通の広報ページに掲載された、STARアーキテクチャの量子化学計算応用プロジェクトに関するインタビュー記事です。",
      },
    },
    {
      category: "article",
      title: {
        en: "I attended Fujitsu Quantum Day in person! (written in Japanese)",
        ja: "Fujitsu Quantum Day に現地参加しました！",
      },
      source: {
        en: "Fujitsu TECH BLOG",
        ja: "富士通 TECH BLOG",
      },
      date: "2024.03.08",
      url: {
        en: "https://blog.fltech.dev/entry/2024/03/08/Fujitsu-Quantum-Day-Delft-ja",
        ja: "https://blog.fltech.dev/entry/2024/03/08/Fujitsu-Quantum-Day-Delft-ja",
      },
      description: {
        en: "A technical blog article published on the Fujitsu Research technical blog covering a report on Fujitsu Quantum Day 2024 and a quantum computational method for Green’s functions (Paper [8]).",
        ja: "富士通研究所の技術ブログに掲載された、Fujitsu Quantum Day 2024の参加レポートおよびGreen関数の量子計算手法（論文 [8]）に関する解説記事です。",
      },
    },

    {
      category: "press",
      title: {
        en: "Fujitsu and The University of Osaka develop new technologies for chemical material energy calculations on early-FTQC quantum computers",
        ja: "富士通と大阪大学、Early-FTQC時代の量子コンピュータで化学材料のエネルギー計算を可能にする新技術を開発",
      },
      source: {
        en: "Fujitsu Press Release",
        ja: "富士通プレスリリース",
      },
      date: "2026.03.25",
      url: {
        en: "https://global.fujitsu/en-global/pr/news/2026/03/25-01",
        ja: "https://global.fujitsu/ja-jp/pr/news/2026/03/25-01",
      },
      description: {
        en: "A press release issued by Fujitsu and Osaka University on the STAR architecture (Paper [14]) and molecular Hamiltonian optimization and resource estimation (Paper [13]).",
        ja: "富士通と大阪大学より公開された、STARアーキテクチャ（論文 [14]）および分子ハミルトニアン最適化・リソース推定（論文 [13]）に関するプレスリリースです。",
      },
    },
    {
      category: "press",
      title: {
        en: "Development of an Efficient Method for Computing the Green's Functions of Large-Scale Electronic Systems ~ A Steady Step Toward the Application of Quantum Computers to Strongly-Correlated Electrons ~",
        ja: "大規模電子系のグリーン関数を効率よく計算する手法を開発 〜 量子コンピュータの強相関電子系への応用へ向けた着実な一歩 〜",
      },
      source: {
        en: "QunaSys Press Release",
        ja: "QunaSysプレスリリース",
      },
      date: "2023.08.04",
      url: {
        en: "https://qunasys.com/en/news/posts/230804en/",
        ja: "https://qunasys.com/news/posts/230804jp/",
      },
      description: {
        en: "A press release published by QunaSys and Fujitsu on a quantum computational method for Green’s functions of large-scale electronic systems (Paper [8]).",
        ja: "QunaSysと富士通により公開された、大規模電子系の Green 関数の量子計算手法（論文 [8]）に関するプレスリリースです。",
      },
    },

    {
      category: "mediaCoverage",
      title: {
        en: "New technology to accelerate the practical application of 'quantum computers': Fujitsu and Osaka University (in Japanese)",
        ja: "「量子コンピューター」実用化早める新技術　富士通と大阪大学",
      },
      source: {
        en: "NTV News 24 Japan",
        ja: "日テレNEWS",
      },
      date: "2026.03.25",
      url: {
        en: "https://news.ntv.co.jp/category/society/c0a1bb2e9b92416bb793dcf28d6f38bc",
        ja: "https://news.ntv.co.jp/category/society/c0a1bb2e9b92416bb793dcf28d6f38bc",
      },
      description: {
  　　　　en: "A television news report by NTV News covering the press release on the STAR architecture (Paper [14]) and molecular Hamiltonian optimization and resource estimation (Paper [13]).",
        ja: "日テレNEWSで放送された、STARアーキテクチャ（論文 [14]）および分子ハミルトニアン最適化・リソース推定（論文 [13]）に関する報道です。",
      },
    },
    {
      category: "mediaCoverage",
      title: {
        en: "Fujitsu and Osaka University develop new technology to shorten the computation time of quantum computers (in Japanese)",
        ja: "富士通と大阪大学、量子コンピューターの計算時間を短縮する新技術",
      },
      source: {
        en: "Nikkei",
        ja: "日本経済新聞",
      },
      date: "2026.03.25",
      url: {
        en: "https://www.nikkei.com/article/DGXZQOSG248RI0U6A320C2000000/",
        ja: "https://www.nikkei.com/article/DGXZQOSG248RI0U6A320C2000000/",
      },
      description: {
  　　　　en: "A news article published in the Nikkei on the STAR architecture (Paper [14]) and molecular Hamiltonian optimization and resource estimation (Paper [13]).",
        ja: "日本経済新聞に掲載された、STARアーキテクチャ（論文 [14]）および分子ハミルトニアン最適化・リソース推定（論文 [13]）に関する記事です。",
      },
    },
    {
      category: "mediaCoverage",
      title: {
        en: "Quantum computers for chemical materials calculations: Achievable in a few years? Fujitsu and others develop new technologies. (in Japanese)",
        ja: "量子コンピューターで化学材料計算、数年で実現？富士通など新技術",
      },
      source: {
        en: "The Asahi Shimbun",
        ja: "朝日新聞",
      },
      date: "2026.03.30",
      url: {
        en: "https://www.asahi.com/articles/ASV3W25KJV3WUTFL010M.html",
        ja: "https://www.asahi.com/articles/ASV3W25KJV3WUTFL010M.html",
      },
      description: {
  　　　　en: "A news article published in the Asahi Shimbun on the STAR architecture (Paper [14]) and molecular Hamiltonian optimization and resource estimation (Paper [13]).",
        ja: "朝日新聞に掲載された、STARアーキテクチャ（論文 [14]）および分子ハミルトニアン最適化・リソース推定（論文 [13]）に関する記事です。",
      },
    },
    {
      category: "mediaCoverage",
      title: {
        en: "The use of quantum computers in drug discovery is becoming a reality - Fujitsu/Osaka University (in Japanese)",
        ja: "創薬での量子コンピュータ使用が現実的に　富士通／阪大",
      },
      source: {
        en: "EE Times Japan",
        ja: "EE Times Japan",
      },
      date: "2026.03.31",
      url: {
        en: "https://eetimes.itmedia.co.jp/ee/articles/2603/31/news111.html",
        ja: "https://eetimes.itmedia.co.jp/ee/articles/2603/31/news111.html",
      },
      description: {
  　　　　en: "A news article published in the EE Times Japan on the STAR architecture (Paper [14]) and molecular Hamiltonian optimization and resource estimation (Paper [13]).",
        ja: "EE Times Japanに掲載された、STARアーキテクチャ（論文 [14]）および分子ハミルトニアン最適化・リソース推定（論文 [13]）に関する記事です。",
      },
    },
    {
      category: "mediaCoverage",
      title: {
        en: "Fujitsu and The University of Osaka Implement Early-FTQC Framework for Chemical Calculations",
        ja: "Fujitsu and The University of Osaka Implement Early-FTQC Framework for Chemical Calculations",
      },
      source: {
        en: "Quantum Computing Report by GQI",
        ja: "Quantum Computing Report by GQI",
      },
      date: "2026.03.25",
      url: {
        en: "https://quantumcomputingreport.com/fujitsu-and-the-university-of-osaka-accelerate-chemistry-simulations-for-early-ftqc/",
        ja: "https://quantumcomputingreport.com/fujitsu-and-the-university-of-osaka-accelerate-chemistry-simulations-for-early-ftqc/",
      },
      description: {
  　　　　en: "A news article published in the Quantum Computing Report (by GQI) on the STAR architecture (Paper [14]) and molecular Hamiltonian optimization and resource estimation (Paper [13]).",
        ja: "Quantum Computing Report (by GQI)に掲載された、STARアーキテクチャ（論文 [14]）および分子ハミルトニアン最適化・リソース推定（論文 [13]）に関する海外記事です。",
      },
    },
    {
      category: "mediaCoverage",
      title: {
        en: "Fujitsu, The University of Osaka Develop New Technologies For Chemical Material Energy Calculations on Early Quantum Computers",
        ja: "Fujitsu, The University of Osaka Develop New Technologies For Chemical Material Energy Calculations on Early Quantum Computers",
      },
      source: {
        en: "The Quantum Insier",
        ja: "The Quantum Insider",
      },
      date: "2026.03.25",
      url: {
        en: "https://thequantuminsider.com/2026/03/25/fujitsu-the-university-of-osaka-develop-new-technologies-for-chemical-material-energy-calculations-on-early-quantum-computers/",
        ja: "https://thequantuminsider.com/2026/03/25/fujitsu-the-university-of-osaka-develop-new-technologies-for-chemical-material-energy-calculations-on-early-quantum-computers/",
      },
      description: {
  　　　　en: "A news article published in the Quantum Insider on the STAR architecture (Paper [14]) and molecular Hamiltonian optimization and resource estimation (Paper [13]).",
        ja: "The Quantum Insiderに掲載された、STARアーキテクチャ（論文 [14]）および分子ハミルトニアン最適化・リソース推定（論文 [13]）に関する海外記事です。",
      },
    },
    {
      category: "mediaCoverage",
      title: {
        en: "Fujitsu and The University of Osaka develop new technologies for chemical material energy calculations on early-FTQC quantum computers",
        ja: "Fujitsu and The University of Osaka develop new technologies for chemical material energy calculations on early-FTQC quantum computers",
      },
      source: {
        en: "BioSpace",
        ja: "BioSpace",
      },
      date: "2026.03.25",
      url: {
        en: "https://www.biospace.com/press-releases/fujitsu-and-the-university-of-osaka-develop-new-technologies-for-chemical-material-energy-calculations-on-early-ftqc-quantum-computers",
        ja: "https://www.biospace.com/press-releases/fujitsu-and-the-university-of-osaka-develop-new-technologies-for-chemical-material-energy-calculations-on-early-ftqc-quantum-computers",
      },
      description: {
  　　　　en: "A news article published in the BioSpace on the STAR architecture (Paper [14]) and molecular Hamiltonian optimization and resource estimation (Paper [13]).",
        ja: "BioSpaceに掲載された、STARアーキテクチャ（論文 [14]）および分子ハミルトニアン最適化・リソース推定（論文 [13]）に関する海外記事です。",
      },
    },

  ];

  const relatedLinks = [
    {
      label: { en: "Fujitsu Quantum", ja: "Fujitsu Quantum" },
      href: { 
        en: "https://global.fujitsu/en-global/technology/research/quantum",
        ja: "https://global.fujitsu/ja-jp/technology/research/quantum",
      },
      description: {
        en: "Official website of my affiliated institute.",
        ja: "所属している研究機関の公式ウェブサイトです。",
      },
    },
    {
      label: { en: "Fujitsu TECH BLOG", ja: "Fujitsu TECH BLOG" },
      href: { 
        en: "https://blog-en.fltech.dev/",
        ja: "https://blog.fltech.dev/",
      },
      description: {
        en: "Technical blog site of my affiliated institute.",
        ja: "所属している研究機関の技術ブログサイトです。",
      },
    },
    {
      label: { 
        en: "Condensed Matter Theory Group, Department of Physics, Kyoto University", 
        ja: "京都大学大学院理学研究科 凝縮系理論グループ" 
      },
      href: {
        en: "https://cond.scphys.kyoto-u.ac.jp/e_index.html",
        ja: "https://cond.scphys.kyoto-u.ac.jp/",
      },
      description: {
        en: "Website of my former research group.",
        ja: "出身研究室のウェブサイトです。",
      },
    },
  ];

  const navItems: { key: SectionTab; label: string }[] = [
    { key: "home", label: tt.navHome },
    { key: "research", label: tt.navResearch },
    { key: "experience", label: tt.navCv },
    { key: "publications", label: tt.navPublications },
    { key: "talks", label: tt.navTalks },
    { key: "media", label: tt.navMedia },
    { key: "links", label: tt.navLinks },
  ];

  const renderAuthors = (authors: string[], title: string) => (
    <div className="mt-2 text-sm text-slate-700">
      {authors.map((author, index) => (
        <React.Fragment key={`${title}-${author}`}>
          {index > 0 ? ", " : ""}
          {author === myName.en || author === myName.ja ? <strong>{author}</strong> : author}
        </React.Fragment>
      ))}
    </div>
  );

  const renderPublicationCard = (
    pub: Publication, 
    keyPrefix: string,
    number: number
  ) => (
    <div
      key={`${keyPrefix}-${pub.title}-${pub.venue}`}
      className="relative rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
    >
      {pub.peerReviewed && (
        <div className="absolute right-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
          {tt.peerReviewedBadge}
        </div>
      )}
      <div className="pr-28">
        <div className="text-xs font-medium text-slate-400">
          [{number}]
        </div>
        <div className="mt-1 text-lg font-semibold leading-7">
          {pub.title}
        </div>
      </div>
      {renderAuthors(pub.authors, `${keyPrefix}-${pub.title}`)}
      <div className="mt-1 text-sm text-slate-500">{pub.venue}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {pub.links.filter((link) => link.href).map((link) => (
          <a
            key={`${keyPrefix}-${pub.title}-${link.label}-${link.href}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-200"
          >
            <span>{link.label}</span>
            <i className="fas fa-external-link-alt ml-1.5 text-[11px]" aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </div>
  );

  const renderOtherPublicationCard = (
    pub: {
      title: { en: string; ja: string };
      authors: string[];
      venue: { en: string; ja: string };
      links: { label: string; href: string }[];
    },
    keyPrefix: string,
    number: number
  ) => (
    <div
      key={`${keyPrefix}-${pub.title.en}-${pub.venue.en}`}
      className="relative rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
    >
      <div className="pr-28">
        <div className="text-xs font-medium text-slate-400">
          [{number}]
        </div>
        <div className="mt-1 text-lg font-semibold leading-7">
          {pub.title[lang]}
        </div>
      </div>
      {renderAuthors(pub.authors, `${keyPrefix}-${pub.title.en}`)}
      <div className="mt-1 text-sm text-slate-500">{pub.venue[lang]}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {pub.links.filter((link) => link.href).map((link) => (
          <a
            key={`${keyPrefix}-${pub.title.en}-${link.label}-${link.href}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-200"
          >
            <span>{link.label}</span>
            <i className="fas fa-external-link-alt ml-1.5 text-[11px]" aria-hidden="true"></i>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-blue-300/45 blur-2xl" />
        <div className="absolute right-[-60px] top-1/4 h-64 w-64 rounded-full bg-sky-300/40 blur-2xl" />
        <div className="absolute bottom-[-40px] left-1/3 h-72 w-72 rounded-full bg-indigo-300/35 blur-2xl" />
        <div className="absolute left-[12%] top-[58%] h-48 w-48 rounded-full bg-cyan-300/30 blur-2xl" />
        <div className="absolute right-[18%] top-[12%] h-44 w-44 rounded-full bg-blue-200/35 blur-2xl" />
        <div className="absolute left-[42%] top-[26%] h-40 w-40 rounded-full bg-sky-200/25 blur-2xl" />
        <div className="absolute left-[48%] top-[52%] h-52 w-52 rounded-full bg-blue-200/22 blur-3xl" />
        <div className="absolute left-[58%] top-[68%] h-36 w-36 rounded-full bg-indigo-200/20 blur-2xl" />
      </div>
      
      <header className="fixed inset-x-0 top-0 z-30 pt-0">
        <div className="w-full border-b border-slate-200 bg-white/85 backdrop-blur-md">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-semibold tracking-tight">{profile.name[lang]}</div>
                <div className="mt-1 text-sm text-slate-600">
                  {profile.title[lang]} · {profile.affiliationUrl?.[lang] ? (
                    <a
                      href={profile.affiliationUrl[lang]}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:text-slate-900"
                    >
                      {profile.affiliation[lang]}
                    </a>
                  ) : (
                    profile.affiliation[lang]
                  )}
                </div>
              </div>

              <div className="inline-flex w-fit shrink-0 overflow-hidden rounded-2xl border border-slate-300 self-start md:self-auto">                <button
                  onClick={() => setLang("ja")}
                  className={`px-3 py-1 ${lang === "ja" 
                    ? "bg-slate-700 text-white" 
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"}`}
                >
                  {tt.langJa}
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 ${lang === "en" 
                    ? "bg-slate-700 text-white" 
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"}`}
                >
                  {tt.langEn}
                </button>
              </div>
            </div>

            <nav className="flex flex-wrap items-center justify-start gap-2 px-6 pt-2 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveSectionTab(item.key)}
                  className={`rounded-2xl px-3 py-1 text-sm font-medium transition ${
                    activeSectionTab === item.key
                      ? "bg-slate-700 text-white ring-1 ring-slate-800"
                      : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
      {/* comment */}

      <main className="relative z-10 mx-auto max-w-5xl px-6 pt-56 md:pt-40 pb-12">
        {activeSectionTab === "home" && (
          <section className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm backdrop-blur-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.homeLabel}
              </div>
              {/*<h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
                {tt.heroTitle}
              </h1>*/}
              <div className="mt-4.5 grid items-center gap-6 md:grid-cols-[1fr_180px]">
                <div>
                  <div className="text-3xl font-semibold tracking-tight">{profile.name[lang]}</div>
                  <div className="mt-2 text-sm text-slate-600">
                    {profile.title[lang]} · {profile.affiliationUrl?.[lang] ? (
                      <a
                        href={profile.affiliationUrl[lang]}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 hover:text-slate-900"
                      >
                        {profile.affiliation[lang]}
                      </a>
                    ) : (
                      profile.affiliation[lang]
                    )}
                  </div>
                  <p className="mt-5 text-base leading-7 text-slate-700">{profile.intro[lang]}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {profile.links.map((link) => (
                      <a
                        key={`${link.label}-${link.href}`}
                        href={link.href}
                        className="rounded-2xl bg-white px-4 py-2 text-sm text-slate-600 ring-1 ring-slate-200 transition hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                      >
                        <span>{link.label}</span>
                        <i className="fas fa-external-link-alt ml-1.5 text-[11px]" aria-hidden="true"></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-200">
                  {profile.photo ? (
                    <img
                      src={profile.photo}
                      alt={profile.name[lang]}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-500">
                      No Photo
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm backdrop-blur-sm">
                  <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    {tt.profileLabel}
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-slate-700">
                    <div>
                      <span className="font-medium text-slate-900">{tt.affiliation}:</span>{" "}
                      {profile.affiliationUrl?.[lang] ? (
                        <a
                          href={profile.affiliationUrl[lang]}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2 hover:text-slate-900"
                        >
                          <span>{profile.affiliation[lang]}</span>
                          <i className="fas fa-external-link-alt ml-1.5 text-[11px]" aria-hidden="true"></i>
                        </a>
                      ) : (
                        profile.affiliation[lang]
                      )}
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">{tt.location}:</span>{" "}
                      {profile.location[lang]}
                    </div>
                    <div>
                      <span className="font-medium text-slate-900">{tt.email}:</span>{" "}
                      {profile.email}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm backdrop-blur-sm">
                  <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    {tt.researchInterests}
                  </div>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-700">
                    {profile.interests[lang].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>


              <div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm backdrop-blur-sm">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                  {tt.newsLabel}
                </div>
                <div className="mt-4 max-h-[320px] space-y-4 overflow-y-auto py-1 pr-2">
                  {news.map((item, index) => (
                    <div key={`${item.date}-${item.text.en}-${index}`} className="border-l-2 border-slate-300 pl-4">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-slate-900">{item.date}</div>
                        {item.type === "publication" ? (
                          <button
                            type="button"
                            onClick={() => setActiveSectionTab("publications")}
                            className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-blue-200 transition hover:bg-blue-100"
                          >
                            {tt.newsPublicationBadge}
                          </button>
                        ) : item.type === "talk" ? (
                          <button
                            type="button"
                            onClick={() => setActiveSectionTab("talks")}
                            className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-red-200 transition hover:bg-red-100"
                          >
                            {tt.newsTalkBadge}
                          </button>
                        ) : item.type === "cv" ? (
                          <button
                            type="button"
                            onClick={() => setActiveSectionTab("experience")}
                            className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700 ring-1 ring-purple-200 transition hover:bg-purple-100"
                          >
                            {tt.newsCVBadge}
                          </button>
                        ) : item.type === "media" ? (
                          <button
                            type="button"
                            onClick={() => setActiveSectionTab("media")}
                            className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-green-200 transition hover:bg-green-100"
                          >
                            {tt.newsMediaBadge}
                          </button>
                        ): item.type === "others" ? (
                          <button
                            type="button"
                            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-300"
                          >
                            {tt.newsOthersBadge}
                          </button>
                        ) : null}
                      </div>
                      {/*<div className="mt-1 text-sm text-slate-700">{item.text[lang]}</div>*/}
                      <div className="mt-1 text-sm text-slate-700">
                        {item.text[lang]}
                        {item.url && (
                          <a
                            href={item.url[lang]}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-2 inline-flex items-center text-slate-500 transition hover:text-slate-900"
                            aria-label={lang === "ja" ? "記事を開く" : "Open article"}
                          >
                            {/*<span>{lang === "ja" ? "リンク" : "link"}</span>*/}
                            <i className="fas fa-external-link-alt text-[11px]" aria-hidden="true"></i>

                          </a>
                        )}
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSectionTab === "research" && (
          <section className="space-y-8">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.researchLabel}
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{tt.currentTopics}</h2>
            </div>
            <div className="space-y-5">
              {researchTopics.map((item) => (
                <div
                  key={item.title.en}
                  className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                >
                  <div className="text-lg font-semibold">{item.title[lang]}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.body[lang]}</p>

                  {item.keywords?.[lang] && item.keywords[lang].length > 0 && (
                    <div className="mt-4 text-sm text-slate-600">
                      <span className="font-medium text-slate-700">
                        {lang === "ja" ? "キーワード：" : "Keywords: "}
                      </span>
                      {item.keywords[lang].join(lang === "ja" ? "、" : ", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/*<div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm backdrop-blur-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.highlightsLabel}
              </div>
              <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700">
                <p>{tt.highlightsText1}</p>
                <p>{tt.highlightsText2}</p>
              </div>
            </div>*/}
          </section>
        )}

        {activeSectionTab === "publications" && (
          <section className="space-y-6">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.publicationsLabel}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-2">
              <button
                onClick={() => setActivePublicationTab("original")}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  activePublicationTab === "original"
                    ? "bg-slate-700 text-white ring-1 ring-slate-800"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 font-medium hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                }`}
              >
                {tt.OriginalPapers}
              </button>
              <button
                onClick={() => setActivePublicationTab("other")}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  activePublicationTab === "other"
                    ? "bg-slate-700 text-white ring-1 ring-slate-800"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 font-medium hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                }`}
              >
                {tt.OtherPublications}
              </button>
            </div>

            {activePublicationTab === "original" && (
              <div className="space-y-4">
                {publications.map((pub, index) =>
                  renderPublicationCard(pub, "selected", publications.length - index)
                )}
              </div>
            )}

            {activePublicationTab === "other" && (
              <div className="space-y-6">
                {(() => {
                  const totalOtherPublications = publicationsOthers.reduce(
                    (sum, group) => sum + group.papers.length,
                    0
                  );

                  return publicationsOthers.map((group, groupIndex) => {
                    const previousCount = publicationsOthers
                      .slice(0, groupIndex)
                      .reduce((sum, g) => sum + g.papers.length, 0);

                    return (
                      <div key={group.year} className="space-y-3">
                        <div className="space-y-3">
                          {group.papers.map((pub, index) =>
                            renderOtherPublicationCard(
                              pub,
                              group.year,
                              totalOtherPublications - previousCount - index
                            )
                          )}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            )}
          </section>
        )}
        {/*{activeSectionTab === "publications" && (
          <section className="space-y-5">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.publicationsLabel}
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{tt.OriginalPapers}</h2>
            </div>
            <div className="space-y-4">
              {publications.map((pub, index) =>
                renderPublicationCard(pub, "selected", publications.length - index))}
            </div>

            <div className="pt-4">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{tt.OtherPublications}</h3>
            </div>
            <div className="space-y-6">
              {publicationsOthers.map((group, groupIndex) => {
                const previousCount = publicationsOthers
                  .slice(0, groupIndex)
                  .reduce((sum, g) => sum + g.papers.length, 0);

                return (
                  <div key={group.year} className="space-y-3">
                    <div className="space-y-3">
                      {group.papers.map((pub, index) =>
                        renderOtherPublicationCard(
                          pub,
                          group.year,
                          totalOtherPublications - previousCount - index
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}*/}

        {activeSectionTab === "experience" && (
          <section className="space-y-5">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.cvLabel}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{tt.workExperience}</h3>
              {workExperience.map((item) => (
                <div
                  key={`${item.period}-${item.org}`}
                  className="grid gap-4 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm md:grid-cols-[140px_1fr]"
                >
                  <div className="text-sm font-medium text-slate-500">{item.period}</div>
                  <div>
                    <div className="text-lg font-semibold">{item.title[lang]}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.org[lang]}</div>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{item.description[lang]}</p>
                    {item.links && item.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.links.filter((link) => link.href).map((link) => (
                          <a
                            key={`${item.period}-${link.label.en}-${link.href}`}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-200"
                          >
                            <span>{link.label[lang]}</span>
                            <i className="fas fa-external-link-alt ml-1.5 text-[11px]" aria-hidden="true"></i>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{tt.education}</h3>
              {education.map((item) => (
                <div
                  key={`${item.period}-${item.org}`}
                  className="grid gap-4 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm md:grid-cols-[140px_1fr]"
                >
                  <div className="text-sm font-medium text-slate-500">{item.period}</div>
                  <div>
                    <div className="text-lg font-semibold">{item.title[lang]}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.org[lang]}</div>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{item.description[lang]}</p>
                    {item.links && item.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.links.filter((link) => link.href).map((link) => (
                          <a
                            key={`${item.period}-${link.label.en}-${link.href}`}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-200"
                          >
                            <span>{link.label[lang]}</span>
                            <i className="fas fa-external-link-alt ml-1.5 text-[11px]" aria-hidden="true"></i>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{tt.awards}</h3>
              {awards.map((item) => (
                <div
                  key={`${item.year}-${item.title.en}`}
                  className="grid gap-4 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm md:grid-cols-[140px_1fr]"
                >
                  <div className="text-sm font-medium text-slate-500">{item.year}</div>
                  <div>
                    <div className="text-lg font-semibold">{item.title[lang]}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.org[lang]}</div>
                    {item.description?.[lang] && (
                      <p className="mt-3 text-sm leading-6 text-slate-700">
                        {item.description[lang]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSectionTab === "talks" && (
          <section className="space-y-6">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.talksLabel}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-2">
              <button
                onClick={() => setActivePresentationTab("oral")}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  activePresentationTab === "oral"
                    ? "bg-slate-700 text-white ring-1 ring-slate-800"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 font-medium hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                }`}
              >
                {tt.oralPresentations}
              </button>
              <button
                onClick={() => setActivePresentationTab("poster")}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  activePresentationTab === "poster"
                    ? "bg-slate-700 text-white ring-1 ring-slate-800"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 font-medium hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                }`}
              >
                {tt.posterPresentations}
              </button>
              <button
                onClick={() => setActivePresentationTab("seminar")}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  activePresentationTab === "seminar"
                    ? "bg-slate-700 text-white ring-1 ring-slate-800"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 font-medium hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                }`}
              >
                {tt.seminarPresentations}
              </button>
            </div>

            {activePresentationTab === "oral" && (
              <div className="space-y-4">
                {oralTalks.map((talk, index) => (
                  <div
                    key={`${talk.title.en}-${index}`}
                    className="relative rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                  >
                    <div className="absolute right-4 top-4 flex flex-wrap gap-2">
                      {talk.international && (
                        <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
                          {tt.internationalBadge}
                        </div>
                      )}
                      {talk.invited && (
                        <div className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-red-200">
                          {tt.invitedBadge}
                        </div>
                      )}
                    </div>

                    <div className="pr-24">
                      <div className="text-xs font-medium text-slate-400">
                        [{oralTalks.length - index}]
                      </div>
                      <div className="mt-1 text-lg font-semibold leading-7">
                        {talk.title[lang]}
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-slate-700">
                      {talk.eventUrl ? (
                        <a
                          href={talk.eventUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2 hover:text-blue-800"
                        >
                          <span>{talk.event[lang]}</span>
                          <i className="fas fa-external-link-alt ml-1.5 text-[11px]" aria-hidden="true"></i>
                        </a>
                      ) : (
                        talk.event[lang]
                      )}
                    </div>

                    {"venue" in talk && talk.venue?.[lang] ? (
                      <div className="mt-1 text-sm text-slate-500">
                        <div>{talk.venue[lang]}</div>
                        <div>{talk.date[lang]}</div>
                      </div>
                    ) : (
                      <div className="mt-1 text-sm text-slate-500">{talk.date[lang]}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activePresentationTab === "poster" && (
              <div className="space-y-4">
                {posterTalks.map((talk, index) => (
                  <div
                    key={`${talk.title.en}-${index}`}
                    className="relative rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                  >
                    {talk.international && (
                      <div className="absolute right-4 top-4">
                        <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
                          {tt.internationalBadge}
                        </div>
                      </div>
                    )}

                    <div className="pr-24">
                      <div className="text-xs font-medium text-slate-400">
                        [{posterTalks.length - index}]
                      </div>
                      <div className="mt-1 text-lg font-semibold leading-7">
                        {talk.title[lang]}
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-slate-700">
                      {talk.eventUrl ? (
                        <a
                          href={talk.eventUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2 hover:text-blue-800"
                        >
                          <span>{talk.event[lang]}</span>
                          <i className="fas fa-external-link-alt ml-1.5 text-[11px]" aria-hidden="true"></i>
                        </a>
                      ) : (
                        talk.event[lang]
                      )}
                    </div>

                    {"venue" in talk && talk.venue?.[lang] ? (
                      <div className="mt-1 text-sm text-slate-500">
                        <div>{talk.venue[lang]}</div>
                        <div>{talk.date[lang]}</div>
                      </div>
                    ) : (
                      <div className="mt-1 text-sm text-slate-500">{talk.date[lang]}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activePresentationTab === "seminar" && (
              <div className="space-y-4">
                {seminarTalks.map((talk, index) => (
                  <div
                    key={`${talk.title.en}-${index}`}
                    className="relative rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                  >
                    {talk.international && (
                      <div className="absolute right-4 top-4">
                        <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
                          {tt.internationalBadge}
                        </div>
                      </div>
                    )}

                    <div className="pr-24">
                      <div className="text-xs font-medium text-slate-400">
                        [{seminarTalks.length - index}]
                      </div>
                      <div className="mt-1 text-lg font-semibold leading-7">
                        {talk.title[lang]}
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-slate-700">
                      {talk.eventUrl ? (
                        <a
                          href={talk.eventUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2 hover:text-blue-800"
                        >
                          <span>{talk.event[lang]}</span>
                          <i className="fas fa-external-link-alt ml-1.5 text-[11px]" aria-hidden="true"></i>
                        </a>
                      ) : (
                        talk.event[lang]
                      )}
                    </div>

                    {"venue" in talk && talk.venue?.[lang] ? (
                      <div className="mt-1 text-sm text-slate-500">
                        <div>{talk.venue[lang]}</div>
                        <div>{talk.date[lang]}</div>
                      </div>
                    ) : (
                      <div className="mt-1 text-sm text-slate-500">{talk.date[lang]}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </section>
        )}
        {/*{activeSectionTab === "talks" && (
          <section className="space-y-6">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.talksLabel}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{tt.oralPresentations}</h3>
              <div className="grid gap-5 pr-2 md:grid-cols-2">
                {oralTalks.map((talk, index) => (
                  <div key={`${talk.title.en}-${index}`} className="relative rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
                    {talk.invited && (
                      <div className="absolute right-4 top-4 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-red-200">
                        {tt.invitedBadge}
                      </div>
                    )}

                    <div className="pr-24">
                      <div className="text-xs font-medium text-slate-400">
                        [{oralTalks.length - index}]
                      </div>
                      <div className="mt-1 text-lg font-semibold leading-7">
                        {talk.title[lang]}
                      </div>
                    </div>
                    
                    <div className="mt-2 text-sm text-slate-700">
                      {talk.eventUrl ? (
                        <a
                          href={talk.eventUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2 hover:text-slate-900"
                        >
                          {talk.event[lang]}
                        </a>
                      ) : (
                        talk.event[lang]
                      )}
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      {talk.venue[lang]}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {talk.date[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{tt.posterPresentations}</h3>
              <div className="grid gap-5 pr-2 md:grid-cols-2">
                {posterTalks.map((talk, index) => (
                  <div
                    key={`${talk.title.en}-${index}`}
                    className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                  >
                    <div>
                      <div className="text-xs font-medium text-slate-400">
                        [{posterTalks.length - index}]
                      </div>
                      <div className="mt-1 text-lg font-semibold leading-7">
                        {talk.title[lang]}
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-slate-700">
                      {talk.eventUrl ? (
                        <a
                          href={talk.eventUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2 hover:text-slate-900"
                        >
                          {talk.event[lang]}
                        </a>
                      ) : (
                        talk.event[lang]
                      )}
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      {talk.venue[lang]}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {talk.date[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}*/}

        {/*{activeSectionTab === "media" && (
          <section className="space-y-8">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.mediaLabel}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {tt.pressReleases}
              </h3>
              {mediaItems
                .filter((item) => item.category === "press")
                .map((item, index) => (
                  <div
                    key={`${item.title.en}-${item.date}-${index}`}
                    className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                  >
                    <div className="text-lg font-semibold leading-7">
                      <a
                        href={item.url[lang]}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 hover:text-slate-900"
                      >
                        {item.title[lang]}
                      </a>
                    </div>
                    <div className="mt-2 text-sm text-slate-500">{item.source[lang]}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.date}</div>
                    {item.description?.[lang] && (
                      <p className="mt-3 text-sm leading-6 text-slate-700">
                        {item.description[lang]}
                      </p>
                    )}
                  </div>
                ))}
            </div>

            <div className="space-y-4">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {tt.articles}
              </h3>
              {mediaItems
                .filter((item) => item.category === "article")
                .map((item, index) => (
                  <div
                    key={`${item.title.en}-${item.date}-${index}`}
                    className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                  >
                    <div className="text-lg font-semibold leading-7">
                      <a
                        href={item.url[lang]}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 hover:text-slate-900"
                      >
                        {item.title[lang]}
                      </a>
                    </div>
                    <div className="mt-2 text-sm text-slate-500">{item.source[lang]}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.date}</div>
                    {item.description?.[lang] && (
                      <p className="mt-3 text-sm leading-6 text-slate-700">
                        {item.description[lang]}
                      </p>
                    )}
                  </div>
                ))}
            </div>

            <div className="space-y-4">
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                {tt.mediaCoverage}
              </h3>
              {mediaItems
                .filter((item) => item.category === "mediaCoverage")
                .map((item, index) => (
                  <div
                    key={`${item.title.en}-${item.date}-${index}`}
                    className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                  >
                    <div className="text-lg font-semibold leading-7">
                      <a
                        href={item.url[lang]}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 hover:text-slate-900"
                      >
                        {item.title[lang]}
                      </a>
                    </div>
                    <div className="mt-2 text-sm text-slate-500">{item.source[lang]}</div>
                    <div className="mt-1 text-sm text-slate-500">{item.date}</div>
                    {item.description?.[lang] && (
                      <p className="mt-3 text-sm leading-6 text-slate-700">
                        {item.description[lang]}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </section>
        )}*/}

        {activeSectionTab === "media" && (
          <section className="space-y-6">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.mediaLabel}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-2">
              <button
                onClick={() => setActiveMediaTab("press")}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  activeMediaTab === "press"
                    ? "bg-slate-700 text-white ring-1 ring-slate-800"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 font-medium hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                }`}
              >
                {tt.pressReleases}
              </button>
              <button
                onClick={() => setActiveMediaTab("article")}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  activeMediaTab === "article"
                    ? "bg-slate-700 text-white ring-1 ring-slate-800"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 font-medium hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                }`}
              >
                {tt.articles}
              </button>
              <button
                onClick={() => setActiveMediaTab("coverage")}
                className={`rounded-2xl px-4 py-2 text-sm transition ${
                  activeMediaTab === "coverage"
                    ? "bg-slate-700 text-white ring-1 ring-slate-800"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 font-medium hover:bg-slate-200 hover:text-slate-800 hover:ring-slate-300"
                }`}
              >
                {tt.mediaCoverage}
              </button>
            </div>

            {activeMediaTab === "press" && (
              <div className="space-y-4">
                {mediaItems
                  .filter((item) => item.category === "press")
                  .map((item, index) => (
                    <div
                      key={`${item.title.en}-${item.date}-${index}`}
                      className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                    >
                      <div className="text-lg font-semibold leading-7">
                        <a
                          href={item.url[lang]}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-semibold text-slate-900 underline underline-offset-2 hover:text-blue-800"
                        >
                          <span>{item.title[lang]}</span>
                          <i className="fas fa-external-link-alt ml-1.5 text-[14px]" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div className="mt-2 text-sm text-slate-500">{item.source[lang]}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.date}</div>
                      {item.description?.[lang] && (
                        <p className="mt-3 text-sm leading-6 text-slate-700">
                          {item.description[lang]}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            )}

            {activeMediaTab === "article" && (
              <div className="space-y-4">
                {mediaItems
                  .filter((item) => item.category === "article")
                  .map((item, index) => (
                    <div
                      key={`${item.title.en}-${item.date}-${index}`}
                      className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                    >
                      <div className="text-lg font-semibold leading-7">
                        <a
                          href={item.url[lang]}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-semibold text-slate-900 underline underline-offset-2 hover:text-blue-800"
                        >
                          <span>{item.title[lang]}</span>
                          <i className="fas fa-external-link-alt ml-1.5 text-[14px]" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div className="mt-2 text-sm text-slate-500">{item.source[lang]}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.date}</div>
                      {item.description?.[lang] && (
                        <p className="mt-3 text-sm leading-6 text-slate-700">
                          {item.description[lang]}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            )}

            {activeMediaTab === "coverage" && (
              <div className="space-y-4">
                {mediaItems
                  .filter((item) => item.category === "mediaCoverage")
                  .map((item, index) => (
                    <div
                      key={`${item.title.en}-${item.date}-${index}`}
                      className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
                    >
                      <div className="text-lg font-semibold leading-7">
                        <a
                          href={item.url[lang]}
                          target="_blank"
                          rel="noreferrer"
                          className="text-base font-semibold text-slate-900 underline underline-offset-2 hover:text-blue-800"
                        >
                          <span>{item.title[lang]}</span>
                          <i className="fas fa-external-link-alt ml-1.5 text-[14px]" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div className="mt-2 text-sm text-slate-500">{item.source[lang]}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.date}</div>
                      {item.description?.[lang] && (
                        <p className="mt-3 text-sm leading-6 text-slate-700">
                          {item.description[lang]}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </section>
        )}

        {activeSectionTab === "links" && (
          <section className="space-y-6">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                {tt.navLinks}
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{tt.navLinks}</h2>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm backdrop-blur-sm">
              <div className="space-y-6">
                {relatedLinks.filter((item) => item.href?.[lang]).map((item) => (
                  <div key={item.label.en} className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
                    <a
                      href={item.href[lang]}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-semibold text-slate-900 underline underline-offset-2 hover:text-blue-800"
                    >
                      <span>{item.label[lang]}</span>
                      <i className="fas fa-external-link-alt ml-1.5 text-[14px]" aria-hidden="true"></i>
                    </a>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mt-12 rounded-3xl bg-slate-800 p-8 text-white shadow-sm">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
            {tt.contactLabel}
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">{tt.getInTouch}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-200">{tt.contactText}</p>
          <div className="mt-6 text-lg font-medium">{profile.email}</div>
          <p className="mt-6 text-xs leading-5 text-slate-400">
            {tt.disclaimer}
          </p>
        </section>
      </main>
    </div>
  );
}
