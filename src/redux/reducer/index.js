// Events Actions Types
import {
    EVENTS_SEARCH,
    EVENTS_SEARCH_REMOVE,
    EVENTS_GET_ALL,
    EVENT_DETAIL_GET,
    EVENT_DETAIL_REMOVE,
    EVENT_CREATE,
    EVENT_MODIFY,
    
} from "../actions/eventsActions";

// Filters
import { EVENTS_FILTER } from "../actions/filtersActions";
import{ ALPHABETIC_ORDER, DATE_ORDER } from"../actions/orderActions";

// Tickets Actions Types
import {TICKETS_GET_ALL,
TICKETS_MODIFY,
TICKET_EVENT_GET,
TICKETS_CREATE} from"../actions/ticketsActions";
// User Actions Types
import {
    USERS_SET_SIGN_ERROR,
    USERS_REMOVE_SIGN_ERROR,
    USERS_SIGN_UP_STEP_SET,
} from "../actions/usersActions";

// User Tickets Actions Types

// Initial State
import initialState from "./initialState";

// Root reducer
const rootReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case EVENTS_GET_ALL:
            return {
                ...state,
                allEvents: action.payload,
                homeEvents: action.payload,
            };
        case EVENTS_SEARCH:
            return {
                ...state,
                searchResult: action.payload,
                currentPage: 1,
            };
        case EVENTS_SEARCH_REMOVE:
            return {
                ...state,
                searchResult: [],
            };
        case EVENT_DETAIL_GET:
            return {
                ...state,
                eventDetail: action.payload,
            };
        case EVENT_DETAIL_REMOVE:
            return {
                ...state,
                eventDetail: {},
            };
        case EVENT_CREATE:
            return {
                ...state,
            };
        case EVENT_MODIFY:
            return {
                ...state,
            };
        //* Filtros
        
        case EVENTS_FILTER:
            return { ...state, homeEvents: action.payload };
    
        // * Order
        
        case ALPHABETIC_ORDER:
            
        const alphabetic = [...state.homeEvents];
        let order = alphabetic;

        if (action.payload === "Asc") {
        order.sort((a, b) => a.name.localeCompare(b.name));
        }
          if (action.payload === "Desc") {
        order.sort((a, b) => b.name.localeCompare(a.name));
         }
      return {
        ...state,
        homeEvents: order,
      };

      case DATE_ORDER:
        const dateOrder = [...state.homeEvents];
      if (action.payload === "Last"){dateOrder.sort((a, b) => new Date(b.date) - new Date(a.date))};
      if (action.payload === "First"){dateOrder.sort((a, b) => new Date(a.date) - new Date(b.date))};

        return {
            ...state,
            homeEvents: dateOrder,
        };

        // Users
        case USERS_SET_SIGN_ERROR:
            return { ...state, userSignError: action.payload };
        case USERS_REMOVE_SIGN_ERROR:
            return { ...state, userSignError: "" };

        case USERS_SIGN_UP_STEP_SET:
            return { ...state, signUpStep: action.payload };
      
        //Tickets
        case TICKETS_GET_ALL:
            return {
                ...state,
                allTickets: action.payload
            };
        case TICKET_EVENT_GET:
                return {
                ...state,
                allTicketsByEvents:action.payload    
            };
        case TICKETS_CREATE:
                return {
                    ...state,
                };
        case TICKETS_MODIFY:
                return {
                    ...state,
                };

        //* ----------
        default:
            return { ...state };
    }
};

export default rootReducer;
