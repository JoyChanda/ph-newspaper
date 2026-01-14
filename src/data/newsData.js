// News Categories
export const categories = [
  { id: 'politics', name: 'রাজনীতি', color: '#dc2626' },
  { id: 'sports', name: 'খেলাধুলা', color: '#16a34a' },
  { id: 'technology', name: 'প্রযুক্তি', color: '#2563eb' },
  { id: 'entertainment', name: 'বিনোদন', color: '#9333ea' },
  { id: 'business', name: 'ব্যবসা', color: '#ea580c' },
  { id: 'international', name: 'আন্তর্জাতিক', color: '#0891b2' },
  { id: 'education', name: 'শিক্ষা', color: '#ca8a04' },
  { id: 'health', name: 'স্বাস্থ্য', color: '#059669' },
];

const districtIds = ['dhaka', 'chittagong', 'sylhet', 'rajshahi', 'khulna', 'barisal', 'rangpur', 'comilla', 'bogura', 'feni'];

// Base News Data
const baseArticles = [
  {
    id: 1,
    category: 'politics',
    district: 'dhaka',
    title: 'প্রধানমন্ত্রীর জরুরি জাতীয় ঘোষণা আগামীকাল',
    excerpt: 'দেশের অর্থনৈতিক উন্নয়ন ও নতুন নীতিমালা নিয়ে প্রধানমন্ত্রী জরুরি ঘোষণা দেবেন আগামীকাল সন্ধ্যায়।',
    content: 'ঢাকা: দেশের সার্বিক অর্থনৈতিক উন্নয়ন এবং নতুন কর্মসংস্থান নীতিমালা নিয়ে প্রধানমন্ত্রী একটি জরুরি জাতীয় ঘোষণা দেবেন আগামীকাল সন্ধ্যা ৭টায়। সূত্র জানায়, এই ঘোষণায় তরুণদের জন্য বিশেষ কর্মসংস্থান প্যাকেজ এবং ডিজিটাল বাংলাদেশ ২.০ এর রূপরেখা তুলে ধরা হবে।',
    en: {
      title: "Prime Minister's Emergency National Announcement Tomorrow",
      excerpt: "The Prime Minister will make an emergency announcement tomorrow evening regarding the country's economic development and new policies.",
      content: "Dhaka: The Prime Minister will make an emergency national announcement tomorrow at 7 PM regarding the overall economic development and new employment policies of the country. Sources say this announcement will highlight special employment packages for youth and the outline of Digital Bangladesh 2.0.",
      author: "Abdul Karim",
      readTime: "5 mins"
    },
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800',
    author: 'আব্দুল করিম',
    date: '২০২৬-০১-১৪',
    isBreaking: true,
    isFeatured: true,
    views: 15420,
    readTime: '৫ মিনিট'
  },
  {
    id: 2,
    category: 'sports',
    district: 'chittagong',
    title: 'বাংলাদেশ ক্রিকেট দল এশিয়া কাপের ফাইনালে',
    excerpt: 'রোমাঞ্চকর ম্যাচে ভারতকে হারিয়ে ফাইনালে উঠেছে বাংলাদেশ। ফাইনাল হবে শুক্রবার।',
    content: 'দুবাই: এশিয়া কাপের সেমিফাইনালে রোমাঞ্চকর ম্যাচে ভারতকে ৫ উইকেটে হারিয়ে ফাইনালে উঠেছে বাংলাদেশ ক্রিকেট দল। শাকিব আল হাসানের অসাধারণ অলরাউন্ড পারফরম্যান্স এবং মুশফিকুর রহিমের ম্যাচ জেতানো ইনিংস দলকে জিতিয়ে দেয়। ফাইনাল খেলা হবে আগামী শুক্রবার পাকিস্তানের বিপক্ষে।',
    en: {
      title: "Bangladesh Cricket Team in Asia Cup Final",
      excerpt: "Bangladesh reaches the final after defeating India in a thrilling match. The final will be on Friday.",
      content: "Dubai: Bangladesh cricket team has reached the final of the Asia Cup by defeating India by 5 wickets in a thrilling semifinal match. Shakib Al Hasan's outstanding all-round performance and Mushfiqur Rahim's match-winning innings led the team to victory. The final will be played against Pakistan next Friday.",
      author: "Rafiqul Islam",
      readTime: "4 mins"
    },
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800',
    author: 'রফিকুল ইসলাম',
    date: '২০২৬-০১-১৪',
    isBreaking: true,
    isFeatured: true,
    views: 28350,
    readTime: '৪ মিনিট'
  },
  {
    id: 3,
    category: 'technology',
    district: 'dhaka',
    title: 'বাংলাদেশি স্টার্টআপ পেল ১০ মিলিয়ন ডলার বিনিয়োগ',
    excerpt: 'দেশীয় এআই স্টার্টআপ টেকভিশন আন্তর্জাতিক বিনিয়োগকারীদের কাছ থেকে পেল বিশাল অঙ্কের বিনিয়োগ।',
    content: 'ঢাকা: বাংলাদেশি কৃত্রিম বুদ্ধিমত্তা স্টার্টআপ টেকভিশন আন্তর্জাতিক বিনিয়োগকারীদের কাছ থেকে ১০ মিলিয়ন ডলার বিনিয়োগ পেয়েছে। এই স্টার্টআপ বাংলা ভাষার জন্য বিশেষায়িত এআই সমাধান তৈরি করে। এই বিনিয়োগের মাধ্যমে তারা দক্ষিণ এশিয়ায় তাদের সেবা সম্প্রসারণ করবে।',
    en: {
      title: "Bangladeshi Startup Receives $10 Million Investment",
      excerpt: "Local AI startup TechVision received a massive investment from international investors.",
      content: "Dhaka: Bangladeshi artificial intelligence startup TechVision has received $10 million in investment from international investors. This startup creates specialized AI solutions for the Bengali language. Through this investment, they will expand their services in South Asia.",
      author: "Tanvir Ahmed",
      readTime: "6 mins"
    },
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    author: 'তানভীর আহমেদ',
    date: '২০২৬-০১-১৪',
    isBreaking: true,
    isFeatured: false,
    views: 12890,
    readTime: '৬ মিনিট'
  },
  {
    id: 4,
    category: 'business',
    district: 'dhaka',
    title: 'ঢাকা স্টক এক্সচেঞ্জে নতুন রেকর্ড',
    excerpt: 'আজ ঢাকা স্টক এক্সচেঞ্জে সূচক ছাড়িয়ে গেল ৮০০০ পয়েন্ট, বিনিয়োগকারীদের মধ্যে আশার সঞ্চার।',
    content: 'ঢাকা: দেশের শেয়ারবাজারে আজ নতুন মাইলফলক স্থাপিত হয়েছে। ঢাকা স্টক এক্সচেঞ্জের প্রধান সূচক DSEX প্রথমবারের মতো ৮০০০ পয়েন্ট অতিক্রম করেছে। বিশ্লেষকরা বলছেন, সরকারের নতুন অর্থনৈতিক নীতি এবং বৈদেশিক বিনিয়োগ বৃদ্ধির কারণে এই উত্থান।',
    en: {
      title: "New Record in Dhaka Stock Exchange",
      excerpt: "Today the index in Dhaka Stock Exchange surpassed 8000 points, sparking hope among investors.",
      content: "Dhaka: A new milestone has been set in the country's stock market today. The main index of the Dhaka Stock Exchange, DSEX, crossed 8000 points for the first time. Analysts say this rise is due to the government's new economic policies and increased foreign investment.",
      author: "Najmul Huq",
      readTime: "5 mins"
    },
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
    author: 'নাজমুল হক',
    date: '২০২৬-০১-১৩',
    isBreaking: false,
    isFeatured: true,
    views: 9540,
    readTime: '৫ মিনিট'
  },
  {
    id: 5,
    category: 'entertainment',
    district: 'dhaka',
    title: 'জাতীয় চলচ্চিত্র পুরস্কার ২০২৬ ঘোষণা',
    excerpt: 'শ্রেষ্ঠ চলচ্চিত্রের পুরস্কার পেল "মুক্তির গান", শ্রেষ্ঠ অভিনেতা ও অভিনেত্রীর নাম ঘোষণা।',
    content: 'ঢাকা: জাতীয় চলচ্চিত্র পুরস্কার ২০২৬ এর বিজয়ীদের তালিকা ঘোষণা করা হয়েছে। শ্রেষ্ঠ চলচ্চিত্রের পুরস্কার পেয়েছে মুক্তিযুদ্ধভিত্তিক ছবি "মুক্তির গান"। শ্রেষ্ঠ অভিনেতা নির্বাচিত হয়েছেন চঞ্চল চৌধুরী এবং শ্রেষ্ঠ অভিনেত্রী জয়া আহসান।',
    en: {
      title: "National Film Awards 2026 Announced",
      excerpt: "The film 'Muktir Gaan' won Best Film; Best Actor and Best Actress names announced.",
      content: "Dhaka: The list of winners for the National Film Awards 2026 has been announced. The Best Film award went to the liberation war-based film 'Muktir Gaan'. Chanchal Chowdhury was selected as Best Actor and Joya Ahsan as Best Actress.",
      author: "Sadia Islam",
      readTime: "4 mins"
    },
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    author: 'সাদিয়া ইসলাম',
    date: '২০২৬-০১-১৩',
    isBreaking: false,
    isFeatured: true,
    views: 18760,
    readTime: '৪ মিনিট'
  },
  {
    id: 6,
    category: 'international',
    district: 'dhaka',
    title: 'জাতিসংঘে বাংলাদেশের ঐতিহাসিক প্রস্তাব গৃহীত',
    excerpt: 'জলবায়ু পরিবর্তন মোকাবেলায় বাংলাদেশের প্রস্তাব সর্বসম্মতিক্রমে গৃহীত হয়েছে জাতিসংঘে।',
    content: 'নিউইয়র্ক: জাতিসংঘ সাধারণ পরিষদে জলবায়ু পরিবর্তন মোকাবেলায় বাংলাদেশের উত্থাপিত একটি ঐতিহাসিক প্রস্তাব সর্বসম্মতিক্রমে গৃহীত হয়েছে। এই প্রস্তাবে জলবায়ু ক্ষতিগ্রস্ত দেশগুলোর জন্য বিশেষ তহবিল গঠনের কথা বলা হয়েছে।',
    en: {
      title: "Bangladesh's Historic Proposal Adopted at UN",
      excerpt: "Bangladesh's proposal on climate change was unanimously adopted at the United Nations.",
      content: "New York: A historic proposal raised by Bangladesh at the UN General Assembly on tackling climate change has been unanimously adopted. This proposal calls for the formation of a special fund for climate-vulnerable countries.",
      author: "Farhana Rahman",
      readTime: "7 mins"
    },
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
    author: 'ফারহানা রহমান',
    date: '২০২৬-০১-১৩',
    isBreaking: false,
    isFeatured: true,
    views: 11230,
    readTime: '৭ মিনিট'
  },
  {
    id: 7,
    category: 'education',
    district: 'dhaka',
    title: 'এইচএসসি পরীক্ষার নতুন সময়সূচি প্রকাশ',
    excerpt: 'শিক্ষা বোর্ড প্রকাশ করেছে এইচএসসি ২০২৬ পরীক্ষার সংশোধিত সময়সূচি।',
    content: 'ঢাকা: সকল শিক্ষা বোর্ড যৌথভাবে এইচএসসি ২০২৬ পরীক্ষার সংশোধিত সময়সূচি প্রকাশ করেছে। পরীক্ষা শুরু হবে আগামী ১ এপ্রিল থেকে। করোনা পরিস্থিতি বিবেচনা করে বিশেষ স্বাস্থ্যবিধি মেনে পরীক্ষা নেওয়া হবে।',
    en: {
      title: "New HSC Exam Schedule Published",
      excerpt: "The education board has released the revised schedule for the HSC 2026 examination.",
      content: "Dhaka: All education boards have jointly released the revised schedule for the HSC 2026 examination. The exam will start on April 1. Considering the COVID situation, exams will be taken following special health protocols.",
      author: "Mahmuda Akhter",
      readTime: "3 mins"
    },
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
    author: 'মাহমুদা আক্তার',
    date: '২০২৬-০১-১৩',
    isBreaking: false,
    isFeatured: false,
    views: 7890,
    readTime: '৩ মিনিট'
  },
  {
    id: 8,
    category: 'health',
    district: 'dhaka',
    title: 'নতুন ডেঙ্গু ভ্যাকসিন পরীক্ষামূলক ব্যবহার শুরু',
    excerpt: 'দেশে প্রথমবারের মতো ডেঙ্গু প্রতিরোধে নতুন ভ্যাকসিন পরীক্ষামূলকভাবে ব্যবহার শুরু হচ্ছে।',
    content: 'ঢাকা: স্বাস্থ্য অধিদপ্তর জানিয়েছে, ডেঙ্গু প্রতিরোধে একটি নতুন ভ্যাকসিন পরীক্ষামূলকভাবে ব্যবহার শুরু হবে আগামী সপ্তাহ থেকে। প্রথম পর্যায়ে ঢাকা শহরের নির্বাচিত এলাকায় এই ভ্যাকসিন দেওয়া হবে।',
    en: {
      title: "Experimental Use of New Dengue Vaccine Begins",
      excerpt: "For the first time in the country, a new vaccine for preventing dengue is being used experimentally.",
      content: "Dhaka: The Directorate General of Health Services has stated that an experimental use of a new dengue vaccine will start next week. In the first phase, this vaccine will be given in selected areas of Dhaka city.",
      author: "Dr. Rashedul Islam",
      readTime: "5 mins"
    },
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800',
    author: 'ডা. রাশেদুল ইসলাম',
    date: '২০২৬-০১-১২',
    isBreaking: false,
    isFeatured: false,
    views: 13450,
    readTime: '৫ মিনিট'
  },
  {
    id: 9,
    category: 'sports',
    district: 'dhaka',
    title: 'ফুটবল লিগে আবাহনীর টানা তৃতীয় জয়',
    excerpt: 'দেশীয় ফুটবল লিগে আবাহনী লিমিটেড টানা তৃতীয় ম্যাচে জয়লাভ করেছে।',
    content: 'ঢাকা: বাংলাদেশ প্রিমিয়ার লিগে আবাহনী লিমিটেড টানা তৃতীয় ম্যাচে জয়লাভ করে শীর্ষস্থান ধরে রেখেছে। গতকাল বাংলাদেশ পুলিশ ফুটবল ক্লাবের বিপক্ষে ৩-১ গোলে জয় পায় তারা।',
    en: {
      title: "Abahani's Third Consecutive Win in Football League",
      excerpt: "Abahani Limited won their third consecutive match in the domestic football league.",
      content: "Dhaka: Abahani Limited maintained their top position in the Bangladesh Premier League by winning their third consecutive match. Yesterday they won 3-1 against Bangladesh Police Football Club.",
      author: "Kamrul Hasan",
      readTime: "4 mins"
    },
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    author: 'কামরুল হাসান',
    date: '২০২৬-০১-১২',
    isBreaking: false,
    isFeatured: false,
    views: 6780,
    readTime: '৪ মিনিট'
  },
  {
    id: 10,
    category: 'technology',
    district: 'chittagong',
    title: '৫জি নেটওয়ার্ক সম্প্রসারণ ঢাকার বাইরে',
    excerpt: 'চট্টগ্রাম ও সিলেটে শুরু হচ্ছে ৫জি মোবাইল নেটওয়ার্ক সেবা।',
    content: 'ঢাকা: দেশের প্রধান মোবাইল অপারেটররা ঘোষণা করেছে যে আগামী মাস থেকে চট্টগ্রাম ও সিলেট শহরে ৫জি নেটওয়ার্ক সেবা চালু হবে। ঢাকার পর এই দুই শহরে উচ্চগতির ইন্টারনেট সেবা পাবেন ব্যবহারকারীরা।',
    en: {
      title: "5G Network Expansion Beyond Dhaka",
      excerpt: "5G mobile network services are starting in Chittagong and Sylhet.",
      content: "Dhaka: The country's leading mobile operators have announced that 5G network services will launch in Chittagong and Sylhet from next month. After Dhaka, users in these two cities will get high-speed internet service.",
      author: "Sakib Hossain",
      readTime: "4 mins"
    },
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=800',
    author: 'সাকিব হোসেন',
    date: '২০২৬-০১-১২',
    isBreaking: false,
    isFeatured: false,
    views: 9120,
    readTime: '৪ মিনিট'
  },
  {
    id: 11,
    category: 'politics',
    district: 'sylhet',
    title: 'নতুন পরিবেশ সংরক্ষণ আইন পাস',
    excerpt: 'জাতীয় সংসদে পরিবেশ সংরক্ষণ সংক্রান্ত নতুন আইন সর্বসম্মতিক্রমে পাস হয়েছে।',
    content: 'ঢাকা: জাতীয় সংসদে পরিবেশ সংরক্ষণ ও দূষণ নিয়ন্ত্রণ সংক্রান্ত একটি যুগান্তকারী আইন সর্বসম্মতিক্রমে পাস হয়েছে। এই আইনে প্লাস্টিক দূষণ রোধ এবং নবায়নযোগ্য শক্তি ব্যবহারে বিশেষ গুরুত্ব দেওয়া হয়েছে।',
    en: {
      title: "New Environmental Protection Law Passed",
      excerpt: "A new environmental protection law has been unanimously passed in the National Parliament.",
      content: "Dhaka: A groundbreaking law on environmental protection and pollution control has been unanimously passed in the National Parliament. This law emphasizes preventing plastic pollution and using renewable energy.",
      author: "Zahid Hasan",
      readTime: "6 mins"
    },
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    author: 'জাহিদ হাসান',
    date: '২০২৬-০১-১১',
    isBreaking: false,
    isFeatured: false,
    views: 5670,
    readTime: '৬ মিনিট'
  },
  {
    id: 12,
    category: 'business',
    district: 'khulna',
    title: 'রপ্তানি আয়ে নতুন মাইলফলক',
    excerpt: 'চলতি অর্থবছরে রপ্তানি আয় ৫০ বিলিয়ন ডলার অতিক্রম করেছে।',
    content: 'ঢাকা: চলতি অর্থবছরের প্রথম ছয় মাসে দেশের রপ্তানি আয় ৫০ বিলিয়ন ডলার অতিক্রম করেছে, যা গত বছরের তুলনায় ১৫ শতাংশ বেশি। তৈরি পোশাক খাতের পাশাপাশি আইটি সেবা রপ্তানিও উল্লেখযোগ্যভাবে বৃদ্ধি পেয়েছে।',
    en: {
      title: "New Milestone in Export Earnings",
      excerpt: "Export earnings have crossed $50 billion in the current fiscal year.",
      content: "Dhaka: Export earnings of the country have crossed $50 billion in the first six months of the current fiscal year, which is 15 percent more than last year. Beside the RMG sector, IT service exports have also increased significantly.",
      author: "Alamgir Kabir",
      readTime: "5 mins"
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    author: 'আলমগীর কবির',
    date: '২০২৬-০১-১১',
    isBreaking: false,
    isFeatured: false,
    views: 4890,
    readTime: '৫ মিনিট'
  }
];

// Generate more data for pagination testing
const generateMoreNews = () => {
  const extra = [];
  for (let i = 1; i <= 60; i++) {
    const original = baseArticles[i % baseArticles.length];
    extra.push({
      ...original,
      id: 100 + i,
      title: original.title + ' - পর্ব ' + i,
      en: {
        ...original.en,
        title: original.en.title + ' - Part ' + i
      },
      district: districtIds[i % districtIds.length], // Deterministic
      views: 1000 + (i * 345) % 50000, // Deterministic
      date: `২০২৬-০১-${(14 - (i % 14)).toString().padStart(2, '0')}` 
    });
  }
  return extra;
};

export const newsArticles = [...baseArticles, ...generateMoreNews()];

// Helper Functions
export const getBreakingNews = () => {
  return newsArticles.filter(article => article.isBreaking);
};

export const getFeaturedNews = () => {
  return newsArticles.filter(article => article.isFeatured);
};

export const getLatestNews = () => {
  return newsArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getNewsByCategory = (categoryId) => {
  if (categoryId === 'all') return newsArticles;
  return newsArticles.filter(article => article.category === categoryId);
};

export const getNewsById = (id) => {
  return newsArticles.find(article => article.id === parseInt(id));
};

export const getCategoryById = (categoryId) => {
  return categories.find(cat => cat.id === categoryId);
};

export const getNewsByDistrict = (districtId) => {
  return newsArticles.filter(article => article.district === districtId);
};

export const getDistrictStats = (districtId) => {
  const districtNews = getNewsByDistrict(districtId);
  const stats = {};
  categories.forEach(cat => {
    stats[cat.name] = 0;
  });
  
  districtNews.forEach(news => {
    const cat = getCategoryById(news.category);
    if (cat) {
      stats[cat.name] = (stats[cat.name] || 0) + 1;
    }
  });

  return Object.entries(stats).map(([name, value]) => ({ name, value }));
};

// Helper for translated news
export const getTranslatedArticle = (article, lang) => {
  if (!article) return null;
  if (lang === 'bn') return article;
  return {
    ...article,
    title: article.en?.title || article.title,
    excerpt: article.en?.excerpt || article.excerpt,
    content: article.en?.content || article.content,
    author: article.en?.author || article.author,
    readTime: article.en?.readTime || article.readTime,
    date: lang === 'en' ? article.date.replace(/[০-৯]/g, d => '০১২৩৪৫৬৭৮৯'.indexOf(d)) : article.date
  };
};
