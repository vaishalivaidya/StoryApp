import React, { useMemo } from 'react';
import { Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { stories } from '../data/stories';
import { StoryCard } from '../components/StoryCard';
import { GenreFilter } from '../components/GenreFilter';
import { Input } from '../components/ui/input';

export const HomeScreen: React.FC = () => {
  const { language, selectedGenre, searchQuery, setSearchQuery } = useApp();

  const filteredStories = useMemo(() => {
    let filtered = stories;

    // Filter by genre
    if (selectedGenre !== 'all') {
      filtered = filtered.filter(story => story.genre === selectedGenre);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(story =>
        story.title[language].toLowerCase().includes(query) ||
        story.description[language].toLowerCase().includes(query) ||
        story.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedGenre, searchQuery, language]);

  const translations = {
    search: {
      hindi: 'कहानियां खोजें...',
      english: 'Search stories...',
      marathi: 'कथा शोधा...'
    },
    noResults: {
      hindi: 'कोई कहानी नहीं मिली',
      english: 'No stories found',
      marathi: 'कोणतीही कथा सापडली नाही'
    },
    tryDifferent: {
      hindi: 'अन्य शब्दों से खोजें या फ़िल्टर बदलें',
      english: 'Try different keywords or change filters',
      marathi: 'भिन्न कीवर्ड वापरा किंवा फिल्टर बदला'
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder={translations.search[language]}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-3"
        />
      </div>

      {/* Genre Filter */}
      <GenreFilter />

      {/* Stories Grid */}
      {filteredStories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">{translations.noResults[language]}</h3>
          <p className="text-gray-500">{translations.tryDifferent[language]}</p>
        </div>
      )}
    </div>
  );
};
