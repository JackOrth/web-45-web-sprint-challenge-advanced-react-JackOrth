# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    
    The first main difference between stateful and functional components is that stateful components have unique lifestyle components. These allow for a deep communication of the reactive process. Another main difference is exactly how it would sound. Stateful components consist of states which is a JS object that stores dynamic data. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    A componentWillMount function will be called right before the first render of a component, and a componentWillUpdate function will be called also just before rendering, but when new props or state have been received.

3. Define stateful logic.

    Stateful logic is the logic that is built into a component. An example for stateful logic could be a function within a component that handles a click event. 

4. What are the three step of creating a successful test? What is done in each phase?

    1. Arrange: Rendering a react element into the DOM
    2. Act: Simulating user events on the component you are testing
    3. Assert: Assert builds off of the simulated events and ensures if whatever is called upon in the act phase is present and/or good. If the assert passes your test will pass. 