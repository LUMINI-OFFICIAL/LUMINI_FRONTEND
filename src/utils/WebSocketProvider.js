import React, { useEffect, useState, useRef, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_SOCKET } from '../../config';

export const WebSocketContext = createContext(null);

const WebSocketProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const wsRef = useRef(null);
  const reconnectIntervalRef = useRef(null);

  const initializeWebSocket = async (pageType) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const wsInstance = new WebSocket(`ws://${SERVER_SOCKET}?token=${token}`);

        wsInstance.onopen = () => {
          console.log('WebSocket connection established');
          clearInterval(reconnectIntervalRef.current);
          wsInstance.send(JSON.stringify({ type: pageType }));
        };

        wsInstance.onmessage = (event) => {
          const message = JSON.parse(event.data);
          setMessages(message);
        };

        wsInstance.onclose = () => {
          console.log('WebSocket connection closed');
          if (isLoggedin) attemptReconnect(pageType);
        };

        wsInstance.onerror = (error) => {
          console.error('WebSocket error:', error);
          wsInstance.close();
        };

        wsRef.current = wsInstance;
      } else {
        console.log('No token found. WebSocket connection not established.');
      }
    } catch (error) {
      console.error('Failed to retrieve token:', error);
    }
  };

  const attemptReconnect = (pageType) => {
    clearInterval(reconnectIntervalRef.current);
    reconnectIntervalRef.current = setInterval(() => {
      console.log('Attempting to reconnect...');
      initializeWebSocket(pageType);
    }, 5000); // Attempt to reconnect every 5 seconds
  };

  useEffect(() => {
    return () => {
      clearInterval(reconnectIntervalRef.current);
      if (wsRef.current && !isLoggedin) {
        wsRef.current.close();
      }
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ messages, ws: wsRef.current, initializeWebSocket, setIsLoggedIn }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
