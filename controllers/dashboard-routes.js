const router = require('express').Router();
const {User, Country, Ratings, Like, Snack, Snack_Country, Snack_Category, WishList} = require('../Models');


router.get('/', async (req, res) => {
    try {
        if(!req.session.logged_in){
            res.redirect('/login');
            return;
        }
        let userDetails = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Country,
                    attributes: ["country_name", "country_emoji"],
                },
                {
                    model: Ratings,
                },
                {
                    model: Like
                },
                {
                    model: Snack
                },
                {
                    model: WishList
                }
            ]
        });

        const serialisedData = userDetails.get({ plain: true });
        
        //test
        let dashboardData = {
            username: serialisedData.username,
            user_country: serialisedData.country.country_name,
            country_emoji: serialisedData.country.country_emoji,
            numRatings: serialisedData.ratings.length,
            numLikes: serialisedData.likes.length,
            numWishlist: serialisedData.wishlists.length,
            profile_picture: serialisedData.profile_picture,
            submittedSnacks: serialisedData.Snacks.length,
            logged_in: req.session.logged_in
        };

        res.render('dashboard', dashboardData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/wishlist', async (req,res) => {
    try {
        if(!req.session.logged_in){
            res.redirect('/login');
            return;
        }
        let userDetails = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Country,
                    attributes: ["country_name", "country_emoji"],
                },
                {
                    model: Ratings,
                },
                {
                    model: Like
                },
                {
                    model: Snack
                },
                {
                    model: WishList
                }
            ]
        });

        const serialisedData = userDetails.get({ plain: true });
        
        //test
        let dashboardData = {
            username: serialisedData.username,
            user_country: serialisedData.country.country_name,
            country_emoji: serialisedData.country.country_emoji,
            numRatings: serialisedData.ratings.length,
            numLikes: serialisedData.likes.length,
            numWishlist: serialisedData.wishlists.length,
            profile_picture: serialisedData.profile_picture,
            submittedSnacks: serialisedData.Snacks.length,
            logged_in: req.session.logged_in
        };
        // Retrieve the logged-in user's ID from the session or request object
        const userId = req.session.user_id; // Fallback to 1 for testing

        const wishData = await User.findAll({
            where: { id: userId },
            attributes: ['id'], 
            include: [{
                model: Snack,
                as: 'FavouriteSnacks',
                attributes: ['snack_name', 'brand_name', 'snack_image', 'id'],
                through: { attributes: ["user_id", ] } 
            }]
        });

        // Mapping over wishData to get plain data
        const newData = wishData.map(wishdata => wishdata.get({ plain: true }));
        
        const wdata = newData[0].FavouriteSnacks;
        res.render('dashboard_wishes', {wdata, dashboardData, logged_in: req.session.logged_in});
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get('/edit', async (req, res) => {
    try {
        if(!req.session.logged_in){
            res.redirect('/login');
            return;
        }
        let userDetails = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Country,
                    attributes: ["country_name", "country_emoji"],
                },
                {
                    model: Ratings,
                },
                {
                    model: Like
                },
                {
                    model: Snack
                },
                {
                    model: WishList
                }
            ]
        });

        const serialisedData = userDetails.get({ plain: true });
        console.log(serialisedData);

        let dashboardData = {
            username: serialisedData.username,
            user_country: serialisedData.country.country_name,
            country_emoji: serialisedData.country.country_emoji,
            numRatings: serialisedData.ratings.length,
            numLikes: serialisedData.likes.length,
            numWishlist: serialisedData.wishlists.length,
            profile_picture: serialisedData.profile_picture,
            submittedSnacks: serialisedData.Snacks.length,
            logged_in: req.session.logged_in
        };
        res.render('dashboard-edit-profile', dashboardData)
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});




router.get('/likes', async (req, res) => {
    try {
        if(!req.session.logged_in){
            res.redirect('/login');
            return;
        }
        // Retrieve the logged-in user's ID from the session or request object
        const userId = req.session.user_id;

        // Retrieve user details for the specified user
        const userDetails = await User.findByPk(userId, {
            include: [
                {
                    model: Country,
                    attributes: ["country_name", "country_emoji"],
                },
                {
                    model: Ratings,
                    include: [{ model: Snack, 
                        attributes: ['snack_name', 'brand_name', 'snack_image'] }]
                },
                {
                    model: Like, 
                    include: [{model: Snack }]
                },
                {
                    model: Snack
                },
                {
                    model: WishList
                }

            ]
        });

        // If userDetails is null, handle the case when the user is not found
        if (!userDetails) {
            return res.status(404).json({ error: 'User not found' });
        }

        const serialisedData = userDetails.get({ plain: true });

        const dashboardData = {
            username: serialisedData.username,
            user_country: serialisedData.country.country_name,
            country_emoji: serialisedData.country.country_emoji,
            numRatings: serialisedData.ratings.length,
            numLikes: serialisedData.likes.length,
            numWishlist: serialisedData.wishlists.length,
            profile_picture: serialisedData.profile_picture,
            submittedSnacks: serialisedData.Snacks.length,
            logged_in: req.session.logged_in
        };
        
        const likesData = serialisedData.likes.map((likes) => ({
            snack_name: likes.Snack.snack_name,
            brand_name: likes.Snack.brand_name,
            snack_image: likes.Snack.snack_image,
            id: likes.Snack.id
        }));

        console.log('Checking the Likes', likesData);


        res.render('dashboard_likes', {dashboardData, likesData});

        // res.json(likeData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// Route handler for GET request to find snacks reviewed by a user
router.get('/review', async (req, res) => {
    try {
        if(!req.session.logged_in){
            res.redirect('/login');
            return;
        }
        
        // Extract the user ID from the request parameters
        const userId = req.session.user_id;
        
        // Retrieve user details for the specified user
        const userDetails = await User.findByPk(userId, {
            include: [
                {
                    model: Country,
                    attributes: ["country_name", "country_emoji"],
                },
                {
                    model: Ratings,
                    include: [{ model: Snack, 
                        attributes: ['snack_name', 'brand_name', 'snack_image', 'id'] }]
                },
                {
                    model: Like
                },
                {
                    model: Snack
                },
                {
                    model: WishList
                }
            ]

        });

        // If userDetails is null, handle the case when the user is not found
        if (!userDetails) {
            return res.status(404).json({ error: 'User not found' });
        }

        const serialisedData = userDetails.get({ plain: true });

        const dashboardData = {
            username: serialisedData.username,
            user_country: serialisedData.country.country_name,
            country_emoji: serialisedData.country.country_emoji,
            numRatings: serialisedData.ratings.length,
            numLikes: serialisedData.likes.length,
            numWishlist: serialisedData.wishlists.length,
            profile_picture: serialisedData.profile_picture,
            submittedSnacks: serialisedData.Snacks.length,
            logged_in: req.session.logged_in
        };

        // This initialises a variable name review and assigns it the result of mapping over the ratings array in the serialised data
        const reviews = serialisedData.ratings.map((rating) => ({
            text_review: rating.text_review,
            review_title: rating.review_title,
            date_created: rating.date_created,
            snack_name: rating.Snack.snack_name,
            brand_name: rating.Snack.brand_name,
            snack_image: rating.Snack.snack_image,
            logged_in: req.session.logged_in,
            id: rating.Snack.id
        }));

        console.log('Reviews This is a check:', reviews);
    
        // Render the 'dashboard_review' template and pass the review data to it
        res.render('dashboard_review', { dashboardData, reviews });

        // res.json(reviewData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// Route handler for GET request to find snacks added by a user
router.get('/submission', async (req, res) => {
    try {
        if(!req.session.logged_in){
            res.redirect('/login');
            return;
        }

        // Extract the user ID from the request parameters
        const userId = req.session.user_id;
        
        // Retrieve user details for the specified user
        const userDetails = await User.findByPk(userId, {
            include: [
                {
                    model: Country,
                    attributes: ["country_name", "country_emoji"],
                },
                {
                    model: Ratings,
                    include: [{ model: Snack, 
                        attributes: ['snack_name', 'brand_name', 'snack_image', 'id'] }]
                },
                {
                    model: Like
                },
                {
                    model: Snack
                },
                {
                    model: WishList
                }
            ]

        });

        // If userDetails is null, handle the case when the user is not found
        if (!userDetails) {
            return res.status(404).json({ error: 'User not found' });
        }
        

        const serialisedData = userDetails.get({ plain: true });

        const dashboardData = {
            username: serialisedData.username,
            user_country: serialisedData.country.country_name,
            country_emoji: serialisedData.country.country_emoji,
            numRatings: serialisedData.ratings.length,
            numWishlist: serialisedData.wishlists.length,
            numLikes: serialisedData.likes.length,
            profile_picture: serialisedData.profile_picture,
            submittedSnacks: serialisedData.Snacks.length,
            logged_in: req.session.logged_in
        };

        const submission = serialisedData.Snacks.map((snack) => ({
            snack_name: snack.snack_name,
            brand_name: snack.brand_name,
            snack_image: snack.snack_image,
            id: snack.id,
            logged_in: req.session.logged_in
        }));
        
        console.log('Submission check:', submission);

    
        // Render the data or send it as JSON response
        res.render('dashboard_submission', {dashboardData, submission});

        // res.json(submission);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});



module.exports = router;