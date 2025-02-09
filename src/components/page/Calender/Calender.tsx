import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Stack,
  useTheme,
  ThemeProvider,
  createTheme,
  Paper,
} from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import "./calender.css";

interface Event {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
}

const INITIAL_EVENTS: Event[] = [];

const Calender = () => {
  const [weekendsVisible] = useState<boolean>(true);
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);
  const theme = useTheme();

  // تخصيص الثيم للوضع المظلم
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
      text: {
        primary: "#ffffff",
        secondary: "#b3b3b3",
      },
    },
  });

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt("Please enter a new title for your event") || "";
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${Math.random()}`,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: any) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  // دالة handleEvents التي تقبل الأنواع المطلوبة بدون الحاجة لـ EventApi
  const handleEvents = (events: any[]) => {
    const eventList: Event[] = events.map(event => ({
      id: event.id.toString(),
      title: event.title,
      start: event.startStr,
      end: event.endStr,
      allDay: event.allDay,
    }));
    setCurrentEvents(eventList);
  };

  const renderEventContent = (eventInfo: any) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  const renderSidebarEvent = (event: Event) => {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  };

  const calendarStyles = {
    "--fc-page-bg-color": theme.palette.background.default,
    "--fc-neutral-bg-color": theme.palette.background.paper,
    "--fc-neutral-text-color": theme.palette.text.primary,
    "--fc-border-color": theme.palette.divider,
    "--fc-button-text-color": theme.palette.text.primary,
    "--fc-button-bg-color": theme.palette.background.paper,
    "--fc-button-border-color": theme.palette.divider,
    "--fc-button-hover-bg-color": theme.palette.action.hover,
    "--fc-button-hover-border-color": theme.palette.divider,
    "--fc-button-active-bg-color": theme.palette.action.selected,
    "--fc-today-bg-color": theme.palette.action.selected,
    "--fc-event-bg-color": theme.palette.primary.main,
    "--fc-event-border-color": theme.palette.primary.main,
    "--fc-event-text-color": theme.palette.primary.contrastText,
    "--fc-list-event-hover-bg-color": theme.palette.action.hover,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Stack
        direction="row"
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Paper
          className="demo-app-sidebar"
          style={{
            backgroundColor: theme.palette.background.paper,
            borderRight: `1px solid ${theme.palette.divider}`,
          }}
        >
          <h2
            style={{ textAlign: "center", color: theme.palette.primary.main }}
          >
            All Events ({currentEvents.length})
          </h2>
          <ul style={{ color: theme.palette.primary.main }}>
            {currentEvents.map(renderSidebarEvent)}
          </ul>
        </Paper>

        <div className="demo-app">
          <div className="demo-app-main" style={calendarStyles}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              initialEvents={INITIAL_EVENTS}
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              eventsSet={handleEvents}  // دالة handleEvents
            />
          </div>
        </div>
      </Stack>
    </ThemeProvider>
  );
};

export default Calender;
