import Vue from 'vue';
import store from 'store';

export default {
  setChannel(channel) {
    this.channelName = channel;
    this.channel = Vue.$echo.channel(channel);

    return this;
  },

  mapEvent(event) {
    const actionName = this.actionToString(event);
    const eventName = this.eventToString(event);

    this.channel.listen(eventName, item => store.dispatch(actionName, item));

    return this;
  },

  actionToString(event) {
    return `${this.channelName}/${event}`;
  },

  eventToString(event) {
    const channelName = this.capitalizeFirstLetter(this.channelName);
    const eventName = this.capitalizeFirstLetter(event);

    return `${channelName}.${eventName}`;
  },

  capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  },
};
