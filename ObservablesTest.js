// Custom observable using rxjs
const customObservable = Observable.create((Observer) => {
  count = 0;
  setInterval(() => {
    Observer.next(count);
    if (count === 5) {
      Observer.complete();
    }
    if (count > 5) {
      Observer.error(new Error("Count is greater than 5"));
    }
    count++;
  }, 1000);
});

// Using pipe to transform the data using map operator

customObservable.pipe(
  filter((data) => {
    return data > 0;
  }),
  map((data) => {
    return "Round: " + (data + 1);
  })
);

// Subscribing to the custom observable and handling the data, error and completion to see the output

this.subscription = customObservable.subscribe(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
    alert(error);
  },
  () => {
    console.log("completed");
  }
);

// SUBJECTS
