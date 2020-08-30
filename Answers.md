1. What problem does the context API help solve?

Context API help us to keep our state clean when we use global data that we have to use or share lot of components or when we have to pass data throught intermediate components

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-actions tells the reducer how to change th state using type property, and payload.
-reducers is a function that returns some state data.
-Store are object that holds the application state data, and its single state of true means that there is only one place which represents state of application, and the UI listen to it, and a fully controllable component only will listen to it, and not to DOM events.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Applications state are global state that any components can have access to it.  component state are local, and they live withing that specific component.  We can use application state when we have to use a lot of data.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows us to use middleware that will help us to write action creaters that return a function instead of an action. This allow us to work with promises. we can start dispatching actions asynchronously.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

I know context api it is easier, but its redux.  I started practicing more with redux, and I feel more comfortable with it.  It allows me to work with a clean and organize code, and becuase we are separating, and connecting differents files, it make me easier to understand what I am doing
