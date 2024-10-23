function Stopwatch() {
  let startTime,
    endTime,
    running,
    timer = 0;
  this.start = function () {
    if (running) throw new Error("Already started");
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error("Already stop");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    timer += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    timer = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return timer;
    },
  });
}

const sw = new Stopwatch();
