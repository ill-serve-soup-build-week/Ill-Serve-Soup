
class DayTab{
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.dayElement = document.querySelector(`.weekdays-day[data-tab='${this.data}']`);
    this.day = new Day(this.dayElement);
    this.element.addEventListener('click', () => {
      this.focus();
    });
  };

  focus(){
    const tabs = document.querySelectorAll('.weekdays-tab');
    Array.from(tabs).forEach((tab) => {
      tab.classList.remove('weekdays-tab-focus');
    });
    this.element.classList.add('weekdays-tab-focus');
    this.day.focus();
  }
}

class Day{
  constructor(element) {
    this.element = element;
  }
  focus(){
    const days = document.querySelectorAll('.weekdays-day');
    days.forEach((day) => {
      day.classList.remove('weekdays-day-focus');
    })
    this.element.classList.add('weekdays-day-focus');
  }
}

let tabs = document.querySelectorAll('.weekdays-tab');

Array.from(tabs).forEach((tab) => {
  return new DayTab(tab);
});