import React from 'react';
import { Home, Heart, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button } from './ui/button';

export const BottomNavigation: React.FC = () => {
  const { currentScreen, setCurrentScreen, language } = useApp();

  const navItems = [
    { 
      id: 'home' as const, 
      icon: Home, 
      label: { hindi: 'होम', english: 'Home', marathi: 'होम' } 
    },
    { 
      id: 'favorites' as const, 
      icon: Heart, 
      label: { hindi: 'पसंदीदा', english: 'Favorites', marathi: 'आवडते' } 
    },
    { 
      id: 'settings' as const, 
      icon: Settings, 
      label: { hindi: 'सेटिंग्स', english: 'Settings', marathi: 'सेटिंग्ज' } 
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setCurrentScreen(item.id)}
                className={`flex flex-col items-center gap-1 py-3 px-6 ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'fill-blue-600' : ''}`} />
                <span className="text-xs">{item.label[language]}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
