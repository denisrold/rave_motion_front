const initialState = {
    // All events y finalized events
    allEvents: [],
    allEventsF: [],
    // Home events
    homeEvents: [],
    homeEventsF: [],
    homeEventsFilterByProducer: "All",
    homeEventsFilterByDate: {
        startDate: null,
        endDate: null,
    },
    homeEventsOrder: "Default",
    eventsPerPage: 10,
    currentPage: 1,

    // Search events
    searchResult: [],

    // Detail event
    eventDetail: {},

    // Tickets states
    allTickets: [],
    allTicketsByEvents: [],

    // User states
    isLogin: false,
    userData: {},
    userSignError: "",
    signUpStep: 1,

    userEvents: [],
    allUserEvents: [],

    // User tickets states
    userTickets:{},

    // Global states
    globalError: "",
    globalSuccess: "",

    //Cart
    selectedTickets: {},
};

export default initialState;
