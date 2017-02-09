class BaseModel {
  constructor(data) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key];
    });
  }
}

export default BaseModel;
