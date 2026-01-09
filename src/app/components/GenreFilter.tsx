import React from 'react';
import { Heart, Sparkles, Laugh, TrendingUp } from 'lucide-react';
import { useApp, Genre } from '../context/AppContext';
import { Button } from './ui/button';

export const GenreFilter: React.FC = () => {
  const { selectedGenre, setSelectedGenre, language } = useApp();

  const genres: { value: Genre | 'all'; icon: React.ReactNode; label: { hindi: string; english: string; marathi: string } }[] = [
    { 
      value: 'all', 
      icon: <Sparkles className="w-4 h-4" />, 
      label: { hindi: 'सभी', english: 'All', marathi: 'सर्व' } 
    },
    { 
      value: 'romantic', 
      icon: <Heart className="w-4 h-4" />, 
      label: { hindi: 'रोमांटिक', english: 'Romantic', marathi: 'रोमँटिक' } 
    },
    { 
      value: 'dharmik', 
      icon: <Sparkles className="w-4 h-4" />, 
      label: { hindi: 'धार्मिक', english: 'Dharmik', marathi: 'धार्मिक' } 
    },
    { 
      value: 'funny', 
      icon: <Laugh className="w-4 h-4" />, 
      label: { hindi: 'मज़ेदार', english: 'Funny', marathi: 'मजेदार' } 
    },
    { 
      value: 'motivational', 
      icon: <TrendingUp className="w-4 h-4" />, 
      label: { hindi: 'प्रेरक', english: 'Motivational', marathi: 'प्रेरणादायक' } 
    }
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {genres.map(genre => (
        <Button
          key={genre.value}
          onClick={() => setSelectedGenre(genre.value)}
          variant={selectedGenre === genre.value ? 'default' : 'outline'}
          size="sm"
          className="flex items-center gap-2 whitespace-nowrap"
        >
          {genre.icon}
          {genre.label[language]}
        </Button>
      ))}
    </div>
  );
};
