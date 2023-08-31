import { Publisher, Subjects, TicketUpdatedEvent } from "@vanticket/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
