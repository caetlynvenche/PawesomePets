import React from 'react'

const AboutUs = () => {
    return (
        <div className="aboutPage">
                <h2>About Us</h2>
            <div className="whoWeAre">
                
                <h3>Who We Are</h3>
                <p>Pawesome Pets, a Utah 501(c), is a non-euthanizing animal shelter that rescues and finds homes for an average of 1,000 dogs and cats each year. Since 2008, we have dedicated ourselves to reducing the tragedies of pet overpopulation and the euthanasia of healthy adoptable pets.
                Our dogs and cats come from local and regional shelters. We partner with these shelters, rescuing pets from their euthanasia lists. Individual donors, corporate supporters, and private foundation grants fund our mission to save lives by supporting animal rescue and providing medical attention.
                Utah Animal Adoption Center Stats.</p>
            </div> 
                
            <div className="ourServices">
                <h3>Our Services</h3>
                <ul>
                    <div>
                        <li>Providing shelter for stray and lost domesticated cats and dogs</li> 
                        <li>Locating suitable homes for our adorable adoptable animals</li>
                        <li>Rehabilitating injured or otherwise ill dogs and cats</li>
                        <li>Working with owners to re-home their animals</li>
                    </div>

                    <div>
                        <li>Supporting spay and neuter efforts for dogs and cats</li>
                        <li>Obtaining needed veterinary services for animals in our care</li>
                        <li>Providing school and nursing home pet visitations</li> 
                    </div>
                </ul>
            </div>

            <div className="ourNeeds">
                <h3>Our Needs</h3>
                <ul>
                    <div>
                        <li>Canned cat or kitten food(any kind)</li> 
                        <li>Dry puppy or dog food(any kind)</li> 
                        <li>Catnip</li>
                        <li>Clumping cat litter </li>
                        <li>Dental chews for dogs</li>
                        <li>Dish Soap and Bleach</li>
                    </div>
                    
                    <div>
                        <li>Fleece Blankets</li>
                        <li>Garbage Bags</li>
                        <li>Hand Sanitizer</li>
                        <li>Puppy Pads</li>
                        <li>Storage Bins</li>
                        <li>Towels</li>
                    </div>
                </ul>
                
                <h3>Monentary Donations Are Always Needed and Appreciated</h3>  
            </div>
        </div>     
    )
}

export default AboutUs