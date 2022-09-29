import React from 'react';

const Faq = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center'>FAQ:</h1><hr />
            <div className='container mx-auto'>
                <h3 className='text-xl font-medium'># How does React Work?</h3>
                <p>- React reads JSX and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
                <h3 className='text-xl font-medium'># Props VS State?</h3>
                <p>- Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                <h3 className='text-xl font-medium'># Usage of useEffect?</h3>
                <p>- The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default Faq;