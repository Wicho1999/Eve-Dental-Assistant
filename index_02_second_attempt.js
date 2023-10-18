const Alexa = require('ask-sdk-core');

const ScheduleAppointmentIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ScheduleAppointmentIntent';
    },
    handle(handlerInput) {
        const procedureSlotValue = Alexa.getSlotValue(handlerInput.requestEnvelope, 'procedure');

        // Now, you can use procedureSlotValue in your logic.

        const speechText = `You want to schedule an appointment for ${procedureSlotValue}.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

// Add other handlers and exports.handler as usual...
