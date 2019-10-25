import React from 'react'

const AdoptedPets = () => {
    return (
        <div className="adoptedPets">
            <h2>They Found Their Fur-ever Homes!!</h2>
        <div className="adopt">
            <section className="adoptDog">
                <h3>Dogs</h3>
                <div>
                    <img src="https://images.pexels.com/photos/2055231/pexels-photo-2055231.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Shih Tzu"/>   
                    <p>"Snoopy was recently rescued from his abusive owner, Charlie.  Today he enjoys being inn the arms of his new owner, Sally and Linus." </p>          
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/341378/pexels-photo-341378.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Camping Family" />
                    <p>"Air Bud was rescued from an equiptment closet full of basketballs, after he lost the game for his team.  After his therapy sessions with Pawesome Pets, he can now go to a sports bar for a beer with his new owners."</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1526363269865-60998e11d82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Poodle and a Pair"/>
                    <p>"Bianca the beautiful has made a seamless transition into our picturesque home, nestled quietly in the mountainside. She sits proudly while we enjoy our tea and crumpets."</p>
                </div>
            </section>

            <section className="adoptCat">
                <h3>Cats</h3>
                <div>
                    <img src="https://images.pexels.com/photos/1838549/pexels-photo-1838549.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Lounging Cat"/>
                    <p>"Garfield was rescued from the Citadel of Ricks by Beth Smith and now enoys eating lasagne with his new owner, John and Odie."</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1907666/pexels-photo-1907666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cat with Owner"/>
                    <p>"Shayla Shoo was rescued from Whoville from it's owner the Grinch.  She now lives with her new owner Sandy Cheeks in Bikini Botton where she enjoys eating Crabby Patties everyday."</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1521305/pexels-photo-1521305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cat in Grass"/>
                    <p>"Taz was rescued from a dark and dank mineshaft.  Now he frolics in the fields on a warm summer's day."</p>
                </div>
            </section>
        </div>
        </div>
    )
}

export default AdoptedPets