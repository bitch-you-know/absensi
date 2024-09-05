import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import NavbarUser from '../components/NavbarUser';

import '../style/calendar.css';


const Calendarku = () => {



    return (
        <div className='calendar' id='calendar'>
            
            <div className="container  ">
                 <NavbarUser/>
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                <div className='bg-white rounded'>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth" // Updated here
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay', // Updated here
                        }}
                        height={700}
                        contentHeight={700}
                    />
                </div>
            </div>
        </div>

    )
}

export default Calendarku