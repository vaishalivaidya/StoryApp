import React from 'react';
import { Settings, Globe, Info, Mail, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LanguageSelector } from '../components/LanguageSelector';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

export const SettingsScreen: React.FC = () => {
  const { language } = useApp();

  const translations = {
    title: {
      hindi: 'सेटिंग्स',
      english: 'Settings',
      marathi: 'सेटिंग्ज'
    },
    languageTitle: {
      hindi: 'भाषा चुनें',
      english: 'Select Language',
      marathi: 'भाषा निवडा'
    },
    languageDesc: {
      hindi: 'ऐप की भाषा बदलें',
      english: 'Change app language',
      marathi: 'अॅपची भाषा बदला'
    },
    aboutTitle: {
      hindi: 'ऐप के बारे में',
      english: 'About App',
      marathi: 'अॅप बद्दल'
    },
    aboutDesc: {
      hindi: 'संस्करण 1.0.0',
      english: 'Version 1.0.0',
      marathi: 'आवृत्ती 1.0.0'
    },
    contactTitle: {
      hindi: 'संपर्क करें',
      english: 'Contact Us',
      marathi: 'संपर्क साधा'
    },
    contactDesc: {
      hindi: 'support@storyapp.com',
      english: 'support@storyapp.com',
      marathi: 'support@storyapp.com'
    },
    privacyTitle: {
      hindi: 'गोपनीयता नीति',
      english: 'Privacy Policy',
      marathi: 'गोपनीयता धोरण'
    },
    privacyDesc: {
      hindi: 'आपकी गोपनीयता हमारी प्राथमिकता है',
      english: 'Your privacy is our priority',
      marathi: 'तुमची गोपनीयता आमची प्राथमिकता आहे'
    },
    features: {
      hindi: 'विशेषताएं',
      english: 'Features',
      marathi: 'वैशिष्ट्ये'
    },
    feature1: {
      hindi: '🎧 ऑडियो और वीडियो कहानियाँ',
      english: '🎧 Audio & Video Stories',
      marathi: '🎧 ऑडिओ आणि व्हिडिओ कथा'
    },
    feature2: {
      hindi: '🌐 तीन भाषाओं में उपलब्ध',
      english: '🌐 Available in 3 Languages',
      marathi: '🌐 तीन भाषांमध्ये उपलब्ध'
    },
    feature3: {
      hindi: '❤️ पसंदीदा कहानियाँ सेव करें',
      english: '❤️ Save Favorite Stories',
      marathi: '❤️ आवडत्या कथा जतन करा'
    },
    feature4: {
      hindi: '🎭 4 विभिन्न शैलियाँ',
      english: '🎭 4 Different Genres',
      marathi: '🎭 4 विविध शैली'
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Settings className="w-8 h-8" />
        <h1 className="text-3xl font-bold">{translations.title[language]}</h1>
      </div>

      {/* Language Settings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <CardTitle>{translations.languageTitle[language]}</CardTitle>
          </div>
          <CardDescription>{translations.languageDesc[language]}</CardDescription>
        </CardHeader>
        <CardContent>
          <LanguageSelector />
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>{translations.features[language]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-gray-700">{translations.feature1[language]}</div>
          <Separator />
          <div className="text-gray-700">{translations.feature2[language]}</div>
          <Separator />
          <div className="text-gray-700">{translations.feature3[language]}</div>
          <Separator />
          <div className="text-gray-700">{translations.feature4[language]}</div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            <CardTitle>{translations.aboutTitle[language]}</CardTitle>
          </div>
          <CardDescription>{translations.aboutDesc[language]}</CardDescription>
        </CardHeader>
      </Card>

      {/* Contact */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <CardTitle>{translations.contactTitle[language]}</CardTitle>
          </div>
          <CardDescription>{translations.contactDesc[language]}</CardDescription>
        </CardHeader>
      </Card>

      {/* Privacy */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <CardTitle>{translations.privacyTitle[language]}</CardTitle>
          </div>
          <CardDescription>{translations.privacyDesc[language]}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
