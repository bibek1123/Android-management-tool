const record = require('node-record-lpcm16');
function handleSocketEvents(socket, io) {
     // Start recording audio when requested by the client
     socket.on('startRecording', () => {
        try {
            console.log('Recording started');
            const micStream = record.start({
                threshold: 0,
                verbose: false,
            });
            micStream.pipe(socket);
        } catch (error) {
            console.error('Error occurred while starting recording:', error.message);
            socket.emit('recordingError', { message: 'An error occurred while starting recording' });
        }
    });

    // Stop recording audio when requested by the client
    socket.on('stopRecording', () => {
        try {
            console.log('Recording stopped');
            record.stop();
        } catch (error) {
            console.error('Error occurred while stopping recording:', error.message);
            socket.emit('recordingError', { message: 'An error occurred while stopping recording' });
        }
    });

    // Handle client disconnection
    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
}

module.exports = { handleSocketEvents };