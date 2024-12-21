import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [train, setTrain] = useState({ trainID: '', route: '', startTime: '', endTime: '', platformAssignments: [] });
    const [station, setStation] = useState({ stationID: '', name: '', latitude: '', longitude: '', availablePlatforms: '' });
    const [route, setRoute] = useState({ routeID: '', startStation: '', endStation: '', stationList: '' });
    const [schedule, setSchedule] = useState({ trainID: '', stationID: '', arrivalTime: '', departureTime: '', delay: 0 });

    // Handlers to update state for each form
    const handleInputChange = (e, setStateFunc) => {
        const { name, value } = e.target;
        setStateFunc(prevState => ({ ...prevState, [name]: value }));
    };

    // API calls to submit data
    const addTrain = async () => {
        try {
            await axios.post('/api/trains', train);
            alert('Train added successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add train');
        }
    };

    const addStation = async () => {
        try {
            await axios.post('/api/stations', station);
            alert('Station added successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add station');
        }
    };

    const addRoute = async () => {
        try {
            await axios.post('/api/routes', route);
            alert('Route added successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add route');
        }
    };

    const addSchedule = async () => {
        try {
            await axios.post('/api/schedules', schedule);
            alert('Schedule added successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to add schedule');
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>

            {/* Form to Add Train */}
            <h2>Add Train</h2>
            <form onSubmit={(e) => { e.preventDefault(); addTrain(); }}>
                <input type="text" name="trainID" placeholder="Train ID" value={train.trainID} onChange={(e) => handleInputChange(e, setTrain)} required />
                <input type="text" name="route" placeholder="Route ID" value={train.route} onChange={(e) => handleInputChange(e, setTrain)} required />
                <input type="datetime-local" name="startTime" placeholder="Start Time" value={train.startTime} onChange={(e) => handleInputChange(e, setTrain)} required />
                <input type="datetime-local" name="endTime" placeholder="End Time" value={train.endTime} onChange={(e) => handleInputChange(e, setTrain)} required />
                <button type="submit">Add Train</button>
            </form>

            {/* Form to Add Station */}
            <h2>Add Station</h2>
            <form onSubmit={(e) => { e.preventDefault(); addStation(); }}>
                <input type="text" name="stationID" placeholder="Station ID" value={station.stationID} onChange={(e) => handleInputChange(e, setStation)} required />
                <input type="text" name="name" placeholder="Station Name" value={station.name} onChange={(e) => handleInputChange(e, setStation)} required />
                <input type="number" name="latitude" placeholder="Latitude" value={station.latitude} onChange={(e) => handleInputChange(e, setStation)} required />
                <input type="number" name="longitude" placeholder="Longitude" value={station.longitude} onChange={(e) => handleInputChange(e, setStation)} required />
                <input type="number" name="availablePlatforms" placeholder="Available Platforms" value={station.availablePlatforms} onChange={(e) => handleInputChange(e, setStation)} required />
                <button type="submit">Add Station</button>
            </form>

            {/* Form to Add Route */}
            <h2>Add Route</h2>
            <form onSubmit={(e) => { e.preventDefault(); addRoute(); }}>
                <input type="text" name="routeID" placeholder="Route ID" value={route.routeID} onChange={(e) => handleInputChange(e, setRoute)} required />
                <input type="text" name="startStation" placeholder="Start Station ID" value={route.startStation} onChange={(e) => handleInputChange(e, setRoute)} required />
                <input type="text" name="endStation" placeholder="End Station ID" value={route.endStation} onChange={(e) => handleInputChange(e, setRoute)} required />
                <input type="text" name="stationList" placeholder="List of Station IDs (comma-separated)" value={route.stationList} onChange={(e) => handleInputChange(e, setRoute)} />
                <button type="submit">Add Route</button>
            </form>

            {/* Form to Add Schedule */}
            <h2>Add Schedule</h2>
            <form onSubmit={(e) => { e.preventDefault(); addSchedule(); }}>
                <input type="text" name="trainID" placeholder="Train ID" value={schedule.trainID} onChange={(e) => handleInputChange(e, setSchedule)} required />
                <input type="text" name="stationID" placeholder="Station ID" value={schedule.stationID} onChange={(e) => handleInputChange(e, setSchedule)} required />
                <input type="datetime-local" name="arrivalTime" placeholder="Arrival Time" value={schedule.arrivalTime} onChange={(e) => handleInputChange(e, setSchedule)} required />
                <input type="datetime-local" name="departureTime" placeholder="Departure Time" value={schedule.departureTime} onChange={(e) => handleInputChange(e, setSchedule)} required />
                <input type="number" name="delay" placeholder="Delay in minutes" value={schedule.delay} onChange={(e) => handleInputChange(e, setSchedule)} />
                <button type="submit">Add Schedule</button>
            </form>
        </div>
    );
}

export default Dashboard;
