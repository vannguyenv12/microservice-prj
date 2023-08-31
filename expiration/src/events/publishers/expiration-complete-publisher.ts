import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@vanticket/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
