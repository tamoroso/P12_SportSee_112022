export class UserData {
  constructor(data) {
    if (Object.keys(data).includes("data")) {
      this._data = data.data;
    } else {
      this._data = data;
    }
  }

  get rawData() {
    return this._data;
  }
}

export class MainData extends UserData {
  constructor(data) {
    super(data);
    this._id = this._data.id;
    this._userInfos = this._data.userInfos;
    this._keyData = this._data.keyData;
    this._todayScore = this._data.todayScore || this._data.score;
  }

  get id() {
    return this._id;
  }

  get userInfos() {
    return this._userInfos;
  }

  get todayScore() {
    return this._todayScore;
  }

  get keyData() {
    return this._keyData;
  }
}

export class PerformanceData extends UserData {
  constructor(data) {
    super(data);
    this._userId = this._data.userId;
    this._kind = this._data.kind;
    this._data = this._data.data;
  }

  get userId() {
    return this._userId;
  }

  get kind() {
    return this._kind;
  }

  get data() {
    return this._data;
  }
}

export class ActivityData extends UserData {
  constructor(data) {
    super(data);
    this._userId = this._data.userId;
    this._sessions = this._data.sessions;
  }

  get userId() {
    return this._userId;
  }

  get sessions() {
    return this._sessions;
  }
}

export class AverageSessions extends UserData {
  constructor(data) {
    super(data);
    this._userId = this._data.userId;
    this._sessions = this._data.sessions;
  }

  get userId() {
    return this._userId;
  }

  get sessions() {
    return this._sessions;
  }
}
