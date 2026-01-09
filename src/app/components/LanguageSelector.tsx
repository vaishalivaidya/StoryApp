import React from 'react';
import { Globe } from 'lucide-react';
import { useApp, Language } from '../context/AppContext';
import { Button } from './ui/button';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useApp();

  const languages: { value: Language; label: string; native: string }[] = [
    { value: 'hindi', label: 'Hindi', native: 'हिंदी' },
    { value: 'english', label: 'English', native: 'English' },
    { value: 'marathi', label: 'Marathi', native: 'मराठी' }
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Globe className="w-5 h-5 text-gray-600" />
      {languages.map(lang => (
        <Button
          key={lang.value}
          onClick={() => setLanguage(lang.value)}
          variant={language === lang.value ? 'default' : 'outline'}
          size="sm"
          className="min-w-[80px]"
        >
          {lang.native}
        </Button>
      ))}
    </div>
  );
};
