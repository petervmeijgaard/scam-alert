import Vue from 'vue';
import store from 'store';

class EventMapper {
  constructor(channel, events = []) {
    this.channelName = channel;
    this.channel = Vue.$echo.channel(channel);
    this.events = events;

    this.map();
  }

  map() {
    this.events.forEach((event) => {
      this.mapEvent(event);
    });
  }

  mapEvent(event) {
    const actionName = this.actionToString(event);
    const eventName = this.eventToString(event);

    this.channel.listen(eventName, item => store.dispatch(actionName, item));
  }

  actionToString(event) {
    return `${this.channelName}/${event}`;
  }

  eventToString(event) {
    const channelName = this.capitalizeFirstLetter(this.channelName);
    const eventName = this.capitalizeFirstLetter(event);

    return `${channelName}.${eventName}`;
  }

  capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

export default EventMapper;
