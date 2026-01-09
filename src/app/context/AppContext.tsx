import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'hindi' | 'english' | 'marathi';
export type Genre = 'romantic' | 'dharmik' | 'funny' | 'motivational';
export type StoryType = 'audio' | 'video';

export interface Story {
  id: string;
  title: {
    hindi: string;
    english: string;
    marathi: string;
  };
  description: {
    hindi: string;
    english: string;
    marathi: string;
  };
  genre: Genre;
  type: StoryType;
  duration: string;
  thumbnail: string;
  audioUrl?: string;
  videoUrl?: string;
  views: number;
  author: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  favorites: string[];
  toggleFavorite: (storyId: string) => void;
  isFavorite: (storyId: string) => boolean;
  currentScreen: 'home' | 'detail' | 'favorites' | 'settings';
  setCurrentScreen: (screen: 'home' | 'detail' | 'favorites' | 'settings') => void;
  selectedStory: Story | null;
  setSelectedStory: (story: Story | null) => void;
  selectedGenre: Genre | 'all';
  setSelectedGenre: (genre: Genre | 'all') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'english';
  });
  
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentScreen, setCurrentScreen] = useState<'home' | 'detail' | 'favorites' | 'settings'>('home');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<Genre | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (storyId: string) => {
    setFavorites(prev => 
      prev.includes(storyId) 
        ? prev.filter(id => id !== storyId)
        : [...prev, storyId]
    );
  };

  const isFavorite = (storyId: string) => favorites.includes(storyId);

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      favorites,
      toggleFavorite,
      isFavorite,
      currentScreen,
      setCurrentScreen,
      selectedStory,
      setSelectedStory,
      selectedGenre,
      setSelectedGenre,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
