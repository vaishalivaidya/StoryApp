import { Story } from '../context/AppContext';

export const stories: Story[] = [
  // Romantic Stories
  {
    id: '1',
    title: {
      hindi: 'दिल की बातें',
      english: 'Matters of the Heart',
      marathi: 'मनाची गोष्ट'
    },
    description: {
      hindi: 'एक प्यार भरी कहानी जो दिल को छू जाए',
      english: 'A heartwarming love story that touches your soul',
      marathi: 'एक प्रेमळ कथा जी तुमच्या हृदयाला स्पर्श करते'
    },
    genre: 'romantic',
    type: 'audio',
    duration: '15:30',
    thumbnail: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    views: 15420,
    author: 'Priya Sharma'
  },
  {
    id: '2',
    title: {
      hindi: 'प्यार का सफर',
      english: 'Journey of Love',
      marathi: 'प्रेमाचा प्रवास'
    },
    description: {
      hindi: 'दो दिलों की मुलाकात की अनोखी कहानी',
      english: 'A unique story of two hearts meeting',
      marathi: 'दोन हृदयांच्या भेटीची अनोखी कथा'
    },
    genre: 'romantic',
    type: 'video',
    duration: '22:15',
    thumbnail: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    views: 28340,
    author: 'Rahul Verma'
  },
  {
    id: '3',
    title: {
      hindi: 'चाँदनी रात',
      english: 'Moonlit Night',
      marathi: 'चांदणी रात्र'
    },
    description: {
      hindi: 'चाँदनी रात में बुने गए प्यार के सपने',
      english: 'Dreams of love woven in moonlit nights',
      marathi: 'चांदण्या रात्रीत विणलेली प्रेमाची स्वप्ने'
    },
    genre: 'romantic',
    type: 'audio',
    duration: '18:45',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    views: 12890,
    author: 'Ananya Desai'
  },

  // Dharmik Stories
  {
    id: '4',
    title: {
      hindi: 'श्री कृष्ण की कथा',
      english: 'Tales of Lord Krishna',
      marathi: 'श्री कृष्णाची कथा'
    },
    description: {
      hindi: 'भगवान श्री कृष्ण के जीवन की प्रेरक कहानियां',
      english: 'Inspiring stories from the life of Lord Krishna',
      marathi: 'भगवान श्री कृष्णाच्या जीवनातील प्रेरक कथा'
    },
    genre: 'dharmik',
    type: 'video',
    duration: '25:00',
    thumbnail: 'https://images.unsplash.com/photo-1604608672516-f1b9b1b7f0f0?w=400',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    views: 45600,
    author: 'Pandit Ramesh'
  },
  {
    id: '5',
    title: {
      hindi: 'रामायण की शिक्षा',
      english: 'Lessons from Ramayana',
      marathi: 'रामायणाची शिकवण'
    },
    description: {
      hindi: 'रामायण से मिलने वाली जीवन की महत्वपूर्ण शिक्षाएं',
      english: 'Important life lessons from the Ramayana',
      marathi: 'रामायणातून मिळणारे जीवनाचे महत्त्वाचे धडे'
    },
    genre: 'dharmik',
    type: 'audio',
    duration: '20:30',
    thumbnail: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    views: 38200,
    author: 'Swami Vidyanand'
  },
  {
    id: '6',
    title: {
      hindi: 'हनुमान चालीसा का महत्व',
      english: 'Significance of Hanuman Chalisa',
      marathi: 'हनुमान चालीसाचे महत्त्व'
    },
    description: {
      hindi: 'हनुमान चालीसा के गहरे अर्थ और महत्व',
      english: 'Deep meaning and significance of Hanuman Chalisa',
      marathi: 'हनुमान चालीसाचे खोल अर्थ आणि महत्त्व'
    },
    genre: 'dharmik',
    type: 'audio',
    duration: '16:20',
    thumbnail: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    views: 52100,
    author: 'Guru Prasad'
  },

  // Funny Stories
  {
    id: '7',
    title: {
      hindi: 'मुल्ला नसरुद्दीन की मस्ती',
      english: 'Mulla Nasruddin\'s Humor',
      marathi: 'मुल्ला नसरुद्दीनची गंमत'
    },
    description: {
      hindi: 'मुल्ला नसरुद्दीन की मज़ेदार और हंसी भरी कहानियां',
      english: 'Hilarious and entertaining stories of Mulla Nasruddin',
      marathi: 'मुल्ला नसरुद्दीनच्या मजेदार आणि हास्यास्पद गोष्टी'
    },
    genre: 'funny',
    type: 'audio',
    duration: '12:45',
    thumbnail: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    views: 22300,
    author: 'Rakesh Kumar'
  },
  {
    id: '8',
    title: {
      hindi: 'चाचा चौधरी की चतुराई',
      english: 'Chacha Chaudhary\'s Wit',
      marathi: 'चाचा चौधरीची हुशारी'
    },
    description: {
      hindi: 'चाचा चौधरी की बुद्धिमानी और मजाकिया रोमांच',
      english: 'Chacha Chaudhary\'s intelligence and funny adventures',
      marathi: 'चाचा चौधरीची बुद्धिमत्ता आणि मजेदार साहस'
    },
    genre: 'funny',
    type: 'video',
    duration: '19:15',
    thumbnail: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    views: 31500,
    author: 'Amit Joshi'
  },
  {
    id: '9',
    title: {
      hindi: 'तेनालीराम की कहानी',
      english: 'Tales of Tenali Rama',
      marathi: 'तेनालीरामाची गोष्ट'
    },
    description: {
      hindi: 'तेनालीराम की चालाकी और हास्य से भरी कहानियां',
      english: 'Clever and humorous stories of Tenali Rama',
      marathi: 'तेनालीरामाच्या हुशारी आणि विनोदाने भरलेल्या गोष्टी'
    },
    genre: 'funny',
    type: 'audio',
    duration: '14:30',
    thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    views: 27800,
    author: 'Suresh Rao'
  },

  // Motivational Stories
  {
    id: '10',
    title: {
      hindi: 'सफलता की राह',
      english: 'Path to Success',
      marathi: 'यशाचा मार्ग'
    },
    description: {
      hindi: 'संघर्ष से सफलता तक का प्रेरणादायक सफर',
      english: 'Inspiring journey from struggle to success',
      marathi: 'संघर्षापासून यशापर्यंतचा प्रेरणादायक प्रवास'
    },
    genre: 'motivational',
    type: 'video',
    duration: '21:00',
    thumbnail: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=400',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    views: 68900,
    author: 'Dr. Vijay Malhotra'
  },
  {
    id: '11',
    title: {
      hindi: 'हिम्मत और हौसला',
      english: 'Courage and Determination',
      marathi: 'धैर्य आणि साहस'
    },
    description: {
      hindi: 'जीवन में हिम्मत बनाए रखने की प्रेरक कहानी',
      english: 'Inspiring story about keeping courage in life',
      marathi: 'जीवनात धैर्य राखण्याची प्रेरणादायक कथा'
    },
    genre: 'motivational',
    type: 'audio',
    duration: '17:45',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    views: 42100,
    author: 'Neha Kapoor'
  },
  {
    id: '12',
    title: {
      hindi: 'सपनों को साकार करें',
      english: 'Make Your Dreams Come True',
      marathi: 'स्वप्ने साकार करा'
    },
    description: {
      hindi: 'अपने सपनों को हकीकत में बदलने की प्रेरणा',
      english: 'Inspiration to turn your dreams into reality',
      marathi: 'तुमची स्वप्ने प्रत्यक्षात आणण्याची प्रेरणा'
    },
    genre: 'motivational',
    type: 'video',
    duration: '23:30',
    thumbnail: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    views: 51200,
    author: 'Arjun Reddy'
  }
];

export const getStoriesByGenre = (genre: string) => {
  if (genre === 'all') return stories;
  return stories.filter(story => story.genre === genre);
};

export const getStoryById = (id: string) => {
  return stories.find(story => story.id === id);
};

export const searchStories = (query: string, language: string) => {
  if (!query) return stories;
  const lowerQuery = query.toLowerCase();
  return stories.filter(story => 
    story.title[language as keyof typeof story.title].toLowerCase().includes(lowerQuery) ||
    story.description[language as keyof typeof story.description].toLowerCase().includes(lowerQuery)
  );
};
