# Story App - Web Application

A responsive, multi-language web application for accessing audio and video stories across multiple genres.

## 🎯 Features

### Core Functionality
- **Audio & Video Stories**: Stream stories in both audio and video formats
- **Multi-language Support**: Fully translated interface in Hindi (हिंदी), English, and Marathi (मराठी)
- **4 Genres**: Romantic, Dharmik (Spiritual), Funny, and Motivational stories
- **Favorites System**: Save your favorite stories with persistent localStorage
- **Search & Filter**: Find stories by title, description, or author
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### User Experience
- **Bottom Navigation**: Mobile-first navigation pattern
- **Beautiful UI**: Gradient backgrounds and smooth animations
- **Rich Media Players**: Custom audio and video players with controls
- **Story Cards**: Visual story browsing with thumbnails and metadata
- **Language Persistence**: Your language preference is saved locally

## 📁 Project Structure

```
/src
├── /app
│   ├── /components
│   │   ├── AudioPlayer.tsx       # Custom audio player with controls
│   │   ├── VideoPlayer.tsx       # Custom video player with controls
│   │   ├── StoryCard.tsx         # Story preview card component
│   │   ├── LanguageSelector.tsx  # Language switcher
│   │   ├── GenreFilter.tsx       # Genre filter buttons
│   │   └── BottomNavigation.tsx  # Mobile navigation bar
│   ├── /screens
│   │   ├── HomeScreen.tsx        # Main story listing
│   │   ├── StoryDetailScreen.tsx # Story detail with player
│   │   ├── FavoritesScreen.tsx   # Saved favorites
│   │   └── SettingsScreen.tsx    # App settings
│   ├── /context
│   │   └── AppContext.tsx        # Global state management
│   ├── /data
│   │   └── stories.ts            # Story data and utilities
│   └── App.tsx                   # Main app component
└── /styles
    └── theme.css                 # Custom styles and utilities
```

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: Browser localStorage
- **Build Tool**: Vite

## 🌐 Supported Languages

1. **Hindi (हिंदी)** - Full translation including UI and story content
2. **English** - Default language
3. **Marathi (मराठी)** - Complete Marathi interface

## 🎭 Available Genres

1. **Romantic** (रोमांटिक / रोमँटिक) - Love stories
2. **Dharmik** (धार्मिक) - Spiritual and religious stories
3. **Funny** (मज़ेदार / मजेदार) - Humorous tales
4. **Motivational** (प्रेरक / प्रेरणादायक) - Inspiring stories

## 📱 Screens & Navigation

### Home Screen
- Search bar for finding stories
- Genre filter chips
- Grid of story cards with thumbnails
- Quick access to favorites

### Story Detail Screen
- Full-featured audio/video player
- Story description and metadata
- Share and download options
- Favorite toggle

### Favorites Screen
- All saved favorite stories
- Persistent across sessions
- Same card-based interface

### Settings Screen
- Language selection
- App information
- Features overview
- Contact and privacy information

## 🎨 Design Highlights

- **Mobile-First**: Optimized for touch interfaces
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: Hover effects and transitions
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Responsive Grid**: Adapts from 1 to 3 columns based on screen size

## 🔧 Key Components

### AudioPlayer
- Play/Pause controls
- Progress bar with seek functionality
- Volume control with mute toggle
- Skip forward/backward (10 seconds)
- Time display

### VideoPlayer
- Click-to-play interface
- Volume and mute controls
- Fullscreen support
- Custom overlay controls
- Thumbnail preview

### AppContext
- Global language state
- Favorites management
- Screen navigation
- Search and filter state
- localStorage persistence

## 💾 Data Persistence

The app uses browser localStorage to persist:
- Selected language preference
- Favorite stories list

This means your preferences survive page refreshes and browser sessions.

## 🚀 Future Enhancements

Potential improvements for the app:

1. **Backend Integration**
   - User authentication
   - Cloud-based favorites sync
   - Analytics tracking

2. **Advanced Features**
   - Offline playback with service workers
   - Progressive Web App (PWA) capabilities
   - Push notifications for new stories
   - User comments and ratings

3. **Content Expansion**
   - More genres
   - Playlists and collections
   - Recommended stories
   - User-generated content

4. **Social Features**
   - Share stories on social media
   - Create story collections
   - Follow favorite authors

## 📊 Sample Data

The app includes 12 sample stories across all genres:
- 3 Romantic stories
- 3 Dharmik stories
- 3 Funny stories
- 3 Motivational stories

Each story has:
- Multilingual titles and descriptions
- Thumbnail images (via Unsplash)
- Sample audio/video URLs
- Author information
- View counts
- Duration

## 🎯 Use Cases

- **Entertainment**: Browse and enjoy stories in your preferred language
- **Learning**: Listen to motivational and spiritual content
- **Relaxation**: Audio stories for bedtime or commuting
- **Cultural Content**: Access stories in regional languages
- **Mobile Experience**: Optimized for on-the-go consumption

## 🔐 Privacy & Data

- No user data is sent to external servers
- All preferences stored locally in browser
- No cookies or tracking
- Sample media URLs point to public resources

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
