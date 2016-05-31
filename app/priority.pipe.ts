import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredPriorityState = args[0];
    if(desiredPriorityState === "high") {
      return input.filter((task) => {
        return task.priority;
      });
    } else if (desiredPriorityState === "normal") {
      return input.filter((task) => {
        return task.priority;
      });
    } else if (desiredPriorityState === "low") {
      return input.filter((task) => {
        return task.priority;
      });
    } else {
      return input;
    }
  }
}
