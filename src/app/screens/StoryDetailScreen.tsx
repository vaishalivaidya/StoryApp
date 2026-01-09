import React from 'react';
import { ArrowLeft, Heart, Share2, Download, Eye, User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AudioPlayer } from '../components/AudioPlayer';
import { VideoPlayer } from '../components/VideoPlayer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export const StoryDetailScreen: React.FC = () => {
  const { selectedStory, setCurrentScreen, language, isFavorite, toggleFavorite } = useApp();

  if (!selectedStory) return null;

  const translations = {
    back: {
      hindi: 'वापस',
      english: 'Back',
      marathi: 'परत'
    },
    description: {
      hindi: 'विवरण',
      english: 'Description',
      marathi: 'वर्णन'
    },
    author: {
      hindi: 'लेखक',
      english: 'Author',
      marathi: 'लेखक'
    },
    views: {
      hindi: 'देखा गया',
      english: 'Views',
      marathi: 'पाहिले'
    },
    share: {
      hindi: 'साझा करें',
      english: 'Share',
      marathi: 'शेअर करा'
    },
    download: {
      hindi: 'डाउनलोड',
      english: 'Download',
      marathi: 'डाउनलोड'
    }
  };

  const genreLabels = {
    romantic: { hindi: 'रोमांटिक', english: 'Romantic', marathi: 'रोमँटिक' },
    dharmik: { hindi: 'धार्मिक', english: 'Dharmik', marathi: 'धार्मिक' },
    funny: { hindi: 'मज़ेदार', english: 'Funny', marathi: 'मजेदार' },
    motivational: { hindi: 'प्रेरक', english: 'Motivational', marathi: 'प्रेरणादायक' }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedStory.title[language],
          text: selectedStory.description[language],
          url: window.location.href
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setCurrentScreen('home')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          {translations.back[language]}
        </Button>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => toggleFavorite(selectedStory.id)}
          >
            <Heart className={`w-5 h-5 ${isFavorite(selectedStory.id) ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button variant="outline" size="icon" onClick={handleShare}>
            <Share2 className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Title & Meta */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">{selectedStory.title[language]}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <Badge>{genreLabels[selectedStory.genre][language]}</Badge>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {selectedStory.author}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {selectedStory.views.toLocaleString()} {translations.views[language]}
          </span>
        </div>
      </div>

      {/* Player */}
      {selectedStory.type === 'audio' && selectedStory.audioUrl && (
        <AudioPlayer 
          audioUrl={selectedStory.audioUrl} 
          title={selectedStory.title[language]}
        />
      )}

      {selectedStory.type === 'video' && selectedStory.videoUrl && (
        <VideoPlayer 
          videoUrl={selectedStory.videoUrl} 
          title={selectedStory.title[language]}
          thumbnail={selectedStory.thumbnail}
        />
      )}

      {/* Description */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">{translations.description[language]}</h2>
        <p className="text-gray-700 leading-relaxed">
          {selectedStory.description[language]}
        </p>
      </div>
    </div>
  );
};
