import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { HomeScreen } from './screens/HomeScreen';
import { StoryDetailScreen } from './screens/StoryDetailScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { BottomNavigation } from './components/BottomNavigation';
import { LanguageSelector } from './components/LanguageSelector';
import { BookOpen } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentScreen, language } = useApp();

  const appTitles = {
    hindi: 'कहानी ऐप',
    english: 'Story App',
    marathi: 'कथा अॅप'
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'detail':
        return <StoryDetailScreen />;
      case 'favorites':
        return <FavoritesScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {appTitles[language]}
              </h1>
            </div>
            {currentScreen === 'home' && (
              <div className="hidden md:block">
                <LanguageSelector />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 pb-24">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
