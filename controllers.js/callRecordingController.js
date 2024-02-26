const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
const callRecordingStart = (req, res)=>{
    const { callSid } = req.body;
    client.calls(callSid)
        .update({ record: true })
        .then(call => {
            console.log('Call recording started:', call.sid);
            res.status(200).send('Call recording started');
        })
        .catch(error => {
            console.error('Error starting call recording:', error);
            res.status(500).send('Error starting call recording');
        });

}
const callRecordingStop = (req, res)=>{
    const { callSid } = req.body;
    client.calls(callSid)
        .update({ record: false })
        .then(call => {
            console.log('Call recording stopped:', call.sid);
            res.status(200).send('Call recording stopped');
        })
        .catch(error => {
            console.error('Error stopping call recording:', error);
            res.status(500).send('Error stopping call recording');
        });
}
module.exports = {callRecordingStart, callRecordingStop}