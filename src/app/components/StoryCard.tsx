import React from 'react';
import { Heart, Play, Headphones, Video, Eye } from 'lucide-react';
import { Story, useApp } from '../context/AppContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const { language, isFavorite, toggleFavorite, setSelectedStory, setCurrentScreen } = useApp();

  const handleCardClick = () => {
    setSelectedStory(story);
    setCurrentScreen('detail');
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(story.id);
  };

  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img 
          src={story.thumbnail} 
          alt={story.title[language]}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge variant={story.type === 'audio' ? 'default' : 'secondary'} className="flex items-center gap-1">
            {story.type === 'audio' ? <Headphones className="w-3 h-3" /> : <Video className="w-3 h-3" />}
            {story.type === 'audio' ? 'Audio' : 'Video'}
          </Badge>
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge variant="outline" className="bg-black/60 text-white border-none">
            {story.duration}
          </Badge>
        </div>
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 left-2 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite(story.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">
          {story.title[language]}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {story.description[language]}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {story.views.toLocaleString()}
          </span>
          <span className="text-xs">by {story.author}</span>
        </div>
      </CardContent>
    </Card>
  );
};
