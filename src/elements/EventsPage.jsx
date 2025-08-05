import React, { useState, useCallback } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EventsPage.css';

// This is mock data - replace with your actual database fetch
const mockEvents = {
  '2025-08-04': [
    { 
      title: 'Poetry Workshop', 
      time: '14:00', 
      description: 'Learn the art of poetry writing',
      media: [
        { type: 'image', url: 'https://picsum.photos/400/300?random=1', alt: 'Poetry workshop session' },
        { type: 'image', url: 'https://picsum.photos/400/300?random=2', alt: 'Writing session' }
      ]
    },
  ],
  '2025-08-10': [
    { 
      title: 'Book Reading', 
      time: '16:00', 
      description: 'Group reading and discussion',
      media: [
        { type: 'image', url: 'https://picsum.photos/400/300?random=3', alt: 'Book reading event' }
      ]
    },
    { 
      title: 'Writing Contest', 
      time: '18:00', 
      description: 'Creative writing competition',
      media: [
        { type: 'image', url: 'https://picsum.photos/400/300?random=4', alt: 'Writing contest' },
        { type: 'image', url: 'https://picsum.photos/400/300?random=5', alt: 'Prize ceremony' },
        { type: 'video', url: 'https://example.com/sample-video.mp4', alt: 'Contest highlights' }
      ]
    },
  ],
};

const EventsPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async (selectedDate) => {
    setLoading(true);
    try {
      // This is where you would normally fetch from your database
      // For now, we're using mock data
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const eventsForDate = mockEvents[formattedDate] || [];
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setEvents(eventsForDate);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    fetchEvents(newDate);
  };

  // Function to check if a date has events
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0];
      const hasEvents = mockEvents[formattedDate]?.length > 0;
      return hasEvents ? <div className="event-dot"></div> : null;
    }
  };

  return (
    
    <div className="events-page">
      <h1>Lexis Club Events</h1>
      <div className="events-container">
        <div className="calendar-section">
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileContent={tileContent}
            className="custom-calendar"
            showNeighboringMonth={true}
            minDetail="month"
            maxDetail="month"
            defaultView="month"
            nextLabel="→"
            prevLabel="←"
            next2Label={null}
            prev2Label={null}
            showFixedNumberOfWeeks={false}
            formatMonthYear={(locale, date) => {
              return date.toLocaleString('default', { month: 'long', year: 'numeric' });
            }}
            navigationLabel={({ date }) => {
              return date.toLocaleString('default', { month: 'long', year: 'numeric' });
            }}
            calendarType="gregory"
            showWeekNumbers={false}
          />
        </div>
        <div className="events-section">
          <h2>Events for {date.toLocaleDateString()}</h2>
          {loading ? (
            <div className="loading">Loading events...</div>
          ) : events.length > 0 ? (
            <div className="events-list">
              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <h3>{event.title}</h3>
                  <p className="event-time">
                    <span className="time-icon">🕒</span> {event.time}
                  </p>
                  <p className="event-description">{event.description}</p>
                  {event.media && event.media.length > 0 && (
                    <div className={`event-media ${event.media.length === 1 ? 'single-item' : ''}`}>
                      {event.media.map((media, mediaIndex) => (
                        media.type === 'image' ? (
                          <div key={mediaIndex} className="media-wrapper">
                            <img 
                              src={media.url} 
                              alt={media.alt || `Event media ${mediaIndex + 1}`} 
                              loading="lazy"
                            />
                            {event.media.length > 3 && mediaIndex === 2 && (
                              <div className="media-count">+{event.media.length - 3}</div>
                            )}
                          </div>
                        ) : (
                          <div key={mediaIndex} className="media-wrapper">
                            <video 
                              src={media.url} 
                              controls 
                              preload="none"
                              poster={media.poster}
                            />
                          </div>
                        )
                      )).slice(0, 3)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="no-events">No events scheduled for this date</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
