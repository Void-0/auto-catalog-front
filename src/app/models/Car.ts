import {ICarResponse} from "./ICarResponse";

export abstract class Serializer {

  formatISOStringToDate(dateStr: string) : Date {
    // typescript only has compile time type checks, additional runtime checks are needed
    if(this._isString(dateStr)) {
      let newDate = new Date(dateStr);

      return isNaN( newDate.getTime() ) ? undefined : newDate;
    } else {
      // most front-end date components that want a Date object also want undefined when the field is empty
      return undefined;
    }
  }

  private _isString(str: any) {
    return Object.prototype.toString.call(str) === "[object String]"
  }
}

export class Car extends Serializer {
  id: string;

  name: string;

  category: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(getResponse: ICarResponse) {
    super();

    this.id = getResponse.id;
    this.name = getResponse.name;
    this.category = getResponse.category;

    //small serialization example showing the advantages of typescript
    this.createdAt = this.formatISOStringToDate(getResponse.createdAt);
    this.updatedAt = this.formatISOStringToDate(getResponse.updatedAt);
  }
}
