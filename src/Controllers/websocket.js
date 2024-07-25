const socket = new WebSocket('127.0.0.1:8000/ws/cart/');

socket.onopen = () => {
    console.log('WebSocket connection established');
    socket.send(JSON.stringify({
        'action': 'getCart',
        'user': user_id,
        'refresh': refresh_token
    }));
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received data:', data);
};

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

socket.onclose = () => {
    console.log('WebSocket connection closed');
};

export default socket;