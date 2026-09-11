import type { BlogPost } from "./blog";

export const englishPosts: BlogPost[] = [
  {
    slug: "digitise-car-rental-handover-return-process",
    category: "Operations",
    title: "How to digitise vehicle handovers and returns in car rental",
    excerpt:
      "Replace paper inspection forms with consistent, photo-based records that make damage, fuel and mileage easier to verify.",
    description:
      "A practical guide to digital car rental handovers and returns: photo protocols, damage attribution, faster vehicle turnaround and more reliable records.",
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    readingMinutes: 12,
    intro: [
      "The vehicle inspection form is one of the most frequently completed documents in car rental, yet it often provides the least protection. It is filled in, signed and filed for every rental — only to be missing or incomplete when it is actually needed.",
      "The problem is not simply careless staff. A paper form usually fails **when someone needs to rely on it**, often weeks later when a payment is disputed, an insurance file is opened or a customer says that a scratch was already there.",
      "Digitising the process should therefore be treated as a way to create **stronger evidence and faster vehicle turnaround**, not merely as a modern replacement for paper. This guide explains what that means in day-to-day operations.",
    ],
    body: [
      {
        type: "h2",
        id: "paper-inspection-forms",
        text: "1. A paper inspection form is a weak operational record",
      },
      {
        type: "p",
        text: "Inspection forms are completed at the worst possible moment: the customer is in a hurry, another handover is waiting, the light is poor or it is raining. A signature may still be collected, but important fields are often left incomplete.",
      },
      { type: "h3", text: "Vehicle diagrams and handwritten marks" },
      {
        type: "p",
        text: "A mark on a vehicle diagram rarely settles a disagreement. A note such as “scratch on the front-left door” does not show its length, depth or whether an existing mark became worse. Those details influence the repair decision, but a cross on a diagram cannot preserve them.",
      },
      { type: "h3", text: "What paper cannot reliably prove: time" },
      {
        type: "p",
        text: "A paper form cannot reliably demonstrate **when each detail was recorded**. A server-stored record with a timestamp, photographs and the customer’s acknowledgement is much easier to verify and much harder to dispute later.",
      },
      {
        type: "p",
        text: "There is also a simple but costly limitation: paper remains in a folder at the office. Finding the correct form several weeks later can take twenty minutes, and sometimes it cannot be found at all. A record that cannot be retrieved when needed has little operational value.",
      },

      {
        type: "h2",
        id: "unattributed-damage",
        text: "2. The real loss is damage that cannot be attributed",
      },
      {
        type: "p",
        text: "Every fleet experiences damage. The commercial difference is not whether damage occurs, but whether the business can **identify when it occurred and support a fair charge**.",
      },
      { type: "p", text: "Revenue and time typically leak through four gaps:" },
      {
        type: "ul",
        items: [
          "**Minor damage.** Small scratches and dents are absorbed into the annual maintenance budget because there is no usable record.",
          "**Damage found at the next handover.** A vehicle is returned and parked quickly; the damage is discovered only when it is prepared for the next customer. By then, responsibility is unclear.",
          "**Fuel and mileage differences.** If the dashboard was not photographed, the disagreement often cannot be resolved objectively.",
          "**Cleaning and misuse charges.** Heavy soiling, smoking or pet hair may be difficult to charge without consistent evidence and a clear rental policy.",
        ],
      },
      { type: "quote", text: "Damage that cannot be attributed becomes the operator’s cost." },
      {
        type: "p",
        text: "The operational rule is straightforward: every hour between return and inspection increases the risk that damage can no longer be attributed. The record should be completed beside the vehicle, at that moment — not later in the office.",
      },

      {
        type: "h2",
        id: "photo-protocol",
        text: "3. Photographs only work when there is a protocol",
      },
      {
        type: "p",
        text: "Many rental businesses already take photographs. The problem is that random photographs cannot be compared. If one image is taken from the left at check-out and another from the right at check-in, they provide little evidence. The value comes from the protocol, not from the camera.",
      },
      { type: "h3", text: "Use a fixed sequence of angles" },
      {
        type: "p",
        text: "At every handover and return, capture **the same angles in the same order**. A practical set includes:",
      },
      {
        type: "ol",
        items: [
          "Four 45-degree corner views with the complete vehicle in frame",
          "The four side panels from a distance that makes damage visible",
          "Close views of the front and rear bumpers",
          "Each wheel separately, because wheel damage is frequently disputed",
          "The windscreen for chips and cracks",
          "The roof where vehicles are stored outdoors",
          "Front seats, rear seats and luggage compartment",
          "The instrument panel",
        ],
      },
      { type: "h3", text: "One essential image: the instrument panel" },
      {
        type: "p",
        text: "The instrument panel is often the most valuable image in the set. **Mileage and fuel level should appear together, with the ignition on.** This single photograph can resolve most fuel and mileage questions before they become disputes.",
      },
      { type: "h3", text: "Control light, distance and scale" },
      {
        type: "p",
        text: "Side lighting reveals scratches; direct flash can hide them. A wet vehicle can also conceal surface damage, so the condition should be noted when a return is inspected in rain. When documenting a mark, placing a key or card beside it provides a useful indication of scale.",
      },
      {
        type: "callout",
        title: "Close the record with the customer",
        text: "A signature alone is not enough. Let the customer review and acknowledge the same record, then provide a copy at handover or return. This creates a shared record instead of a one-sided set of photographs.",
      },

      {
        type: "h2",
        id: "messaging-apps",
        text: "4. Sending photographs to a messaging group is not digitisation",
      },
      {
        type: "p",
        text: "A team may send vehicle photographs to a messaging group and feel that the process has become digital. In reality, the images are still disconnected from the rental record, which leaves the main operational problems unresolved.",
      },
      {
        type: "ol",
        items: [
          "**Images may be compressed.** Fine details such as surface scratches, stone chips and wheel marks are the first things to disappear.",
          "**Records are difficult to search.** Finding one vehicle’s handover images among thousands of messages is rarely practical.",
          "**Evidence remains tied to an employee account or device.** Staff turnover or a lost phone can break the record chain.",
          "**There is no customer acknowledgement.** A one-sided photograph is weaker when the other party challenges it.",
          "**The image is not connected to the vehicle and rental.** A photograph does not automatically include mileage, fuel, time, location or the employee who completed the process.",
        ],
      },
      { type: "h3", text: "Minimum information for a useful record" },
      {
        type: "p",
        text: "A useful vehicle check-out and check-in record should keep the following information together:",
      },
      {
        type: "ul",
        items: [
          "Handover and return date and **time**, recorded to the minute",
          "Mileage and fuel level",
          "Location, such as a branch, airport, hotel or delivery address",
          "The employee who completed the inspection",
          "The driver and any additional driver",
          "A photograph set captured through the fixed protocol",
          "The customer’s acknowledgement of the same record",
        ],
      },
      {
        type: "p",
        text: "When these fields are kept in one record, the response to a dispute can be retrieved from one place. Disconnected photographs and partially completed forms only work if somebody can reconstruct them later — and that is precisely where the process tends to fail.",
      },

      {
        type: "h2",
        id: "vehicle-turnaround",
        text: "5. The largest benefit is often faster vehicle turnaround",
      },
      {
        type: "p",
        text: "Damage disputes receive most of the attention, but the larger annual benefit is often **time saved between rentals**.",
      },
      {
        type: "p",
        text: "With a paper process, the same work is completed twice: information is written beside the vehicle and later entered into software or a spreadsheet. That duplicates effort, introduces errors and delays the vehicle’s return to the available fleet.",
      },
      {
        type: "p",
        text: "A second delay is less visible: the office may not know that the vehicle has returned until the employee comes back inside. The car may already be ready for inspection or preparation while the reservation calendar still shows it as unavailable.",
      },
      {
        type: "callout",
        title: "A simple capacity example",
        text: "If check-out and check-in each fall from an average of twelve minutes to six, a 40-vehicle fleet with eight turnovers per vehicle each month saves about 64 staff hours per month. Faster status updates also return otherwise invisible availability to the planning calendar.",
      },
      {
        type: "p",
        text: "A live planning view makes this handover-to-availability gap easier to manage. See how it fits into a [car rental reservation calendar](/en/car-rental-reservation-calendar).",
      },

      {
        type: "h2",
        id: "consistent-process",
        text: "6. The process becomes consistent across employees",
      },
      {
        type: "p",
        text: "Seasonal staffing is a normal part of car rental. A person hired in June may be completing high-volume airport handovers by August. With paper, record quality depends heavily on the employee’s experience and attention under pressure.",
      },
      {
        type: "p",
        text: "A digital workflow can require each field and photograph before the inspection is completed. The process then depends less on personal habits and more on a consistent sequence. New employees also have a clearer procedure to follow.",
      },

      {
        type: "h2",
        id: "disputes",
        text: "7. What changes when a dispute occurs",
      },
      {
        type: "p",
        text: "The value of a complete record becomes visible when something goes wrong. Four common examples are:",
      },
      {
        type: "ul",
        items: [
          "**Payment disputes.** A timestamped, acknowledged and photo-based record can be supplied quickly when supporting evidence is requested.",
          "**Insurance claims.** The business can show when the vehicle’s condition changed and which rental period is relevant.",
          "**Traffic and toll charges.** Precise check-out and check-in times show who held the vehicle when the event occurred.",
          "**Customer experience.** An objective record can resolve a disagreement in minutes instead of allowing it to continue for days and turn into a negative review.",
        ],
      },

      {
        type: "h2",
        id: "operational-insight",
        text: "8. Records become operational insight over time",
      },
      {
        type: "p",
        text: "Individual inspections matter, but the accumulated history creates a second layer of value. A year of consistent records can show:",
      },
      {
        type: "ul",
        items: [
          "**Which vehicles repeatedly incur damage.** Vehicle-level history can reveal costs hidden by fleet averages.",
          "**Which locations generate more disputes.** The pattern may point to lighting, workload, training or process design.",
          "**Which rental profiles carry greater risk.** Deposit, excess and operational policies can be reviewed using evidence rather than assumptions.",
          "**A clearer history when a vehicle is sold.** Searchable maintenance and damage records can support a more transparent disposal process.",
        ],
      },

      {
        type: "h2",
        id: "moving-from-paper",
        text: "9. How to move from paper to a digital workflow",
      },
      {
        type: "p",
        text: "Technology is rarely the hardest part of the transition. The common mistake is trying to change every location and shift at once. A more practical sequence is:",
      },
      {
        type: "ol",
        items: [
          "**Start with one location and one shift.** Run the workflow for two weeks, correct the weak points and then expand it.",
          "**Fix the number and order of photographs.** A process demanding thirty images will be bypassed on the first busy day. A shorter, consistent set is more useful.",
          "**Test weak-connectivity conditions.** Airport car parks and underground locations may not have a reliable signal, so define how unfinished records are handled.",
          "**Send a copy to the customer.** This is one of the simplest ways to create a shared, transparent record.",
          "**Run paper in parallel for a short transition period, then stop.** A permanent double-entry process creates more work and leaves both systems incomplete.",
        ],
      },

      { type: "h2", id: "summary", text: "Summary" },
      {
        type: "p",
        text: "Digitising vehicle handovers and returns is not merely a paperwork upgrade. It makes damage **attributable**, reduces the time before a returned vehicle becomes **available again**, and creates a more **consistent process** across the team.",
      },
      {
        type: "p",
        text: "To measure the effect, track three figures: the share of damage that can be supported with a complete record, the average time from return to availability, and the number of payment disputes lost because evidence was incomplete. Together, they show the real operating cost of the paper process.",
      },
    ],
  },
];

export function getSortedEnglishPosts(): BlogPost[] {
  return [...englishPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getEnglishPost(slug: string): BlogPost | undefined {
  return englishPosts.find((post) => post.slug === slug);
}

export function formatEnglishDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
