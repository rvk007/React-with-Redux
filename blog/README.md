# Blogs

### Points to Ponder

```
 export const fetchPosts = async () => {
   const response = await jsonplaceholder.get('/posts') //Bad approach
 }
```

The above approach will give an error because fetchPosts is an action creator, its job is to return an action which given to dispatch() method to further process. This process happens in fraction of second, where on the other hand fetching the data from APIs may take more time. So it is not at all advidsed to use asyn-await in redux, instead use Middlewares like **redux-thunk**.

- When the application boots up, it is going to call all the reducers one time, as initialization.

Reducers:
