export const connectWebSocket = (onMessageReceived) => {
    const ws = new WebSocket('ws://localhost:8080');
  
    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };
  
    ws.onmessage = (event) => {
      onMessageReceived(event.data);
    };
  
    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };
  
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    return ws;
  };
  