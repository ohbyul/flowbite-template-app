import React from 'react';

import { Button, Rating  } from 'flowbite-react';
import TimeLine from './TimeLine';

const Home = () => {
    return (
        <div>
            <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                        <figure>
                            <Rating size="md">
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                            </Rating>
                            "Hello World!"
                        </figure>
                    </h1>
                </div>
            </section>

            <div>
            <Button className="bg-red-500 hover:bg-red-600">Click me</Button>

            
            <TimeLine />
            </div>
           

        </div>
    );
};

export default Home;