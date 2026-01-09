import React from 'react';
import { Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { stories } from '../data/stories';
import { StoryCard } from '../components/StoryCard';

export const FavoritesScreen: React.FC = () => {
  const { favorites, language } = useApp();

  const favoriteStories = stories.filter(story => favorites.includes(story.id));

  const translations = {
    title: {
      hindi: 'पसंदीदा कहानियाँ',
      english: 'Favorite Stories',
      marathi: 'आवडती कथा'
    },
    noFavorites: {
      hindi: 'कोई पसंदीदा कहानी नहीं',
      english: 'No favorite stories yet',
      marathi: 'अजून कोणतीही आवडती कथा नाही'
    },
    addFavorites: {
      hindi: 'अपनी पसंदीदा कहानियों को सहेजने के लिए ♥️ पर क्लिक करें',
      english: 'Click ♥️ to save your favorite stories',
      marathi: 'तुमच्या आवडत्या कथा जतन करण्यासाठी ♥️ वर क्लिक करा'
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Heart className="w-8 h-8 text-red-500 fill-red-500" />
        <h1 className="text-3xl font-bold">{translations.title[language]}</h1>
      </div>

      {favoriteStories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">💝</div>
          <h3 className="text-xl font-semibold mb-2">{translations.noFavorites[language]}</h3>
          <p className="text-gray-500 max-w-md mx-auto">{translations.addFavorites[language]}</p>
        </div>
      )}
    </div>
  );
};
