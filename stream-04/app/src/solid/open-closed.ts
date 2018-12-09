export class ErrorHandler {
  private messageBox: any;

  constructor(messageBox: any) {
    this.messageBox = messageBox;
  }

  wrapError(error: string, publicResponse: any, severity: number) {
    const parsedError = {
      error,
      response: publicResponse,
      severity,
    };

    if (severity < 5) {
      this.showWarning('Warning: ', parsedError);
    } else {
      this.showError('Error: ', parsedError);
    }
  }

  showWarning(header: string, content: any) {}

  showError(header: string, content: any) {}
}

class ErrorLogger {
  private _endpoint = 'api/logger';
  private _http: any;

  constructor(_http: any) {
    this._http = _http;
  }

  logError(error: any): Promise<any> {
    return this._http.post(this._endpoint, error);
  }
}

class ErrorHandlerWithLogging extends ErrorHandler {
  private _logger: ErrorLogger;

  constructor(messageBox: any, logger: ErrorLogger) {
    super(messageBox);
    this._logger = logger;
  }

  wrapError(err: string, publicResponse: any, severity: number) {
    this._logger.logError(err).then(() => {
      super.wrapError(err, publicResponse, severity);
    });
  }
}

const errorHandlerWithLogging = new ErrorHandlerWithLogging(
  {},
  new ErrorLogger({}),
);
