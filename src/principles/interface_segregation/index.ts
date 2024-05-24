interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Developer implements Workable, Eatable {
  public work(): void {
    console.log("Coding..");
  }

  public eat(): void {
    console.log("Eating...");
  }
}

class Robot implements Workable {
  public work(): void {
    console.log("Building a car..");
  }

  // No need to implement eat(), adhering ISP.
}
