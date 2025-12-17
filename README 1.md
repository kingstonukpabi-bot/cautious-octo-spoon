# SportConnect - Sports Game Hosting Platform

A fully interactive web application that allows sports enthusiasts to host and join local sports games. Connect with other athletes, share highlights, and build your sports community.

## Features

### 🎮 Game Hosting & Discovery
- **Host Games**: Create games for basketball, tennis, golf, soccer, football, and more
- **Smart Filtering**: Games are automatically filtered based on:
  - Sports preferences
  - Age range
  - Friends-only settings
  - Coed/mixed gender options
- **Interactive Map**: View all available games on a Google Maps interface
- **Join Games**: Easy one-click joining for available games

### 👥 Social Features
- **Friend System**: Send friend requests, accept/reject, and build your network
- **Messaging**: Direct messaging with friends, including video sharing
- **Blocking**: Block users you don't want to interact with
- **User Ratings**: Rate other players after games (1-5 stars)

### 🎥 Highlights Section
- **Post Highlights**: Upload 30-second video highlights from your games
- **Engage**: Like and comment on highlights
- **Discover**: Browse highlights from the community

### 👤 User Profiles
- **Customizable**: Set your name, age, gender, and sports preferences
- **Rating System**: Your rating is calculated from ratings given by other players
- **Preferences**: Select sports you want to be notified about

## Technology Stack

- **Backend**: Python with Flask
- **Database**: SQLite (SQLAlchemy ORM)
- **Frontend**: HTML5, CSS3, JavaScript
- **UI Framework**: Bootstrap 5
- **Maps**: Google Maps API
- **Authentication**: Flask-Login

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SDET-Portfolio-KingstonUkpabi
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On Mac/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up Google Maps API**
   - Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the Maps JavaScript API
   - Replace `YOUR_API_KEY` in `templates/dashboard.html` with your actual API key

5. **Run the application**
   ```bash
   python app.py
   ```

6. **Access the application**
   - Open your browser and go to `http://localhost:5000`

## Project Structure

```
.
├── app.py                 # Flask application and routes
├── requirements.txt       # Python dependencies
├── templates/            # HTML templates
│   ├── index.html       # Landing page
│   ├── login.html       # Login page
│   ├── signup.html      # Sign up page
│   └── dashboard.html   # Main dashboard
├── static/
│   ├── css/
│   │   └── style.css    # Custom styles
│   └── js/
│       ├── auth.js      # Authentication logic
│       └── dashboard.js # Dashboard functionality
└── uploads/             # User-uploaded files (created automatically)
    ├── videos/          # Highlight videos
    └── profile_pics/    # Profile pictures
```

## Database Models

- **User**: User accounts with profile information
- **Game**: Hosted sports games
- **GameParticipant**: Users who joined games
- **FriendRequest**: Friend request system
- **Friendship**: Confirmed friendships
- **Message**: Direct messages between friends
- **Highlight**: User-posted video highlights
- **HighlightLike**: Likes on highlights
- **HighlightComment**: Comments on highlights
- **Rating**: User ratings after games
- **BlockedUser**: Blocked users list

## API Endpoints

### Authentication
- `POST /login` - User login
- `POST /signup` - User registration
- `GET /logout` - User logout

### Profile
- `GET /api/profile` - Get user profile
- `POST /api/profile` - Update user profile

### Games
- `GET /api/games` - Get all visible games
- `POST /api/games` - Host a new game
- `POST /api/games/<id>/join` - Join a game

### Friends
- `GET /api/friends` - Get user's friends list
- `GET /api/friend-requests` - Get pending friend requests
- `POST /api/friend-requests` - Send/accept/reject friend requests

### Messages
- `GET /api/messages?friend_id=<id>` - Get messages with a friend
- `POST /api/messages` - Send a message

### Highlights
- `GET /api/highlights` - Get all highlights
- `POST /api/highlights` - Post a new highlight
- `POST /api/highlights/<id>/like` - Like/unlike a highlight
- `POST /api/highlights/<id>/comment` - Comment on a highlight

### Ratings
- `POST /api/rate` - Rate a user after a game

## Usage Guide

### Getting Started
1. Sign up for a new account
2. Complete your profile with age, gender, and sports preferences
3. Start exploring games on the map or host your own!

### Hosting a Game
1. Click "Host Game" in the navigation
2. Fill in all game details:
   - Select the sport
   - Set total number of players
   - Set age range (optional)
   - Choose if it's friends-only
   - Select if it's coed
   - Pick location on the map
   - Set date and time
3. Click "Host Game" to publish

### Joining a Game
1. View games on the map or in the games list
2. Click on a game to see details
3. Click "Join Game" to participate

### Adding Friends
1. Go to the Friends section
2. Search for users (feature can be extended)
3. Send friend requests
4. Accept/reject incoming requests

### Posting Highlights
1. Go to the Highlights section
2. Upload a video (max 30 seconds)
3. Add a caption
4. Share with the community!

## Security Notes

- Change the `SECRET_KEY` in `app.py` for production use
- Use environment variables for sensitive data
- Implement proper file upload validation
- Add rate limiting for API endpoints
- Use HTTPS in production

## Future Enhancements

- Real-time notifications
- Push notifications for new games
- Advanced search and filtering
- Game history and statistics
- Team formation features
- Integration with payment systems
- Mobile app version

## License

This project is open source and available for educational purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on the repository.
