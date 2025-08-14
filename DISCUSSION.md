# Discussion/future changes:
### UI/UX + performance improvements:
- Assuming that we have a database of hundreds of thousands of advocates, one improvement I'd like to make is implementing a paginated experience. UI-wise, this might include a `<Prev`/[page #]/`Next>` style pagination or we could fetch additional advocates as the user scrolls.
- On the topic of pagination, I'd like to fetch an inital batch of advocates server-side so that they are visible when the user lands on the search results page (perhaps this could be location-based so that advocates in the user's region are visible first).
- It would be interesting to reduce some of the information in the table itself, and instead display the bulk of the content (specialties, degree, years of experience, etc.) in a drawer when a row is clicked (drawer could appear from the right-hand side or bottom of the page, depending on the user's viewport).
- Add the ability for users to filter-by-column
- Improve the mobile-responsiveness of the application
- Support error handling for when a search yields 0 results

### Developer improvements:
- Extract the functions in `page.tsx` into their own, dedicated files for ease of testing
- Add component test coverage with React Testing Library
- Leverage ReactQuery for improved data fetching/caching/error handling
‍
