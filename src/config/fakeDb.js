const images = require('../assets/imageUrls');
const productdelivery = require('../assets/svg/productdelivery.png');
const meetClient = require('../assets/svg/meetClients.jpg');
const analysingNeeds = require('../assets/svg/analyse.jpg');
const testing = require('../assets/svg/testing.png');
const code = require('../assets/svg/coding.png')
const planning = require('../assets/svg/planning.png')
const featuredelivery = require('../assets/svg/featuredelivery.jpg')
const opt = require('../assets/svg/4.jpg');
const { coding } = require('../assets/imageUrls');
module.exports =[
        {
            id: 1,
            title: 'Meet client',
            text: `When meeting our client, we lay the foundation to our successful long-term working relationship. We believe that our clients are the life of our company. Therefore, their satisfaction, and success are all we care about.
            As a company we value your time, product, and me make sure that when working with us you are in good hands.`,
            icon: images.group,
            image: meetClient,
            classname:"small-main-card"
        },
        {
            id: 2,
            title: 'Analysing needs',
            text: `We listen carefully and attentively to the client’s project proposal and go beyond to look at all we will need from both parties to make it happen.`,
            icon: images.analysis,
            image: analysingNeeds,
            classname:"small-main-card"
        },
        {
            id: 3,
            title: 'Planning & system design',
            text: `Planning is a crucial part of the process. At this step, we set goals, schedule some deadlines, and agree on a detailed and integrated plan of actions (activities). 
            
            We agree on who does what, and we go through the whole process of delivery. Because this is vital to the success of our planning on both parties. Again, at this step, we link our planning to the budgeting of the project. `,
            icon: images.future,
            image: planning,
            classname:"small-main-card"
        },
        {
            id: 4,
            title: 'Writing code',
            text: `Here comes the most fun and exciting part for us. We believe in the power of computers. After discussing, analyzing, detailing your project, and planning; we start the implementation that turns your idea into reality. It may sound different, but the truth is that we enjoy coding your project. During this process, we make sure that the set up of your project is solid, farm, standardized, and more importantly, it is very secure. `,
            icon: images.code,
            image: code,
            classname:"write-code"
        }
        ,
        {
            id: 5,
            title: 'Testing',
            text: `Application testing is an essential part to us and to your product. Why do we reinforce testing? We do manual and automated testing to make sure and be confident that the product works well with the expected functionality and behavior.`,
            icon: images.lab,
            image: testing,
            classname:"testing"
        },
        {
            id: 6,
            title: 'Features delivery',
            text: `Software development is a process; therefore we have to deliver work feature by feature. We make sure that we deliver expected features in the estimated period of time. This helps us to get constructive feedback from our clients on time and we get enough time to implement them.`,
            icon: images.feature,
            image: featuredelivery,
            classname:"features-delivery"
        },
        {
            id: 7,
            title: 'Share updates to our clients',
            text: `We value communication; therefore we proactive communicate and share updates with our clients. This is done at a weekly basis or at anytime our client wants to know our progress.`,
            icon: images.training,
            image: meetClient,
            classname:"share-updates"
        },
        {
            id: 8,
            title: 'Client feedback',
            text: `Your feedback are vital to us. They help us work towards the optimization of your needs and satisfaction`,
            icon: images.review,
            image: code,
            classname:"client-feedback"
        },
        
        {
            id: 9,
            title: 'Optimization',
            text: `We optimize our your project when working on your feedback `,
            icon: images.optimization,
            image: opt,
            classname:"optimization"
        },
        {
            id: 10,
            title: 'Product delivery',
            text: `After working on your feedback and everything is working as expected we deliver your product. Depending on the agreement our team might keep on maintaing and updating the product on your request.`,
            icon: images.order,
            image: productdelivery,
            classname:"product-delivery"
        }


    ]