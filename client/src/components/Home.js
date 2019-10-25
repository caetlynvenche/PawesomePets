import React from 'react'
import Carousel from './Carousel'
const Home = () => {
    return (
        <div className="homeMain">
            <h2>Finding Forever Homes Since 2009</h2>
            <Carousel />
            <section className="mission">
                <p>Pawesome Pets in Utah is working collaboratively with other animal rescue groups, city shelters and passionate individuals who are all dedicated to the mission of making Utah a no-kill state. We provide these no-kill solutions to reduce the number of homeless cats and dogs in Salt Lake County through education, rehabilitation, and re-homing these petswith the support and cooperation of our community.</p>
            </section>
            
            <div>
                <section className="blog">
            <div>
                <h4>Success Story</h4>
                <h2>Sweetened with Vanilla</h2>
            </div>
            
            <img src="https://images.unsplash.com/photo-1556935382-a3f3a86d5c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="Claire, her daughter, and her cat, Vanilla"/>
            <p>For years, my daughter has been asking my husband and I for a pet, but had never been able to due to living in apartments. Once we had finally gotten our first house, she started asking again with even more fever! After talking it through with my husband, we decided that the time had finally come. Some pets were out of the running from the get-go. Snakes scared my daughter. Ferrets and guinea pigs were too smelly. We did not feel like we had enough of a yard to truly entertain a rabbit or two. And I am allergic to dogs. We ended up deciding to find a cat. My parents have a few, and my daughter always loves spending time with them whenever we visit.
            </p>
            <p>And then the search was on. We checked out a few of the local agencies near us, but none of them really clicked with us. A bit discouraged, a coworker told me about Pawesome Pets Adoption, and I just had to check it out. Once I got home, I pulled it up on the computer, my family sitting next to me. The website was so easy to use and it had so many options. We ended up finding a few that we were interested in learning more about, and sent out the request for more information. After going through their security processes, we eventually figured out who needed to be a part of our family.
            </p>  
            <p>It soon became obvious that Vanilla was exactly what our little family needed. She and my daughter are inseparable, which is always the cutest thing. I now tell so many people about this experience, in the hope that they will be able to find a new member of their own family soon.
            </p> 
            <h3>-Claire Ebbers & Vanilla</h3>
        </section>
            </div>
            
            
                
        </div>
    )
}
export default Home