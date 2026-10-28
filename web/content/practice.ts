/**
 * Starter practice content: exercises for every skill plus a sample mock
 * test per skill. `npm run seed` writes them to `practiceTasks` and their
 * answers to `answerKeys`. Add your own in the admin panel.
 */
import type { AnswerKey } from "@/lib/diagnostic/types";
import type { PracticeTask } from "@/lib/practice/types";
import { seedAnswerKeys as diagnosticKeys, seedDiagnosticTasks } from "./diagnostic";

const TFNG = "Do the following statements agree with the information in the passage? Choose TRUE if the statement agrees with the information, FALSE if it contradicts it, and NOT GIVEN if there is no information on this.";
const ALL = ["ielts-academic"];
const WS = ["ielts-academic", "writing-speaking"];
const HEADINGS_SLEEP = [
  { value: "i", label: "Why sleep was once thought to be useless" },
  { value: "ii", label: "How much sleep adults really need" },
  { value: "iii", label: "Evidence that sleep protects learning" },
  { value: "iv", label: "The process behind storing memories at night" },
  { value: "v", label: "The dangers of sleeping pills" },
  { value: "vi", label: "What learners should do differently" },
];

const exercises: PracticeTask[] = [
  {
    id: "practice-reading-night-trains",
    section: "reading",
    kind: "exercise",
    order: 1,
    courseIds: ALL,
    free: true,
    title: "The return of the night train",
    active: true,
    durations: { light: 12, full: 12 },
    passages: [
      {
        id: "p1",
        title: "The return of the night train",
        text: `**A** In the 1990s and early 2000s, overnight trains seemed to be disappearing from Europe. Low-cost airlines could carry passengers between capital cities in two hours for less than the price of a sleeping compartment, and many national rail companies decided that their old sleeper carriages were not worth replacing.

**B** Since around 2016, however, the trend has reversed. Austria's national operator bought several routes that a German company had abandoned and ordered new carriages with small private cabins. Other operators followed, and by the early 2020s new overnight services linked cities such as Vienna, Brussels, Amsterdam and Paris.

**C** The main reason for this revival is concern about the climate. A seat on a night train produces a small fraction of the emissions of the same journey by air. Travellers also value the fact that they arrive in the city centre in the morning, without the time spent travelling to and from airports.

**D** The business is still difficult. Sleeper carriages hold far fewer passengers than ordinary ones, and each train is used for only one journey a day. Some operators therefore say that night trains will need public support if ticket prices are to stay competitive with flights.`,
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "True / False / Not Given",
        instructions: TFNG,
        passageId: "p1",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "tfng", prompt: "Cheap flights were one reason why night trains became less common." },
          { id: "q2", number: 2, type: "tfng", prompt: "The Austrian operator designed its routes from the beginning without help." },
          { id: "q3", number: 3, type: "tfng", prompt: "Night trains are now cheaper than flights on most routes." },
          { id: "q4", number: 4, type: "tfng", prompt: "Some travellers like arriving directly in the city centre." },
        ],
      },
      {
        id: "g2",
        typeLabel: "Sentence completion",
        instructions: "Complete the sentences. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q5", number: 5, type: "gap", prompt: "The new Austrian carriages include small ______.", maxWords: 2 },
          { id: "q6", number: 6, type: "gap", prompt: "Some operators believe night trains will require ______ to keep prices low.", maxWords: 2 },
        ],
      },
    ],
  },
  {
    id: "practice-listening-museum",
    section: "listening",
    kind: "exercise",
    order: 1,
    courseIds: ALL,
    free: false,
    title: "A tour of the Harbour Museum",
    active: true,
    durations: { light: 6, full: 6 },
    audio: [
      {
        id: "a1",
        title: "Section 2",
        url: "/audio/practice-listening-1.mp3",
        transcript:
          "Good afternoon, everyone, and welcome to the Harbour Museum. My name is Claire, and I'll be your guide for the next hour. Before we start, a few practical points. The museum was originally a warehouse, built in 1860, and it opened as a museum much later, in 1992. Bags are not allowed in the galleries, so please leave them in the lockers next to the shop. The lockers are free, but you will need a one manat coin, which you get back at the end. Our tour starts on the ground floor, in the gallery about shipbuilding. The most popular object there is a model of a steam ship, which took two volunteers six years to build. After that, we go up to the first floor, where you can see the map room. Please don't touch the maps, because they are very fragile, and remember that photography is not allowed in that room. We finish on the top floor, in the café, where there is a fantastic view of the harbour. If you show your ticket there, you get ten percent off any drink.",
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "Note completion",
        instructions: "Complete the notes below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "gap", prompt: "The building was built in ______.", maxWords: 1 },
          { id: "q2", number: 2, type: "gap", prompt: "To use a locker, visitors need a ______.", maxWords: 3 },
          { id: "q3", number: 3, type: "gap", prompt: "Volunteers spent ______ years making the model ship.", maxWords: 1 },
          { id: "q4", number: 4, type: "gap", prompt: "Photos cannot be taken in the ______.", maxWords: 2 },
          { id: "q5", number: 5, type: "gap", prompt: "Showing a ticket gives a discount in the ______.", maxWords: 1 },
        ],
      },
    ],
  },
  {
    id: "practice-writing-remote-work",
    section: "writing",
    kind: "exercise",
    order: 1,
    courseIds: WS,
    free: false,
    title: "Task 2: working from home",
    active: true,
    durations: { light: 40, full: 40 },
    writing: [
      {
        id: "task2",
        light: true,
        minWords: 250,
        prompt:
          "More and more people now work from home for at least part of the week.\n\nDo the advantages of this trend outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      },
    ],
  },
  {
    id: "practice-speaking-free-time",
    section: "speaking",
    kind: "exercise",
    order: 1,
    courseIds: WS,
    free: false,
    title: "Part 1: free time",
    active: true,
    durations: { light: 4, full: 4 },
    speaking: [
      {
        part: 1,
        light: true,
        answerSeconds: 40,
        questions: [
          "What do you usually do in your free time?",
          "Do you prefer spending free time alone or with other people?",
          "Is there a hobby you would like to try in the future?",
          "Did you have more free time when you were a child?",
        ],
      },
    ],
  },
  {
    id: "practice-reading-sleep-memory",
    section: "reading",
    kind: "exercise",
    order: 2,
    courseIds: ALL,
    free: false,
    title: "Sleep and memory",
    active: true,
    durations: { light: 15, full: 15 },
    passages: [
      {
        id: "p1",
        title: "Sleep and memory",
        text: `**A** For most of history, sleep was seen as a time when the brain simply switched off. Philosophers described it as a kind of temporary death, and early scientists assumed that nothing useful happened until the sleeper woke up. This view began to change in the 1950s, when researchers recording brain activity noticed that during certain stages of sleep the brain was almost as active as when awake.

**B** Today, one of the best-established findings in sleep research is that sleep helps us keep what we have learned. In a typical experiment, volunteers learn a list of word pairs in the evening and are tested twelve hours later. Those who slept in between remember significantly more than those who stayed awake for the same period, even when both groups are tested at the same time of day.

**C** The deep, slow-wave stage of sleep appears to be particularly important. During this stage, the hippocampus, a small structure that stores new information for a short time, replays the day's experiences. These signals are passed to the outer layer of the brain, where long-term memories are kept. Researchers have shown that gently playing sounds linked to a task during deep sleep can strengthen the memory of that task, although the effect is small.

**D** The practical lessons for students are straightforward. Staying up all night before an exam is likely to be counterproductive, because the material studied cannot be stored properly. Short daytime naps of around twenty minutes can also help, but they are not a substitute for a full night. Perhaps most surprisingly, studies suggest that reviewing material shortly before going to bed is more effective than reviewing it first thing in the morning.`,
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "Matching headings",
        instructions: "The passage has four paragraphs, A–D. Choose the correct heading for each paragraph from the list of headings.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "match", prompt: "Paragraph A", options: HEADINGS_SLEEP },
          { id: "q2", number: 2, type: "match", prompt: "Paragraph B", options: HEADINGS_SLEEP },
          { id: "q3", number: 3, type: "match", prompt: "Paragraph C", options: HEADINGS_SLEEP },
          { id: "q4", number: 4, type: "match", prompt: "Paragraph D", options: HEADINGS_SLEEP },
        ],
      },
      {
        id: "g2",
        typeLabel: "Multiple choice",
        instructions: "Choose the correct letter, A, B, C or D.",
        passageId: "p1",
        light: true,
        questions: [
          {
            id: "q5",
            number: 5,
            type: "mcq",
            prompt: "In the experiment described in paragraph B, the two groups",
            options: [
              { value: "A", label: "learned different lists of words." },
              { value: "B", label: "were tested at the same time of day." },
              { value: "C", label: "were tested immediately after learning." },
              { value: "D", label: "slept for different lengths of time." },
            ],
          },
          {
            id: "q6",
            number: 6,
            type: "mcq",
            prompt: "According to paragraph C, the hippocampus",
            options: [
              { value: "A", label: "stores memories permanently." },
              { value: "B", label: "is only active when we are awake." },
              { value: "C", label: "holds new information for a short time." },
              { value: "D", label: "reacts strongly to sounds during sleep." },
            ],
          },
          {
            id: "q7",
            number: 7,
            type: "mcq",
            prompt: "Which piece of advice does the writer find most unexpected?",
            options: [
              { value: "A", label: "Avoid studying all night before an exam." },
              { value: "B", label: "Take a short nap during the day." },
              { value: "C", label: "Sleep for a full night." },
              { value: "D", label: "Review material just before sleeping." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "practice-reading-cities-cycling",
    section: "reading",
    kind: "exercise",
    order: 3,
    courseIds: ALL,
    free: false,
    title: "Cities built for bicycles",
    active: true,
    durations: { light: 12, full: 12 },
    passages: [
      {
        id: "p1",
        title: "Cities built for bicycles",
        text: `Copenhagen and Amsterdam are often presented as proof that cycling is part of the national character in Denmark and the Netherlands. In fact, both cities were heading in the same direction as the rest of Europe in the 1960s: car ownership was rising quickly, and planners were preparing to build motorways through historic neighbourhoods.

What changed the direction was a combination of protest and crisis. In the Netherlands, a public campaign against the number of children killed in road accidents gained wide support in the early 1970s. At almost the same time, the oil crisis of 1973 made fuel expensive and led the government to introduce car-free Sundays. Politicians began to see cycling as a practical answer to both problems.

The key decision was to build separate cycle lanes, protected from traffic by kerbs or parked cars, rather than simply painting lines on the road. Research has since shown that most people will only cycle regularly if they feel safe, and that physical separation matters far more than the total length of the network. Today, around a third of all trips in Amsterdam are made by bicycle.

Other cities have tried to copy this model with mixed results. Paris greatly expanded its network after 2020 and saw cycling rise sharply, while some cities that added only painted lanes reported little change. Experts conclude that the attitude of the population is less important than the quality of the infrastructure.`,
      },
    ],
    groups: [
      {
        id: "g1",
        typeLabel: "Yes / No / Not Given",
        instructions: "Do the following statements agree with the views of the writer? Choose YES if the statement agrees with the views of the writer, NO if it contradicts the views of the writer, and NOT GIVEN if it is impossible to say what the writer thinks about this.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q1", number: 1, type: "ynng", prompt: "Cycling has always been part of the national culture in Denmark and the Netherlands." },
          { id: "q2", number: 2, type: "ynng", prompt: "Road safety campaigns helped to change transport policy in the Netherlands." },
          { id: "q3", number: 3, type: "ynng", prompt: "Painted cycle lanes are as effective as physically separated ones." },
          { id: "q4", number: 4, type: "ynng", prompt: "Cycling in Paris is now more common than in Amsterdam." },
        ],
      },
      {
        id: "g2",
        typeLabel: "Sentence completion",
        instructions: "Complete the sentences. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
        passageId: "p1",
        light: true,
        questions: [
          { id: "q5", number: 5, type: "gap", prompt: "In the 1960s, planners were getting ready to build ______ through old parts of the cities.", maxWords: 1 },
          { id: "q6", number: 6, type: "gap", prompt: "After the oil crisis, the Dutch government introduced ______.", maxWords: 2 },
          { id: "q7", number: 7, type: "gap", prompt: "People cycle regularly only when they ______.", maxWords: 2 },
        ],
      },
    ],
  },
  {
    id: "practice-writing-task1-energy",
    section: "writing",
    kind: "exercise",
    order: 2,
    courseIds: WS,
    free: false,
    title: "Task 1: household energy use",
    active: true,
    durations: { light: 20, full: 20 },
    writing: [
      {
        id: "task1",
        light: true,
        minWords: 150,
        prompt:
          "The chart below shows the percentage of household energy used for different purposes in one country in 1990 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
        chart: {
          title: "Household energy use by purpose",
          unit: "%",
          categories: ["Heating", "Water heating", "Lighting", "Appliances", "Cooking"],
          series: [
            { name: "1990", values: [52, 21, 9, 11, 7] },
            { name: "2020", values: [41, 18, 4, 29, 8] },
          ],
        },
      },
    ],
  },
  {
    id: "practice-writing-education-online",
    section: "writing",
    kind: "exercise",
    order: 3,
    courseIds: WS,
    free: false,
    title: "Task 2: online university degrees",
    active: true,
    durations: { light: 40, full: 40 },
    writing: [
      {
        id: "task2",
        light: true,
        minWords: 250,
        prompt:
          "Some people believe that university degrees studied entirely online will soon be as valuable as degrees studied on campus.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      },
    ],
  },
  {
    id: "practice-writing-city-traffic",
    section: "writing",
    kind: "exercise",
    order: 4,
    courseIds: WS,
    free: false,
    title: "Task 2: traffic in big cities",
    active: true,
    durations: { light: 40, full: 40 },
    writing: [
      {
        id: "task2",
        light: true,
        minWords: 250,
        prompt:
          "Traffic congestion is becoming a serious problem in many large cities.\n\nWhat are the main causes of this problem, and what measures could be taken to reduce it?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
      },
    ],
  },
  {
    id: "practice-speaking-hometown",
    section: "speaking",
    kind: "exercise",
    order: 2,
    courseIds: WS,
    free: false,
    title: "Part 1: your hometown",
    active: true,
    durations: { light: 4, full: 4 },
    speaking: [
      {
        part: 1,
        light: true,
        answerSeconds: 40,
        questions: [
          "Where is your hometown?",
          "What do you like most about living there?",
          "Has your hometown changed much in recent years?",
          "Would you like to live in a different city in the future?",
        ],
      },
    ],
  },
  {
    id: "practice-speaking-helpful-person",
    section: "speaking",
    kind: "exercise",
    order: 3,
    courseIds: WS,
    free: false,
    title: "Parts 2 and 3: a person who helped you",
    active: true,
    durations: { light: 4, full: 9 },
    speaking: [
      {
        part: 2,
        light: true,
        prepSeconds: 60,
        answerSeconds: 120,
        questions: ["Describe a person who has helped you in an important way."],
        cueCard: {
          topic: "Describe a person who has helped you in an important way.",
          bullets: ["who this person is", "how you know them", "what they did to help you", "and explain why their help was important to you."],
        },
      },
      {
        part: 3,
        light: false,
        answerSeconds: 60,
        questions: [
          "Do you think people today are less willing to help strangers than in the past?",
          "Should schools teach children to help others, or is that the job of parents?",
          "Why do some people choose to work as volunteers?",
          "How can governments encourage people to help their communities?",
        ],
      },
    ],
  },
];

/** Mock id per diagnostic task: mock-<section>-<n>, numbered in pool order within each section. */
const mockIds: Record<string, string> = {};
for (const t of seedDiagnosticTasks) {
  const n = Object.values(mockIds).filter((id) => id.startsWith(`mock-${t.section}-`)).length + 1;
  mockIds[t.id] = `mock-${t.section}-${n}`;
}

/** Sample mocks reuse the diagnostic texts at full length until real mock tests are added. */
const mocks: PracticeTask[] = seedDiagnosticTasks.map((t) => {
  const n = Number(mockIds[t.id].split("-").pop());
  return {
    ...t,
    id: mockIds[t.id],
    kind: "mock",
    order: n,
    courseIds: t.section === "writing" || t.section === "speaking" ? WS : ALL,
    free: false,
    title: `Mock test ${n} · ${t.title}`,
  };
});

export const seedPracticeTasks: PracticeTask[] = [...exercises, ...mocks];

export const seedPracticeAnswerKeys: Record<string, AnswerKey> = {
  "practice-reading-night-trains": {
    answers: { q1: ["true"], q2: ["false"], q3: ["not given"], q4: ["true"], q5: ["private cabins", "cabins"], q6: ["public support"] },
  },
  "practice-reading-sleep-memory": {
    answers: { q1: ["i"], q2: ["iii"], q3: ["iv"], q4: ["vi"], q5: ["B"], q6: ["C"], q7: ["D"] },
  },
  "practice-reading-cities-cycling": {
    answers: { q1: ["no"], q2: ["yes"], q3: ["no"], q4: ["not given"], q5: ["motorways"], q6: ["car-free sundays"], q7: ["feel safe"] },
  },
  "practice-listening-museum": {
    answers: {
      q1: ["1860"],
      q2: ["coin", "one manat coin", "1 manat coin", "manat coin", "1-manat coin", "one-manat coin"],
      q3: ["six", "6"],
      q4: ["map room"],
      q5: ["café", "cafe"],
    },
  },
  ...Object.fromEntries(
    seedDiagnosticTasks.filter((t) => diagnosticKeys[t.id]).map((t) => [mockIds[t.id], diagnosticKeys[t.id]]),
  ),
};
