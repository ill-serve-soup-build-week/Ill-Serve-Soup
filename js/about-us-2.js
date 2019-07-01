class EventTabs {
    constructor(element) {
        // assigning to dom reference
        this.element = element;
        this.data = this.element.dataset.tab;
        this.eventElement = document.querySelector(`.about-us-event[data-tab='${this.data}']`);
        this.event = new Event(this.eventElement);
        this.element.addEventListener('click', () => {
            this.selection();
        });
    };

    selection() {

        const events = document.querySelectorAll('.about-us-tab');


        Array.from(events).forEach((event) => {
            event.classList.remove('about-us-selection');
        });

        this.element.classList.add('about-us-selection');
        this.event.selection();
    }
}


class Event {
    constructor(element) {
        this.element = element;
    }
    selection() {
        const events = document.querySelectorAll('.about-us-event');
        events.forEach((events) => {
            events.classList.remove('about-us-events');
        })
        this.element.classList.add('about-us-events');
    }
}





let event = document.querySelectorAll('.about-us-tab');

Array.from(event).forEach((event) => {
    return new EventTabs(event);
});